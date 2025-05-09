import { writeFileSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { resolve as pathResolve } from "node:path";
import { getCurrentVersions } from "github-enterprise-server-versions";
import prettier from "prettier";
import sortKeys from "sort-keys";

const newRoutes = {};
const params = {};

generateRoutes();

async function generateRoutes() {
  const GHE_VERSIONS = (await getCurrentVersions()).map((e) =>
    e.replace(".", ""),
  );

  for (const version of GHE_VERSIONS) {
    const endpoints = JSON.parse(
      await readFile(
        new URL(`./generated/ghe${version}-endpoints.json`, import.meta.url),
        "utf8",
      ),
    );
    endpoints.forEach((endpoint) => {
      const scope = endpoint.scope;

      const idName = endpoint.id;
      const route = `${endpoint.method} ${endpoint.url}`;
      const endpointDefaults = {};
      const endpointDecorations = {};

      if (!newRoutes[scope]) {
        newRoutes[scope] = {};
        params[scope] = {};
      }

      if (endpoint.headers.length) {
        endpointDefaults.headers = endpoint.headers.reduce((result, header) => {
          if (header.value === null) {
            return result;
          }
          if (!result) {
            result = {};
          }
          result[header.name] = header.value;
          return result;
        }, undefined);
      }

      if (endpoint.previews.length) {
        endpointDefaults.mediaType = {
          previews: endpoint.previews.map((preview) => preview.name),
        };
      }

      if (endpoint.renamed) {
        endpointDecorations.renamed = [
          endpoint.renamed.after.scope,
          endpoint.renamed.after.id,
        ];
      }

      if (endpoint.isDeprecated && !endpoint.renamed) {
        endpointDecorations.deprecated = `octokit.scim.${idName}() is deprecated, see ${endpoint.documentationUrl}`;
      }

      newRoutes[scope][idName] = [route];
      params[scope][idName] = endpoint.parameters;

      if (Object.keys(endpointDecorations).length) {
        newRoutes[scope][idName].push(endpointDefaults, endpointDecorations);
      } else if (Object.keys(endpointDefaults).length) {
        newRoutes[scope][idName].push(endpointDefaults);
      }
    });

    const newRoutesSorted = sortKeys(newRoutes, { deep: true });

    const ALL_ENDPOINTS_PATH = pathResolve(
      process.cwd(),
      `src/generated/ghe-${version}-endpoints.ts`,
    );

    writeFileSync(
      ALL_ENDPOINTS_PATH,
      await prettier.format(
        `import type { EndpointsDefaultsAndDecorations } from "../types.js";
    const Endpoints: EndpointsDefaultsAndDecorations = ${JSON.stringify(
      sortKeys(newRoutes, { deep: true }),
    )}

    export default Endpoints`,
        { parser: "typescript" },
      ),
    );
    console.log(`${ALL_ENDPOINTS_PATH} written.`);

    const ADMIN_ENDPOINTS_PATH = pathResolve(
      process.cwd(),
      `src/generated/ghe-${version}-admin-endpoints.ts`,
    );
    writeFileSync(
      ADMIN_ENDPOINTS_PATH,
      await prettier.format(
        `import type { EndpointsDefaultsAndDecorations } from "../types.js";
    const Endpoints: EndpointsDefaultsAndDecorations = ${JSON.stringify(
      sortKeys({ enterpriseAdmin: newRoutes.enterpriseAdmin }, { deep: true }),
    )}

    export default Endpoints`,
        { parser: "typescript" },
      ),
    );
    console.log(`${ADMIN_ENDPOINTS_PATH} written.`);

    const INDEX_PATH = pathResolve(process.cwd(), `src/index.ts`);
    const imports = GHE_VERSIONS.map(
      (version) => `
        import ENDPOINTS_${version} from "./generated/ghe-${version}-endpoints.js";
        import ADMIN_ENDPOINTS_${version} from "./generated/ghe-${version}-admin-endpoints.js";
      `,
    ).join("\n");
    const methods = GHE_VERSIONS.map(
      (version) => `
        export function enterpriseServer${version}Admin(octokit: Octokit) {
          return endpointsToMethods(octokit, ADMIN_ENDPOINTS_${version});
        }
        enterpriseServer${version}Admin.VERSION = VERSION;

        export function enterpriseServer${version}(octokit: Octokit) {
          return endpointsToMethods(octokit, ENDPOINTS_${version});
        }
        enterpriseServer${version}.VERSION = VERSION;
      `,
    ).join("\n");
    writeFileSync(
      INDEX_PATH,
      await prettier.format(
        `// THIS FILE IS GENERATED. PLEASE OPEN AN ISSUE IF YOU FIND A PROBLEM

        import { Octokit } from "@octokit/core";

        import { VERSION } from "./version.js";
        import { endpointsToMethods } from "./endpoints-to-methods.js";

        ${imports}

        ${methods}`,
        { parser: "typescript" },
      ),
    );
    console.log(`${INDEX_PATH} written.`);

    const README_PATH = pathResolve(process.cwd(), `docs/ghe-${version}.md`);
    const content = `# enterpriseServer${version}

<a name="admin"></a>
## Enterprise Administration

\`\`\`js
${Object.keys(newRoutesSorted.enterpriseAdmin)
  .map((methodName) =>
    endpointToMethod(
      "enterpriseAdmin",
      methodName,
      params.enterpriseAdmin[methodName],
    ),
  )
  .join("\n")}
\`\`\`

<a name="others"></a>
## Others

\`\`\`js
${Object.keys(newRoutesSorted)
  .filter((scope) => scope !== "enterpriseAdmin")
  .map((scope) =>
    Object.keys(newRoutesSorted[scope])
      .map((methodName) =>
        endpointToMethod(scope, methodName, params[scope][methodName]),
      )
      .join("\n"),
  )
  .join("\n")}
\`\`\`
`;
    writeFileSync(
      README_PATH,
      await prettier.format(content, { parser: "markdown" }),
    );
    console.log(`${README_PATH} written.`);
  }
}

function endpointToMethod(scope, methodName, params) {
  const paramsString = params
    .filter((param) => !/\./.test(param.name) && !param.deprecated)
    .map((param) => param.name)
    .join(", ");
  return `octokit.${scope}.${methodName}(${
    paramsString ? `{${paramsString}}` : ""
  });`;
}
