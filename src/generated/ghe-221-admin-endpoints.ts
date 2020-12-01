import { EndpointsDefaultsAndDecorations } from "../types";
const Endpoints: EndpointsDefaultsAndDecorations = {
  enterpriseAdmin: {
    addAuthorizedSshKey: ["POST /setup/api/settings/authorized-keys"],
    createEnterpriseServerLicense: ["POST /setup/api/start"],
    createGlobalWebhook: [
      "POST /admin/hooks",
      { mediaType: { previews: ["superpro"] } },
    ],
    createImpersonationOAuthToken: [
      "POST /admin/users/{username}/authorizations",
    ],
    createOrg: ["POST /admin/organizations"],
    createPreReceiveEnvironment: [
      "POST /admin/pre-receive-environments",
      { mediaType: { previews: ["eye-scream"] } },
    ],
    createPreReceiveHook: [
      "POST /admin/pre-receive-hooks",
      { mediaType: { previews: ["eye-scream"] } },
    ],
    createUser: ["POST /admin/users"],
    deleteGlobalWebhook: [
      "DELETE /admin/hooks/{hook_id}",
      { mediaType: { previews: ["superpro"] } },
    ],
    deleteImpersonationOAuthToken: [
      "DELETE /admin/users/{username}/authorizations",
    ],
    deletePersonalAccessToken: ["DELETE /admin/tokens/{token_id}"],
    deletePreReceiveEnvironment: [
      "DELETE /admin/pre-receive-environments/{pre_receive_environment_id}",
      { mediaType: { previews: ["eye-scream"] } },
    ],
    deletePreReceiveHook: [
      "DELETE /admin/pre-receive-hooks/{pre_receive_hook_id}",
      { mediaType: { previews: ["eye-scream"] } },
    ],
    deletePublicKey: ["DELETE /admin/keys/{key_ids}"],
    deleteUser: ["DELETE /admin/users/{username}"],
    demoteSiteAdministrator: ["DELETE /users/{username}/site_admin"],
    enableOrDisableMaintenanceMode: ["POST /setup/api/maintenance"],
    getAllAuthorizedSshKeys: ["GET /setup/api/settings/authorized-keys"],
    getConfigurationStatus: ["GET /setup/api/configcheck"],
    getDownloadStatusForPreReceiveEnvironment: [
      "GET /admin/pre-receive-environments/{pre_receive_environment_id}/downloads/latest",
      { mediaType: { previews: ["eye-scream"] } },
    ],
    getGlobalWebhook: [
      "GET /admin/hooks/{hook_id}",
      { mediaType: { previews: ["superpro"] } },
    ],
    getLicenseInformation: ["GET /enterprise/settings/license"],
    getMaintenanceStatus: ["GET /setup/api/maintenance"],
    getPreReceiveEnvironment: [
      "GET /admin/pre-receive-environments/{pre_receive_environment_id}",
      { mediaType: { previews: ["eye-scream"] } },
    ],
    getPreReceiveHook: [
      "GET /admin/pre-receive-hooks/{pre_receive_hook_id}",
      { mediaType: { previews: ["eye-scream"] } },
    ],
    getPreReceiveHookForOrg: [
      "GET /orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}",
      { mediaType: { previews: ["eye-scream"] } },
    ],
    getPreReceiveHookForRepo: [
      "GET /repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}",
      { mediaType: { previews: ["eye-scream"] } },
    ],
    getSettings: ["GET /setup/api/settings"],
    getTypeStats: ["GET /enterprise/stats/{type}"],
    listGlobalWebhooks: [
      "GET /admin/hooks",
      { mediaType: { previews: ["superpro"] } },
    ],
    listPersonalAccessTokens: ["GET /admin/tokens"],
    listPreReceiveEnvironments: [
      "GET /admin/pre-receive-environments",
      { mediaType: { previews: ["eye-scream"] } },
    ],
    listPreReceiveHooks: [
      "GET /admin/pre-receive-hooks",
      { mediaType: { previews: ["eye-scream"] } },
    ],
    listPreReceiveHooksForOrg: [
      "GET /orgs/{org}/pre-receive-hooks",
      { mediaType: { previews: ["eye-scream"] } },
    ],
    listPreReceiveHooksForRepo: [
      "GET /repos/{owner}/{repo}/pre-receive-hooks",
      { mediaType: { previews: ["eye-scream"] } },
    ],
    listPublicKeys: ["GET /admin/keys"],
    pingGlobalWebhook: [
      "POST /admin/hooks/{hook_id}/pings",
      { mediaType: { previews: ["superpro"] } },
    ],
    promoteUserToBeSiteAdministrator: ["PUT /users/{username}/site_admin"],
    removeAuthorizedSshKey: ["DELETE /setup/api/settings/authorized-keys"],
    removePreReceiveHookEnforcementForOrg: [
      "DELETE /orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}",
      { mediaType: { previews: ["eye-scream"] } },
    ],
    removePreReceiveHookEnforcementForRepo: [
      "DELETE /repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}",
      { mediaType: { previews: ["eye-scream"] } },
    ],
    setSettings: ["PUT /setup/api/settings"],
    startConfigurationProcess: ["POST /setup/api/configure"],
    startPreReceiveEnvironmentDownload: [
      "POST /admin/pre-receive-environments/{pre_receive_environment_id}/downloads",
      { mediaType: { previews: ["eye-scream"] } },
    ],
    suspendUser: ["PUT /users/{username}/suspended"],
    syncLdapMappingForTeam: ["POST /admin/ldap/teams/{team_id}/sync"],
    syncLdapMappingForUser: ["POST /admin/ldap/users/{username}/sync"],
    unsuspendUser: ["DELETE /users/{username}/suspended"],
    updateGlobalWebhook: [
      "PATCH /admin/hooks/{hook_id}",
      { mediaType: { previews: ["superpro"] } },
    ],
    updateLdapMappingForTeam: ["PATCH /admin/ldap/teams/{team_id}/mapping"],
    updateLdapMappingForUser: ["PATCH /admin/ldap/users/{username}/mapping"],
    updateOrgName: ["PATCH /admin/organizations/{org}"],
    updatePreReceiveEnvironment: [
      "PATCH /admin/pre-receive-environments/{pre_receive_environment_id}",
      { mediaType: { previews: ["eye-scream"] } },
    ],
    updatePreReceiveHook: [
      "PATCH /admin/pre-receive-hooks/{pre_receive_hook_id}",
      { mediaType: { previews: ["eye-scream"] } },
    ],
    updatePreReceiveHookEnforcementForOrg: [
      "PATCH /orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}",
      { mediaType: { previews: ["eye-scream"] } },
    ],
    updatePreReceiveHookEnforcementForRepo: [
      "PATCH /repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}",
      { mediaType: { previews: ["eye-scream"] } },
    ],
    updateUsernameForUser: ["PATCH /admin/users/{username}"],
    upgradeLicense: ["POST /setup/api/upgrade"],
  },
};

export default Endpoints;
