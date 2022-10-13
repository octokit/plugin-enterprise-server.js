import { EndpointsDefaultsAndDecorations } from "../types";
const Endpoints: EndpointsDefaultsAndDecorations = {
  enterpriseAdmin: {
    addAuthorizedSshKey: ["POST {origin}/setup/api/settings/authorized-keys"],
    addCustomLabelsToSelfHostedRunnerForEnterprise: [
      "POST /enterprises/{enterprise}/actions/runners/{runner_id}/labels",
    ],
    createEnterpriseServerLicense: ["POST {origin}/setup/api/start"],
    createGlobalWebhook: ["POST /admin/hooks"],
    createImpersonationOAuthToken: [
      "POST /admin/users/{username}/authorizations",
    ],
    createOrg: ["POST /admin/organizations"],
    createPreReceiveEnvironment: ["POST /admin/pre-receive-environments"],
    createPreReceiveHook: ["POST /admin/pre-receive-hooks"],
    createUser: ["POST /admin/users"],
    deleteGlobalWebhook: ["DELETE /admin/hooks/{hook_id}"],
    deleteImpersonationOAuthToken: [
      "DELETE /admin/users/{username}/authorizations",
    ],
    deletePersonalAccessToken: ["DELETE /admin/tokens/{token_id}"],
    deletePreReceiveEnvironment: [
      "DELETE /admin/pre-receive-environments/{pre_receive_environment_id}",
    ],
    deletePreReceiveHook: [
      "DELETE /admin/pre-receive-hooks/{pre_receive_hook_id}",
    ],
    deletePublicKey: ["DELETE /admin/keys/{key_ids}"],
    deleteScimGroupFromEnterprise: [
      "DELETE /scim/v2/enterprises/{enterprise}/Groups/{scim_group_id}",
    ],
    deleteUser: ["DELETE /admin/users/{username}"],
    deleteUserFromEnterprise: [
      "DELETE /scim/v2/enterprises/{enterprise}/Users/{scim_user_id}",
    ],
    demoteSiteAdministrator: ["DELETE /users/{username}/site_admin"],
    disableSelectedOrganizationGithubActionsEnterprise: [
      "DELETE /enterprises/{enterprise}/actions/permissions/organizations/{org_id}",
    ],
    enableOrDisableMaintenanceMode: ["POST {origin}/setup/api/maintenance"],
    enableSelectedOrganizationGithubActionsEnterprise: [
      "PUT /enterprises/{enterprise}/actions/permissions/organizations/{org_id}",
    ],
    getAllAuthorizedSshKeys: [
      "GET {origin}/setup/api/settings/authorized-keys",
    ],
    getAllStats: ["GET /enterprise/stats/all"],
    getAllowedActionsEnterprise: [
      "GET /enterprises/{enterprise}/actions/permissions/selected-actions",
    ],
    getAnnouncement: ["GET /enterprise/announcement"],
    getCommentStats: ["GET /enterprise/stats/comments"],
    getConfigurationStatus: ["GET {origin}/setup/api/configcheck"],
    getDownloadStatusForPreReceiveEnvironment: [
      "GET /admin/pre-receive-environments/{pre_receive_environment_id}/downloads/latest",
    ],
    getGistStats: ["GET /enterprise/stats/gists"],
    getGithubActionsPermissionsEnterprise: [
      "GET /enterprises/{enterprise}/actions/permissions",
    ],
    getGlobalWebhook: ["GET /admin/hooks/{hook_id}"],
    getHooksStats: ["GET /enterprise/stats/hooks"],
    getIssueStats: ["GET /enterprise/stats/issues"],
    getLicenseInformation: ["GET /enterprise/settings/license"],
    getMaintenanceStatus: ["GET {origin}/setup/api/maintenance"],
    getMilestoneStats: ["GET /enterprise/stats/milestones"],
    getOrgStats: ["GET /enterprise/stats/orgs"],
    getPagesStats: ["GET /enterprise/stats/pages"],
    getPreReceiveEnvironment: [
      "GET /admin/pre-receive-environments/{pre_receive_environment_id}",
    ],
    getPreReceiveHook: ["GET /admin/pre-receive-hooks/{pre_receive_hook_id}"],
    getPreReceiveHookForOrg: [
      "GET /orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}",
    ],
    getPreReceiveHookForRepo: [
      "GET /repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}",
    ],
    getProvisioningInformationForEnterpriseGroup: [
      "GET /scim/v2/enterprises/{enterprise}/Groups/{scim_group_id}",
    ],
    getProvisioningInformationForEnterpriseUser: [
      "GET /scim/v2/enterprises/{enterprise}/Users/{scim_user_id}",
    ],
    getPullRequestStats: ["GET /enterprise/stats/pulls"],
    getRepoStats: ["GET /enterprise/stats/repos"],
    getSettings: ["GET {origin}/setup/api/settings"],
    getUserStats: ["GET /enterprise/stats/users"],
    listGlobalWebhooks: ["GET /admin/hooks"],
    listLabelsForSelfHostedRunnerForEnterprise: [
      "GET /enterprises/{enterprise}/actions/runners/{runner_id}/labels",
    ],
    listPersonalAccessTokens: ["GET /admin/tokens"],
    listPreReceiveEnvironments: ["GET /admin/pre-receive-environments"],
    listPreReceiveHooks: ["GET /admin/pre-receive-hooks"],
    listPreReceiveHooksForOrg: ["GET /orgs/{org}/pre-receive-hooks"],
    listPreReceiveHooksForRepo: ["GET /repos/{owner}/{repo}/pre-receive-hooks"],
    listProvisionedGroupsEnterprise: [
      "GET /scim/v2/enterprises/{enterprise}/Groups",
    ],
    listProvisionedIdentitiesEnterprise: [
      "GET /scim/v2/enterprises/{enterprise}/Users",
    ],
    listPublicKeys: ["GET /admin/keys"],
    listSelectedOrganizationsEnabledGithubActionsEnterprise: [
      "GET /enterprises/{enterprise}/actions/permissions/organizations",
    ],
    pingGlobalWebhook: ["POST /admin/hooks/{hook_id}/pings"],
    promoteUserToBeSiteAdministrator: ["PUT /users/{username}/site_admin"],
    provisionAndInviteEnterpriseGroup: [
      "POST /scim/v2/enterprises/{enterprise}/Groups",
    ],
    provisionAndInviteEnterpriseUser: [
      "POST /scim/v2/enterprises/{enterprise}/Users",
    ],
    removeAllCustomLabelsFromSelfHostedRunnerForEnterprise: [
      "DELETE /enterprises/{enterprise}/actions/runners/{runner_id}/labels",
    ],
    removeAnnouncement: ["DELETE /enterprise/announcement"],
    removeAuthorizedSshKey: [
      "DELETE {origin}/setup/api/settings/authorized-keys",
    ],
    removeCustomLabelFromSelfHostedRunnerForEnterprise: [
      "DELETE /enterprises/{enterprise}/actions/runners/{runner_id}/labels/{name}",
    ],
    removePreReceiveHookEnforcementForOrg: [
      "DELETE /orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}",
    ],
    removePreReceiveHookEnforcementForRepo: [
      "DELETE /repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}",
    ],
    setAllowedActionsEnterprise: [
      "PUT /enterprises/{enterprise}/actions/permissions/selected-actions",
    ],
    setAnnouncement: ["PATCH /enterprise/announcement"],
    setCustomLabelsForSelfHostedRunnerForEnterprise: [
      "PUT /enterprises/{enterprise}/actions/runners/{runner_id}/labels",
    ],
    setGithubActionsPermissionsEnterprise: [
      "PUT /enterprises/{enterprise}/actions/permissions",
    ],
    setInformationForProvisionedEnterpriseGroup: [
      "PUT /scim/v2/enterprises/{enterprise}/Groups/{scim_group_id}",
    ],
    setInformationForProvisionedEnterpriseUser: [
      "PUT /scim/v2/enterprises/{enterprise}/Users/{scim_user_id}",
    ],
    setSelectedOrganizationsEnabledGithubActionsEnterprise: [
      "PUT /enterprises/{enterprise}/actions/permissions/organizations",
    ],
    setSettings: ["PUT {origin}/setup/api/settings"],
    startConfigurationProcess: ["POST {origin}/setup/api/configure"],
    startPreReceiveEnvironmentDownload: [
      "POST /admin/pre-receive-environments/{pre_receive_environment_id}/downloads",
    ],
    suspendUser: ["PUT /users/{username}/suspended"],
    syncLdapMappingForTeam: ["POST /admin/ldap/teams/{team_id}/sync"],
    syncLdapMappingForUser: ["POST /admin/ldap/users/{username}/sync"],
    unsuspendUser: ["DELETE /users/{username}/suspended"],
    updateAttributeForEnterpriseGroup: [
      "PATCH /scim/v2/enterprises/{enterprise}/Groups/{scim_group_id}",
    ],
    updateAttributeForEnterpriseUser: [
      "PATCH /scim/v2/enterprises/{enterprise}/Users/{scim_user_id}",
    ],
    updateGlobalWebhook: ["PATCH /admin/hooks/{hook_id}"],
    updateLdapMappingForTeam: ["PATCH /admin/ldap/teams/{team_id}/mapping"],
    updateLdapMappingForUser: ["PATCH /admin/ldap/users/{username}/mapping"],
    updateOrgName: ["PATCH /admin/organizations/{org}"],
    updatePreReceiveEnvironment: [
      "PATCH /admin/pre-receive-environments/{pre_receive_environment_id}",
    ],
    updatePreReceiveHook: [
      "PATCH /admin/pre-receive-hooks/{pre_receive_hook_id}",
    ],
    updatePreReceiveHookEnforcementForOrg: [
      "PATCH /orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}",
    ],
    updatePreReceiveHookEnforcementForRepo: [
      "PATCH /repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}",
    ],
    updateUsernameForUser: ["PATCH /admin/users/{username}"],
    upgradeLicense: ["POST {origin}/setup/api/upgrade"],
  },
};

export default Endpoints;
