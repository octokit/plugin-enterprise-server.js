import fetchMock from "fetch-mock";
import { Octokit } from "@octokit/core";

import { enterpriseServer219Admin } from "../src";

describe("enterpriseCloud plugin", () => {
  it("README example", async () => {
    const mock = fetchMock
      .sandbox()
      .post("https://github.acme-inc.com/api/v3/admin/users", [{ ok: true }], {
        body: {
          username: "octocat",
          email: "octocat@acme-inc.com"
        }
      });

    const MyOctokit = Octokit.plugin(enterpriseServer219Admin);
    const octokit = new MyOctokit({
      auth: "secret123",
      baseUrl: "https://github.acme-inc.com/api/v3",
      request: {
        fetch: mock
      }
    });

    // See https://developer.github.com/enterprise/2.19/v3/enterprise-admin/users/#create-a-new-user
    const { data } = await octokit.enterpriseAdmin.createUser({
      username: "octocat",
      email: "octocat@acme-inc.com"
    });

    expect(data).toStrictEqual([{ ok: true }]);
  });
});
