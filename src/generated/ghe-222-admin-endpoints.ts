import { EndpointsDefaultsAndDecorations } from "../types";
const Endpoints: EndpointsDefaultsAndDecorations = {
  enterpriseAdmin: {
    addAuthorizedSshKey: ["POST /setup/api/settings/authorized-keys"],
    checkConfigurationStatus: [
      "GET /setup/api/configcheck",
      {},
      { renamed: ["enterpriseAdmin", "getConfigurationStatus"] },
    ],
    checkMaintenanceStatus: [
      "GET /setup/api/maintenance",
      {},
      { renamed: ["enterpriseAdmin", "getMaintenanceStatus"] },
    ],
    createEnterpriseServerLicense: ["POST /setup/api/start"],
    createGlobalHooks: [
      "POST /admin/hooks",
      {
        headers: { accept: "application/vnd.github.superpro-preview+json" },
        mediaType: { previews: ["superpro"] },
      },
      { renamed: ["enterpriseAdmin", "createGlobalWebhooks"] },
    ],
    createGlobalWebhook: [
      "POST /admin/hooks",
      {
        headers: { accept: "application/vnd.github.superpro-preview+json" },
        mediaType: { previews: ["superpro"] },
      },
    ],
    createImpersonationOAuthToken: [
      "POST /admin/users/:username/authorizations",
    ],
    createIndexingJob: ["POST /staff/indexing_jobs"],
    createOrg: ["POST /admin/organizations"],
    createPreReceiveEnvironment: [
      "POST /admin/pre-receive-environments",
      {
        headers: { accept: "application/vnd.github.eye-scream-preview+json" },
        mediaType: { previews: ["eye-scream"] },
      },
    ],
    createPreReceiveHook: [
      "POST /admin/pre-receive-hooks",
      {
        headers: { accept: "application/vnd.github.eye-scream-preview+json" },
        mediaType: { previews: ["eye-scream"] },
      },
    ],
    createUser: ["POST /admin/users"],
    deleteGlobalHook: [
      "DELETE /admin/hooks/:hook_id",
      {
        headers: { accept: "application/vnd.github.superpro-preview+json" },
        mediaType: { previews: ["superpro"] },
      },
      { renamed: ["enterpriseAdmin", "deleteGlobalWebhook"] },
    ],
    deleteGlobalWebhook: [
      "DELETE /admin/hooks/:hook_id",
      {
        headers: { accept: "application/vnd.github.superpro-preview+json" },
        mediaType: { previews: ["superpro"] },
      },
    ],
    deleteImpersonationOAuthToken: [
      "DELETE /admin/users/:username/authorizations",
    ],
    deletePersonalAccessToken: ["DELETE /admin/tokens/:token_id"],
    deletePreReceiveEnvironment: [
      "DELETE /admin/pre-receive-environments/:pre_receive_environment_id",
      {
        headers: { accept: "application/vnd.github.eye-scream-preview+json" },
        mediaType: { previews: ["eye-scream"] },
      },
    ],
    deletePreReceiveHook: [
      "DELETE /admin/pre_receive_hooks/:pre_receive_hook_id",
      {
        headers: { accept: "application/vnd.github.eye-scream-preview+json" },
        mediaType: { previews: ["eye-scream"] },
      },
    ],
    deletePublicKey: ["DELETE /admin/keys/:key_ids"],
    deleteUser: ["DELETE /admin/users/:username"],
    demoteSiteAdministrator: ["DELETE /users/:username/site_admin"],
    demoteSiteAdministratorToOrdinaryUser: [
      "DELETE /users/:username/site_admin",
      {},
      { renamed: ["enterpriseAdmin", "demoteSiteAdministrator"] },
    ],
    enableOrDisableMaintenanceMode: ["POST /setup/api/maintenance"],
    getAllAuthorizedSshKeys: ["GET /setup/api/settings/authorized-keys"],
    getConfigurationStatus: ["GET /setup/api/configcheck"],
    getDownloadStatusForPreReceiveEnvironment: [
      "GET /admin/pre-receive-environments/:pre_receive_environment_id/downloads/latest",
      {
        headers: { accept: "application/vnd.github.eye-scream-preview+json" },
        mediaType: { previews: ["eye-scream"] },
      },
    ],
    getGlobalHook: [
      "GET /admin/hooks/:hook_id",
      {
        headers: { accept: "application/vnd.github.superpro-preview+json" },
        mediaType: { previews: ["superpro"] },
      },
      { renamed: ["enterpriseAdmin", "getGlobalWebhook"] },
    ],
    getGlobalWebhook: [
      "GET /admin/hooks/:hook_id",
      {
        headers: { accept: "application/vnd.github.superpro-preview+json" },
        mediaType: { previews: ["superpro"] },
      },
    ],
    getLicenseInformation: ["GET /enterprise/settings/license"],
    getMaintenanceStatus: ["GET /setup/api/maintenance"],
    getPreReceiveEnvironment: [
      "GET /admin/pre-receive-environments/:pre_receive_environment_id",
      {
        headers: { accept: "application/vnd.github.eye-scream-preview+json" },
        mediaType: { previews: ["eye-scream"] },
      },
    ],
    getPreReceiveEnvironmentDownloadStatus: [
      "GET /admin/pre-receive-environments/:pre_receive_environment_id/downloads/latest",
      {
        headers: { accept: "application/vnd.github.eye-scream-preview+json" },
        mediaType: { previews: ["eye-scream"] },
      },
      {
        renamed: [
          "enterpriseAdmin",
          "getDownloadStatusForPreReceiveEnvironment",
        ],
      },
    ],
    getPreReceiveHook: [
      "GET /admin/pre-receive-hooks/:pre_receive_hook_id",
      {
        headers: { accept: "application/vnd.github.eye-scream-preview+json" },
        mediaType: { previews: ["eye-scream"] },
      },
    ],
    getPreReceiveHookForOrg: [
      "GET /orgs/:org/pre-receive-hooks/:pre_receive_hook_id",
      {
        headers: { accept: "application/vnd.github.eye-scream-preview+json" },
        mediaType: { previews: ["eye-scream"] },
      },
    ],
    getPreReceiveHookForRepo: [
      "GET /repos/:owner/:repo/pre-receive-hooks/:pre_receive_hook_id",
      {
        headers: { accept: "application/vnd.github.eye-scream-preview+json" },
        mediaType: { previews: ["eye-scream"] },
      },
    ],
    getSettings: ["GET /setup/api/settings"],
    getTypeStats: ["GET /enterprise/stats/:type"],
    listGlobalHooks: [
      "GET /admin/hooks",
      {
        headers: { accept: "application/vnd.github.superpro-preview+json" },
        mediaType: { previews: ["superpro"] },
      },
      { renamed: ["enterpriseAdmin", "listGlobalWebhooks"] },
    ],
    listGlobalWebhooks: [
      "GET /admin/hooks",
      {
        headers: { accept: "application/vnd.github.superpro-preview+json" },
        mediaType: { previews: ["superpro"] },
      },
    ],
    listPersonalAccessTokens: ["GET /admin/tokens"],
    listPreReceiveEnvironments: [
      "GET /admin/pre-receive-environments",
      {
        headers: { accept: "application/vnd.github.eye-scream-preview+json" },
        mediaType: { previews: ["eye-scream"] },
      },
    ],
    listPreReceiveHooks: [
      "GET /admin/pre-receive-hooks",
      {
        headers: { accept: "application/vnd.github.eye-scream-preview+json" },
        mediaType: { previews: ["eye-scream"] },
      },
    ],
    listPreReceiveHooksForOrg: [
      "GET /orgs/:org/pre-receive-hooks",
      {
        headers: { accept: "application/vnd.github.eye-scream-preview+json" },
        mediaType: { previews: ["eye-scream"] },
      },
    ],
    listPreReceiveHooksForRepo: [
      "GET /repos/:owner/:repo/pre-receive-hooks",
      {
        headers: { accept: "application/vnd.github.eye-scream-preview+json" },
        mediaType: { previews: ["eye-scream"] },
      },
    ],
    listPublicKeys: ["GET /admin/keys"],
    modifySettings: [
      "PUT /setup/api/settings",
      {},
      { renamed: ["enterpriseAdmin", "setSettings"] },
    ],
    pingGlobalHook: [
      "POST /admin/hooks/:hook_id/pings",
      {
        headers: { accept: "application/vnd.github.superpro-preview+json" },
        mediaType: { previews: ["superpro"] },
      },
      { renamed: ["enterpriseAdmin", "pingGlobalWebhook"] },
    ],
    pingGlobalWebhook: [
      "POST /admin/hooks/:hook_id/pings",
      {
        headers: { accept: "application/vnd.github.superpro-preview+json" },
        mediaType: { previews: ["superpro"] },
      },
    ],
    promoteOrdinaryUserToSiteAdministrator: [
      "PUT /users/:username/site_admin",
      {},
      { renamed: ["enterpriseAdmin", "promoteUserToBeSiteAdministrator"] },
    ],
    promoteUserToBeSiteAdministrator: ["PUT /users/:username/site_admin"],
    queueIndexingJob: [
      "POST /staff/indexing_jobs",
      {},
      { renamed: ["enterpriseAdmin", "createIndexingJob"] },
    ],
    removeAuthorizedSshKey: ["DELETE /setup/api/settings/authorized-keys"],
    removePreReceiveHookEnforcementForOrg: [
      "DELETE /orgs/:org/pre-receive-hooks/:pre_receive_hook_id",
      {
        headers: { accept: "application/vnd.github.eye-scream-preview+json" },
        mediaType: { previews: ["eye-scream"] },
      },
    ],
    removePreReceiveHookEnforcementForRepo: [
      "DELETE /repos/:owner/:repo/pre-receive-hooks/:pre_receive_hook_id",
      {
        headers: { accept: "application/vnd.github.eye-scream-preview+json" },
        mediaType: { previews: ["eye-scream"] },
      },
    ],
    renameOrg: [
      "PATCH /admin/organizations/:org",
      {},
      { renamed: ["enterpriseAdmin", "updateOrgName"] },
    ],
    renameUser: [
      "PATCH /admin/users/:username",
      {},
      { renamed: ["enterpriseAdmin", "updateUsernameForUser"] },
    ],
    retrieveAuthorizedSshKeys: [
      "GET /setup/api/settings/authorized-keys",
      {},
      { renamed: ["enterpriseAdmin", "getAllAuthorizedSshKeys"] },
    ],
    retrieveSettings: [
      "GET /setup/api/settings",
      {},
      { renamed: ["enterpriseAdmin", "getSettings"] },
    ],
    setSettings: ["PUT /setup/api/settings"],
    startConfigurationProcess: ["POST /setup/api/configure"],
    startPreReceiveEnvironmentDownload: [
      "POST /admin/pre-receive-environments/:pre_receive_environment_id/downloads",
      {
        headers: { accept: "application/vnd.github.eye-scream-preview+json" },
        mediaType: { previews: ["eye-scream"] },
      },
    ],
    suspendUser: ["PUT /users/:username/suspended"],
    syncLdapMappingForTeam: ["POST /admin/ldap/teams/:team_id/sync"],
    syncLdapMappingForUser: ["POST /admin/ldap/users/:username/sync"],
    triggerPreReceiveEnvironmentDownload: [
      "POST /admin/pre-receive-environments/:pre_receive_environment_id/downloads",
      {
        headers: { accept: "application/vnd.github.eye-scream-preview+json" },
        mediaType: { previews: ["eye-scream"] },
      },
      { renamed: ["enterpriseAdmin", "startPreReceiveEnvironmentDownload"] },
    ],
    unsuspendUser: ["DELETE /users/:username/suspended"],
    updateGlobalHook: [
      "PATCH /admin/hooks/:hook_id",
      {
        headers: { accept: "application/vnd.github.superpro-preview+json" },
        mediaType: { previews: ["superpro"] },
      },
      { renamed: ["enterpriseAdmin", "updateGlobalWebhook"] },
    ],
    updateGlobalWebhook: [
      "PATCH /admin/hooks/:hook_id",
      {
        headers: { accept: "application/vnd.github.superpro-preview+json" },
        mediaType: { previews: ["superpro"] },
      },
    ],
    updateLdapMappingForTeam: ["PATCH /admin/ldap/teams/:team_id/mapping"],
    updateLdapMappingForUser: ["PATCH /admin/ldap/users/:username/mapping"],
    updateOrgName: ["PATCH /admin/organizations/:org"],
    updatePreReceiveEnvironment: [
      "PATCH /admin/pre-receive-environments/:pre_receive_environment_id",
      {
        headers: { accept: "application/vnd.github.eye-scream-preview+json" },
        mediaType: { previews: ["eye-scream"] },
      },
    ],
    updatePreReceiveHook: [
      "PATCH /admin/pre_receive_hooks/:pre_receive_hook_id",
      {
        headers: { accept: "application/vnd.github.eye-scream-preview+json" },
        mediaType: { previews: ["eye-scream"] },
      },
    ],
    updatePreReceiveHookEnforcementForOrg: [
      "PATCH /orgs/:org/pre-receive-hooks/:pre_receive_hook_id",
      {
        headers: { accept: "application/vnd.github.eye-scream-preview+json" },
        mediaType: { previews: ["eye-scream"] },
      },
    ],
    updatePreReceiveHookEnforcementForRepo: [
      "PATCH /repos/:owner/:repo/pre-receive-hooks/:pre_receive_hook_id",
      {
        headers: { accept: "application/vnd.github.eye-scream-preview+json" },
        mediaType: { previews: ["eye-scream"] },
      },
    ],
    updateUsernameForUser: ["PATCH /admin/users/:username"],
    upgradeLicense: ["POST /setup/api/upgrade"],
    uploadLicenseForFirstTime: [
      "POST /setup/api/start",
      {},
      { renamed: ["enterpriseAdmin", "createEnterpriseServerLicense"] },
    ],
  },
};

export default Endpoints;
