import { EndpointsDefaultsAndDecorations } from "../types";
const Endpoints: EndpointsDefaultsAndDecorations = {
  actions: {
    addCustomLabelsToSelfHostedRunnerForOrg: [
      "POST /orgs/{org}/actions/runners/{runner_id}/labels",
    ],
    addCustomLabelsToSelfHostedRunnerForRepo: [
      "POST /repos/{owner}/{repo}/actions/runners/{runner_id}/labels",
    ],
    addSelectedRepoToOrgSecret: [
      "PUT /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}",
    ],
    cancelWorkflowRun: [
      "POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel",
    ],
    createOrUpdateEnvironmentSecret: [
      "PUT /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}",
    ],
    createOrUpdateOrgSecret: ["PUT /orgs/{org}/actions/secrets/{secret_name}"],
    createOrUpdateRepoSecret: [
      "PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}",
    ],
    createRegistrationTokenForOrg: [
      "POST /orgs/{org}/actions/runners/registration-token",
    ],
    createRegistrationTokenForRepo: [
      "POST /repos/{owner}/{repo}/actions/runners/registration-token",
    ],
    createRemoveTokenForOrg: ["POST /orgs/{org}/actions/runners/remove-token"],
    createRemoveTokenForRepo: [
      "POST /repos/{owner}/{repo}/actions/runners/remove-token",
    ],
    createWorkflowDispatch: [
      "POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches",
    ],
    deleteArtifact: [
      "DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}",
    ],
    deleteEnvironmentSecret: [
      "DELETE /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}",
    ],
    deleteOrgSecret: ["DELETE /orgs/{org}/actions/secrets/{secret_name}"],
    deleteRepoSecret: [
      "DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}",
    ],
    deleteSelfHostedRunnerFromOrg: [
      "DELETE /orgs/{org}/actions/runners/{runner_id}",
    ],
    deleteSelfHostedRunnerFromRepo: [
      "DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}",
    ],
    deleteWorkflowRun: ["DELETE /repos/{owner}/{repo}/actions/runs/{run_id}"],
    deleteWorkflowRunLogs: [
      "DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs",
    ],
    disableSelectedRepositoryGithubActionsOrganization: [
      "DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}",
    ],
    disableWorkflow: [
      "PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable",
    ],
    downloadArtifact: [
      "GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}",
    ],
    downloadJobLogsForWorkflowRun: [
      "GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs",
    ],
    downloadWorkflowRunAttemptLogs: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs",
    ],
    downloadWorkflowRunLogs: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs",
    ],
    enableSelectedRepositoryGithubActionsOrganization: [
      "PUT /orgs/{org}/actions/permissions/repositories/{repository_id}",
    ],
    enableWorkflow: [
      "PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable",
    ],
    getActionsCacheUsage: ["GET /repos/{owner}/{repo}/actions/cache/usage"],
    getActionsCacheUsageByRepoForOrg: [
      "GET /orgs/{org}/actions/cache/usage-by-repository",
    ],
    getActionsCacheUsageForEnterprise: [
      "GET /enterprises/{enterprise}/actions/cache/usage",
    ],
    getActionsCacheUsageForOrg: ["GET /orgs/{org}/actions/cache/usage"],
    getActionsCacheUsagePolicy: [
      "GET /repos/{owner}/{repo}/actions/cache/usage-policy",
    ],
    getActionsCacheUsagePolicyForEnterprise: [
      "GET /enterprises/{enterprise}/actions/cache/usage-policy",
    ],
    getAllowedActionsOrganization: [
      "GET /orgs/{org}/actions/permissions/selected-actions",
    ],
    getAllowedActionsRepository: [
      "GET /repos/{owner}/{repo}/actions/permissions/selected-actions",
    ],
    getArtifact: ["GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"],
    getEnvironmentPublicKey: [
      "GET /repositories/{repository_id}/environments/{environment_name}/secrets/public-key",
    ],
    getEnvironmentSecret: [
      "GET /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}",
    ],
    getGithubActionsDefaultWorkflowPermissionsOrganization: [
      "GET /orgs/{org}/actions/permissions/workflow",
    ],
    getGithubActionsPermissionsOrganization: [
      "GET /orgs/{org}/actions/permissions",
    ],
    getGithubActionsPermissionsRepository: [
      "GET /repos/{owner}/{repo}/actions/permissions",
    ],
    getJobForWorkflowRun: ["GET /repos/{owner}/{repo}/actions/jobs/{job_id}"],
    getOrgPublicKey: ["GET /orgs/{org}/actions/secrets/public-key"],
    getOrgSecret: ["GET /orgs/{org}/actions/secrets/{secret_name}"],
    getPendingDeploymentsForRun: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments",
    ],
    getRepoPublicKey: ["GET /repos/{owner}/{repo}/actions/secrets/public-key"],
    getRepoSecret: ["GET /repos/{owner}/{repo}/actions/secrets/{secret_name}"],
    getReviewsForRun: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/approvals",
    ],
    getSelfHostedRunnerForOrg: ["GET /orgs/{org}/actions/runners/{runner_id}"],
    getSelfHostedRunnerForRepo: [
      "GET /repos/{owner}/{repo}/actions/runners/{runner_id}",
    ],
    getWorkflow: ["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}"],
    getWorkflowAccessToRepository: [
      "GET /repos/{owner}/{repo}/actions/permissions/access",
    ],
    getWorkflowRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}"],
    getWorkflowRunAttempt: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}",
    ],
    listArtifactsForRepo: ["GET /repos/{owner}/{repo}/actions/artifacts"],
    listEnvironmentSecrets: [
      "GET /repositories/{repository_id}/environments/{environment_name}/secrets",
    ],
    listJobsForWorkflowRun: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs",
    ],
    listJobsForWorkflowRunAttempt: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs",
    ],
    listLabelsForSelfHostedRunnerForOrg: [
      "GET /orgs/{org}/actions/runners/{runner_id}/labels",
    ],
    listLabelsForSelfHostedRunnerForRepo: [
      "GET /repos/{owner}/{repo}/actions/runners/{runner_id}/labels",
    ],
    listOrgSecrets: ["GET /orgs/{org}/actions/secrets"],
    listRepoSecrets: ["GET /repos/{owner}/{repo}/actions/secrets"],
    listRepoWorkflows: ["GET /repos/{owner}/{repo}/actions/workflows"],
    listRunnerApplicationsForOrg: ["GET /orgs/{org}/actions/runners/downloads"],
    listRunnerApplicationsForRepo: [
      "GET /repos/{owner}/{repo}/actions/runners/downloads",
    ],
    listSelectedReposForOrgSecret: [
      "GET /orgs/{org}/actions/secrets/{secret_name}/repositories",
    ],
    listSelectedRepositoriesEnabledGithubActionsOrganization: [
      "GET /orgs/{org}/actions/permissions/repositories",
    ],
    listSelfHostedRunnersForOrg: ["GET /orgs/{org}/actions/runners"],
    listSelfHostedRunnersForRepo: ["GET /repos/{owner}/{repo}/actions/runners"],
    listWorkflowRunArtifacts: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts",
    ],
    listWorkflowRuns: [
      "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs",
    ],
    listWorkflowRunsForRepo: ["GET /repos/{owner}/{repo}/actions/runs"],
    reRunJobForWorkflowRun: [
      "POST /repos/{owner}/{repo}/actions/jobs/{job_id}/rerun",
    ],
    reRunWorkflow: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun"],
    reRunWorkflowFailedJobs: [
      "POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun-failed-jobs",
    ],
    removeAllCustomLabelsFromSelfHostedRunnerForOrg: [
      "DELETE /orgs/{org}/actions/runners/{runner_id}/labels",
    ],
    removeAllCustomLabelsFromSelfHostedRunnerForRepo: [
      "DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels",
    ],
    removeCustomLabelFromSelfHostedRunnerForOrg: [
      "DELETE /orgs/{org}/actions/runners/{runner_id}/labels/{name}",
    ],
    removeCustomLabelFromSelfHostedRunnerForRepo: [
      "DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels/{name}",
    ],
    removeSelectedRepoFromOrgSecret: [
      "DELETE /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}",
    ],
    reviewPendingDeploymentsForRun: [
      "POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments",
    ],
    setActionsCacheUsagePolicy: [
      "PATCH /repos/{owner}/{repo}/actions/cache/usage-policy",
    ],
    setActionsCacheUsagePolicyForEnterprise: [
      "PATCH /enterprises/{enterprise}/actions/cache/usage-policy",
    ],
    setAllowedActionsOrganization: [
      "PUT /orgs/{org}/actions/permissions/selected-actions",
    ],
    setAllowedActionsRepository: [
      "PUT /repos/{owner}/{repo}/actions/permissions/selected-actions",
    ],
    setCustomLabelsForSelfHostedRunnerForOrg: [
      "PUT /orgs/{org}/actions/runners/{runner_id}/labels",
    ],
    setCustomLabelsForSelfHostedRunnerForRepo: [
      "PUT /repos/{owner}/{repo}/actions/runners/{runner_id}/labels",
    ],
    setGithubActionsDefaultWorkflowPermissionsOrganization: [
      "PUT /orgs/{org}/actions/permissions/workflow",
    ],
    setGithubActionsPermissionsOrganization: [
      "PUT /orgs/{org}/actions/permissions",
    ],
    setGithubActionsPermissionsRepository: [
      "PUT /repos/{owner}/{repo}/actions/permissions",
    ],
    setSelectedReposForOrgSecret: [
      "PUT /orgs/{org}/actions/secrets/{secret_name}/repositories",
    ],
    setSelectedRepositoriesEnabledGithubActionsOrganization: [
      "PUT /orgs/{org}/actions/permissions/repositories",
    ],
    setWorkflowAccessToRepository: [
      "PUT /repos/{owner}/{repo}/actions/permissions/access",
    ],
  },
  activity: {
    checkRepoIsStarredByAuthenticatedUser: ["GET /user/starred/{owner}/{repo}"],
    deleteRepoSubscription: ["DELETE /repos/{owner}/{repo}/subscription"],
    deleteThreadSubscription: [
      "DELETE /notifications/threads/{thread_id}/subscription",
    ],
    getFeeds: ["GET /feeds"],
    getRepoSubscription: ["GET /repos/{owner}/{repo}/subscription"],
    getThread: ["GET /notifications/threads/{thread_id}"],
    getThreadSubscriptionForAuthenticatedUser: [
      "GET /notifications/threads/{thread_id}/subscription",
    ],
    listEventsForAuthenticatedUser: ["GET /users/{username}/events"],
    listNotificationsForAuthenticatedUser: ["GET /notifications"],
    listOrgEventsForAuthenticatedUser: [
      "GET /users/{username}/events/orgs/{org}",
    ],
    listPublicEvents: ["GET /events"],
    listPublicEventsForRepoNetwork: ["GET /networks/{owner}/{repo}/events"],
    listPublicEventsForUser: ["GET /users/{username}/events/public"],
    listPublicOrgEvents: ["GET /orgs/{org}/events"],
    listReceivedEventsForUser: ["GET /users/{username}/received_events"],
    listReceivedPublicEventsForUser: [
      "GET /users/{username}/received_events/public",
    ],
    listRepoEvents: ["GET /repos/{owner}/{repo}/events"],
    listRepoNotificationsForAuthenticatedUser: [
      "GET /repos/{owner}/{repo}/notifications",
    ],
    listReposStarredByAuthenticatedUser: ["GET /user/starred"],
    listReposStarredByUser: ["GET /users/{username}/starred"],
    listReposWatchedByUser: ["GET /users/{username}/subscriptions"],
    listStargazersForRepo: ["GET /repos/{owner}/{repo}/stargazers"],
    listWatchedReposForAuthenticatedUser: ["GET /user/subscriptions"],
    listWatchersForRepo: ["GET /repos/{owner}/{repo}/subscribers"],
    markNotificationsAsRead: ["PUT /notifications"],
    markRepoNotificationsAsRead: ["PUT /repos/{owner}/{repo}/notifications"],
    markThreadAsRead: ["PATCH /notifications/threads/{thread_id}"],
    setRepoSubscription: ["PUT /repos/{owner}/{repo}/subscription"],
    setThreadSubscription: [
      "PUT /notifications/threads/{thread_id}/subscription",
    ],
    starRepoForAuthenticatedUser: ["PUT /user/starred/{owner}/{repo}"],
    unstarRepoForAuthenticatedUser: ["DELETE /user/starred/{owner}/{repo}"],
  },
  apps: {
    addRepoToInstallation: [
      "PUT /user/installations/{installation_id}/repositories/{repository_id}",
      {},
      { renamed: ["apps", "addRepoToInstallationForAuthenticatedUser"] },
    ],
    addRepoToInstallationForAuthenticatedUser: [
      "PUT /user/installations/{installation_id}/repositories/{repository_id}",
    ],
    checkAuthorization: [
      "GET /applications/{client_id}/tokens/{access_token}",
      {},
      {
        deprecated:
          "octokit.scim.checkAuthorization() is deprecated, see https://docs.github.com/enterprise-server@3.3/rest/reference/apps#check-an-authorization",
      },
    ],
    checkToken: ["POST /applications/{client_id}/token"],
    createContentAttachment: [
      "POST /content_references/{content_reference_id}/attachments",
      { mediaType: { previews: ["corsair"] } },
    ],
    createContentAttachmentForRepo: [
      "POST /repos/{owner}/{repo}/content_references/{content_reference_id}/attachments",
    ],
    createFromManifest: ["POST /app-manifests/{code}/conversions"],
    createInstallationAccessToken: [
      "POST /app/installations/{installation_id}/access_tokens",
    ],
    deleteAuthorization: ["DELETE /applications/{client_id}/grant"],
    deleteInstallation: ["DELETE /app/installations/{installation_id}"],
    deleteToken: ["DELETE /applications/{client_id}/token"],
    getAuthenticated: ["GET /app"],
    getBySlug: ["GET /apps/{app_slug}"],
    getInstallation: ["GET /app/installations/{installation_id}"],
    getOrgInstallation: ["GET /orgs/{org}/installation"],
    getRepoInstallation: ["GET /repos/{owner}/{repo}/installation"],
    getUserInstallation: ["GET /users/{username}/installation"],
    getWebhookConfigForApp: ["GET /app/hook/config"],
    getWebhookDelivery: ["GET /app/hook/deliveries/{delivery_id}"],
    listInstallationReposForAuthenticatedUser: [
      "GET /user/installations/{installation_id}/repositories",
    ],
    listInstallations: ["GET /app/installations"],
    listInstallationsForAuthenticatedUser: ["GET /user/installations"],
    listReposAccessibleToInstallation: ["GET /installation/repositories"],
    listWebhookDeliveries: ["GET /app/hook/deliveries"],
    redeliverWebhookDelivery: [
      "POST /app/hook/deliveries/{delivery_id}/attempts",
    ],
    removeRepoFromInstallation: [
      "DELETE /user/installations/{installation_id}/repositories/{repository_id}",
      {},
      { renamed: ["apps", "removeRepoFromInstallationForAuthenticatedUser"] },
    ],
    removeRepoFromInstallationForAuthenticatedUser: [
      "DELETE /user/installations/{installation_id}/repositories/{repository_id}",
    ],
    resetAuthorization: [
      "POST /applications/{client_id}/tokens/{access_token}",
      {},
      {
        deprecated:
          "octokit.scim.resetAuthorization() is deprecated, see https://docs.github.com/enterprise-server@3.3/rest/reference/apps#reset-an-authorization",
      },
    ],
    resetToken: ["PATCH /applications/{client_id}/token"],
    revokeAuthorizationForApplication: [
      "DELETE /applications/{client_id}/tokens/{access_token}",
      {},
      {
        deprecated:
          "octokit.scim.revokeAuthorizationForApplication() is deprecated, see https://docs.github.com/enterprise-server@3.3/rest/reference/apps#revoke-an-authorization-for-an-application",
      },
    ],
    revokeGrantForApplication: [
      "DELETE /applications/{client_id}/grants/{access_token}",
      {},
      {
        deprecated:
          "octokit.scim.revokeGrantForApplication() is deprecated, see https://docs.github.com/enterprise-server@3.3/rest/reference/apps#revoke-a-grant-for-an-application",
      },
    ],
    revokeInstallationAccessToken: ["DELETE /installation/token"],
    scopeToken: ["POST /applications/{client_id}/token/scoped"],
    suspendInstallation: ["PUT /app/installations/{installation_id}/suspended"],
    unsuspendInstallation: [
      "DELETE /app/installations/{installation_id}/suspended",
    ],
    updateWebhookConfigForApp: ["PATCH /app/hook/config"],
  },
  billing: {
    getGithubAdvancedSecurityBillingGhe: [
      "GET /enterprises/{enterprise}/settings/billing/advanced-security",
    ],
    getGithubAdvancedSecurityBillingOrg: [
      "GET /orgs/{org}/settings/billing/advanced-security",
    ],
  },
  checks: {
    create: ["POST /repos/{owner}/{repo}/check-runs"],
    createSuite: ["POST /repos/{owner}/{repo}/check-suites"],
    get: ["GET /repos/{owner}/{repo}/check-runs/{check_run_id}"],
    getSuite: ["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}"],
    listAnnotations: [
      "GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations",
    ],
    listForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/check-runs"],
    listForSuite: [
      "GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs",
    ],
    listSuitesForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/check-suites"],
    rerequestRun: [
      "POST /repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest",
    ],
    rerequestSuite: [
      "POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest",
    ],
    setSuitesPreferences: [
      "PATCH /repos/{owner}/{repo}/check-suites/preferences",
    ],
    update: ["PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}"],
  },
  codeScanning: {
    deleteAnalysis: [
      "DELETE /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}{?confirm_delete}",
    ],
    getAlert: ["GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}"],
    getAnalysis: [
      "GET /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}",
    ],
    getSarif: ["GET /repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}"],
    listAlertInstances: [
      "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances",
    ],
    listAlertsForOrg: ["GET /orgs/{org}/code-scanning/alerts"],
    listAlertsForRepo: ["GET /repos/{owner}/{repo}/code-scanning/alerts"],
    listAlertsInstances: [
      "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances",
      {},
      { renamed: ["codeScanning", "listAlertInstances"] },
    ],
    listRecentAnalyses: ["GET /repos/{owner}/{repo}/code-scanning/analyses"],
    updateAlert: [
      "PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}",
    ],
    uploadSarif: ["POST /repos/{owner}/{repo}/code-scanning/sarifs"],
  },
  codesOfConduct: {
    getAllCodesOfConduct: ["GET /codes_of_conduct"],
    getConductCode: ["GET /codes_of_conduct/{key}"],
    getForRepo: [
      "GET /repos/{owner}/{repo}/community/code_of_conduct",
      { mediaType: { previews: ["scarlet-witch"] } },
      {
        deprecated:
          "octokit.scim.getForRepo() is deprecated, see https://docs.github.com/rest/reference/codes-of-conduct#get-the-code-of-conduct-for-a-repository",
      },
    ],
  },
  dependabot: {
    addSelectedRepoToOrgSecret: [
      "PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}",
    ],
    createOrUpdateOrgSecret: [
      "PUT /orgs/{org}/dependabot/secrets/{secret_name}",
    ],
    createOrUpdateRepoSecret: [
      "PUT /repos/{owner}/{repo}/dependabot/secrets/{secret_name}",
    ],
    deleteOrgSecret: ["DELETE /orgs/{org}/dependabot/secrets/{secret_name}"],
    deleteRepoSecret: [
      "DELETE /repos/{owner}/{repo}/dependabot/secrets/{secret_name}",
    ],
    getOrgPublicKey: ["GET /orgs/{org}/dependabot/secrets/public-key"],
    getOrgSecret: ["GET /orgs/{org}/dependabot/secrets/{secret_name}"],
    getRepoPublicKey: [
      "GET /repos/{owner}/{repo}/dependabot/secrets/public-key",
    ],
    getRepoSecret: [
      "GET /repos/{owner}/{repo}/dependabot/secrets/{secret_name}",
    ],
    listOrgSecrets: ["GET /orgs/{org}/dependabot/secrets"],
    listRepoSecrets: ["GET /repos/{owner}/{repo}/dependabot/secrets"],
    listSelectedReposForOrgSecret: [
      "GET /orgs/{org}/dependabot/secrets/{secret_name}/repositories",
    ],
    removeSelectedRepoFromOrgSecret: [
      "DELETE /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}",
    ],
    setSelectedReposForOrgSecret: [
      "PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories",
    ],
  },
  emojis: { get: ["GET /emojis"] },
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
    deleteUser: ["DELETE /admin/users/{username}"],
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
    listPublicKeys: ["GET /admin/keys"],
    listSelectedOrganizationsEnabledGithubActionsEnterprise: [
      "GET /enterprises/{enterprise}/actions/permissions/organizations",
    ],
    pingGlobalWebhook: ["POST /admin/hooks/{hook_id}/pings"],
    promoteUserToBeSiteAdministrator: ["PUT /users/{username}/site_admin"],
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
  gists: {
    checkIsStarred: ["GET /gists/{gist_id}/star"],
    create: ["POST /gists"],
    createComment: ["POST /gists/{gist_id}/comments"],
    delete: ["DELETE /gists/{gist_id}"],
    deleteComment: ["DELETE /gists/{gist_id}/comments/{comment_id}"],
    fork: ["POST /gists/{gist_id}/forks"],
    get: ["GET /gists/{gist_id}"],
    getComment: ["GET /gists/{gist_id}/comments/{comment_id}"],
    getRevision: ["GET /gists/{gist_id}/{sha}"],
    list: ["GET /gists"],
    listComments: ["GET /gists/{gist_id}/comments"],
    listCommits: ["GET /gists/{gist_id}/commits"],
    listForUser: ["GET /users/{username}/gists"],
    listForks: ["GET /gists/{gist_id}/forks"],
    listPublic: ["GET /gists/public"],
    listStarred: ["GET /gists/starred"],
    star: ["PUT /gists/{gist_id}/star"],
    unstar: ["DELETE /gists/{gist_id}/star"],
    update: ["PATCH /gists/{gist_id}"],
    updateComment: ["PATCH /gists/{gist_id}/comments/{comment_id}"],
  },
  git: {
    createBlob: ["POST /repos/{owner}/{repo}/git/blobs"],
    createCommit: ["POST /repos/{owner}/{repo}/git/commits"],
    createRef: ["POST /repos/{owner}/{repo}/git/refs"],
    createTag: ["POST /repos/{owner}/{repo}/git/tags"],
    createTree: ["POST /repos/{owner}/{repo}/git/trees"],
    deleteRef: ["DELETE /repos/{owner}/{repo}/git/refs/{ref}"],
    getBlob: ["GET /repos/{owner}/{repo}/git/blobs/{file_sha}"],
    getCommit: ["GET /repos/{owner}/{repo}/git/commits/{commit_sha}"],
    getRef: ["GET /repos/{owner}/{repo}/git/ref/{ref}"],
    getTag: ["GET /repos/{owner}/{repo}/git/tags/{tag_sha}"],
    getTree: ["GET /repos/{owner}/{repo}/git/trees/{tree_sha}"],
    listMatchingRefs: ["GET /repos/{owner}/{repo}/git/matching-refs/{ref}"],
    updateRef: ["PATCH /repos/{owner}/{repo}/git/refs/{ref}"],
  },
  gitignore: {
    getAllTemplates: ["GET /gitignore/templates"],
    getTemplate: ["GET /gitignore/templates/{name}"],
  },
  issues: {
    addAssignees: [
      "POST /repos/{owner}/{repo}/issues/{issue_number}/assignees",
    ],
    addLabels: ["POST /repos/{owner}/{repo}/issues/{issue_number}/labels"],
    checkUserCanBeAssigned: ["GET /repos/{owner}/{repo}/assignees/{assignee}"],
    create: ["POST /repos/{owner}/{repo}/issues"],
    createComment: [
      "POST /repos/{owner}/{repo}/issues/{issue_number}/comments",
    ],
    createLabel: ["POST /repos/{owner}/{repo}/labels"],
    createMilestone: ["POST /repos/{owner}/{repo}/milestones"],
    deleteComment: [
      "DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}",
    ],
    deleteLabel: ["DELETE /repos/{owner}/{repo}/labels/{name}"],
    deleteMilestone: [
      "DELETE /repos/{owner}/{repo}/milestones/{milestone_number}",
    ],
    get: ["GET /repos/{owner}/{repo}/issues/{issue_number}"],
    getComment: ["GET /repos/{owner}/{repo}/issues/comments/{comment_id}"],
    getEvent: ["GET /repos/{owner}/{repo}/issues/events/{event_id}"],
    getLabel: ["GET /repos/{owner}/{repo}/labels/{name}"],
    getMilestone: ["GET /repos/{owner}/{repo}/milestones/{milestone_number}"],
    list: ["GET /issues"],
    listAssignees: ["GET /repos/{owner}/{repo}/assignees"],
    listComments: ["GET /repos/{owner}/{repo}/issues/{issue_number}/comments"],
    listCommentsForRepo: ["GET /repos/{owner}/{repo}/issues/comments"],
    listEvents: ["GET /repos/{owner}/{repo}/issues/{issue_number}/events"],
    listEventsForRepo: ["GET /repos/{owner}/{repo}/issues/events"],
    listEventsForTimeline: [
      "GET /repos/{owner}/{repo}/issues/{issue_number}/timeline",
    ],
    listForAuthenticatedUser: ["GET /user/issues"],
    listForOrg: ["GET /orgs/{org}/issues"],
    listForRepo: ["GET /repos/{owner}/{repo}/issues"],
    listLabelsForMilestone: [
      "GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels",
    ],
    listLabelsForRepo: ["GET /repos/{owner}/{repo}/labels"],
    listLabelsOnIssue: [
      "GET /repos/{owner}/{repo}/issues/{issue_number}/labels",
    ],
    listMilestones: ["GET /repos/{owner}/{repo}/milestones"],
    lock: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/lock"],
    removeAllLabels: [
      "DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels",
    ],
    removeAssignees: [
      "DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees",
    ],
    removeLabel: [
      "DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}",
    ],
    setLabels: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/labels"],
    unlock: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock"],
    update: ["PATCH /repos/{owner}/{repo}/issues/{issue_number}"],
    updateComment: ["PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}"],
    updateLabel: ["PATCH /repos/{owner}/{repo}/labels/{name}"],
    updateMilestone: [
      "PATCH /repos/{owner}/{repo}/milestones/{milestone_number}",
    ],
  },
  licenses: {
    get: ["GET /licenses/{license}"],
    getAllCommonlyUsed: ["GET /licenses"],
    getForRepo: ["GET /repos/{owner}/{repo}/license"],
  },
  markdown: {
    render: ["POST /markdown"],
    renderRaw: [
      "POST /markdown/raw",
      { headers: { "content-type": "text/plain; charset=utf-8" } },
    ],
  },
  meta: {
    get: ["GET /meta"],
    getOctocat: ["GET /octocat"],
    getZen: ["GET /zen"],
    root: ["GET /"],
  },
  migrations: {
    getArchiveForAuthenticatedUser: [
      "GET /user/migrations/{migration_id}/archive",
    ],
    getStatusForOrg: ["GET /orgs/{org}/migrations/{migration_id}"],
    listForAuthenticatedUser: ["GET /user/migrations"],
    listForOrg: ["GET /orgs/{org}/migrations"],
    listReposForAuthenticatedUser: [
      "GET /user/migrations/{migration_id}/repositories",
    ],
    listReposForUser: [
      "GET /user/migrations/{migration_id}/repositories",
      {},
      { renamed: ["migrations", "listReposForAuthenticatedUser"] },
    ],
    startForAuthenticatedUser: ["POST /user/migrations"],
    startForOrg: ["POST /orgs/{org}/migrations"],
  },
  orgs: {
    checkMembershipForUser: ["GET /orgs/{org}/members/{username}"],
    checkPublicMembershipForUser: ["GET /orgs/{org}/public_members/{username}"],
    convertMemberToOutsideCollaborator: [
      "PUT /orgs/{org}/outside_collaborators/{username}",
    ],
    createWebhook: ["POST /orgs/{org}/hooks"],
    deleteWebhook: ["DELETE /orgs/{org}/hooks/{hook_id}"],
    get: ["GET /orgs/{org}"],
    getMembershipForAuthenticatedUser: ["GET /user/memberships/orgs/{org}"],
    getMembershipForUser: ["GET /orgs/{org}/memberships/{username}"],
    getWebhook: ["GET /orgs/{org}/hooks/{hook_id}"],
    getWebhookConfigForOrg: ["GET /orgs/{org}/hooks/{hook_id}/config"],
    getWebhookDelivery: [
      "GET /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}",
    ],
    list: ["GET /organizations"],
    listAppInstallations: ["GET /orgs/{org}/installations"],
    listCustomRoles: ["GET /organizations/{organization_id}/custom_roles"],
    listForAuthenticatedUser: ["GET /user/orgs"],
    listForUser: ["GET /users/{username}/orgs"],
    listMembers: ["GET /orgs/{org}/members"],
    listMembershipsForAuthenticatedUser: ["GET /user/memberships/orgs"],
    listOutsideCollaborators: ["GET /orgs/{org}/outside_collaborators"],
    listPublicMembers: ["GET /orgs/{org}/public_members"],
    listWebhookDeliveries: ["GET /orgs/{org}/hooks/{hook_id}/deliveries"],
    listWebhooks: ["GET /orgs/{org}/hooks"],
    pingWebhook: ["POST /orgs/{org}/hooks/{hook_id}/pings"],
    redeliverWebhookDelivery: [
      "POST /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts",
    ],
    removeMember: ["DELETE /orgs/{org}/members/{username}"],
    removeMembershipForUser: ["DELETE /orgs/{org}/memberships/{username}"],
    removeOutsideCollaborator: [
      "DELETE /orgs/{org}/outside_collaborators/{username}",
    ],
    removePublicMembershipForAuthenticatedUser: [
      "DELETE /orgs/{org}/public_members/{username}",
    ],
    setMembershipForUser: ["PUT /orgs/{org}/memberships/{username}"],
    setPublicMembershipForAuthenticatedUser: [
      "PUT /orgs/{org}/public_members/{username}",
    ],
    update: ["PATCH /orgs/{org}"],
    updateMembershipForAuthenticatedUser: [
      "PATCH /user/memberships/orgs/{org}",
    ],
    updateWebhook: ["PATCH /orgs/{org}/hooks/{hook_id}"],
    updateWebhookConfigForOrg: ["PATCH /orgs/{org}/hooks/{hook_id}/config"],
  },
  projects: {
    addCollaborator: ["PUT /projects/{project_id}/collaborators/{username}"],
    createCard: ["POST /projects/columns/{column_id}/cards"],
    createColumn: ["POST /projects/{project_id}/columns"],
    createForAuthenticatedUser: ["POST /user/projects"],
    createForOrg: ["POST /orgs/{org}/projects"],
    createForRepo: ["POST /repos/{owner}/{repo}/projects"],
    delete: ["DELETE /projects/{project_id}"],
    deleteCard: ["DELETE /projects/columns/cards/{card_id}"],
    deleteColumn: ["DELETE /projects/columns/{column_id}"],
    get: ["GET /projects/{project_id}"],
    getCard: ["GET /projects/columns/cards/{card_id}"],
    getColumn: ["GET /projects/columns/{column_id}"],
    getPermissionForUser: [
      "GET /projects/{project_id}/collaborators/{username}/permission",
    ],
    listCards: ["GET /projects/columns/{column_id}/cards"],
    listCollaborators: ["GET /projects/{project_id}/collaborators"],
    listColumns: ["GET /projects/{project_id}/columns"],
    listForOrg: ["GET /orgs/{org}/projects"],
    listForRepo: ["GET /repos/{owner}/{repo}/projects"],
    listForUser: ["GET /users/{username}/projects"],
    moveCard: ["POST /projects/columns/cards/{card_id}/moves"],
    moveColumn: ["POST /projects/columns/{column_id}/moves"],
    removeCollaborator: [
      "DELETE /projects/{project_id}/collaborators/{username}",
    ],
    update: ["PATCH /projects/{project_id}"],
    updateCard: ["PATCH /projects/columns/cards/{card_id}"],
    updateColumn: ["PATCH /projects/columns/{column_id}"],
  },
  pulls: {
    checkIfMerged: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/merge"],
    create: ["POST /repos/{owner}/{repo}/pulls"],
    createReplyForReviewComment: [
      "POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies",
    ],
    createReview: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],
    createReviewComment: [
      "POST /repos/{owner}/{repo}/pulls/{pull_number}/comments",
    ],
    deletePendingReview: [
      "DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}",
    ],
    deleteReviewComment: [
      "DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}",
    ],
    dismissReview: [
      "PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals",
    ],
    get: ["GET /repos/{owner}/{repo}/pulls/{pull_number}"],
    getReview: [
      "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}",
    ],
    getReviewComment: ["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}"],
    list: ["GET /repos/{owner}/{repo}/pulls"],
    listCommentsForReview: [
      "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments",
    ],
    listCommits: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/commits"],
    listFiles: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/files"],
    listRequestedReviewers: [
      "GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers",
    ],
    listReviewComments: [
      "GET /repos/{owner}/{repo}/pulls/{pull_number}/comments",
    ],
    listReviewCommentsForRepo: ["GET /repos/{owner}/{repo}/pulls/comments"],
    listReviews: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],
    merge: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge"],
    removeRequestedReviewers: [
      "DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers",
    ],
    requestReviewers: [
      "POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers",
    ],
    submitReview: [
      "POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events",
    ],
    update: ["PATCH /repos/{owner}/{repo}/pulls/{pull_number}"],
    updateBranch: [
      "PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch",
    ],
    updateReview: [
      "PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}",
    ],
    updateReviewComment: [
      "PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}",
    ],
  },
  rateLimit: { get: ["GET /rate_limit"] },
  reactions: {
    createForCommitComment: [
      "POST /repos/{owner}/{repo}/comments/{comment_id}/reactions",
    ],
    createForIssue: [
      "POST /repos/{owner}/{repo}/issues/{issue_number}/reactions",
    ],
    createForIssueComment: [
      "POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions",
    ],
    createForPullRequestReviewComment: [
      "POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions",
    ],
    createForRelease: [
      "POST /repos/{owner}/{repo}/releases/{release_id}/reactions",
    ],
    createForTeamDiscussionCommentInOrg: [
      "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions",
    ],
    createForTeamDiscussionCommentLegacy: [
      "POST /teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions",
      {},
      {
        deprecated:
          "octokit.scim.createForTeamDiscussionCommentLegacy() is deprecated, see https://docs.github.com/enterprise-server@3.5/rest/reference/reactions/#create-reaction-for-a-team-discussion-comment-legacy",
      },
    ],
    createForTeamDiscussionInOrg: [
      "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions",
    ],
    createForTeamDiscussionLegacy: [
      "POST /teams/{team_id}/discussions/{discussion_number}/reactions",
      {},
      {
        deprecated:
          "octokit.scim.createForTeamDiscussionLegacy() is deprecated, see https://docs.github.com/enterprise-server@3.5/rest/reference/reactions/#create-reaction-for-a-team-discussion-legacy",
      },
    ],
    deleteForCommitComment: [
      "DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}",
    ],
    deleteForIssue: [
      "DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}",
    ],
    deleteForIssueComment: [
      "DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}",
    ],
    deleteForPullRequestComment: [
      "DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}",
    ],
    deleteForRelease: [
      "DELETE /repos/{owner}/{repo}/releases/{release_id}/reactions/{reaction_id}",
    ],
    deleteForTeamDiscussion: [
      "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}",
    ],
    deleteForTeamDiscussionComment: [
      "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}",
    ],
    deleteLegacy: [
      "DELETE /reactions/{reaction_id}",
      {},
      {
        deprecated:
          "octokit.scim.deleteLegacy() is deprecated, see https://docs.github.com/enterprise-server@3.4/rest/reference/reactions/#delete-a-reaction-legacy",
      },
    ],
    listForCommitComment: [
      "GET /repos/{owner}/{repo}/comments/{comment_id}/reactions",
    ],
    listForIssue: ["GET /repos/{owner}/{repo}/issues/{issue_number}/reactions"],
    listForIssueComment: [
      "GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions",
    ],
    listForPullRequestReviewComment: [
      "GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions",
    ],
    listForRelease: [
      "GET /repos/{owner}/{repo}/releases/{release_id}/reactions",
    ],
    listForTeamDiscussionCommentInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions",
    ],
    listForTeamDiscussionCommentLegacy: [
      "GET /teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions",
      {},
      {
        deprecated:
          "octokit.scim.listForTeamDiscussionCommentLegacy() is deprecated, see https://docs.github.com/enterprise-server@3.5/rest/reference/reactions/#list-reactions-for-a-team-discussion-comment-legacy",
      },
    ],
    listForTeamDiscussionInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions",
    ],
    listForTeamDiscussionLegacy: [
      "GET /teams/{team_id}/discussions/{discussion_number}/reactions",
      {},
      {
        deprecated:
          "octokit.scim.listForTeamDiscussionLegacy() is deprecated, see https://docs.github.com/enterprise-server@3.5/rest/reference/reactions/#list-reactions-for-a-team-discussion-legacy",
      },
    ],
  },
  repos: {
    acceptInvitation: [
      "PATCH /user/repository_invitations/{invitation_id}",
      {},
      { renamed: ["repos", "acceptInvitationForAuthenticatedUser"] },
    ],
    acceptInvitationForAuthenticatedUser: [
      "PATCH /user/repository_invitations/{invitation_id}",
    ],
    addAppAccessRestrictions: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
    ],
    addCollaborator: ["PUT /repos/{owner}/{repo}/collaborators/{username}"],
    addStatusCheckContexts: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
    ],
    addTeamAccessRestrictions: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
    ],
    addUserAccessRestrictions: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
    ],
    checkCollaborator: ["GET /repos/{owner}/{repo}/collaborators/{username}"],
    codeownersErrors: ["GET /repos/{owner}/{repo}/codeowners/errors"],
    compareCommits: ["GET /repos/{owner}/{repo}/compare/{base}...{head}"],
    compareCommitsWithBasehead: [
      "GET /repos/{owner}/{repo}/compare/{basehead}",
    ],
    createAutolink: ["POST /repos/{owner}/{repo}/autolinks"],
    createCommitComment: [
      "POST /repos/{owner}/{repo}/commits/{commit_sha}/comments",
    ],
    createCommitSignatureProtection: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures",
    ],
    createCommitStatus: ["POST /repos/{owner}/{repo}/statuses/{sha}"],
    createDeployKey: ["POST /repos/{owner}/{repo}/keys"],
    createDeployment: ["POST /repos/{owner}/{repo}/deployments"],
    createDeploymentBranchPolicy: [
      "POST /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies",
    ],
    createDeploymentStatus: [
      "POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses",
    ],
    createDispatchEvent: ["POST /repos/{owner}/{repo}/dispatches"],
    createForAuthenticatedUser: ["POST /user/repos"],
    createFork: ["POST /repos/{owner}/{repo}/forks"],
    createInOrg: ["POST /orgs/{org}/repos"],
    createOrUpdateEnvironment: [
      "PUT /repos/{owner}/{repo}/environments/{environment_name}",
    ],
    createOrUpdateFileContents: ["PUT /repos/{owner}/{repo}/contents/{path}"],
    createPagesSite: ["POST /repos/{owner}/{repo}/pages"],
    createRelease: ["POST /repos/{owner}/{repo}/releases"],
    createTagProtection: ["POST /repos/{owner}/{repo}/tags/protection"],
    createUsingTemplate: [
      "POST /repos/{template_owner}/{template_repo}/generate",
    ],
    createWebhook: ["POST /repos/{owner}/{repo}/hooks"],
    declineInvitation: [
      "DELETE /user/repository_invitations/{invitation_id}",
      {},
      { renamed: ["repos", "declineInvitationForAuthenticatedUser"] },
    ],
    declineInvitationForAuthenticatedUser: [
      "DELETE /user/repository_invitations/{invitation_id}",
    ],
    delete: ["DELETE /repos/{owner}/{repo}"],
    deleteAccessRestrictions: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions",
    ],
    deleteAdminBranchProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins",
    ],
    deleteAnEnvironment: [
      "DELETE /repos/{owner}/{repo}/environments/{environment_name}",
    ],
    deleteAutolink: ["DELETE /repos/{owner}/{repo}/autolinks/{autolink_id}"],
    deleteBranchProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection",
    ],
    deleteCommitComment: ["DELETE /repos/{owner}/{repo}/comments/{comment_id}"],
    deleteCommitSignatureProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures",
    ],
    deleteDeployKey: ["DELETE /repos/{owner}/{repo}/keys/{key_id}"],
    deleteDeployment: [
      "DELETE /repos/{owner}/{repo}/deployments/{deployment_id}",
    ],
    deleteDeploymentBranchPolicy: [
      "DELETE /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}",
    ],
    deleteFile: ["DELETE /repos/{owner}/{repo}/contents/{path}"],
    deleteInvitation: [
      "DELETE /repos/{owner}/{repo}/invitations/{invitation_id}",
    ],
    deletePagesSite: ["DELETE /repos/{owner}/{repo}/pages"],
    deletePullRequestReviewProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews",
    ],
    deleteRelease: ["DELETE /repos/{owner}/{repo}/releases/{release_id}"],
    deleteReleaseAsset: [
      "DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}",
    ],
    deleteTagProtection: [
      "DELETE /repos/{owner}/{repo}/tags/protection/{tag_protection_id}",
    ],
    deleteWebhook: ["DELETE /repos/{owner}/{repo}/hooks/{hook_id}"],
    disableLfsForRepo: ["DELETE /repos/{owner}/{repo}/lfs"],
    downloadTarballArchive: ["GET /repos/{owner}/{repo}/tarball/{ref}"],
    downloadZipballArchive: ["GET /repos/{owner}/{repo}/zipball/{ref}"],
    enableLfsForRepo: ["PUT /repos/{owner}/{repo}/lfs"],
    generateReleaseNotes: [
      "POST /repos/{owner}/{repo}/releases/generate-notes",
    ],
    get: ["GET /repos/{owner}/{repo}"],
    getAccessRestrictions: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions",
    ],
    getAdminBranchProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins",
    ],
    getAllEnvironments: ["GET /repos/{owner}/{repo}/environments"],
    getAllStatusCheckContexts: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
    ],
    getAllTopics: ["GET /repos/{owner}/{repo}/topics"],
    getAppsWithAccessToProtectedBranch: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
    ],
    getAutolink: ["GET /repos/{owner}/{repo}/autolinks/{autolink_id}"],
    getBranch: ["GET /repos/{owner}/{repo}/branches/{branch}"],
    getBranchProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection",
    ],
    getCodeFrequencyStats: ["GET /repos/{owner}/{repo}/stats/code_frequency"],
    getCollaboratorPermissionLevel: [
      "GET /repos/{owner}/{repo}/collaborators/{username}/permission",
    ],
    getCombinedStatusForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/status"],
    getCommit: ["GET /repos/{owner}/{repo}/commits/{ref}"],
    getCommitActivityStats: ["GET /repos/{owner}/{repo}/stats/commit_activity"],
    getCommitComment: ["GET /repos/{owner}/{repo}/comments/{comment_id}"],
    getCommitSignatureProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures",
    ],
    getContent: ["GET /repos/{owner}/{repo}/contents/{path}"],
    getContributorsStats: ["GET /repos/{owner}/{repo}/stats/contributors"],
    getDeployKey: ["GET /repos/{owner}/{repo}/keys/{key_id}"],
    getDeployment: ["GET /repos/{owner}/{repo}/deployments/{deployment_id}"],
    getDeploymentBranchPolicy: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}",
    ],
    getDeploymentStatus: [
      "GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}",
    ],
    getEnvironment: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}",
    ],
    getLatestPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/latest"],
    getLatestRelease: ["GET /repos/{owner}/{repo}/releases/latest"],
    getPages: ["GET /repos/{owner}/{repo}/pages"],
    getPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/{build_id}"],
    getParticipationStats: ["GET /repos/{owner}/{repo}/stats/participation"],
    getPullRequestReviewProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews",
    ],
    getPunchCardStats: ["GET /repos/{owner}/{repo}/stats/punch_card"],
    getReadme: ["GET /repos/{owner}/{repo}/readme"],
    getReadmeInDirectory: ["GET /repos/{owner}/{repo}/readme/{dir}"],
    getRelease: ["GET /repos/{owner}/{repo}/releases/{release_id}"],
    getReleaseAsset: ["GET /repos/{owner}/{repo}/releases/assets/{asset_id}"],
    getReleaseByTag: ["GET /repos/{owner}/{repo}/releases/tags/{tag}"],
    getStatusChecksProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks",
    ],
    getTeamsWithAccessToProtectedBranch: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
    ],
    getUsersWithAccessToProtectedBranch: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
    ],
    getWebhook: ["GET /repos/{owner}/{repo}/hooks/{hook_id}"],
    getWebhookConfigForRepo: [
      "GET /repos/{owner}/{repo}/hooks/{hook_id}/config",
    ],
    getWebhookDelivery: [
      "GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}",
    ],
    listAutolinks: ["GET /repos/{owner}/{repo}/autolinks"],
    listBranches: ["GET /repos/{owner}/{repo}/branches"],
    listBranchesForHeadCommit: [
      "GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head",
    ],
    listCacheInfo: ["GET /repos/{owner}/{repo}/replicas/caches"],
    listCollaborators: ["GET /repos/{owner}/{repo}/collaborators"],
    listCommentsForCommit: [
      "GET /repos/{owner}/{repo}/commits/{commit_sha}/comments",
    ],
    listCommitCommentsForRepo: ["GET /repos/{owner}/{repo}/comments"],
    listCommitStatusesForRef: [
      "GET /repos/{owner}/{repo}/commits/{ref}/statuses",
    ],
    listCommits: ["GET /repos/{owner}/{repo}/commits"],
    listContributors: ["GET /repos/{owner}/{repo}/contributors"],
    listDeployKeys: ["GET /repos/{owner}/{repo}/keys"],
    listDeploymentBranchPolicies: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies",
    ],
    listDeploymentStatuses: [
      "GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses",
    ],
    listDeployments: ["GET /repos/{owner}/{repo}/deployments"],
    listForAuthenticatedUser: ["GET /user/repos"],
    listForOrg: ["GET /orgs/{org}/repos"],
    listForUser: ["GET /users/{username}/repos"],
    listForks: ["GET /repos/{owner}/{repo}/forks"],
    listInvitations: ["GET /repos/{owner}/{repo}/invitations"],
    listInvitationsForAuthenticatedUser: ["GET /user/repository_invitations"],
    listLanguages: ["GET /repos/{owner}/{repo}/languages"],
    listPagesBuilds: ["GET /repos/{owner}/{repo}/pages/builds"],
    listPublic: ["GET /repositories"],
    listPullRequestsAssociatedWithCommit: [
      "GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls",
    ],
    listReleaseAssets: [
      "GET /repos/{owner}/{repo}/releases/{release_id}/assets",
    ],
    listReleases: ["GET /repos/{owner}/{repo}/releases"],
    listTagProtection: ["GET /repos/{owner}/{repo}/tags/protection"],
    listTags: ["GET /repos/{owner}/{repo}/tags"],
    listTeams: ["GET /repos/{owner}/{repo}/teams"],
    listWebhookDeliveries: [
      "GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries",
    ],
    listWebhooks: ["GET /repos/{owner}/{repo}/hooks"],
    merge: ["POST /repos/{owner}/{repo}/merges"],
    mergeUpstream: ["POST /repos/{owner}/{repo}/merge-upstream"],
    pingWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/pings"],
    redeliverWebhookDelivery: [
      "POST /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts",
    ],
    removeAppAccessRestrictions: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
    ],
    removeCollaborator: [
      "DELETE /repos/{owner}/{repo}/collaborators/{username}",
    ],
    removeStatusCheckContexts: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
    ],
    removeStatusCheckProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks",
    ],
    removeTeamAccessRestrictions: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
    ],
    removeUserAccessRestrictions: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
    ],
    renameBranch: ["POST /repos/{owner}/{repo}/branches/{branch}/rename"],
    replaceAllTopics: ["PUT /repos/{owner}/{repo}/topics"],
    requestPagesBuild: ["POST /repos/{owner}/{repo}/pages/builds"],
    setAdminBranchProtection: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins",
    ],
    setAppAccessRestrictions: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
    ],
    setStatusCheckContexts: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
    ],
    setTeamAccessRestrictions: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
    ],
    setUserAccessRestrictions: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
    ],
    testPushWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/tests"],
    transfer: ["POST /repos/{owner}/{repo}/transfer"],
    update: ["PATCH /repos/{owner}/{repo}"],
    updateBranchProtection: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection",
    ],
    updateCommitComment: ["PATCH /repos/{owner}/{repo}/comments/{comment_id}"],
    updateDeploymentBranchPolicy: [
      "PUT /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}",
    ],
    updateInformationAboutPagesSite: ["PUT /repos/{owner}/{repo}/pages"],
    updateInvitation: [
      "PATCH /repos/{owner}/{repo}/invitations/{invitation_id}",
    ],
    updatePullRequestReviewProtection: [
      "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews",
    ],
    updateRelease: ["PATCH /repos/{owner}/{repo}/releases/{release_id}"],
    updateReleaseAsset: [
      "PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}",
    ],
    updateStatusCheckProtection: [
      "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks",
    ],
    updateWebhook: ["PATCH /repos/{owner}/{repo}/hooks/{hook_id}"],
    updateWebhookConfigForRepo: [
      "PATCH /repos/{owner}/{repo}/hooks/{hook_id}/config",
    ],
    uploadReleaseAsset: [
      "POST {origin}/repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}",
    ],
  },
  search: {
    code: ["GET /search/code"],
    commits: ["GET /search/commits"],
    issuesAndPullRequests: ["GET /search/issues"],
    labels: ["GET /search/labels"],
    repos: ["GET /search/repositories"],
    topics: ["GET /search/topics"],
    users: ["GET /search/users"],
  },
  secretScanning: {
    getAlert: [
      "GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}",
    ],
    listAlertsForEnterprise: [
      "GET /enterprises/{enterprise}/secret-scanning/alerts",
    ],
    listAlertsForOrg: ["GET /orgs/{org}/secret-scanning/alerts"],
    listAlertsForRepo: ["GET /repos/{owner}/{repo}/secret-scanning/alerts"],
    listLocationsForAlert: [
      "GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations",
    ],
    updateAlert: [
      "PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}",
    ],
  },
  teams: {
    addMemberLegacy: [
      "PUT /teams/{team_id}/members/{username}",
      {},
      {
        deprecated:
          "octokit.scim.addMemberLegacy() is deprecated, see https://docs.github.com/enterprise-server@3.5/rest/reference/teams#add-team-member-legacy",
      },
    ],
    addOrUpdateMembershipForUserInOrg: [
      "PUT /orgs/{org}/teams/{team_slug}/memberships/{username}",
    ],
    addOrUpdateMembershipForUserLegacy: [
      "PUT /teams/{team_id}/memberships/{username}",
      {},
      {
        deprecated:
          "octokit.scim.addOrUpdateMembershipForUserLegacy() is deprecated, see https://docs.github.com/enterprise-server@3.5/rest/reference/teams#add-or-update-team-membership-for-a-user-legacy",
      },
    ],
    addOrUpdateProjectPermissionsInOrg: [
      "PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}",
    ],
    addOrUpdateProjectPermissionsLegacy: [
      "PUT /teams/{team_id}/projects/{project_id}",
      {},
      {
        deprecated:
          "octokit.scim.addOrUpdateProjectPermissionsLegacy() is deprecated, see https://docs.github.com/enterprise-server@3.5/rest/reference/teams/#add-or-update-team-project-permissions-legacy",
      },
    ],
    addOrUpdateRepoPermissionsInOrg: [
      "PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}",
    ],
    addOrUpdateRepoPermissionsLegacy: [
      "PUT /teams/{team_id}/repos/{owner}/{repo}",
      {},
      {
        deprecated:
          "octokit.scim.addOrUpdateRepoPermissionsLegacy() is deprecated, see https://docs.github.com/enterprise-server@3.5/rest/reference/teams/#add-or-update-team-repository-permissions-legacy",
      },
    ],
    checkPermissionsForProjectInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/projects/{project_id}",
    ],
    checkPermissionsForProjectLegacy: [
      "GET /teams/{team_id}/projects/{project_id}",
      {},
      {
        deprecated:
          "octokit.scim.checkPermissionsForProjectLegacy() is deprecated, see https://docs.github.com/enterprise-server@3.5/rest/reference/teams/#check-team-permissions-for-a-project-legacy",
      },
    ],
    checkPermissionsForRepoInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}",
    ],
    checkPermissionsForRepoLegacy: [
      "GET /teams/{team_id}/repos/{owner}/{repo}",
      {},
      {
        deprecated:
          "octokit.scim.checkPermissionsForRepoLegacy() is deprecated, see https://docs.github.com/enterprise-server@3.5/rest/reference/teams/#check-team-permissions-for-a-repository-legacy",
      },
    ],
    create: ["POST /orgs/{org}/teams"],
    createDiscussionCommentInOrg: [
      "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments",
    ],
    createDiscussionCommentLegacy: [
      "POST /teams/{team_id}/discussions/{discussion_number}/comments",
      {},
      {
        deprecated:
          "octokit.scim.createDiscussionCommentLegacy() is deprecated, see https://docs.github.com/enterprise-server@3.5/rest/reference/teams#create-a-discussion-comment-legacy",
      },
    ],
    createDiscussionInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions"],
    createDiscussionLegacy: [
      "POST /teams/{team_id}/discussions",
      {},
      {
        deprecated:
          "octokit.scim.createDiscussionLegacy() is deprecated, see https://docs.github.com/enterprise-server@3.5/rest/reference/teams#create-a-discussion-legacy",
      },
    ],
    deleteDiscussionCommentInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}",
    ],
    deleteDiscussionCommentLegacy: [
      "DELETE /teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}",
      {},
      {
        deprecated:
          "octokit.scim.deleteDiscussionCommentLegacy() is deprecated, see https://docs.github.com/enterprise-server@3.5/rest/reference/teams#delete-a-discussion-comment-legacy",
      },
    ],
    deleteDiscussionInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}",
    ],
    deleteDiscussionLegacy: [
      "DELETE /teams/{team_id}/discussions/{discussion_number}",
      {},
      {
        deprecated:
          "octokit.scim.deleteDiscussionLegacy() is deprecated, see https://docs.github.com/enterprise-server@3.5/rest/reference/teams#delete-a-discussion-legacy",
      },
    ],
    deleteInOrg: ["DELETE /orgs/{org}/teams/{team_slug}"],
    deleteLegacy: [
      "DELETE /teams/{team_id}",
      {},
      {
        deprecated:
          "octokit.scim.deleteLegacy() is deprecated, see https://docs.github.com/enterprise-server@3.5/rest/reference/teams/#delete-a-team-legacy",
      },
    ],
    getByName: ["GET /orgs/{org}/teams/{team_slug}"],
    getDiscussionCommentInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}",
    ],
    getDiscussionCommentLegacy: [
      "GET /teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}",
      {},
      {
        deprecated:
          "octokit.scim.getDiscussionCommentLegacy() is deprecated, see https://docs.github.com/enterprise-server@3.5/rest/reference/teams#get-a-discussion-comment-legacy",
      },
    ],
    getDiscussionInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}",
    ],
    getDiscussionLegacy: [
      "GET /teams/{team_id}/discussions/{discussion_number}",
      {},
      {
        deprecated:
          "octokit.scim.getDiscussionLegacy() is deprecated, see https://docs.github.com/enterprise-server@3.5/rest/reference/teams#get-a-discussion-legacy",
      },
    ],
    getLegacy: [
      "GET /teams/{team_id}",
      {},
      {
        deprecated:
          "octokit.scim.getLegacy() is deprecated, see https://docs.github.com/enterprise-server@3.5/rest/reference/teams/#get-a-team-legacy",
      },
    ],
    getMemberLegacy: [
      "GET /teams/{team_id}/members/{username}",
      {},
      {
        deprecated:
          "octokit.scim.getMemberLegacy() is deprecated, see https://docs.github.com/enterprise-server@3.5/rest/reference/teams#get-team-member-legacy",
      },
    ],
    getMembershipForUserInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/memberships/{username}",
    ],
    getMembershipForUserLegacy: [
      "GET /teams/{team_id}/memberships/{username}",
      {},
      {
        deprecated:
          "octokit.scim.getMembershipForUserLegacy() is deprecated, see https://docs.github.com/enterprise-server@3.5/rest/reference/teams#get-team-membership-for-a-user-legacy",
      },
    ],
    list: ["GET /orgs/{org}/teams"],
    listChildInOrg: ["GET /orgs/{org}/teams/{team_slug}/teams"],
    listChildLegacy: [
      "GET /teams/{team_id}/teams",
      {},
      {
        deprecated:
          "octokit.scim.listChildLegacy() is deprecated, see https://docs.github.com/enterprise-server@3.5/rest/reference/teams/#list-child-teams-legacy",
      },
    ],
    listDiscussionCommentsInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments",
    ],
    listDiscussionCommentsLegacy: [
      "GET /teams/{team_id}/discussions/{discussion_number}/comments",
      {},
      {
        deprecated:
          "octokit.scim.listDiscussionCommentsLegacy() is deprecated, see https://docs.github.com/enterprise-server@3.5/rest/reference/teams#list-discussion-comments-legacy",
      },
    ],
    listDiscussionsInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions"],
    listDiscussionsLegacy: [
      "GET /teams/{team_id}/discussions",
      {},
      {
        deprecated:
          "octokit.scim.listDiscussionsLegacy() is deprecated, see https://docs.github.com/enterprise-server@3.5/rest/reference/teams#list-discussions-legacy",
      },
    ],
    listForAuthenticatedUser: ["GET /user/teams"],
    listMembersInOrg: ["GET /orgs/{org}/teams/{team_slug}/members"],
    listMembersLegacy: [
      "GET /teams/{team_id}/members",
      {},
      {
        deprecated:
          "octokit.scim.listMembersLegacy() is deprecated, see https://docs.github.com/enterprise-server@3.5/rest/reference/teams#list-team-members-legacy",
      },
    ],
    listProjectsInOrg: ["GET /orgs/{org}/teams/{team_slug}/projects"],
    listProjectsLegacy: [
      "GET /teams/{team_id}/projects",
      {},
      {
        deprecated:
          "octokit.scim.listProjectsLegacy() is deprecated, see https://docs.github.com/enterprise-server@3.5/rest/reference/teams/#list-team-projects-legacy",
      },
    ],
    listReposInOrg: ["GET /orgs/{org}/teams/{team_slug}/repos"],
    listReposLegacy: [
      "GET /teams/{team_id}/repos",
      {},
      {
        deprecated:
          "octokit.scim.listReposLegacy() is deprecated, see https://docs.github.com/enterprise-server@3.5/rest/reference/teams/#list-team-repositories-legacy",
      },
    ],
    removeMemberLegacy: [
      "DELETE /teams/{team_id}/members/{username}",
      {},
      {
        deprecated:
          "octokit.scim.removeMemberLegacy() is deprecated, see https://docs.github.com/enterprise-server@3.5/rest/reference/teams#remove-team-member-legacy",
      },
    ],
    removeMembershipForUserInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}",
    ],
    removeMembershipForUserLegacy: [
      "DELETE /teams/{team_id}/memberships/{username}",
      {},
      {
        deprecated:
          "octokit.scim.removeMembershipForUserLegacy() is deprecated, see https://docs.github.com/enterprise-server@3.5/rest/reference/teams#remove-team-membership-for-a-user-legacy",
      },
    ],
    removeProjectInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}",
    ],
    removeProjectLegacy: [
      "DELETE /teams/{team_id}/projects/{project_id}",
      {},
      {
        deprecated:
          "octokit.scim.removeProjectLegacy() is deprecated, see https://docs.github.com/enterprise-server@3.5/rest/reference/teams/#remove-a-project-from-a-team-legacy",
      },
    ],
    removeRepoInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}",
    ],
    removeRepoLegacy: [
      "DELETE /teams/{team_id}/repos/{owner}/{repo}",
      {},
      {
        deprecated:
          "octokit.scim.removeRepoLegacy() is deprecated, see https://docs.github.com/enterprise-server@3.5/rest/reference/teams/#remove-a-repository-from-a-team-legacy",
      },
    ],
    updateDiscussionCommentInOrg: [
      "PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}",
    ],
    updateDiscussionCommentLegacy: [
      "PATCH /teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}",
      {},
      {
        deprecated:
          "octokit.scim.updateDiscussionCommentLegacy() is deprecated, see https://docs.github.com/enterprise-server@3.5/rest/reference/teams#update-a-discussion-comment-legacy",
      },
    ],
    updateDiscussionInOrg: [
      "PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}",
    ],
    updateDiscussionLegacy: [
      "PATCH /teams/{team_id}/discussions/{discussion_number}",
      {},
      {
        deprecated:
          "octokit.scim.updateDiscussionLegacy() is deprecated, see https://docs.github.com/enterprise-server@3.5/rest/reference/teams#update-a-discussion-legacy",
      },
    ],
    updateInOrg: ["PATCH /orgs/{org}/teams/{team_slug}"],
    updateLegacy: [
      "PATCH /teams/{team_id}",
      {},
      {
        deprecated:
          "octokit.scim.updateLegacy() is deprecated, see https://docs.github.com/enterprise-server@3.5/rest/reference/teams/#update-a-team-legacy",
      },
    ],
  },
  users: {
    addEmailForAuthenticated: [
      "POST /user/emails",
      {},
      { renamed: ["users", "addEmailForAuthenticatedUser"] },
    ],
    addEmailForAuthenticatedUser: ["POST /user/emails"],
    checkFollowingForUser: ["GET /users/{username}/following/{target_user}"],
    checkPersonIsFollowedByAuthenticated: ["GET /user/following/{username}"],
    createGpgKeyForAuthenticated: [
      "POST /user/gpg_keys",
      {},
      { renamed: ["users", "createGpgKeyForAuthenticatedUser"] },
    ],
    createGpgKeyForAuthenticatedUser: ["POST /user/gpg_keys"],
    createPublicSshKeyForAuthenticated: [
      "POST /user/keys",
      {},
      { renamed: ["users", "createPublicSshKeyForAuthenticatedUser"] },
    ],
    createPublicSshKeyForAuthenticatedUser: ["POST /user/keys"],
    deleteEmailForAuthenticated: [
      "DELETE /user/emails",
      {},
      { renamed: ["users", "deleteEmailForAuthenticatedUser"] },
    ],
    deleteEmailForAuthenticatedUser: ["DELETE /user/emails"],
    deleteGpgKeyForAuthenticated: [
      "DELETE /user/gpg_keys/{gpg_key_id}",
      {},
      { renamed: ["users", "deleteGpgKeyForAuthenticatedUser"] },
    ],
    deleteGpgKeyForAuthenticatedUser: ["DELETE /user/gpg_keys/{gpg_key_id}"],
    deletePublicSshKeyForAuthenticated: [
      "DELETE /user/keys/{key_id}",
      {},
      { renamed: ["users", "deletePublicSshKeyForAuthenticatedUser"] },
    ],
    deletePublicSshKeyForAuthenticatedUser: ["DELETE /user/keys/{key_id}"],
    follow: ["PUT /user/following/{username}"],
    getAuthenticated: ["GET /user"],
    getByUsername: ["GET /users/{username}"],
    getContextForUser: ["GET /users/{username}/hovercard"],
    getGpgKeyForAuthenticated: [
      "GET /user/gpg_keys/{gpg_key_id}",
      {},
      { renamed: ["users", "getGpgKeyForAuthenticatedUser"] },
    ],
    getGpgKeyForAuthenticatedUser: ["GET /user/gpg_keys/{gpg_key_id}"],
    getPublicSshKeyForAuthenticated: [
      "GET /user/keys/{key_id}",
      {},
      { renamed: ["users", "getPublicSshKeyForAuthenticatedUser"] },
    ],
    getPublicSshKeyForAuthenticatedUser: ["GET /user/keys/{key_id}"],
    list: ["GET /users"],
    listEmailsForAuthenticated: [
      "GET /user/emails",
      {},
      { renamed: ["users", "listEmailsForAuthenticatedUser"] },
    ],
    listEmailsForAuthenticatedUser: ["GET /user/emails"],
    listFollowedByAuthenticated: [
      "GET /user/following",
      {},
      { renamed: ["users", "listFollowedByAuthenticatedUser"] },
    ],
    listFollowedByAuthenticatedUser: ["GET /user/following"],
    listFollowersForAuthenticatedUser: ["GET /user/followers"],
    listFollowersForUser: ["GET /users/{username}/followers"],
    listFollowingForUser: ["GET /users/{username}/following"],
    listGpgKeysForAuthenticated: [
      "GET /user/gpg_keys",
      {},
      { renamed: ["users", "listGpgKeysForAuthenticatedUser"] },
    ],
    listGpgKeysForAuthenticatedUser: ["GET /user/gpg_keys"],
    listGpgKeysForUser: ["GET /users/{username}/gpg_keys"],
    listPublicEmailsForAuthenticated: [
      "GET /user/public_emails",
      {},
      { renamed: ["users", "listPublicEmailsForAuthenticatedUser"] },
    ],
    listPublicEmailsForAuthenticatedUser: ["GET /user/public_emails"],
    listPublicKeysForUser: ["GET /users/{username}/keys"],
    listPublicSshKeysForAuthenticated: [
      "GET /user/keys",
      {},
      { renamed: ["users", "listPublicSshKeysForAuthenticatedUser"] },
    ],
    listPublicSshKeysForAuthenticatedUser: ["GET /user/keys"],
    unfollow: ["DELETE /user/following/{username}"],
    updateAuthenticated: ["PATCH /user"],
  },
};

export default Endpoints;
