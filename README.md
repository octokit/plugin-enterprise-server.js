# plugin-enterprise-server.js

> Octokit plugin for GitHub Enterprise Server REST APIs

[![@latest](https://img.shields.io/npm/v/@octokit/plugin-enterprise-server.svg)](https://www.npmjs.com/package/@octokit/plugin-enterprise-server)
[![Build Status](https://github.com/octokit/plugin-enterprise-server.js/workflows/Test/badge.svg)](https://github.com/octokit/plugin-enterprise-server.js/actions?workflow=Test)

[`@octokit/rest`](https://github.com/octokit/rest.js/) and the [`@octokit/plugin-rest-endpoint-methods`](https://github.com/octokit/plugin-rest-endpoint-methods.js/) plugin it's using internally do not include methods for Enterprise Administration as they do not exist on https://api.github.com. This plugin adds endpoint methods for every GitHub Enterprise Server version that is currently supported.

Besides the admin-specific endpoints, there are differences between `api.github.com` and each GitHub Enterprise Server version. Instead of loading [`@octokit/plugin-rest-endpoint-methods`](https://github.com/octokit/plugin-rest-endpoint-methods.js/) you can optionally add all endpoint methods for each GitHub Enterprise Server version, including the admin endpoints.

## Usage

<table>
<tbody valign=top align=left>
<tr><th>
Browsers
</th><td width=100%>

Load `@octokit/plugin-enterprise-server` and [`@octokit/core`](https://github.com/octokit/core.js) (or core-compatible module) directly from [esm.sh](https://esm.sh)

```html
<script type="module">
  import { Octokit } from "https://esm.sh/@octokit/core";
  import { enterpriseServer220Admin } from "https://esm.sh/@octokit/plugin-enterprise-server";
</script>
```

</td></tr>
<tr><th>
Node
</th><td>

Install with `npm install @octokit/core @octokit/plugin-enterprise-server`. Optionally replace `@octokit/core` with a core-compatible module

```js
import { Octokit } from "@octokit/core";
import { enterpriseServer316Admin } from "@octokit/plugin-enterprise-server";
```

</td></tr>
</tbody>
</table>

```js
const OctokitEnterprise12 = Octokit.plugin(enterpriseServer316Admin);
const octokit = new OctokitEnterprise316({
  auth: "secret123",
  baseUrl: "https://github.acme-inc.com/api/v3",
});

octokit.enterpriseAdmin.createUser({
  username: "octocat",
  email: "octocat@acme-inc.com",
});
```

The list of currently exported plugins are

- [`enterpriseServer313Admin`](docs/ghe-313.md#admin)
- [`enterpriseServer313`](docs/ghe-313.md#others)
- [`enterpriseServer314Admin`](docs/ghe-314.md#admin)
- [`enterpriseServer314`](docs/ghe-314.md#others)
- [`enterpriseServer315Admin`](docs/ghe-315.md#admin)
- [`enterpriseServer315`](docs/ghe-315.md#others)
- [`enterpriseServer316Admin`](docs/ghe-315.md#admin)
- [`enterpriseServer316`](docs/ghe-315.md#others)

## How it works

The route definitions for the currently supported GitHub Enterprise versions are built automatically from [`@octokit/openapi`](https://github.com/octokit/openapi). Each time there is a new `@octokit/openapi` release, the [`.github/workflows/update.yml`](.github/workflows/update.yml) workflow is triggered. If an update is found, a pull request is created.

## LICENSE

[MIT](LICENSE)
