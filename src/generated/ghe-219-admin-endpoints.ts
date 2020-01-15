import { EndpointsDefaultsAndDecorations } from "../types";
const Endpoints: EndpointsDefaultsAndDecorations = {
  enterpriseAdmin: {
    addAuthorizedSshKey: ["POST /setup/api/settings/authorized-keys"],
    checkConfigurationStatus: ["GET /setup/api/configcheck"],
    checkMaintenanceStatus: ["GET /setup/api/maintenance"],
    createGlobalHook: [
      "POST /admin/hooks",
      {
        headers: { accept: "application/vnd.github.superpro-preview+json" },
        mediaType: { previews: ["superpro"] }
      }
    ],
    createImpersonationOAuthToken: [
      "POST /admin/users/:username/authorizations"
    ],
    createOrg: ["POST /admin/organizations"],
    createPreReceiveEnvironment: ["POST /admin/pre-receive-environments"],
    createPreReceiveHook: ["POST /admin/pre-receive-hooks"],
    createUser: ["POST /admin/users"],
    deleteGlobalHook: [
      "DELETE /admin/hooks/:hook_id",
      {
        headers: { accept: "application/vnd.github.superpro-preview+json" },
        mediaType: { previews: ["superpro"] }
      }
    ],
    deleteImpersonationOAuthToken: [
      "DELETE /admin/users/:username/authorizations"
    ],
    deletePersonalAccessToken: ["DELETE /admin/tokens/:token_id"],
    deletePreReceiveEnvironment: [
      "DELETE /admin/pre-receive-environments/:pre_receive_environment_id"
    ],
    deletePreReceiveHook: [
      "DELETE /admin/pre_receive_hooks/:pre_receive_hook_id"
    ],
    deletePublicKey: ["DELETE /admin/keys/:key_ids"],
    deleteUser: ["DELETE /admin/users/:username"],
    demoteSiteAdministratorToOrdinaryUser: [
      "DELETE /users/:username/site_admin"
    ],
    enableOrDisableMaintenanceMode: ["POST /setup/api/maintenance"],
    getGlobalHook: [
      "GET /admin/hooks/:hook_id",
      {
        headers: { accept: "application/vnd.github.superpro-preview+json" },
        mediaType: { previews: ["superpro"] }
      }
    ],
    getLicenseInformation: ["GET /enterprise/settings/license"],
    getPreReceiveEnvironment: [
      "GET /admin/pre-receive-environments/:pre_receive_environment_id"
    ],
    getPreReceiveEnvironmentDownloadStatus: [
      "GET /admin/pre-receive-environments/:pre_receive_environment_id/downloads/latest"
    ],
    getPreReceiveHook: ["GET /admin/pre-receive-hooks/:pre_receive_hook_id"],
    getPreReceiveHookForOrg: [
      "GET /orgs/:org/pre-receive-hooks/:pre_receive_hook_id"
    ],
    getPreReceiveHookForRepo: [
      "GET /repos/:owner/:repo/pre-receive-hooks/:pre_receive_hook_id"
    ],
    getTypeStats: ["GET /enterprise/stats/:type"],
    listGlobalHooks: [
      "GET /admin/hooks",
      {
        headers: { accept: "application/vnd.github.superpro-preview+json" },
        mediaType: { previews: ["superpro"] }
      }
    ],
    listPersonalAccessTokens: ["GET /admin/tokens"],
    listPreReceiveEnvironments: ["GET /admin/pre-receive-environments"],
    listPreReceiveHooks: ["GET /admin/pre-receive-hooks"],
    listPreReceiveHooksForOrg: ["GET /orgs/:org/pre-receive-hooks"],
    listPreReceiveHooksForRepo: ["GET /repos/:owner/:repo/pre-receive-hooks"],
    modifySettings: ["PUT /setup/api/settings"],
    pingGlobalHook: [
      "POST /admin/hooks/:hook_id/pings",
      {
        headers: { accept: "application/vnd.github.superpro-preview+json" },
        mediaType: { previews: ["superpro"] }
      }
    ],
    promoteOrdinaryUserToSiteAdministrator: ["PUT /users/:username/site_admin"],
    queueIndexingJob: ["POST /staff/indexing_jobs"],
    removeAuthorizedSshKey: ["DELETE /setup/api/settings/authorized-keys"],
    removeEnforcementOverridesForPreReceiveHookForOrg: [
      "DELETE /orgs/:org/pre-receive-hooks/:pre_receive_hook_id"
    ],
    removeEnforcementOverridesForPreReceiveHookForRepo: [
      "DELETE /repos/:owner/:repo/pre-receive-hooks/:pre_receive_hook_id"
    ],
    renameOrg: ["PATCH /admin/organizations/:org"],
    renameUser: ["PATCH /admin/users/:username"],
    retrieveAuthorizedSshKeys: ["GET /setup/api/settings/authorized-keys"],
    retrieveSettings: ["GET /setup/api/settings"],
    startConfigurationProcess: ["POST /setup/api/configure"],
    suspendUser: ["PUT /users/:username/suspended"],
    syncLdapMappingForTeam: ["POST /admin/ldap/teams/:team_id/sync"],
    syncLdapMappingForUser: ["POST /admin/ldap/users/:username/sync"],
    triggerPreReceiveEnvironmentDownload: [
      "POST /admin/pre-receive-environments/:pre_receive_environment_id/downloads"
    ],
    unsuspendUser: ["DELETE /users/:username/suspended"],
    updateGlobalHook: [
      "PATCH /admin/hooks/:hook_id",
      {
        headers: { accept: "application/vnd.github.superpro-preview+json" },
        mediaType: { previews: ["superpro"] }
      }
    ],
    updateLdapMappingForTeam: ["PATCH /admin/ldap/teams/:team_id/mapping"],
    updateLdapMappingForUser: ["PATCH /admin/ldap/users/:username/mapping"],
    updatePreReceiveEnvironment: [
      "PATCH /admin/pre-receive-environments/:pre_receive_environment_id"
    ],
    updatePreReceiveHook: [
      "PATCH /admin/pre_receive_hooks/:pre_receive_hook_id"
    ],
    updatePreReceiveHookEnforcementForOrg: [
      "PATCH /orgs/:org/pre-receive-hooks/:pre_receive_hook_id"
    ],
    updatePreReceiveHookEnforcementForRepo: [
      "PATCH /repos/:owner/:repo/pre-receive-hooks/:pre_receive_hook_id"
    ],
    upgradeLicense: ["POST /setup/api/upgrade"],
    uploadLicenseForFirstTime: ["POST /setup/api/start"]
  }
};

export default Endpoints;
