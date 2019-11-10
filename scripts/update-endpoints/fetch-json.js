const { writeFileSync } = require("fs");
const path = require("path");

const { graphql } = require("@octokit/graphql");
const prettier = require("prettier");

if (!process.env.VERSION) {
  throw new Error(`VERSION environment variable must be set`);
}

const QUERY = `
  fragment endpointFields on Endpoint {
    name
    scope(format: CAMELCASE)
    id(format: CAMELCASE)
    method
    url
    isDeprecated
    description
    documentationUrl
    previews(required: true) {
      name
    }
    headers {
      name
      value
    }
    parameters {
      name
      description
      in
      type
      required
      enum
      allowNull
      mapToData
      validation
      alias
      deprecated
    }
    responses {
      code
      description
      examples {
        data
      }
    }
    renamed {
      before(format: CAMELCASE)
      after(format: CAMELCASE)
      date
      note
    }
  }

  query ($version: String) {
    ghe218: endpoints(version: $version, ghe: GHE_218, filter: { isLegacy: false, isGithubCloudOnly: false }) {
      ...endpointFields
    }
    ghe217: endpoints(version: $version, ghe: GHE_217, filter: { isLegacy: false, isGithubCloudOnly: false }) {
      ...endpointFields
    }
    ghe216: endpoints(version: $version, ghe: GHE_216, filter: { isLegacy: false, isGithubCloudOnly: false }) {
      ...endpointFields
    }
    ghe215: endpoints(version: $version, ghe: GHE_215, filter: { isLegacy: false, isGithubCloudOnly: false }) {
      ...endpointFields
    }
  }
`;

main();

async function main() {
  const results = await graphql(QUERY, {
    url: "https://octokit-routes-graphql-server.now.sh/",
    version: process.env.VERSION
  });

  for (const [key, endpoints] of Object.entries(results)) {
    const filename = key.replace(/ghe2(\d+)/, "ghe-2.$1-endpoints.json");
    writeFileSync(
      path.resolve(__dirname, "generated", filename),
      prettier.format(JSON.stringify(endpoints), {
        parser: "json"
      })
    );
  }
}
