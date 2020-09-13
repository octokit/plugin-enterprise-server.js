import { EndpointsDefaultsAndDecorations } from "../types";
const Endpoints: EndpointsDefaultsAndDecorations = {
  activity: {
    checkRepoIsStarredByAuthenticatedUser: ["GET /user/starred/:owner/:repo"],
    checkStarringRepo: [
      "GET /user/starred/:owner/:repo",
      {},
      { renamed: ["activity", "checkRepoIsStarredByAuthenticatedUser"] },
    ],
    deleteRepoSubscription: ["DELETE /repos/:owner/:repo/subscription"],
    deleteThreadSubscription: [
      "DELETE /notifications/threads/:thread_id/subscription",
    ],
    getFeeds: ["GET /feeds"],
    getRepoSubscription: ["GET /repos/:owner/:repo/subscription"],
    getThread: ["GET /notifications/threads/:thread_id"],
    getThreadSubscription: [
      "PUT /notifications",
      {},
      { renamed: ["activity", "getThreadSubscriptionForAuthenticatedUser"] },
    ],
    getThreadSubscriptionForAuthenticatedUser: [
      "GET /notifications/threads/:thread_id/subscription",
    ],
    listEventsForAuthenticatedUser: ["GET /users/:username/events"],
    listEventsForOrg: [
      "GET /users/:username/events/orgs/:org",
      {},
      { renamed: ["activity", "listOrgEventsForAuthenticatedUser"] },
    ],
    listEventsForUser: [
      "GET /users/:username/events",
      {},
      { renamed: ["activity", "listEventsForAuthenticatedUser"] },
    ],
    listFeeds: ["GET /feeds", {}, { renamed: ["activity", "getFeeds"] }],
    listNotifications: [
      "GET /notifications",
      {},
      { renamed: ["activity", "listNotificationsForAuthenticatedUser"] },
    ],
    listNotificationsForAuthenticatedUser: ["GET /notifications"],
    listNotificationsForRepo: [
      "GET /repos/:owner/:repo/notifications",
      {},
      { renamed: ["activity", "listRepoNotificationsForAuthenticatedUser"] },
    ],
    listOrgEventsForAuthenticatedUser: [
      "GET /users/:username/events/orgs/:org",
    ],
    listPublicEvents: ["GET /events"],
    listPublicEventsForOrg: [
      "GET /orgs/:org/events",
      {},
      { renamed: ["activity", "listPublicOrgEvents"] },
    ],
    listPublicEventsForRepoNetwork: ["GET /networks/:owner/:repo/events"],
    listPublicEventsForUser: ["GET /users/:username/events/public"],
    listPublicOrgEvents: ["GET /orgs/:org/events"],
    listReceivedEventsForUser: ["GET /users/:username/received_events"],
    listReceivedPublicEventsForUser: [
      "GET /users/:username/received_events/public",
    ],
    listRepoEvents: ["GET /repos/:owner/:repo/events"],
    listRepoNotificationsForAuthenticatedUser: [
      "GET /repos/:owner/:repo/notifications",
    ],
    listReposStarredByAuthenticatedUser: ["GET /user/starred"],
    listReposStarredByUser: ["GET /users/:username/starred"],
    listReposWatchedByUser: ["GET /users/:username/subscriptions"],
    listStargazersForRepo: ["GET /repos/:owner/:repo/stargazers"],
    listWatchedReposForAuthenticatedUser: ["GET /user/subscriptions"],
    listWatchersForRepo: ["GET /repos/:owner/:repo/subscribers"],
    markAsRead: [
      "PUT /notifications",
      {},
      { renamed: ["activity", "markNotificationsAsRead"] },
    ],
    markNotificationsAsRead: ["PUT /notifications"],
    markNotificationsAsReadForRepo: [
      "PUT /repos/:owner/:repo/notifications",
      {},
      { renamed: ["activity", "markRepoNotificationsAsRead"] },
    ],
    markRepoNotificationsAsRead: ["PUT /repos/:owner/:repo/notifications"],
    markThreadAsRead: ["PATCH /notifications/threads/:thread_id"],
    setRepoSubscription: ["PUT /repos/:owner/:repo/subscription"],
    setThreadSubscription: [
      "PUT /notifications/threads/:thread_id/subscription",
    ],
    starRepo: [
      "PUT /user/starred/:owner/:repo",
      {},
      { renamed: ["activity", "starRepoForAuthenticatedUser"] },
    ],
    starRepoForAuthenticatedUser: ["PUT /user/starred/:owner/:repo"],
    unstarRepo: [
      "DELETE /user/starred/:owner/:repo",
      {},
      { renamed: ["activity", "unstarRepoForAuthenticatedUser"] },
    ],
    unstarRepoForAuthenticatedUser: ["DELETE /user/starred/:owner/:repo"],
  },
  apps: {
    addRepoToInstallation: [
      "PUT /user/installations/:installation_id/repositories/:repository_id",
      {
        headers: { accept: "application/vnd.github.machine-man-preview+json" },
        mediaType: { previews: ["machine-man"] },
      },
    ],
    createContentAttachment: [
      "POST /content_references/:content_reference_id/attachments",
      {
        headers: { accept: "application/vnd.github.corsair-preview+json" },
        mediaType: { previews: ["corsair"] },
      },
    ],
    createFromManifest: [
      "POST /app-manifests/:code/conversions",
      {
        headers: { accept: "application/vnd.github.fury-preview+json" },
        mediaType: { previews: ["fury"] },
      },
    ],
    createInstallationAccessToken: [
      "POST /app/installations/:installation_id/access_tokens",
      {
        headers: { accept: "application/vnd.github.machine-man-preview+json" },
        mediaType: { previews: ["machine-man"] },
      },
    ],
    createInstallationToken: [
      "POST /app/installations/:installation_id/access_tokens",
      {
        headers: { accept: "application/vnd.github.machine-man-preview+json" },
        mediaType: { previews: ["machine-man"] },
      },
      { renamed: ["apps", "createInstallationAccessToken"] },
    ],
    deleteInstallation: [
      "DELETE /app/installations/:installation_id",
      {
        headers: {
          accept:
            "application/vnd.github.gambit-preview+json,application/vnd.github.machine-man-preview+json",
        },
        mediaType: { previews: ["gambit", "machine-man"] },
      },
    ],
    findOrgInstallation: [
      "GET /orgs/:org/installation",
      {
        headers: { accept: "application/vnd.github.machine-man-preview+json" },
        mediaType: { previews: ["machine-man"] },
      },
      { renamed: ["apps", "getOrgInstallation"] },
    ],
    findRepoInstallation: [
      "GET /repos/:owner/:repo/installation",
      {
        headers: { accept: "application/vnd.github.machine-man-preview+json" },
        mediaType: { previews: ["machine-man"] },
      },
      { renamed: ["apps", "getRepoInstallation"] },
    ],
    findUserInstallation: [
      "GET /users/:username/installation",
      {
        headers: { accept: "application/vnd.github.machine-man-preview+json" },
        mediaType: { previews: ["machine-man"] },
      },
      { renamed: ["apps", "getUserInstallation"] },
    ],
    getAuthenticated: [
      "GET /app",
      {
        headers: { accept: "application/vnd.github.machine-man-preview+json" },
        mediaType: { previews: ["machine-man"] },
      },
    ],
    getBySlug: [
      "GET /apps/:app_slug",
      {
        headers: { accept: "application/vnd.github.machine-man-preview+json" },
        mediaType: { previews: ["machine-man"] },
      },
    ],
    getInstallation: [
      "GET /app/installations/:installation_id",
      {
        headers: { accept: "application/vnd.github.machine-man-preview+json" },
        mediaType: { previews: ["machine-man"] },
      },
    ],
    getOrgInstallation: [
      "GET /orgs/:org/installation",
      {
        headers: { accept: "application/vnd.github.machine-man-preview+json" },
        mediaType: { previews: ["machine-man"] },
      },
    ],
    getRepoInstallation: [
      "GET /repos/:owner/:repo/installation",
      {
        headers: { accept: "application/vnd.github.machine-man-preview+json" },
        mediaType: { previews: ["machine-man"] },
      },
    ],
    getUserInstallation: [
      "GET /users/:username/installation",
      {
        headers: { accept: "application/vnd.github.machine-man-preview+json" },
        mediaType: { previews: ["machine-man"] },
      },
    ],
    listInstallationReposForAuthenticatedUser: [
      "GET /user/installations/:installation_id/repositories",
      {
        headers: { accept: "application/vnd.github.machine-man-preview+json" },
        mediaType: { previews: ["machine-man"] },
      },
    ],
    listInstallations: [
      "GET /app/installations",
      {
        headers: { accept: "application/vnd.github.machine-man-preview+json" },
        mediaType: { previews: ["machine-man"] },
      },
    ],
    listInstallationsForAuthenticatedUser: [
      "GET /user/installations",
      {
        headers: { accept: "application/vnd.github.machine-man-preview+json" },
        mediaType: { previews: ["machine-man"] },
      },
    ],
    listRepos: [
      "GET /installation/repositories",
      {
        headers: { accept: "application/vnd.github.machine-man-preview+json" },
        mediaType: { previews: ["machine-man"] },
      },
      { renamed: ["apps", "listReposAccessibleToInstallation"] },
    ],
    listReposAccessibleToInstallation: [
      "GET /installation/repositories",
      {
        headers: { accept: "application/vnd.github.machine-man-preview+json" },
        mediaType: { previews: ["machine-man"] },
      },
    ],
    removeRepoFromInstallation: [
      "DELETE /user/installations/:installation_id/repositories/:repository_id",
      {
        headers: { accept: "application/vnd.github.machine-man-preview+json" },
        mediaType: { previews: ["machine-man"] },
      },
    ],
  },
  checks: {
    create: [
      "POST /repos/:owner/:repo/check-runs",
      {
        headers: { accept: "application/vnd.github.antiope-preview+json" },
        mediaType: { previews: ["antiope"] },
      },
    ],
    createSuite: [
      "POST /repos/:owner/:repo/check-suites",
      {
        headers: { accept: "application/vnd.github.antiope-preview+json" },
        mediaType: { previews: ["antiope"] },
      },
    ],
    get: [
      "GET /repos/:owner/:repo/check-runs/:check_run_id",
      {
        headers: { accept: "application/vnd.github.antiope-preview+json" },
        mediaType: { previews: ["antiope"] },
      },
    ],
    getSuite: [
      "GET /repos/:owner/:repo/check-suites/:check_suite_id",
      {
        headers: { accept: "application/vnd.github.antiope-preview+json" },
        mediaType: { previews: ["antiope"] },
      },
    ],
    listAnnotations: [
      "GET /repos/:owner/:repo/check-runs/:check_run_id/annotations",
      {
        headers: { accept: "application/vnd.github.antiope-preview+json" },
        mediaType: { previews: ["antiope"] },
      },
    ],
    listForRef: [
      "GET /repos/:owner/:repo/commits/:ref/check-runs",
      {
        headers: { accept: "application/vnd.github.antiope-preview+json" },
        mediaType: { previews: ["antiope"] },
      },
    ],
    listForSuite: [
      "GET /repos/:owner/:repo/check-suites/:check_suite_id/check-runs",
      {
        headers: { accept: "application/vnd.github.antiope-preview+json" },
        mediaType: { previews: ["antiope"] },
      },
    ],
    listSuitesForRef: [
      "GET /repos/:owner/:repo/commits/:ref/check-suites",
      {
        headers: { accept: "application/vnd.github.antiope-preview+json" },
        mediaType: { previews: ["antiope"] },
      },
    ],
    rerequestSuite: [
      "POST /repos/:owner/:repo/check-suites/:check_suite_id/rerequest",
      {
        headers: { accept: "application/vnd.github.antiope-preview+json" },
        mediaType: { previews: ["antiope"] },
      },
    ],
    setSuitesPreferences: [
      "PATCH /repos/:owner/:repo/check-suites/preferences",
      {
        headers: { accept: "application/vnd.github.antiope-preview+json" },
        mediaType: { previews: ["antiope"] },
      },
    ],
    update: [
      "PATCH /repos/:owner/:repo/check-runs/:check_run_id",
      {
        headers: { accept: "application/vnd.github.antiope-preview+json" },
        mediaType: { previews: ["antiope"] },
      },
    ],
  },
  codesOfConduct: {
    getAllCodesOfConduct: [
      "GET /codes_of_conduct",
      {
        headers: {
          accept: "application/vnd.github.scarlet-witch-preview+json",
        },
        mediaType: { previews: ["scarlet-witch"] },
      },
    ],
    getConductCode: [
      "GET /codes_of_conduct/:key",
      {
        headers: {
          accept: "application/vnd.github.scarlet-witch-preview+json",
        },
        mediaType: { previews: ["scarlet-witch"] },
      },
    ],
    getForRepo: [
      "GET /repos/:owner/:repo/community/code_of_conduct",
      {
        headers: {
          accept: "application/vnd.github.scarlet-witch-preview+json",
        },
        mediaType: { previews: ["scarlet-witch"] },
      },
    ],
    listConductCodes: [
      "GET /codes_of_conduct",
      {
        headers: {
          accept: "application/vnd.github.scarlet-witch-preview+json",
        },
        mediaType: { previews: ["scarlet-witch"] },
      },
      { renamed: ["codesOfConduct", "getAllCodesOfConduct"] },
    ],
  },
  emojis: { get: ["GET /emojis"] },
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
  gists: {
    checkIsStarred: ["GET /gists/:gist_id/star"],
    create: ["POST /gists"],
    createComment: ["POST /gists/:gist_id/comments"],
    delete: ["DELETE /gists/:gist_id"],
    deleteComment: ["DELETE /gists/:gist_id/comments/:comment_id"],
    fork: ["POST /gists/:gist_id/forks"],
    get: ["GET /gists/:gist_id"],
    getComment: ["GET /gists/:gist_id/comments/:comment_id"],
    getRevision: ["GET /gists/:gist_id/:sha"],
    list: ["GET /gists"],
    listComments: ["GET /gists/:gist_id/comments"],
    listCommits: ["GET /gists/:gist_id/commits"],
    listForUser: ["GET /users/:username/gists"],
    listForks: ["GET /gists/:gist_id/forks"],
    listPublic: ["GET /gists/public"],
    listPublicForUser: [
      "GET /users/:username/gists",
      {},
      { renamed: ["gists", "listForUser"] },
    ],
    listStarred: ["GET /gists/starred"],
    star: ["PUT /gists/:gist_id/star"],
    unstar: ["DELETE /gists/:gist_id/star"],
    update: ["PATCH /gists/:gist_id"],
    updateComment: ["PATCH /gists/:gist_id/comments/:comment_id"],
  },
  git: {
    createBlob: ["POST /repos/:owner/:repo/git/blobs"],
    createCommit: ["POST /repos/:owner/:repo/git/commits"],
    createRef: ["POST /repos/:owner/:repo/git/refs"],
    createTag: ["POST /repos/:owner/:repo/git/tags"],
    createTree: ["POST /repos/:owner/:repo/git/trees"],
    deleteRef: ["DELETE /repos/:owner/:repo/git/refs/:ref"],
    getBlob: ["GET /repos/:owner/:repo/git/blobs/:file_sha"],
    getCommit: ["GET /repos/:owner/:repo/git/commits/:commit_sha"],
    getRef: ["GET /repos/:owner/:repo/git/ref/:ref"],
    getTag: ["GET /repos/:owner/:repo/git/tags/:tag_sha"],
    getTree: ["GET /repos/:owner/:repo/git/trees/:tree_sha"],
    listMatchingRefs: ["GET /repos/:owner/:repo/git/matching-refs/:ref"],
    listRefs: ["GET /repos/:owner/:repo/git/refs/:namespace"],
    updateRef: ["PATCH /repos/:owner/:repo/git/refs/:ref"],
  },
  gitignore: {
    getAllTemplates: ["GET /gitignore/templates"],
    getTemplate: ["GET /gitignore/templates/:name"],
  },
  issues: {
    addAssignees: ["POST /repos/:owner/:repo/issues/:issue_number/assignees"],
    addLabels: ["POST /repos/:owner/:repo/issues/:issue_number/labels"],
    checkAssignee: [
      "GET /repos/:owner/:repo/assignees/:assignee",
      {},
      { renamed: ["issues", "checkUserCanBeAssigned"] },
    ],
    checkUserCanBeAssigned: ["GET /repos/:owner/:repo/assignees/:assignee"],
    create: ["POST /repos/:owner/:repo/issues"],
    createComment: ["POST /repos/:owner/:repo/issues/:issue_number/comments"],
    createLabel: ["POST /repos/:owner/:repo/labels"],
    createMilestone: ["POST /repos/:owner/:repo/milestones"],
    deleteComment: ["DELETE /repos/:owner/:repo/issues/comments/:comment_id"],
    deleteLabel: ["DELETE /repos/:owner/:repo/labels/:name"],
    deleteMilestone: [
      "DELETE /repos/:owner/:repo/milestones/:milestone_number",
    ],
    get: ["GET /repos/:owner/:repo/issues/:issue_number"],
    getComment: ["GET /repos/:owner/:repo/issues/comments/:comment_id"],
    getEvent: ["GET /repos/:owner/:repo/issues/events/:event_id"],
    getLabel: ["GET /repos/:owner/:repo/labels/:name"],
    getMilestone: ["GET /repos/:owner/:repo/milestones/:milestone_number"],
    list: ["GET /issues"],
    listAssignees: ["GET /repos/:owner/:repo/assignees"],
    listComments: ["GET /repos/:owner/:repo/issues/:issue_number/comments"],
    listCommentsForRepo: ["GET /repos/:owner/:repo/issues/comments"],
    listEvents: ["GET /repos/:owner/:repo/issues/:issue_number/events"],
    listEventsForRepo: ["GET /repos/:owner/:repo/issues/events"],
    listEventsForTimeline: [
      "GET /repos/:owner/:repo/issues/:issue_number/timeline",
      {
        headers: { accept: "application/vnd.github.mockingbird-preview+json" },
        mediaType: { previews: ["mockingbird"] },
      },
    ],
    listForAuthenticatedUser: ["GET /user/issues"],
    listForOrg: ["GET /orgs/:org/issues"],
    listForRepo: ["GET /repos/:owner/:repo/issues"],
    listLabelsForMilestone: [
      "GET /repos/:owner/:repo/milestones/:milestone_number/labels",
    ],
    listLabelsForRepo: ["GET /repos/:owner/:repo/labels"],
    listLabelsOnIssue: ["GET /repos/:owner/:repo/issues/:issue_number/labels"],
    listMilestones: ["GET /repos/:owner/:repo/milestones"],
    listMilestonesForRepo: [
      "GET /repos/:owner/:repo/milestones",
      {},
      { renamed: ["issues", "listMilestones"] },
    ],
    lock: ["PUT /repos/:owner/:repo/issues/:issue_number/lock"],
    removeAllLabels: ["DELETE /repos/:owner/:repo/issues/:issue_number/labels"],
    removeAssignees: [
      "DELETE /repos/:owner/:repo/issues/:issue_number/assignees",
    ],
    removeLabel: [
      "DELETE /repos/:owner/:repo/issues/:issue_number/labels/:name",
    ],
    removeLabels: [
      "DELETE /repos/:owner/:repo/issues/:issue_number/labels",
      {},
      { renamed: ["issues", "removeAllLabels"] },
    ],
    replaceAllLabels: [
      "PUT /repos/:owner/:repo/issues/:issue_number/labels",
      {},
      { renamed: ["issues", "setLabels"] },
    ],
    replaceLabels: [
      "PUT /repos/:owner/:repo/issues/:issue_number/labels",
      {},
      { renamed: ["issues", "replaceAllLabels"] },
    ],
    setLabels: ["PUT /repos/:owner/:repo/issues/:issue_number/labels"],
    unlock: ["DELETE /repos/:owner/:repo/issues/:issue_number/lock"],
    update: ["PATCH /repos/:owner/:repo/issues/:issue_number"],
    updateComment: ["PATCH /repos/:owner/:repo/issues/comments/:comment_id"],
    updateLabel: ["PATCH /repos/:owner/:repo/labels/:current_name"],
    updateMilestone: ["PATCH /repos/:owner/:repo/milestones/:milestone_number"],
  },
  licenses: {
    get: ["GET /licenses/:license"],
    getAllCommonlyUsed: ["GET /licenses"],
    getForRepo: ["GET /repos/:owner/:repo/license"],
    list: ["GET /licenses", {}, { renamed: ["licenses", "listCommonlyUsed"] }],
  },
  markdown: {
    render: ["POST /markdown"],
    renderRaw: [
      "POST /markdown/raw",
      { headers: { "content-type": "text/plain; charset=utf-8" } },
    ],
  },
  meta: { get: ["GET /meta"] },
  oauthAuthorizations: {
    checkAuthorization: ["GET /applications/:client_id/tokens/:access_token"],
    createAuthorization: ["POST /authorizations"],
    deleteAuthorization: ["DELETE /authorizations/:authorization_id"],
    deleteGrant: ["DELETE /applications/grants/:grant_id"],
    getAuthorization: ["GET /authorizations/:authorization_id"],
    getGrant: ["GET /applications/grants/:grant_id"],
    getOrCreateAuthorizationForApp: ["PUT /authorizations/clients/:client_id"],
    getOrCreateAuthorizationForAppAndFingerprint: [
      "PUT /authorizations/clients/:client_id/:fingerprint",
    ],
    listAuthorizations: ["GET /authorizations"],
    listGrants: ["GET /applications/grants"],
    resetAuthorization: ["POST /applications/:client_id/tokens/:access_token"],
    revokeAuthorizationForApplication: [
      "DELETE /applications/:client_id/tokens/:access_token",
    ],
    revokeGrantForApplication: [
      "DELETE /applications/:client_id/grants/:access_token",
    ],
    updateAuthorization: ["PATCH /authorizations/:authorization_id"],
  },
  orgs: {
    addOrUpdateMembership: [
      "PUT /orgs/:org/memberships/:username",
      {},
      { renamed: ["orgs", "setMembershipForUser"] },
    ],
    checkMembership: [
      "GET /orgs/:org/members/:username",
      {},
      { renamed: ["orgs", "checkMembershipForUser"] },
    ],
    checkMembershipForUser: ["GET /orgs/:org/members/:username"],
    checkPublicMembership: [
      "GET /orgs/:org/public_members/:username",
      {},
      { renamed: ["orgs", "checkPublicMembershipForUser"] },
    ],
    checkPublicMembershipForUser: ["GET /orgs/:org/public_members/:username"],
    concealMembership: [
      "DELETE /orgs/:org/public_members/:username",
      {},
      { renamed: ["orgs", "removePublicMembershipForAuthenticatedUser"] },
    ],
    convertMemberToOutsideCollaborator: [
      "PUT /orgs/:org/outside_collaborators/:username",
    ],
    createHook: [
      "POST /orgs/:org/hooks",
      {},
      { renamed: ["orgs", "createWebhook"] },
    ],
    createWebhook: ["POST /orgs/:org/hooks"],
    deleteHook: [
      "DELETE /orgs/:org/hooks/:hook_id",
      {},
      { renamed: ["orgs", "deleteWebhook"] },
    ],
    deleteWebhook: ["DELETE /orgs/:org/hooks/:hook_id"],
    get: ["GET /orgs/:org"],
    getHook: [
      "GET /orgs/:org/hooks/:hook_id",
      {},
      { renamed: ["orgs", "getWebhook"] },
    ],
    getMembership: [
      "GET /orgs/:org/memberships/:username",
      {},
      { renamed: ["orgs", "getMembershipForUser"] },
    ],
    getMembershipForAuthenticatedUser: ["GET /user/memberships/orgs/:org"],
    getMembershipForUser: ["GET /orgs/:org/memberships/:username"],
    getWebhook: ["GET /orgs/:org/hooks/:hook_id"],
    list: ["GET /organizations"],
    listAppInstallations: [
      "GET /orgs/:org/installations",
      {
        headers: { accept: "application/vnd.github.machine-man-preview+json" },
        mediaType: { previews: ["machine-man"] },
      },
    ],
    listForAuthenticatedUser: ["GET /user/orgs"],
    listForUser: ["GET /users/:username/orgs"],
    listHooks: [
      "GET /orgs/:org/hooks",
      {},
      { renamed: ["orgs", "listWebhooks"] },
    ],
    listInstallations: [
      "GET /orgs/:org/installations",
      {
        headers: { accept: "application/vnd.github.machine-man-preview+json" },
        mediaType: { previews: ["machine-man"] },
      },
      { renamed: ["orgs", "listAppInstallations"] },
    ],
    listMembers: ["GET /orgs/:org/members"],
    listMemberships: [
      "GET /user/memberships/orgs",
      {},
      { renamed: ["orgs", "listMembershipsForAuthenticatedUser"] },
    ],
    listMembershipsForAuthenticatedUser: ["GET /user/memberships/orgs"],
    listOutsideCollaborators: ["GET /orgs/:org/outside_collaborators"],
    listPublicMembers: ["GET /orgs/:org/public_members"],
    listWebhooks: ["GET /orgs/:org/hooks"],
    pingHook: [
      "POST /orgs/:org/hooks/:hook_id/pings",
      {},
      { renamed: ["orgs", "pingWebhook"] },
    ],
    pingWebhook: ["POST /orgs/:org/hooks/:hook_id/pings"],
    publicizeMembership: [
      "PUT /orgs/:org/public_members/:username",
      {},
      { renamed: ["orgs", "setPublicMembershipForAuthenticatedUser"] },
    ],
    removeMember: ["DELETE /orgs/:org/members/:username"],
    removeMembership: [
      "DELETE /orgs/:org/memberships/:username",
      {},
      { renamed: ["orgs", "removeMembershipForUser"] },
    ],
    removeMembershipForUser: ["DELETE /orgs/:org/memberships/:username"],
    removeOutsideCollaborator: [
      "DELETE /orgs/:org/outside_collaborators/:username",
    ],
    removePublicMembershipForAuthenticatedUser: [
      "DELETE /orgs/:org/public_members/:username",
    ],
    setMembershipForUser: ["PUT /orgs/:org/memberships/:username"],
    setPublicMembershipForAuthenticatedUser: [
      "PUT /orgs/:org/public_members/:username",
    ],
    update: ["PATCH /orgs/:org"],
    updateHook: [
      "PATCH /orgs/:org/hooks/:hook_id",
      {},
      { renamed: ["orgs", "updateWebhook"] },
    ],
    updateMembership: [
      "PATCH /user/memberships/orgs/:org",
      {},
      { renamed: ["orgs", "updateMembershipForAuthenticatedUser"] },
    ],
    updateMembershipForAuthenticatedUser: ["PATCH /user/memberships/orgs/:org"],
    updateWebhook: ["PATCH /orgs/:org/hooks/:hook_id"],
  },
  projects: {
    addCollaborator: [
      "PUT /projects/:project_id/collaborators/:username",
      {
        headers: { accept: "application/vnd.github.inertia-preview+json" },
        mediaType: { previews: ["inertia"] },
      },
    ],
    createCard: [
      "POST /projects/columns/:column_id/cards",
      {
        headers: { accept: "application/vnd.github.inertia-preview+json" },
        mediaType: { previews: ["inertia"] },
      },
    ],
    createColumn: [
      "POST /projects/:project_id/columns",
      {
        headers: { accept: "application/vnd.github.inertia-preview+json" },
        mediaType: { previews: ["inertia"] },
      },
    ],
    createForAuthenticatedUser: [
      "POST /user/projects",
      {
        headers: { accept: "application/vnd.github.inertia-preview+json" },
        mediaType: { previews: ["inertia"] },
      },
    ],
    createForOrg: [
      "POST /orgs/:org/projects",
      {
        headers: { accept: "application/vnd.github.inertia-preview+json" },
        mediaType: { previews: ["inertia"] },
      },
    ],
    createForRepo: [
      "POST /repos/:owner/:repo/projects",
      {
        headers: { accept: "application/vnd.github.inertia-preview+json" },
        mediaType: { previews: ["inertia"] },
      },
    ],
    delete: [
      "DELETE /projects/:project_id",
      {
        headers: { accept: "application/vnd.github.inertia-preview+json" },
        mediaType: { previews: ["inertia"] },
      },
    ],
    deleteCard: [
      "DELETE /projects/columns/cards/:card_id",
      {
        headers: { accept: "application/vnd.github.inertia-preview+json" },
        mediaType: { previews: ["inertia"] },
      },
    ],
    deleteColumn: [
      "DELETE /projects/columns/:column_id",
      {
        headers: { accept: "application/vnd.github.inertia-preview+json" },
        mediaType: { previews: ["inertia"] },
      },
    ],
    get: [
      "GET /projects/:project_id",
      {
        headers: { accept: "application/vnd.github.inertia-preview+json" },
        mediaType: { previews: ["inertia"] },
      },
    ],
    getCard: [
      "GET /projects/columns/cards/:card_id",
      {
        headers: { accept: "application/vnd.github.inertia-preview+json" },
        mediaType: { previews: ["inertia"] },
      },
    ],
    getColumn: [
      "GET /projects/columns/:column_id",
      {
        headers: { accept: "application/vnd.github.inertia-preview+json" },
        mediaType: { previews: ["inertia"] },
      },
    ],
    getPermissionForUser: [
      "GET /projects/:project_id/collaborators/:username/permission",
      {
        headers: { accept: "application/vnd.github.inertia-preview+json" },
        mediaType: { previews: ["inertia"] },
      },
    ],
    listCards: [
      "GET /projects/columns/:column_id/cards",
      {
        headers: { accept: "application/vnd.github.inertia-preview+json" },
        mediaType: { previews: ["inertia"] },
      },
    ],
    listCollaborators: [
      "GET /projects/:project_id/collaborators",
      {
        headers: { accept: "application/vnd.github.inertia-preview+json" },
        mediaType: { previews: ["inertia"] },
      },
    ],
    listColumns: [
      "GET /projects/:project_id/columns",
      {
        headers: { accept: "application/vnd.github.inertia-preview+json" },
        mediaType: { previews: ["inertia"] },
      },
    ],
    listForOrg: [
      "GET /orgs/:org/projects",
      {
        headers: { accept: "application/vnd.github.inertia-preview+json" },
        mediaType: { previews: ["inertia"] },
      },
    ],
    listForRepo: [
      "GET /repos/:owner/:repo/projects",
      {
        headers: { accept: "application/vnd.github.inertia-preview+json" },
        mediaType: { previews: ["inertia"] },
      },
    ],
    listForUser: [
      "GET /users/:username/projects",
      {
        headers: { accept: "application/vnd.github.inertia-preview+json" },
        mediaType: { previews: ["inertia"] },
      },
    ],
    moveCard: [
      "POST /projects/columns/cards/:card_id/moves",
      {
        headers: { accept: "application/vnd.github.inertia-preview+json" },
        mediaType: { previews: ["inertia"] },
      },
    ],
    moveColumn: [
      "POST /projects/columns/:column_id/moves",
      {
        headers: { accept: "application/vnd.github.inertia-preview+json" },
        mediaType: { previews: ["inertia"] },
      },
    ],
    removeCollaborator: [
      "DELETE /projects/:project_id/collaborators/:username",
      {
        headers: { accept: "application/vnd.github.inertia-preview+json" },
        mediaType: { previews: ["inertia"] },
      },
    ],
    reviewUserPermissionLevel: [
      "GET /projects/:project_id/collaborators/:username/permission",
      {
        headers: { accept: "application/vnd.github.inertia-preview+json" },
        mediaType: { previews: ["inertia"] },
      },
      { renamed: ["projects", "getPermissionForUser"] },
    ],
    update: [
      "PATCH /projects/:project_id",
      {
        headers: { accept: "application/vnd.github.inertia-preview+json" },
        mediaType: { previews: ["inertia"] },
      },
    ],
    updateCard: [
      "PATCH /projects/columns/cards/:card_id",
      {
        headers: { accept: "application/vnd.github.inertia-preview+json" },
        mediaType: { previews: ["inertia"] },
      },
    ],
    updateColumn: [
      "PATCH /projects/columns/:column_id",
      {
        headers: { accept: "application/vnd.github.inertia-preview+json" },
        mediaType: { previews: ["inertia"] },
      },
    ],
  },
  pulls: {
    checkIfMerged: ["GET /repos/:owner/:repo/pulls/:pull_number/merge"],
    create: ["POST /repos/:owner/:repo/pulls"],
    createFromIssue: [
      "POST /repos/:owner/:repo/pulls",
      {},
      {
        deprecated:
          "octokit.scim.createFromIssue() is deprecated, see https://developer.github.com/v3/pulls/#create-a-pull-request",
      },
    ],
    createReplyForReviewComment: [
      "POST /repos/:owner/:repo/pulls/:pull_number/comments/:comment_id/replies",
    ],
    createReview: ["POST /repos/:owner/:repo/pulls/:pull_number/reviews"],
    createReviewCommentAlternative: [
      "POST /repos/:owner/:repo/pulls/:pull_number/comments",
    ],
    createReviewCommentReply: [
      "POST /repos/:owner/:repo/pulls/:pull_number/comments/:comment_id/replies",
      {},
      { renamed: ["pulls", "createReplyForReviewComment"] },
    ],
    createReviewRequest: [
      "POST /repos/:owner/:repo/pulls/:pull_number/requested_reviewers",
      {},
      { renamed: ["pulls", "requestReviewers"] },
    ],
    deleteComment: [
      "DELETE /repos/:owner/:repo/pulls/comments/:comment_id",
      {},
      { renamed: ["pulls", "deleteReviewComment"] },
    ],
    deletePendingReview: [
      "DELETE /repos/:owner/:repo/pulls/:pull_number/reviews/:review_id",
    ],
    deleteReviewComment: [
      "DELETE /repos/:owner/:repo/pulls/comments/:comment_id",
    ],
    deleteReviewRequest: [
      "DELETE /repos/:owner/:repo/pulls/:pull_number/requested_reviewers",
      {},
      { renamed: ["pulls", "removeRequestedReviewers"] },
    ],
    dismissReview: [
      "PUT /repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/dismissals",
    ],
    get: ["GET /repos/:owner/:repo/pulls/:pull_number"],
    getComment: [
      "GET /repos/:owner/:repo/pulls/comments/:comment_id",
      {},
      { renamed: ["pulls", "getReviewComment"] },
    ],
    getCommentsForReview: [
      "GET /repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/comments",
      {},
      { renamed: ["pulls", "listCommentsForReview"] },
    ],
    getReview: [
      "GET /repos/:owner/:repo/pulls/:pull_number/reviews/:review_id",
    ],
    getReviewComment: ["GET /repos/:owner/:repo/pulls/comments/:comment_id"],
    list: ["GET /repos/:owner/:repo/pulls"],
    listComments: [
      "GET /repos/:owner/:repo/pulls/:pull_number/comments",
      {},
      { renamed: ["pulls", "listReviewComments"] },
    ],
    listCommentsForRepo: [
      "GET /repos/:owner/:repo/pulls/comments",
      {},
      { renamed: ["pulls", "listReviewCommentsForRepo"] },
    ],
    listCommentsForReview: [
      "GET /repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/comments",
    ],
    listCommits: ["GET /repos/:owner/:repo/pulls/:pull_number/commits"],
    listFiles: ["GET /repos/:owner/:repo/pulls/:pull_number/files"],
    listRequestedReviewers: [
      "GET /repos/:owner/:repo/pulls/:pull_number/requested_reviewers",
    ],
    listReviewComments: ["GET /repos/:owner/:repo/pulls/:pull_number/comments"],
    listReviewCommentsForRepo: ["GET /repos/:owner/:repo/pulls/comments"],
    listReviewRequests: [
      "GET /repos/:owner/:repo/pulls/:pull_number/requested_reviewers",
      {},
      { renamed: ["pulls", "listRequestedReviewers"] },
    ],
    listReviews: ["GET /repos/:owner/:repo/pulls/:pull_number/reviews"],
    merge: ["PUT /repos/:owner/:repo/pulls/:pull_number/merge"],
    removeRequestedReviewers: [
      "DELETE /repos/:owner/:repo/pulls/:pull_number/requested_reviewers",
    ],
    requestReviewers: [
      "POST /repos/:owner/:repo/pulls/:pull_number/requested_reviewers",
    ],
    submitReview: [
      "POST /repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/events",
    ],
    update: ["PATCH /repos/:owner/:repo/pulls/:pull_number"],
    updateBranch: [
      "PUT /repos/:owner/:repo/pulls/:pull_number/update-branch",
      {
        headers: { accept: "application/vnd.github.lydian-preview+json" },
        mediaType: { previews: ["lydian"] },
      },
    ],
    updateComment: [
      "PATCH /repos/:owner/:repo/pulls/comments/:comment_id",
      {},
      { renamed: ["pulls", "updateReviewComment"] },
    ],
    updateReview: [
      "PUT /repos/:owner/:repo/pulls/:pull_number/reviews/:review_id",
    ],
    updateReviewComment: [
      "PATCH /repos/:owner/:repo/pulls/comments/:comment_id",
    ],
  },
  rateLimit: { get: ["GET /rate_limit"] },
  reactions: {
    createForCommitComment: [
      "POST /repos/:owner/:repo/comments/:comment_id/reactions",
      {
        headers: {
          accept: "application/vnd.github.squirrel-girl-preview+json",
        },
        mediaType: { previews: ["squirrel-girl"] },
      },
    ],
    createForIssue: [
      "POST /repos/:owner/:repo/issues/:issue_number/reactions",
      {
        headers: {
          accept: "application/vnd.github.squirrel-girl-preview+json",
        },
        mediaType: { previews: ["squirrel-girl"] },
      },
    ],
    createForIssueComment: [
      "POST /repos/:owner/:repo/issues/comments/:comment_id/reactions",
      {
        headers: {
          accept: "application/vnd.github.squirrel-girl-preview+json",
        },
        mediaType: { previews: ["squirrel-girl"] },
      },
    ],
    createForPullRequestReviewComment: [
      "POST /repos/:owner/:repo/pulls/comments/:comment_id/reactions",
      {
        headers: {
          accept: "application/vnd.github.squirrel-girl-preview+json",
        },
        mediaType: { previews: ["squirrel-girl"] },
      },
    ],
    createForTeamDiscussion: [
      "POST /teams/:team_id/discussions/:discussion_number/reactions",
      {
        headers: {
          accept: "application/vnd.github.squirrel-girl-preview+json",
        },
        mediaType: { previews: ["squirrel-girl"] },
      },
    ],
    createForTeamDiscussionComment: [
      "POST /teams/:team_id/discussions/:discussion_number/comments/:comment_number/reactions",
      {
        headers: {
          accept: "application/vnd.github.squirrel-girl-preview+json",
        },
        mediaType: { previews: ["squirrel-girl"] },
      },
    ],
    delete: [
      "DELETE /reactions/:reaction_id",
      {
        headers: {
          accept: "application/vnd.github.squirrel-girl-preview+json",
        },
        mediaType: { previews: ["squirrel-girl"] },
      },
    ],
    listForCommitComment: [
      "GET /repos/:owner/:repo/comments/:comment_id/reactions",
      {
        headers: {
          accept: "application/vnd.github.squirrel-girl-preview+json",
        },
        mediaType: { previews: ["squirrel-girl"] },
      },
    ],
    listForIssue: [
      "GET /repos/:owner/:repo/issues/:issue_number/reactions",
      {
        headers: {
          accept: "application/vnd.github.squirrel-girl-preview+json",
        },
        mediaType: { previews: ["squirrel-girl"] },
      },
    ],
    listForIssueComment: [
      "GET /repos/:owner/:repo/issues/comments/:comment_id/reactions",
      {
        headers: {
          accept: "application/vnd.github.squirrel-girl-preview+json",
        },
        mediaType: { previews: ["squirrel-girl"] },
      },
    ],
    listForPullRequestReviewComment: [
      "GET /repos/:owner/:repo/pulls/comments/:comment_id/reactions",
      {
        headers: {
          accept: "application/vnd.github.squirrel-girl-preview+json",
        },
        mediaType: { previews: ["squirrel-girl"] },
      },
    ],
    listForTeamDiscussion: [
      "GET /teams/:team_id/discussions/:discussion_number/reactions",
      {
        headers: {
          accept: "application/vnd.github.squirrel-girl-preview+json",
        },
        mediaType: { previews: ["squirrel-girl"] },
      },
    ],
    listForTeamDiscussionComment: [
      "GET /teams/:team_id/discussions/:discussion_number/comments/:comment_number/reactions",
      {
        headers: {
          accept: "application/vnd.github.squirrel-girl-preview+json",
        },
        mediaType: { previews: ["squirrel-girl"] },
      },
    ],
  },
  repos: {
    acceptInvitation: ["PATCH /user/repository_invitations/:invitation_id"],
    addAppAccessRestrictions: [
      "POST /repos/:owner/:repo/branches/:branch/protection/restrictions/apps",
    ],
    addCollaborator: ["PUT /repos/:owner/:repo/collaborators/:username"],
    addDeployKey: [
      "POST /repos/:owner/:repo/keys",
      {},
      { renamed: ["repos", "createDeployKey"] },
    ],
    addProtectedBranchAdminEnforcement: [
      "POST /repos/:owner/:repo/branches/:branch/protection/enforce_admins",
      {},
      { renamed: ["repos", "setAdminBranchProtection"] },
    ],
    addProtectedBranchAppRestrictions: [
      "POST /repos/:owner/:repo/branches/:branch/protection/restrictions/apps",
      {},
      { renamed: ["repos", "addAppAccessRestrictions"] },
    ],
    addProtectedBranchRequiredSignatures: [
      "POST /repos/:owner/:repo/branches/:branch/protection/required_signatures",
      {
        headers: { accept: "application/vnd.github.zzzax-preview+json" },
        mediaType: { previews: ["zzzax"] },
      },
      { renamed: ["repos", "createCommitSignatureProtection"] },
    ],
    addProtectedBranchRequiredStatusChecksContexts: [
      "POST /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts",
      {},
      { renamed: ["repos", "addStatusCheckContexts"] },
    ],
    addProtectedBranchTeamRestrictions: [
      "POST /repos/:owner/:repo/branches/:branch/protection/restrictions/teams",
      {},
      { renamed: ["repos", "addTeamAccessRestrictions"] },
    ],
    addProtectedBranchUserRestrictions: [
      "POST /repos/:owner/:repo/branches/:branch/protection/restrictions/users",
      {},
      { renamed: ["repos", "addUserAccessRestrictions"] },
    ],
    addStatusCheckContexts: [
      "POST /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts",
    ],
    addTeamAccessRestrictions: [
      "POST /repos/:owner/:repo/branches/:branch/protection/restrictions/teams",
    ],
    addUserAccessRestrictions: [
      "POST /repos/:owner/:repo/branches/:branch/protection/restrictions/users",
    ],
    checkCollaborator: ["GET /repos/:owner/:repo/collaborators/:username"],
    compareCommits: ["GET /repos/:owner/:repo/compare/:base...:head"],
    createCommitComment: [
      "POST /repos/:owner/:repo/commits/:commit_sha/comments",
    ],
    createCommitSignatureProtection: [
      "POST /repos/:owner/:repo/branches/:branch/protection/required_signatures",
      {
        headers: { accept: "application/vnd.github.zzzax-preview+json" },
        mediaType: { previews: ["zzzax"] },
      },
    ],
    createCommitStatus: ["POST /repos/:owner/:repo/statuses/:sha"],
    createDeployKey: ["POST /repos/:owner/:repo/keys"],
    createDeployment: ["POST /repos/:owner/:repo/deployments"],
    createDeploymentStatus: [
      "POST /repos/:owner/:repo/deployments/:deployment_id/statuses",
    ],
    createForAuthenticatedUser: ["POST /user/repos"],
    createFork: ["POST /repos/:owner/:repo/forks"],
    createHook: [
      "POST /repos/:owner/:repo/hooks",
      {},
      { renamed: ["repos", "createWebhook"] },
    ],
    createInOrg: ["POST /orgs/:org/repos"],
    createOrUpdateFile: [
      "PUT /repos/:owner/:repo/contents/:path",
      {},
      { renamed: ["repos", "createOrUpdateFileContents"] },
    ],
    createOrUpdateFileContents: ["PUT /repos/:owner/:repo/contents/:path"],
    createPagesSite: [
      "POST /repos/:owner/:repo/pages",
      {
        headers: { accept: "application/vnd.github.switcheroo-preview+json" },
        mediaType: { previews: ["switcheroo"] },
      },
    ],
    createRelease: ["POST /repos/:owner/:repo/releases"],
    createStatus: [
      "POST /repos/:owner/:repo/statuses/:sha",
      {},
      { renamed: ["repos", "createCommitStatus"] },
    ],
    createUsingTemplate: [
      "POST /repos/:template_owner/:template_repo/generate",
      {
        headers: { accept: "application/vnd.github.baptiste-preview+json" },
        mediaType: { previews: ["baptiste"] },
      },
    ],
    createWebhook: ["POST /repos/:owner/:repo/hooks"],
    declineInvitation: ["DELETE /user/repository_invitations/:invitation_id"],
    delete: ["DELETE /repos/:owner/:repo"],
    deleteAccessRestrictions: [
      "DELETE /repos/:owner/:repo/branches/:branch/protection/restrictions",
    ],
    deleteAdminBranchProtection: [
      "DELETE /repos/:owner/:repo/branches/:branch/protection/enforce_admins",
    ],
    deleteBranchProtection: [
      "DELETE /repos/:owner/:repo/branches/:branch/protection",
    ],
    deleteCommitComment: ["DELETE /repos/:owner/:repo/comments/:comment_id"],
    deleteCommitSignatureProtection: [
      "DELETE /repos/:owner/:repo/branches/:branch/protection/required_signatures",
      {
        headers: { accept: "application/vnd.github.zzzax-preview+json" },
        mediaType: { previews: ["zzzax"] },
      },
    ],
    deleteDeployKey: ["DELETE /repos/:owner/:repo/keys/:key_id"],
    deleteFile: ["DELETE /repos/:owner/:repo/contents/:path"],
    deleteHook: [
      "DELETE /repos/:owner/:repo/hooks/:hook_id",
      {},
      { renamed: ["repos", "deleteWebhook"] },
    ],
    deleteInvitation: ["DELETE /repos/:owner/:repo/invitations/:invitation_id"],
    deletePagesSite: [
      "DELETE /repos/:owner/:repo/pages",
      {
        headers: { accept: "application/vnd.github.switcheroo-preview+json" },
        mediaType: { previews: ["switcheroo"] },
      },
    ],
    deletePullRequestReviewProtection: [
      "DELETE /repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews",
    ],
    deleteRelease: ["DELETE /repos/:owner/:repo/releases/:release_id"],
    deleteReleaseAsset: [
      "DELETE /repos/:owner/:repo/releases/assets/:asset_id",
    ],
    deleteWebhook: ["DELETE /repos/:owner/:repo/hooks/:hook_id"],
    disablePagesSite: [
      "DELETE /repos/:owner/:repo/pages",
      {
        headers: { accept: "application/vnd.github.switcheroo-preview+json" },
        mediaType: { previews: ["switcheroo"] },
      },
      { renamed: ["repos", "deletePagesSite"] },
    ],
    disableVulnerabilityAlerts: [
      "DELETE /repos/:owner/:repo/vulnerability-alerts",
      {
        headers: { accept: "application/vnd.github.dorian-preview+json" },
        mediaType: { previews: ["dorian"] },
      },
    ],
    downloadArchive: ["GET /repos/:owner/:repo/:archive_format/:ref"],
    enablePagesSite: [
      "POST /repos/:owner/:repo/pages",
      {
        headers: { accept: "application/vnd.github.switcheroo-preview+json" },
        mediaType: { previews: ["switcheroo"] },
      },
      { renamed: ["repos", "createPagesSite"] },
    ],
    enableVulnerabilityAlerts: [
      "PUT /repos/:owner/:repo/vulnerability-alerts",
      {
        headers: { accept: "application/vnd.github.dorian-preview+json" },
        mediaType: { previews: ["dorian"] },
      },
    ],
    get: ["GET /repos/:owner/:repo"],
    getAccessRestrictions: [
      "GET /repos/:owner/:repo/branches/:branch/protection/restrictions",
    ],
    getAdminBranchProtection: [
      "GET /repos/:owner/:repo/branches/:branch/protection/enforce_admins",
    ],
    getAllStatusCheckContexts: [
      "GET /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts",
    ],
    getAllTopics: [
      "GET /repos/:owner/:repo/topics",
      {
        headers: { accept: "application/vnd.github.mercy-preview+json" },
        mediaType: { previews: ["mercy"] },
      },
    ],
    getAppsWithAccessToProtectedBranch: [
      "GET /repos/:owner/:repo/branches/:branch/protection/restrictions/apps",
    ],
    getArchiveLink: [
      "GET /repos/:owner/:repo/:archive_format/:ref",
      {},
      { renamed: ["repos", "downloadArchive"] },
    ],
    getBranch: ["GET /repos/:owner/:repo/branches/:branch"],
    getBranchProtection: [
      "GET /repos/:owner/:repo/branches/:branch/protection",
    ],
    getCodeFrequencyStats: ["GET /repos/:owner/:repo/stats/code_frequency"],
    getCollaboratorPermissionLevel: [
      "GET /repos/:owner/:repo/collaborators/:username/permission",
    ],
    getCombinedStatusForRef: ["GET /repos/:owner/:repo/commits/:ref/status"],
    getCommit: ["GET /repos/:owner/:repo/commits/:ref"],
    getCommitActivityStats: ["GET /repos/:owner/:repo/stats/commit_activity"],
    getCommitComment: ["GET /repos/:owner/:repo/comments/:comment_id"],
    getCommitRefSha: [
      "GET /repos/:owner/:repo/commits/:ref",
      { headers: { accept: "application/vnd.github.v3.sha" } },
      {
        deprecated:
          "octokit.scim.getCommitRefSha() is deprecated, see https://developer.github.com/v3/repos/commits/#get-a-single-commit",
      },
    ],
    getCommitSignatureProtection: [
      "GET /repos/:owner/:repo/branches/:branch/protection/required_signatures",
      {
        headers: { accept: "application/vnd.github.zzzax-preview+json" },
        mediaType: { previews: ["zzzax"] },
      },
    ],
    getContent: ["GET /repos/:owner/:repo/contents/:path"],
    getContents: [
      "GET /repos/:owner/:repo/contents/:path",
      {},
      { renamed: ["repos", "getContent"] },
    ],
    getContributorsStats: ["GET /repos/:owner/:repo/stats/contributors"],
    getDeployKey: ["GET /repos/:owner/:repo/keys/:key_id"],
    getDeployment: ["GET /repos/:owner/:repo/deployments/:deployment_id"],
    getDeploymentStatus: [
      "GET /repos/:owner/:repo/deployments/:deployment_id/statuses/:status_id",
    ],
    getHook: [
      "GET /repos/:owner/:repo/hooks/:hook_id",
      {},
      { renamed: ["repos", "getWebhook"] },
    ],
    getLatestPagesBuild: ["GET /repos/:owner/:repo/pages/builds/latest"],
    getLatestRelease: ["GET /repos/:owner/:repo/releases/latest"],
    getPages: ["GET /repos/:owner/:repo/pages"],
    getPagesBuild: ["GET /repos/:owner/:repo/pages/builds/:build_id"],
    getParticipationStats: ["GET /repos/:owner/:repo/stats/participation"],
    getProtectedBranchAdminEnforcement: [
      "GET /repos/:owner/:repo/branches/:branch/protection/enforce_admins",
      {},
      { renamed: ["repos", "getAdminBranchProtection"] },
    ],
    getProtectedBranchPullRequestReviewEnforcement: [
      "GET /repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews",
      {},
      { renamed: ["repos", "getPullRequestReviewProtection"] },
    ],
    getProtectedBranchRequiredSignatures: [
      "GET /repos/:owner/:repo/branches/:branch/protection/required_signatures",
      {
        headers: { accept: "application/vnd.github.zzzax-preview+json" },
        mediaType: { previews: ["zzzax"] },
      },
      { renamed: ["repos", "getCommitSignatureProtection"] },
    ],
    getProtectedBranchRequiredStatusChecks: [
      "GET /repos/:owner/:repo/branches/:branch/protection/required_status_checks",
      {},
      { renamed: ["repos", "getStatusChecksProtection"] },
    ],
    getProtectedBranchRestrictions: [
      "GET /repos/:owner/:repo/branches/:branch/protection/restrictions",
      {},
      { renamed: ["repos", "getAccessRestrictions"] },
    ],
    getPullRequestReviewProtection: [
      "GET /repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews",
    ],
    getPunchCardStats: ["GET /repos/:owner/:repo/stats/punch_card"],
    getReadme: ["GET /repos/:owner/:repo/readme"],
    getRelease: ["GET /repos/:owner/:repo/releases/:release_id"],
    getReleaseAsset: ["GET /repos/:owner/:repo/releases/assets/:asset_id"],
    getReleaseByTag: ["GET /repos/:owner/:repo/releases/tags/:tag"],
    getStatusChecksProtection: [
      "GET /repos/:owner/:repo/branches/:branch/protection/required_status_checks",
    ],
    getTeamsWithAccessToProtectedBranch: [
      "GET /repos/:owner/:repo/branches/:branch/protection/restrictions/teams",
    ],
    getUsersWithAccessToProtectedBranch: [
      "GET /repos/:owner/:repo/branches/:branch/protection/restrictions/users",
    ],
    getWebhook: ["GET /repos/:owner/:repo/hooks/:hook_id"],
    list: [
      "GET /user/repos",
      {},
      { renamed: ["repos", "listForAuthenticatedUser"] },
    ],
    listAppsWithAccessToProtectedBranch: [
      "GET /repos/:owner/:repo/branches/:branch/protection/restrictions/apps",
      {},
      { renamed: ["repos", "getAppsWithAccessToProtectedBranch"] },
    ],
    listAssetsForRelease: [
      "GET /repos/:owner/:repo/releases/:release_id/assets",
      {},
      { renamed: ["repos", "listReleaseAssets"] },
    ],
    listBranches: ["GET /repos/:owner/:repo/branches"],
    listBranchesForHeadCommit: [
      "GET /repos/:owner/:repo/commits/:commit_sha/branches-where-head",
      {
        headers: { accept: "application/vnd.github.groot-preview+json" },
        mediaType: { previews: ["groot"] },
      },
    ],
    listCollaborators: ["GET /repos/:owner/:repo/collaborators"],
    listCommentsForCommit: [
      "GET /repos/:owner/:repo/commits/:commit_sha/comments",
    ],
    listCommitComments: [
      "GET /repos/:owner/:repo/comments",
      {},
      { renamed: ["repos", "listCommitCommentsForRepo"] },
    ],
    listCommitCommentsForRepo: ["GET /repos/:owner/:repo/comments"],
    listCommitStatusesForRef: ["GET /repos/:owner/:repo/commits/:ref/statuses"],
    listCommits: ["GET /repos/:owner/:repo/commits"],
    listContributors: ["GET /repos/:owner/:repo/contributors"],
    listDeployKeys: ["GET /repos/:owner/:repo/keys"],
    listDeploymentStatuses: [
      "GET /repos/:owner/:repo/deployments/:deployment_id/statuses",
    ],
    listDeployments: ["GET /repos/:owner/:repo/deployments"],
    listForAuthenticatedUser: ["GET /user/repos"],
    listForOrg: ["GET /orgs/:org/repos"],
    listForUser: ["GET /users/:username/repos"],
    listForks: ["GET /repos/:owner/:repo/forks"],
    listHooks: [
      "GET /repos/:owner/:repo/hooks",
      {},
      { renamed: ["repos", "listWebhooks"] },
    ],
    listInvitations: ["GET /repos/:owner/:repo/invitations"],
    listInvitationsForAuthenticatedUser: ["GET /user/repository_invitations"],
    listLanguages: ["GET /repos/:owner/:repo/languages"],
    listPagesBuilds: ["GET /repos/:owner/:repo/pages/builds"],
    listProtectedBranchRequiredStatusChecksContexts: [
      "GET /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts",
      {},
      { renamed: ["repos", "getAllStatusCheckContexts"] },
    ],
    listProtectedBranchTeamRestrictions: [
      "GET /repos/:owner/:repo/branches/:branch/protection/restrictions/teams",
      {},
      { renamed: ["repos", "getTeamsWithAccessToProtectedBranch"] },
    ],
    listProtectedBranchUserRestrictions: [
      "GET /repos/:owner/:repo/branches/:branch/protection/restrictions/users",
      {},
      { renamed: ["repos", "getUsersWithAccessToProtectedBranch"] },
    ],
    listPublic: ["GET /repositories"],
    listPullRequestsAssociatedWithCommit: [
      "GET /repos/:owner/:repo/commits/:commit_sha/pulls",
      {
        headers: { accept: "application/vnd.github.groot-preview+json" },
        mediaType: { previews: ["groot"] },
      },
    ],
    listReleaseAssets: ["GET /repos/:owner/:repo/releases/:release_id/assets"],
    listReleases: ["GET /repos/:owner/:repo/releases"],
    listStatusesForRef: [
      "GET /repos/:owner/:repo/commits/:ref/statuses",
      {},
      { renamed: ["repos", "listCommitStatusesForRef"] },
    ],
    listTags: ["GET /repos/:owner/:repo/tags"],
    listTeams: ["GET /repos/:owner/:repo/teams"],
    listTeamsWithAccessToProtectedBranch: [
      "GET /repos/:owner/:repo/branches/:branch/protection/restrictions/teams",
      {},
      { renamed: ["repos", "getTeamsWithAccessToProtectedBranch"] },
    ],
    listTopics: [
      "GET /repos/:owner/:repo/topics",
      {
        headers: { accept: "application/vnd.github.mercy-preview+json" },
        mediaType: { previews: ["mercy"] },
      },
      { renamed: ["repos", "getAllTopics"] },
    ],
    listUsersWithAccessToProtectedBranch: [
      "GET /repos/:owner/:repo/branches/:branch/protection/restrictions/users",
      {},
      { renamed: ["repos", "getUsersWithAccessToProtectedBranch"] },
    ],
    listWebhooks: ["GET /repos/:owner/:repo/hooks"],
    merge: ["POST /repos/:owner/:repo/merges"],
    pingHook: [
      "POST /repos/:owner/:repo/hooks/:hook_id/pings",
      {},
      { renamed: ["repos", "pingWebhook"] },
    ],
    pingWebhook: ["POST /repos/:owner/:repo/hooks/:hook_id/pings"],
    removeAppAccessRestrictions: [
      "DELETE /repos/:owner/:repo/branches/:branch/protection/restrictions/apps",
    ],
    removeBranchProtection: [
      "DELETE /repos/:owner/:repo/branches/:branch/protection",
      {},
      { renamed: ["repos", "deleteBranchProtection"] },
    ],
    removeCollaborator: ["DELETE /repos/:owner/:repo/collaborators/:username"],
    removeDeployKey: [
      "DELETE /repos/:owner/:repo/keys/:key_id",
      {},
      { renamed: ["repos", "deleteDeployKey"] },
    ],
    removeProtectedBranchAdminEnforcement: [
      "DELETE /repos/:owner/:repo/branches/:branch/protection/enforce_admins",
      {},
      { renamed: ["repos", "deleteAdminBranchProtection"] },
    ],
    removeProtectedBranchAppRestrictions: [
      "DELETE /repos/:owner/:repo/branches/:branch/protection/restrictions/apps",
      {},
      { renamed: ["repos", "removeAppAccessRestrictions"] },
    ],
    removeProtectedBranchPullRequestReviewEnforcement: [
      "DELETE /repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews",
      {},
      { renamed: ["repos", "deletePullRequestReviewProtection"] },
    ],
    removeProtectedBranchRequiredSignatures: [
      "DELETE /repos/:owner/:repo/branches/:branch/protection/required_signatures",
      {
        headers: { accept: "application/vnd.github.zzzax-preview+json" },
        mediaType: { previews: ["zzzax"] },
      },
      { renamed: ["repos", "deleteCommitSignatureProtection"] },
    ],
    removeProtectedBranchRequiredStatusChecks: [
      "DELETE /repos/:owner/:repo/branches/:branch/protection/required_status_checks",
      {},
      { renamed: ["repos", "removeStatusChecksProtection"] },
    ],
    removeProtectedBranchRequiredStatusChecksContexts: [
      "DELETE /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts",
      {},
      { renamed: ["repos", "removeStatusCheckContexts"] },
    ],
    removeProtectedBranchRestrictions: [
      "DELETE /repos/:owner/:repo/branches/:branch/protection/restrictions",
      {},
      { renamed: ["repos", "deleteAccessRestrictions"] },
    ],
    removeProtectedBranchTeamRestrictions: [
      "DELETE /repos/:owner/:repo/branches/:branch/protection/restrictions/teams",
      {},
      { renamed: ["repos", "removeTeamAccessRestrictions"] },
    ],
    removeProtectedBranchUserRestrictions: [
      "DELETE /repos/:owner/:repo/branches/:branch/protection/restrictions/users",
      {},
      { renamed: ["repos", "removeUserAccessRestrictions"] },
    ],
    removeStatusCheckContexts: [
      "DELETE /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts",
    ],
    removeStatusCheckProtection: [
      "DELETE /repos/:owner/:repo/branches/:branch/protection/required_status_checks",
    ],
    removeTeamAccessRestrictions: [
      "DELETE /repos/:owner/:repo/branches/:branch/protection/restrictions/teams",
    ],
    removeUserAccessRestrictions: [
      "DELETE /repos/:owner/:repo/branches/:branch/protection/restrictions/users",
    ],
    replaceAllTopics: [
      "PUT /repos/:owner/:repo/topics",
      {
        headers: { accept: "application/vnd.github.mercy-preview+json" },
        mediaType: { previews: ["mercy"] },
      },
    ],
    replaceProtectedBranchAppRestrictions: [
      "PUT /repos/:owner/:repo/branches/:branch/protection/restrictions/apps",
      {},
      { renamed: ["repos", "setAppAccessRestrictions"] },
    ],
    replaceProtectedBranchRequiredStatusChecksContexts: [
      "PUT /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts",
      {},
      { renamed: ["repos", "setStatusCheckContexts"] },
    ],
    replaceProtectedBranchTeamRestrictions: [
      "PUT /repos/:owner/:repo/branches/:branch/protection/restrictions/teams",
      {},
      { renamed: ["repos", "setTeamAccessRestrictions"] },
    ],
    replaceProtectedBranchUserRestrictions: [
      "PUT /repos/:owner/:repo/branches/:branch/protection/restrictions/users",
      {},
      { renamed: ["repos", "setUserAccessRestrictions"] },
    ],
    replaceTopics: [
      "PUT /repos/:owner/:repo/topics",
      {
        headers: { accept: "application/vnd.github.mercy-preview+json" },
        mediaType: { previews: ["mercy"] },
      },
      { renamed: ["repos", "replaceAllTopics"] },
    ],
    requestPageBuild: [
      "POST /repos/:owner/:repo/pages/builds",
      {},
      { renamed: ["repos", "requestPagesBuild"] },
    ],
    requestPagesBuild: ["POST /repos/:owner/:repo/pages/builds"],
    setAdminBranchProtection: [
      "POST /repos/:owner/:repo/branches/:branch/protection/enforce_admins",
    ],
    setAppAccessRestrictions: [
      "PUT /repos/:owner/:repo/branches/:branch/protection/restrictions/apps",
    ],
    setStatusCheckContexts: [
      "PUT /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts",
    ],
    setTeamAccessRestrictions: [
      "PUT /repos/:owner/:repo/branches/:branch/protection/restrictions/teams",
    ],
    setUserAccessRestrictions: [
      "PUT /repos/:owner/:repo/branches/:branch/protection/restrictions/users",
    ],
    testPushHook: [
      "POST /repos/:owner/:repo/hooks/:hook_id/tests",
      {},
      { renamed: ["repos", "testPushWebhook"] },
    ],
    testPushWebhook: ["POST /repos/:owner/:repo/hooks/:hook_id/tests"],
    transfer: [
      "POST /repos/:owner/:repo/transfer",
      {
        headers: { accept: "application/vnd.github.nightshade-preview+json" },
        mediaType: { previews: ["nightshade"] },
      },
    ],
    update: [
      "PATCH /repos/:owner/:repo",
      {
        headers: { accept: "application/vnd.github.x-ray-preview+json" },
        mediaType: { previews: ["x-ray"] },
      },
    ],
    updateBranchProtection: [
      "PUT /repos/:owner/:repo/branches/:branch/protection",
    ],
    updateCommitComment: ["PATCH /repos/:owner/:repo/comments/:comment_id"],
    updateHook: [
      "PATCH /repos/:owner/:repo/hooks/:hook_id",
      {},
      { renamed: ["repos", "updateWebhook"] },
    ],
    updateInformationAboutPagesSite: ["PUT /repos/:owner/:repo/pages"],
    updateInvitation: ["PATCH /repos/:owner/:repo/invitations/:invitation_id"],
    updateProtectedBranchPullRequestReviewEnforcement: [
      "PATCH /repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews",
      {},
      { renamed: ["repos", "updatePullRequestReviewProtection"] },
    ],
    updateProtectedBranchRequiredStatusChecks: [
      "PATCH /repos/:owner/:repo/branches/:branch/protection/required_status_checks",
      {},
      { renamed: ["repos", "updateStatusChecksProtection"] },
    ],
    updatePullRequestReviewProtection: [
      "PATCH /repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews",
    ],
    updateRelease: ["PATCH /repos/:owner/:repo/releases/:release_id"],
    updateReleaseAsset: ["PATCH /repos/:owner/:repo/releases/assets/:asset_id"],
    updateStatusCheckPotection: [
      "PATCH /repos/:owner/:repo/branches/:branch/protection/required_status_checks",
    ],
    updateWebhook: ["PATCH /repos/:owner/:repo/hooks/:hook_id"],
    uploadReleaseAsset: ["POST :url"],
  },
  search: {
    code: ["GET /search/code"],
    commits: [
      "GET /search/commits",
      {
        headers: { accept: "application/vnd.github.cloak-preview+json" },
        mediaType: { previews: ["cloak"] },
      },
    ],
    issuesAndPullRequests: ["GET /search/issues"],
    labels: ["GET /search/labels"],
    repos: ["GET /search/repositories"],
    topics: [
      "GET /search/topics",
      {
        headers: { accept: "application/vnd.github.mercy-preview+json" },
        mediaType: { previews: ["mercy"] },
      },
    ],
    users: ["GET /search/users"],
  },
  teams: {
    addMember: [
      "PUT /teams/:team_id/members/:username",
      {},
      { renamed: ["teams", "addMemberLegacy"] },
    ],
    addMemberLegacy: [
      "PUT /teams/:team_id/members/:username",
      {},
      {
        deprecated:
          "octokit.scim.addMemberLegacy() is deprecated, see https://developer.github.com/enterprise/2.19/v3/teams/members/#add-team-member-legacy",
      },
    ],
    addOrUpdateMembership: [
      "PUT /teams/:team_id/memberships/:username",
      {},
      { renamed: ["teams", "addOrUpdateMembershipForUser"] },
    ],
    addOrUpdateMembershipForUser: ["PUT /teams/:team_id/memberships/:username"],
    addOrUpdateProject: [
      "PUT /teams/:team_id/projects/:project_id",
      {
        headers: { accept: "application/vnd.github.inertia-preview+json" },
        mediaType: { previews: ["inertia"] },
      },
      { renamed: ["teams", "addOrUpdateProjectPermissions"] },
    ],
    addOrUpdateProjectPermissions: [
      "PUT /teams/:team_id/projects/:project_id",
      {
        headers: { accept: "application/vnd.github.inertia-preview+json" },
        mediaType: { previews: ["inertia"] },
      },
    ],
    addOrUpdateRepo: [
      "PUT /teams/:team_id/repos/:owner/:repo",
      {},
      { renamed: ["teams", "addOrUpdateRepoPermissions"] },
    ],
    addOrUpdateRepoPermissions: ["PUT /teams/:team_id/repos/:owner/:repo"],
    checkManagesRepo: [
      "GET /teams/:team_id/repos/:owner/:repo",
      {},
      { renamed: ["teams", "checkPermissionsForRepo"] },
    ],
    checkPermissionsForProject: [
      "GET /teams/:team_id/projects/:project_id",
      {
        headers: { accept: "application/vnd.github.inertia-preview+json" },
        mediaType: { previews: ["inertia"] },
      },
    ],
    checkPermissionsForRepo: ["GET /teams/:team_id/repos/:owner/:repo"],
    create: ["POST /orgs/:org/teams"],
    createDiscussion: ["POST /teams/:team_id/discussions"],
    createDiscussionComment: [
      "POST /teams/:team_id/discussions/:discussion_number/comments",
    ],
    delete: ["DELETE /teams/:team_id"],
    deleteDiscussion: ["DELETE /teams/:team_id/discussions/:discussion_number"],
    deleteDiscussionComment: [
      "DELETE /teams/:team_id/discussions/:discussion_number/comments/:comment_number",
    ],
    get: ["GET /teams/:team_id"],
    getByName: ["GET /orgs/:org/teams/:team_slug"],
    getDiscussion: ["GET /teams/:team_id/discussions/:discussion_number"],
    getDiscussionComment: [
      "GET /teams/:team_id/discussions/:discussion_number/comments/:comment_number",
    ],
    getMember: [
      "GET /teams/:team_id/members/:username",
      {},
      { renamed: ["teams", "getMemberLegacy"] },
    ],
    getMemberLegacy: [
      "GET /teams/:team_id/members/:username",
      {},
      {
        deprecated:
          "octokit.scim.getMemberLegacy() is deprecated, see https://developer.github.com/enterprise/2.19/v3/teams/members/#get-team-member-legacy",
      },
    ],
    getMembership: [
      "GET /teams/:team_id/memberships/:username",
      {},
      { renamed: ["teams", "getMembershipForUser"] },
    ],
    getMembershipForUser: ["GET /teams/:team_id/memberships/:username"],
    list: ["GET /orgs/:org/teams"],
    listChild: ["GET /teams/:team_id/teams"],
    listDiscussionComments: [
      "GET /teams/:team_id/discussions/:discussion_number/comments",
    ],
    listDiscussions: ["GET /teams/:team_id/discussions"],
    listForAuthenticatedUser: ["GET /user/teams"],
    listMembers: ["GET /teams/:team_id/members"],
    listProjects: [
      "GET /teams/:team_id/projects",
      {
        headers: { accept: "application/vnd.github.inertia-preview+json" },
        mediaType: { previews: ["inertia"] },
      },
    ],
    listRepos: ["GET /teams/:team_id/repos"],
    removeMember: [
      "DELETE /teams/:team_id/members/:username",
      {},
      { renamed: ["teams", "removeMemberLegacy"] },
    ],
    removeMemberLegacy: [
      "DELETE /teams/:team_id/members/:username",
      {},
      {
        deprecated:
          "octokit.scim.removeMemberLegacy() is deprecated, see https://developer.github.com/enterprise/2.19/v3/teams/members/#remove-team-member-legacy",
      },
    ],
    removeMembership: [
      "DELETE /teams/:team_id/memberships/:username",
      {},
      { renamed: ["teams", "removeMembershipForUser"] },
    ],
    removeMembershipForUser: ["DELETE /teams/:team_id/memberships/:username"],
    removeProject: ["DELETE /teams/:team_id/projects/:project_id"],
    removeRepo: ["DELETE /teams/:team_id/repos/:owner/:repo"],
    reviewProject: [
      "GET /teams/:team_id/projects/:project_id",
      {
        headers: { accept: "application/vnd.github.inertia-preview+json" },
        mediaType: { previews: ["inertia"] },
      },
      { renamed: ["teams", "checkPermissionsForProject"] },
    ],
    update: ["PATCH /teams/:team_id"],
    updateDiscussion: ["PATCH /teams/:team_id/discussions/:discussion_number"],
    updateDiscussionComment: [
      "PATCH /teams/:team_id/discussions/:discussion_number/comments/:comment_number",
    ],
  },
  users: {
    addEmailForAuthenticated: ["POST /user/emails"],
    addEmails: [
      "POST /user/emails",
      {},
      { renamed: ["users", "addEmailsForAuthenticated"] },
    ],
    checkFollowing: [
      "GET /user/following/:username",
      {},
      { renamed: ["users", "checkPersonIsFollowedByAuthenticated"] },
    ],
    checkFollowingForUser: ["GET /users/:username/following/:target_user"],
    checkPersonIsFollowedByAuthenticated: ["GET /user/following/:username"],
    createGpgKey: [
      "POST /user/gpg_keys",
      {},
      { renamed: ["users", "createGpgKeyForAuthenticated"] },
    ],
    createGpgKeyForAuthenticated: ["POST /user/gpg_keys"],
    createPublicKey: [
      "POST /user/keys",
      {},
      { renamed: ["users", "createPublicSshKeyForAuthenticated"] },
    ],
    createPublicSshKeyForAuthenticated: ["POST /user/keys"],
    deleteEmailForAuthenticated: ["DELETE /user/emails"],
    deleteEmails: [
      "DELETE /user/emails",
      {},
      { renamed: ["users", "deleteEmailsForAuthenticated"] },
    ],
    deleteGpgKey: [
      "DELETE /user/gpg_keys/:gpg_key_id",
      {},
      { renamed: ["users", "deleteGpgKeyForAuthenticated"] },
    ],
    deleteGpgKeyForAuthenticated: ["DELETE /user/gpg_keys/:gpg_key_id"],
    deletePublicKey: [
      "DELETE /user/keys/:key_id",
      {},
      { renamed: ["users", "deletePublicSshKeyForAuthenticated"] },
    ],
    deletePublicSshKeyForAuthenticated: ["DELETE /user/keys/:key_id"],
    follow: ["PUT /user/following/:username"],
    getAuthenticated: ["GET /user"],
    getByUsername: ["GET /users/:username"],
    getContextForUser: ["GET /users/:username/hovercard"],
    getGpgKey: [
      "GET /user/gpg_keys/:gpg_key_id",
      {},
      { renamed: ["users", "getGpgKeyForAuthenticated"] },
    ],
    getGpgKeyForAuthenticated: ["GET /user/gpg_keys/:gpg_key_id"],
    getPublicKey: [
      "GET /user/keys/:key_id",
      {},
      { renamed: ["users", "getPublicSshKeyForAuthenticated"] },
    ],
    getPublicSshKeyForAuthenticated: ["GET /user/keys/:key_id"],
    list: ["GET /users"],
    listEmails: [
      "GET /user/emails",
      {},
      { renamed: ["users", "listEmailsForAuthenticated"] },
    ],
    listEmailsForAuthenticated: ["GET /user/emails"],
    listFollowedByAuthenticated: ["GET /user/following"],
    listFollowersForAuthenticatedUser: ["GET /user/followers"],
    listFollowersForUser: ["GET /users/:username/followers"],
    listFollowingForAuthenticatedUser: [
      "GET /user/following",
      {},
      { renamed: ["users", "listFollowedByAuthenticated"] },
    ],
    listFollowingForUser: ["GET /users/:username/following"],
    listGpgKeys: [
      "GET /user/gpg_keys",
      {},
      { renamed: ["users", "listGpgKeysForAuthenticated"] },
    ],
    listGpgKeysForAuthenticated: ["GET /user/gpg_keys"],
    listGpgKeysForUser: ["GET /users/:username/gpg_keys"],
    listPublicEmails: [
      "GET /user/public_emails",
      {},
      { renamed: ["users", "listPublicEmailsForAuthenticatedUser"] },
    ],
    listPublicEmailsForAuthenticated: ["GET /user/public_emails"],
    listPublicKeys: [
      "GET /user/keys",
      {},
      { renamed: ["users", "listPublicSshKeysForAuthenticated"] },
    ],
    listPublicKeysForUser: ["GET /users/:username/keys"],
    listPublicSshKeysForAuthenticated: ["GET /user/keys"],
    unfollow: ["DELETE /user/following/:username"],
    updateAuthenticated: ["PATCH /user"],
  },
};

export default Endpoints;
