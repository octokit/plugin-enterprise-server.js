# plugin-enterprise-server.js

> Octokit plugin for GitHub Enterprise Server REST APIs

[![@latest](https://img.shields.io/npm/v/@octokit/plugin-enterprise-server.svg)](https://www.npmjs.com/package/@octokit/plugin-enterprise-server)
[![Build Status](https://github.com/octokit/plugin-enterprise-server.js/workflows/Test/badge.svg)](https://github.com/octokit/plugin-enterprise-server.js/actions?workflow=Test)
[![Greenkeeper](https://badges.greenkeeper.io/octokit/plugin-enterprise-server.js.svg)](https://greenkeeper.io/)

[`@octokit/rest`](https://github.com/octokit/rest.js/) and the [`@octokit/plugin-rest-endpoint-methods`](https://github.com/octokit/plugin-rest-endpoint-methods.js/) plugin it's using internally do not include methods for Enterprise Administration as they do not exist on https://api.github.com. This plugin adds endpoint methods for very GitHub Enterprise Server version that is currently supported.

Besides the admin-specific endpoints, there are differences between `api.github.com` and each GitHub Enterprise Server version. Instead of loading [`@octokit/plugin-rest-endpoint-methods`](https://github.com/octokit/plugin-rest-endpoint-methods.js/) you can optionally add all endpoint methods for each GitHub Enterprise Server version, including the admin endpoints.

## Usage

<table>
<tbody valign=top align=left>
<tr><th>
Browsers
</th><td width=100%>

Load `@octokit/plugin-enterprise-server` and [`@octokit/core`](https://github.com/octokit/core.js) (or core-compatible module) directly from [cdn.pika.dev](https://cdn.pika.dev)

```html
<script type="module">
  import { Octokit } from "https://cdn.pika.dev/@octokit/core";
  import { enterpriseServer220Admin } from "https://cdn.pika.dev/@octokit/plugin-enterprise-server";
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
  enterpriseServer220Admin
} = require("@octokit/plugin-enterprise-server");
```

</td></tr>
</tbody>
</table>

```js
const OctokitEnterprise220 = Octokit.plugin(enterpriseServer220Admin);
const octokit = new OctokitEnterprise220({
  auth: "secret123",
  baseUrl: "https://github.acme-inc.com/api/v3"
});

octokit.enterpriseAdmin.createUser({
  username: "octocat",
  email: "octocat@acme-inc.com"
});
```

The list of currently exported plugins are

- [`enterpriseServer220Admin`](docs/ghe-220.md#admin)
- [`enterpriseServer220`](docs/ghe-220.md#others)
- [`enterpriseServer219Admin`](docs/ghe-219.md#admin)
- [`enterpriseServer219`](docs/ghe-219.md#others)
- [`enterpriseServer218Admin`](docs/ghe-218.md#admin)
- [`enterpriseServer218`](docs/ghe-218.md#others)
- [`enterpriseServer217Admin`](docs/ghe-217.md#admin)
- [`enterpriseServer217`](docs/ghe-217.md#others)

## How it works

The route definitions for the currently supported GitHub Enterprise versions are build automatically from [`@octokit/routes`](https://github.com/octokit/routes). Each time there is a new `@octokit/routes` release, the [`.github/workflows/routes-update.yml`](.github/workflows/routes-update.yml) workflow is triggered. If an update to [`routes.json`](routes.json) is found, a pull request is created.

## LICENSE

[MIT](LICENSE)
