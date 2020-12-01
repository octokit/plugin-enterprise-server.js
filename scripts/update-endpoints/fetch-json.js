const { readFileSync, writeFileSync } = require("fs");
const path = require("path");

const { graphql } = require("@octokit/graphql");
const prettier = require("prettier");

if (!process.env.VERSION) {
  throw new Error(`VERSION environment variable must be set`);
}

const version = process.env.VERSION.replace(/^v/, "");
const GHE_VERSIONS = require("./ghe-versions");

const QUERY = `
  query ($version: String, $ignoreChangesBefore: String!, $ghe: GitHubEnterpriseVersion!) {
    endpoints(version: $version, ignoreChangesBefore: $ignoreChangesBefore, ghe: $ghe, filter: {isGithubCloudOnly: false}) {
      name
      scope(format: CAMELCASE)
      id(format: CAMELCASE)
      method
      url
      isDeprecated
      deprecationDate
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
  }
`;

main();

async function main() {
  for (const ghe of GHE_VERSIONS) {
    console.log("Loading endpoints for GHE 2.%s", ghe.substr(1));
    const { endpoints } = await graphql(QUERY, {
      // url: "https://github-openapi-graphql-server.vercel.app/api/graphql",
      url: "http://localhost:3000/api/graphql",
      version,
      ignoreChangesBefore: "2020-12-01",
      ghe: `GHE_${ghe}`,
    });

    writeFileSync(
      path.resolve(__dirname, "generated", `ghe${ghe}-endpoints.json`),
      prettier.format(JSON.stringify(endpoints), {
        parser: "json",
      })
    );
  }
}
