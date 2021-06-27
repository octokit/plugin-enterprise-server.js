const { writeFileSync } = require("fs");
const path = require("path");

const graphql = require("github-openapi-graphql-query");
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
    console.log(
      "Loading endpoints for GHE %s.%s",
      ghe.substr(0, 1),
      ghe.substr(1)
    );
    const {
      data: { endpoints },
    } = await graphql(QUERY, {
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
