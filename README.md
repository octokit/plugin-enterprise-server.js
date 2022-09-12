# plugin-enterprise-server.js

> Octokit plugin for GitHub Enterprise Server REST APIs

[![@latest](https://img.shields.io/npm/v/@octokit/plugin-enterprise-server.svg)](https://www.npmjs.com/package/@octokit/plugin-enterprise-server)
[![Build Status](https://github.com/octokit/plugin-enterprise-server.js/workflows/Test/badge.svg)](https://github.com/octokit/plugin-enterprise-server.js/actions?workflow=Test)

[`@octokit/rest`](https://github.com/octokit/rest.js/) and the [`@octokit/plugin-rest-endpoint-methods`](https://github.com/octokit/plugin-rest-endpoint-methods.js/) plugin it's using internally do not include methods for Enterprise Administration as they do not exist on https://api.github.com. This plugin adds endpoint methods for very GitHub Enterprise Server version that is currently supported.

Besides the admin-specific endpoints, there are differences between `api.github.com` and each GitHub Enterprise Server version. Instead of loading [`@octokit/plugin-rest-endpoint-methods`](https://github.com/octokit/plugin-rest-endpoint-methods.js/) you can optionally add all endpoint methods for each GitHub Enterprise Server version, including the admin endpoints.

## Usage

<table>
<tbody valign=top align=left>
<tr><th>
Browsers
</th><td width=100%>

Load `@octokit/plugin-enterprise-server` and [`@octokit/core`](https://github.com/octokit/core.js) (or core-compatible module) directly from [cdn.skypack.dev](https://cdn.skypack.dev)

```html
<script type="module">
  import { Octokit } from "https://cdn.skypack.dev/@octokit/core";
  import { enterpriseServer220Admin } from "https://cdn.skypack.dev/@octokit/plugin-enterprise-server";
</script>
```

</td></tr>
<tr><th>
Node
</th><td>

Install with `npm install @octokit/core @octokit/plugin-enterprise-server`. Optionally replace `@octokit/core` with a core-compatible module

```js
const { Octokit } = require("@octokit/core");
const {
  enterpriseServer32Admin,
} = require("@octokit/plugin-enterprise-server");
```

</td></tr>
</tbody>
</table>

```js
const OctokitEnterprise32 = Octokit.plugin(enterpriseServer32Admin);
const octokit = new OctokitEnterprise32({
  auth: "secret123",
  baseUrl: "https://github.acme-inc.com/api/v3",
});

octokit.enterpriseAdmin.createUser({
  username: "octocat",
  email: "octocat@acme-inc.com",
});
```

The list of currently exported plugins are

- [`enterpriseServer32Admin`](docs/ghe-32.md#admin)
- [`enterpriseServer32`](docs/ghe-32.md#others)
- [`enterpriseServer33Admin`](docs/ghe-33.md#admin)
- [`enterpriseServer33`](docs/ghe-33.md#others)
- [`enterpriseServer34Admin`](docs/ghe-34.md#admin)
- [`enterpriseServer34`](docs/ghe-34.md#others)
- [`enterpriseServer35Admin`](docs/ghe-35.md#admin)
- [`enterpriseServer35`](docs/ghe-35.md#others)
- [`enterpriseServer36Admin`](docs/ghe-36.md#admin)
- [`enterpriseServer36`](docs/ghe-36.md#others)

## How it works

The route definitions for the currently supported GitHub Enterprise versions are build automatically from [`@octokit/openapi`](https://github.com/octokit/openapi). Each time there is a new `@octokit/openapi` release, the [`.github/workflows/update.yml`](.github/workflows/update.yml) workflow is triggered. If an update is found, a pull request is created.

## LICENSE

[MIT](LICENSE)
