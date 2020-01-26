const { readFileSync, writeFileSync } = require("fs");
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
    isLegacy
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
      before {
        scope(format: CAMELCASE)
        id(format: CAMELCASE)
      }
      after {
        scope(format: CAMELCASE)
        id(format: CAMELCASE)
      }
      date
      note
    }
  }

  query ($version: String) {
    ghe219: endpoints(version: $version, ghe: GHE_219, filter: { isGithubCloudOnly: false }) {
      ...endpointFields
    }
    ghe218: endpoints(version: $version, ghe: GHE_218, filter: { isGithubCloudOnly: false }) {
      ...endpointFields
    }
    ghe217: endpoints(version: $version, ghe: GHE_217, filter: { isGithubCloudOnly: false }) {
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
    writeFileSync(
      path.resolve(__dirname, "generated", `${key}-endpoints.json`),
      prettier.format(JSON.stringify(endpoints), {
        parser: "json"
      })
    );
  }
}
