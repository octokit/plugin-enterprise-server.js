const { writeFileSync } = require("fs");
const { resolve: pathResolve } = require("path");

const prettier = require("prettier");
const sortKeys = require("sort-keys");

const WORKAROUNDS = require("./workarounds");

const GHE_VERSIONS = ["217", "218", "219"];
const newRoutes = {};

generateRoutes();

async function generateRoutes() {
  for (const version of GHE_VERSIONS) {
    const endpoints = require(`./generated/ghe${version}-endpoints.json`);
    endpoints.concat(WORKAROUNDS).forEach(endpoint => {
      const scope = endpoint.scope;
      const idName = endpoint.id;
      const route = `${endpoint.method} ${endpoint.url.replace(
        /\{([^}]+)}/g,
        ":$1"
      )}`;
      const endpointDefaults = {};
      const endpointDecorations = {};

      if (!newRoutes[scope]) {
        newRoutes[scope] = {};
      }

      if (endpoint.headers.length) {
        endpointDefaults.headers = endpoint.headers.reduce((result, header) => {
          if (!result) {
            result = {};
          }
          result[header.name] = header.value;
          return result;
        }, undefined);
      }

      if (endpoint.previews.length) {
        endpointDefaults.mediaType = {
          previews: endpoint.previews.map(preview => preview.name)
        };
      }

      if (endpoint.renamed) {
        endpointDecorations.renamed = [
          endpoint.renamed.after.scope,
          endpoint.renamed.after.id
        ];
      }

      if (endpoint.isDeprecated) {
        endpointDecorations.deprecated = `octokit.scim.${idName}() is deprecated, see ${endpoint.documentationUrl}`;
      }

      newRoutes[endpoint.scope][idName] = [route];

      if (Object.keys(endpointDecorations).length) {
        newRoutes[endpoint.scope][idName].push(
          endpointDefaults,
          endpointDecorations
        );
      } else if (Object.keys(endpointDefaults).length) {
        newRoutes[endpoint.scope][idName].push(endpointDefaults);
      }
    });

    const newRoutesSorted = sortKeys(newRoutes, { deep: true });

    const allResultsPath = pathResolve(
      process.cwd(),
      `ghe-${version}/all.json`
    );
    writeFileSync(
      allResultsPath,
      prettier.format(JSON.stringify(newRoutesSorted), {
        parser: "json"
      })
    );
    console.log(`${allResultsPath} written.`);

    const enterpriseAdminResultsPath = pathResolve(
      process.cwd(),
      `ghe-${version}/enterprise-admin.json`
    );
    writeFileSync(
      enterpriseAdminResultsPath,
      prettier.format(JSON.stringify(newRoutesSorted.enterpriseAdmin), {
        parser: "json"
      })
    );
    console.log(`${enterpriseAdminResultsPath} written.`);

    const indexPath = pathResolve(process.cwd(), `ghe-${version}/index.js`);
    writeFileSync(
      indexPath,
      `module.exports = octokit =>
  octokit.registerEndpoints({
    enterpriseAdmin: require("./enterprise-admin.json")
  });
`
    );
    console.log(`${indexPath} written.`);

    const allPath = pathResolve(process.cwd(), `ghe-${version}/all.js`);
    writeFileSync(
      allPath,
      'module.exports = octokit => octokit.registerEndpoints(require("./all.json"));\n'
    );
    console.log(`${allPath} written.`);

    const readmePath = pathResolve(process.cwd(), `ghe-${version}/README.md`);
    const content = `# @octokit/plugin-enterprise-server/ghe-${version}

## Enterprise Administration

\`\`\`js
${Object.keys(newRoutesSorted.enterpriseAdmin)
  .map(methodName =>
    endpointToMethod(
      "enterpriseAdmin",
      methodName,
      newRoutesSorted.enterpriseAdmin[methodName]
    )
  )
  .join("\n")}
\`\`\`

## Others

\`\`\`js
${Object.keys(newRoutesSorted)
  .filter(scope => scope !== "enterpriseAdmin")
  .map(scope =>
    Object.keys(newRoutesSorted[scope])
      .map(methodName =>
        endpointToMethod(scope, methodName, newRoutesSorted[scope][methodName])
      )
      .join("\n")
  )
  .join("\n")}
\`\`\`
`;
    writeFileSync(readmePath, prettier.format(content, { parser: "markdown" }));
    console.log(`${readmePath} written.`);
  }
}

function endpointToMethod(scope, methodName, meta) {
  return `octokit.${scope}.${methodName}(${Object.keys(meta.params)
    .filter(param => !/\./.test(param) && !meta.params[param].deprecated)
    .join(", ")});`;
}
