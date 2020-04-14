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
    checkAuthorization: [
      "GET /applications/:client_id/tokens/:access_token",
      {},
      {
        deprecated:
          "octokit.scim.checkAuthorization() is deprecated, see https://developer.github.com/enterprise/2.20/v3/apps/oauth_applications/#check-an-authorization",
      },
    ],
    checkToken: [
      "POST /applications/:client_id/token",
      {
        headers: {
          accept: "application/vnd.github.doctor-strange-preview+json",
        },
        mediaType: { previews: ["doctor-strange"] },
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
    createInstallationToken: [
      "POST /app/installations/:installation_id/access_tokens",
      {
        headers: { accept: "application/vnd.github.machine-man-preview+json" },
        mediaType: { previews: ["machine-man"] },
      },
    ],
    deleteAuthorization: [
      "DELETE /applications/:client_id/grant",
      {
        headers: {
          accept: "application/vnd.github.doctor-strange-preview+json",
        },
        mediaType: { previews: ["doctor-strange"] },
      },
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
    deleteToken: [
      "DELETE /applications/:client_id/token",
      {
        headers: {
          accept: "application/vnd.github.doctor-strange-preview+json",
        },
        mediaType: { previews: ["doctor-strange"] },
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
    ],
    removeRepoFromInstallation: [
      "DELETE /user/installations/:installation_id/repositories/:repository_id",
      {
        headers: { accept: "application/vnd.github.machine-man-preview+json" },
        mediaType: { previews: ["machine-man"] },
      },
    ],
    resetAuthorization: [
      "POST /applications/:client_id/tokens/:access_token",
      {},
      {
        deprecated:
          "octokit.scim.resetAuthorization() is deprecated, see https://developer.github.com/enterprise/2.20/v3/apps/oauth_applications/#reset-an-authorization",
      },
    ],
    resetToken: [
      "PATCH /applications/:client_id/token",
      {
        headers: {
          accept: "application/vnd.github.doctor-strange-preview+json",
        },
        mediaType: { previews: ["doctor-strange"] },
      },
    ],
    revokeAuthorizationForApplication: [
      "DELETE /applications/:client_id/tokens/:access_token",
      {},
      {
        deprecated:
          "octokit.scim.revokeAuthorizationForApplication() is deprecated, see https://developer.github.com/enterprise/2.20/v3/apps/oauth_applications/#revoke-an-authorization-for-an-application",
      },
    ],
    revokeGrantForApplication: [
      "DELETE /applications/:client_id/grants/:access_token",
      {},
      {
        deprecated:
          "octokit.scim.revokeGrantForApplication() is deprecated, see https://developer.github.com/enterprise/2.20/v3/apps/oauth_applications/#revoke-a-grant-for-an-application",
      },
    ],
    revokeInstallationToken: [
      "DELETE /installation/token",
      {
        headers: { accept: "application/vnd.github.gambit-preview+json" },
        mediaType: { previews: ["gambit"] },
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
    checkConfigurationStatus: ["GET /setup/api/configcheck"],
    checkMaintenanceStatus: ["GET /setup/api/maintenance"],
    createGlobalHook: [
      "POST /admin/hooks",
      {
        headers: { accept: "application/vnd.github.superpro-preview+json" },
        mediaType: { previews: ["superpro"] },
      },
    ],
    createImpersonationOAuthToken: [
      "POST /admin/users/:username/authorizations",
    ],
    createOrg: ["POST /admin/organizations"],
    createPreReceiveEnvironment: ["POST /admin/pre-receive-environments"],
    createPreReceiveHook: ["POST /admin/pre-receive-hooks"],
    createUser: ["POST /admin/users"],
    deleteGlobalHook: [
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
    ],
    deletePreReceiveHook: [
      "DELETE /admin/pre_receive_hooks/:pre_receive_hook_id",
    ],
    deletePublicKey: ["DELETE /admin/keys/:key_ids"],
    deleteUser: ["DELETE /admin/users/:username"],
    demoteSiteAdministratorToOrdinaryUser: [
      "DELETE /users/:username/site_admin",
    ],
    enableOrDisableMaintenanceMode: ["POST /setup/api/maintenance"],
    getGlobalHook: [
      "GET /admin/hooks/:hook_id",
      {
        headers: { accept: "application/vnd.github.superpro-preview+json" },
        mediaType: { previews: ["superpro"] },
      },
    ],
    getLicenseInformation: ["GET /enterprise/settings/license"],
    getPreReceiveEnvironment: [
      "GET /admin/pre-receive-environments/:pre_receive_environment_id",
    ],
    getPreReceiveEnvironmentDownloadStatus: [
      "GET /admin/pre-receive-environments/:pre_receive_environment_id/downloads/latest",
    ],
    getPreReceiveHook: ["GET /admin/pre-receive-hooks/:pre_receive_hook_id"],
    getPreReceiveHookForOrg: [
      "GET /orgs/:org/pre-receive-hooks/:pre_receive_hook_id",
    ],
    getPreReceiveHookForRepo: [
      "GET /repos/:owner/:repo/pre-receive-hooks/:pre_receive_hook_id",
    ],
    getTypeStats: ["GET /enterprise/stats/:type"],
    listGlobalHooks: [
      "GET /admin/hooks",
      {
        headers: { accept: "application/vnd.github.superpro-preview+json" },
        mediaType: { previews: ["superpro"] },
      },
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
        mediaType: { previews: ["superpro"] },
      },
    ],
    promoteOrdinaryUserToSiteAdministrator: ["PUT /users/:username/site_admin"],
    queueIndexingJob: ["POST /staff/indexing_jobs"],
    removeAuthorizedSshKey: ["DELETE /setup/api/settings/authorized-keys"],
    removeEnforcementOverridesForPreReceiveHookForOrg: [
      "DELETE /orgs/:org/pre-receive-hooks/:pre_receive_hook_id",
    ],
    removeEnforcementOverridesForPreReceiveHookForRepo: [
      "DELETE /repos/:owner/:repo/pre-receive-hooks/:pre_receive_hook_id",
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
      "POST /admin/pre-receive-environments/:pre_receive_environment_id/downloads",
    ],
    unsuspendUser: ["DELETE /users/:username/suspended"],
    updateGlobalHook: [
      "PATCH /admin/hooks/:hook_id",
      {
        headers: { accept: "application/vnd.github.superpro-preview+json" },
        mediaType: { previews: ["superpro"] },
      },
    ],
    updateLdapMappingForTeam: ["PATCH /admin/ldap/teams/:team_id/mapping"],
    updateLdapMappingForUser: ["PATCH /admin/ldap/users/:username/mapping"],
    updatePreReceiveEnvironment: [
      "PATCH /admin/pre-receive-environments/:pre_receive_environment_id",
    ],
    updatePreReceiveHook: [
      "PATCH /admin/pre_receive_hooks/:pre_receive_hook_id",
    ],
    updatePreReceiveHookEnforcementForOrg: [
      "PATCH /orgs/:org/pre-receive-hooks/:pre_receive_hook_id",
    ],
    updatePreReceiveHookEnforcementForRepo: [
      "PATCH /repos/:owner/:repo/pre-receive-hooks/:pre_receive_hook_id",
    ],
    upgradeLicense: ["POST /setup/api/upgrade"],
    uploadLicenseForFirstTime: ["POST /setup/api/start"],
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
    getAllRefs: ["GET /repos/:owner/:repo/git/refs/:namespace"],
    getBlob: ["GET /repos/:owner/:repo/git/blobs/:file_sha"],
    getCommit: ["GET /repos/:owner/:repo/git/commits/:commit_sha"],
    getRef: ["GET /repos/:owner/:repo/git/ref/:ref"],
    getRefs: [
      "GET /repos/:owner/:repo/git/refs/:namespace",
      {},
      { renamed: ["git", "getAllRefs"] },
    ],
    getTag: ["GET /repos/:owner/:repo/git/tags/:tag_sha"],
    getTree: ["GET /repos/:owner/:repo/git/trees/:tree_sha"],
    listMatchingRefs: ["GET /repos/:owner/:repo/git/matching-refs/:ref"],
    listRefs: ["GET /repos/:owner/:repo/git/refs/:namespace"],
    updateRef: ["PATCH /repos/:owner/:repo/git/refs/:ref"],
  },
  gitignore: {
    getTemplate: ["GET /gitignore/templates/:name"],
    listTemplates: ["GET /gitignore/templates"],
  },
  issues: {
    addAssignees: ["POST /repos/:owner/:repo/issues/:issue_number/assignees"],
    addLabels: ["POST /repos/:owner/:repo/issues/:issue_number/labels"],
    checkAssignee: ["GET /repos/:owner/:repo/assignees/:assignee"],
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
    listMilestonesForRepo: ["GET /repos/:owner/:repo/milestones"],
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
    replaceAllLabels: ["PUT /repos/:owner/:repo/issues/:issue_number/labels"],
    replaceLabels: [
      "PUT /repos/:owner/:repo/issues/:issue_number/labels",
      {},
      { renamed: ["issues", "replaceAllLabels"] },
    ],
    unlock: ["DELETE /repos/:owner/:repo/issues/:issue_number/lock"],
    update: ["PATCH /repos/:owner/:repo/issues/:issue_number"],
    updateComment: ["PATCH /repos/:owner/:repo/issues/comments/:comment_id"],
    updateLabel: ["PATCH /repos/:owner/:repo/labels/:current_name"],
    updateMilestone: ["PATCH /repos/:owner/:repo/milestones/:milestone_number"],
  },
  licenses: {
    get: ["GET /licenses/:license"],
    getForRepo: ["GET /repos/:owner/:repo/license"],
    list: ["GET /licenses", {}, { renamed: ["licenses", "listCommonlyUsed"] }],
    listCommonlyUsed: ["GET /licenses"],
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
    checkAuthorization: [
      "GET /applications/:client_id/tokens/:access_token",
      {},
      { renamed: ["apps", "checkAuthorization"] },
    ],
    createAuthorization: [
      "POST /authorizations",
      {},
      {
        deprecated:
          "octokit.scim.createAuthorization() is deprecated, see https://developer.github.com/enterprise/2.20/v3/oauth_authorizations/#create-a-new-authorization",
      },
    ],
    deleteAuthorization: [
      "DELETE /authorizations/:authorization_id",
      {},
      {
        deprecated:
          "octokit.scim.deleteAuthorization() is deprecated, see https://developer.github.com/enterprise/2.20/v3/oauth_authorizations/#delete-an-authorization",
      },
    ],
    deleteGrant: [
      "DELETE /applications/grants/:grant_id",
      {},
      {
        deprecated:
          "octokit.scim.deleteGrant() is deprecated, see https://developer.github.com/enterprise/2.20/v3/oauth_authorizations/#delete-a-grant",
      },
    ],
    getAuthorization: [
      "GET /authorizations/:authorization_id",
      {},
      {
        deprecated:
          "octokit.scim.getAuthorization() is deprecated, see https://developer.github.com/enterprise/2.20/v3/oauth_authorizations/#get-a-single-authorization",
      },
    ],
    getGrant: [
      "GET /applications/grants/:grant_id",
      {},
      {
        deprecated:
          "octokit.scim.getGrant() is deprecated, see https://developer.github.com/enterprise/2.20/v3/oauth_authorizations/#get-a-single-grant",
      },
    ],
    getOrCreateAuthorizationForApp: [
      "PUT /authorizations/clients/:client_id",
      {},
      {
        deprecated:
          "octokit.scim.getOrCreateAuthorizationForApp() is deprecated, see https://developer.github.com/enterprise/2.20/v3/oauth_authorizations/#get-or-create-an-authorization-for-a-specific-app",
      },
    ],
    getOrCreateAuthorizationForAppAndFingerprint: [
      "PUT /authorizations/clients/:client_id/:fingerprint",
      {},
      {
        deprecated:
          "octokit.scim.getOrCreateAuthorizationForAppAndFingerprint() is deprecated, see https://developer.github.com/enterprise/2.20/v3/oauth_authorizations/#get-or-create-an-authorization-for-a-specific-app-and-fingerprint",
      },
    ],
    getOrCreateAuthorizationForAppFingerprint: [
      "PUT /authorizations/clients/:client_id/:fingerprint",
      {},
      {
        renamed: [
          "oauthAuthorizations",
          "getOrCreateAuthorizationForAppAndFingerprint",
        ],
      },
    ],
    listAuthorizations: [
      "GET /authorizations",
      {},
      {
        deprecated:
          "octokit.scim.listAuthorizations() is deprecated, see https://developer.github.com/enterprise/2.20/v3/oauth_authorizations/#list-your-authorizations",
      },
    ],
    listGrants: [
      "GET /applications/grants",
      {},
      {
        deprecated:
          "octokit.scim.listGrants() is deprecated, see https://developer.github.com/enterprise/2.20/v3/oauth_authorizations/#list-your-grants",
      },
    ],
    resetAuthorization: [
      "POST /applications/:client_id/tokens/:access_token",
      {},
      { renamed: ["apps", "resetAuthorization"] },
    ],
    revokeAuthorizationForApplication: [
      "DELETE /applications/:client_id/tokens/:access_token",
      {},
      { renamed: ["apps", "revokeAuthorizationForApplication"] },
    ],
    revokeGrantForApplication: [
      "DELETE /applications/:client_id/grants/:access_token",
      {},
      { renamed: ["apps", "revokeGrantForApplication"] },
    ],
    updateAuthorization: [
      "PATCH /authorizations/:authorization_id",
      {},
      {
        deprecated:
          "octokit.scim.updateAuthorization() is deprecated, see https://developer.github.com/enterprise/2.20/v3/oauth_authorizations/#update-an-existing-authorization",
      },
    ],
  },
  orgs: {
    addOrUpdateMembership: ["PUT /orgs/:org/memberships/:username"],
    checkMembership: ["GET /orgs/:org/members/:username"],
    checkPublicMembership: ["GET /orgs/:org/public_members/:username"],
    concealMembership: ["DELETE /orgs/:org/public_members/:username"],
    convertMemberToOutsideCollaborator: [
      "PUT /orgs/:org/outside_collaborators/:username",
    ],
    createHook: ["POST /orgs/:org/hooks"],
    deleteHook: ["DELETE /orgs/:org/hooks/:hook_id"],
    get: ["GET /orgs/:org"],
    getHook: ["GET /orgs/:org/hooks/:hook_id"],
    getMembership: ["GET /orgs/:org/memberships/:username"],
    getMembershipForAuthenticatedUser: ["GET /user/memberships/orgs/:org"],
    list: ["GET /organizations"],
    listForAuthenticatedUser: ["GET /user/orgs"],
    listForUser: ["GET /users/:username/orgs"],
    listHooks: ["GET /orgs/:org/hooks"],
    listInstallations: [
      "GET /orgs/:org/installations",
      {
        headers: { accept: "application/vnd.github.machine-man-preview+json" },
        mediaType: { previews: ["machine-man"] },
      },
    ],
    listMembers: ["GET /orgs/:org/members"],
    listMemberships: ["GET /user/memberships/orgs"],
    listOutsideCollaborators: ["GET /orgs/:org/outside_collaborators"],
    listPublicMembers: ["GET /orgs/:org/public_members"],
    pingHook: ["POST /orgs/:org/hooks/:hook_id/pings"],
    publicizeMembership: ["PUT /orgs/:org/public_members/:username"],
    removeMember: ["DELETE /orgs/:org/members/:username"],
    removeMembership: ["DELETE /orgs/:org/memberships/:username"],
    removeOutsideCollaborator: [
      "DELETE /orgs/:org/outside_collaborators/:username",
    ],
    update: ["PATCH /orgs/:org"],
    updateHook: ["PATCH /orgs/:org/hooks/:hook_id"],
    updateMembership: ["PATCH /user/memberships/orgs/:org"],
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
    createComment: ["POST /repos/:owner/:repo/pulls/:pull_number/comments"],
    createCommentReply: [
      "POST /repos/:owner/:repo/pulls/:pull_number/comments",
      {},
      { renamed: ["pulls", "createComment"] },
    ],
    createFromIssue: [
      "POST /repos/:owner/:repo/pulls",
      {},
      {
        deprecated:
          "octokit.scim.createFromIssue() is deprecated, see https://developer.github.com/v3/pulls/#create-a-pull-request",
      },
    ],
    createReview: ["POST /repos/:owner/:repo/pulls/:pull_number/reviews"],
    createReviewCommentReply: [
      "POST /repos/:owner/:repo/pulls/:pull_number/comments/:comment_id/replies",
    ],
    createReviewRequest: [
      "POST /repos/:owner/:repo/pulls/:pull_number/requested_reviewers",
    ],
    deleteComment: ["DELETE /repos/:owner/:repo/pulls/comments/:comment_id"],
    deletePendingReview: [
      "DELETE /repos/:owner/:repo/pulls/:pull_number/reviews/:review_id",
    ],
    deleteReviewRequest: [
      "DELETE /repos/:owner/:repo/pulls/:pull_number/requested_reviewers",
    ],
    dismissReview: [
      "PUT /repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/dismissals",
    ],
    get: ["GET /repos/:owner/:repo/pulls/:pull_number"],
    getComment: ["GET /repos/:owner/:repo/pulls/comments/:comment_id"],
    getCommentsForReview: [
      "GET /repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/comments",
    ],
    getReview: [
      "GET /repos/:owner/:repo/pulls/:pull_number/reviews/:review_id",
    ],
    list: ["GET /repos/:owner/:repo/pulls"],
    listComments: ["GET /repos/:owner/:repo/pulls/:pull_number/comments"],
    listCommentsForRepo: ["GET /repos/:owner/:repo/pulls/comments"],
    listCommits: ["GET /repos/:owner/:repo/pulls/:pull_number/commits"],
    listFiles: ["GET /repos/:owner/:repo/pulls/:pull_number/files"],
    listReviewRequests: [
      "GET /repos/:owner/:repo/pulls/:pull_number/requested_reviewers",
    ],
    listReviews: ["GET /repos/:owner/:repo/pulls/:pull_number/reviews"],
    merge: ["PUT /repos/:owner/:repo/pulls/:pull_number/merge"],
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
    updateComment: ["PATCH /repos/:owner/:repo/pulls/comments/:comment_id"],
    updateReview: [
      "PUT /repos/:owner/:repo/pulls/:pull_number/reviews/:review_id",
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
      { renamed: ["reactions", "createForTeamDiscussion"] },
    ],
    createForTeamDiscussionComment: [
      "POST /teams/:team_id/discussions/:discussion_number/comments/:comment_number/reactions",
      {
        headers: {
          accept: "application/vnd.github.squirrel-girl-preview+json",
        },
        mediaType: { previews: ["squirrel-girl"] },
      },
      { renamed: ["reactions", "createForTeamDiscussionComment"] },
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
      { renamed: ["reactions", "listForTeamDiscussion"] },
    ],
    listForTeamDiscussionComment: [
      "GET /teams/:team_id/discussions/:discussion_number/comments/:comment_number/reactions",
      {
        headers: {
          accept: "application/vnd.github.squirrel-girl-preview+json",
        },
        mediaType: { previews: ["squirrel-girl"] },
      },
      { renamed: ["reactions", "listForTeamDiscussionComment"] },
    ],
  },
  repos: {
    acceptInvitation: ["PATCH /user/repository_invitations/:invitation_id"],
    addCollaborator: ["PUT /repos/:owner/:repo/collaborators/:username"],
    addDeployKey: ["POST /repos/:owner/:repo/keys"],
    addProtectedBranchAdminEnforcement: [
      "POST /repos/:owner/:repo/branches/:branch/protection/enforce_admins",
    ],
    addProtectedBranchAppRestrictions: [
      "POST /repos/:owner/:repo/branches/:branch/protection/restrictions/apps",
    ],
    addProtectedBranchRequiredSignatures: [
      "POST /repos/:owner/:repo/branches/:branch/protection/required_signatures",
      {
        headers: { accept: "application/vnd.github.zzzax-preview+json" },
        mediaType: { previews: ["zzzax"] },
      },
    ],
    addProtectedBranchRequiredStatusChecksContexts: [
      "POST /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts",
    ],
    addProtectedBranchTeamRestrictions: [
      "POST /repos/:owner/:repo/branches/:branch/protection/restrictions/teams",
    ],
    addProtectedBranchUserRestrictions: [
      "POST /repos/:owner/:repo/branches/:branch/protection/restrictions/users",
    ],
    checkCollaborator: ["GET /repos/:owner/:repo/collaborators/:username"],
    compareCommits: ["GET /repos/:owner/:repo/compare/:base...:head"],
    createCommitComment: [
      "POST /repos/:owner/:repo/commits/:commit_sha/comments",
    ],
    createDeployment: ["POST /repos/:owner/:repo/deployments"],
    createDeploymentStatus: [
      "POST /repos/:owner/:repo/deployments/:deployment_id/statuses",
    ],
    createFile: [
      "PUT /repos/:owner/:repo/contents/:path",
      {},
      { renamed: ["repos", "createOrUpdateFile"] },
    ],
    createForAuthenticatedUser: ["POST /user/repos"],
    createFork: ["POST /repos/:owner/:repo/forks"],
    createHook: ["POST /repos/:owner/:repo/hooks"],
    createInOrg: ["POST /orgs/:org/repos"],
    createOrUpdateFile: ["PUT /repos/:owner/:repo/contents/:path"],
    createRelease: ["POST /repos/:owner/:repo/releases"],
    createStatus: ["POST /repos/:owner/:repo/statuses/:sha"],
    createUsingTemplate: [
      "POST /repos/:template_owner/:template_repo/generate",
      {
        headers: { accept: "application/vnd.github.baptiste-preview+json" },
        mediaType: { previews: ["baptiste"] },
      },
    ],
    declineInvitation: ["DELETE /user/repository_invitations/:invitation_id"],
    delete: ["DELETE /repos/:owner/:repo"],
    deleteCommitComment: ["DELETE /repos/:owner/:repo/comments/:comment_id"],
    deleteDownload: ["DELETE /repos/:owner/:repo/downloads/:download_id"],
    deleteFile: ["DELETE /repos/:owner/:repo/contents/:path"],
    deleteHook: ["DELETE /repos/:owner/:repo/hooks/:hook_id"],
    deleteInvitation: ["DELETE /repos/:owner/:repo/invitations/:invitation_id"],
    deleteRelease: ["DELETE /repos/:owner/:repo/releases/:release_id"],
    deleteReleaseAsset: [
      "DELETE /repos/:owner/:repo/releases/assets/:asset_id",
    ],
    disablePagesSite: [
      "DELETE /repos/:owner/:repo/pages",
      {
        headers: { accept: "application/vnd.github.switcheroo-preview+json" },
        mediaType: { previews: ["switcheroo"] },
      },
    ],
    disableVulnerabilityAlerts: [
      "DELETE /repos/:owner/:repo/vulnerability-alerts",
      {
        headers: { accept: "application/vnd.github.dorian-preview+json" },
        mediaType: { previews: ["dorian"] },
      },
    ],
    enablePagesSite: [
      "POST /repos/:owner/:repo/pages",
      {
        headers: { accept: "application/vnd.github.switcheroo-preview+json" },
        mediaType: { previews: ["switcheroo"] },
      },
    ],
    enableVulnerabilityAlerts: [
      "PUT /repos/:owner/:repo/vulnerability-alerts",
      {
        headers: { accept: "application/vnd.github.dorian-preview+json" },
        mediaType: { previews: ["dorian"] },
      },
    ],
    get: ["GET /repos/:owner/:repo"],
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
    getArchiveLink: ["GET /repos/:owner/:repo/:archive_format/:ref"],
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
    getContents: ["GET /repos/:owner/:repo/contents/:path"],
    getContributorsStats: ["GET /repos/:owner/:repo/stats/contributors"],
    getDeployKey: ["GET /repos/:owner/:repo/keys/:key_id"],
    getDeployment: ["GET /repos/:owner/:repo/deployments/:deployment_id"],
    getDeploymentStatus: [
      "GET /repos/:owner/:repo/deployments/:deployment_id/statuses/:status_id",
    ],
    getDownload: ["GET /repos/:owner/:repo/downloads/:download_id"],
    getHook: ["GET /repos/:owner/:repo/hooks/:hook_id"],
    getLatestPagesBuild: ["GET /repos/:owner/:repo/pages/builds/latest"],
    getLatestRelease: ["GET /repos/:owner/:repo/releases/latest"],
    getPages: ["GET /repos/:owner/:repo/pages"],
    getPagesBuild: ["GET /repos/:owner/:repo/pages/builds/:build_id"],
    getParticipationStats: ["GET /repos/:owner/:repo/stats/participation"],
    getProtectedBranchAdminEnforcement: [
      "GET /repos/:owner/:repo/branches/:branch/protection/enforce_admins",
    ],
    getProtectedBranchPullRequestReviewEnforcement: [
      "GET /repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews",
    ],
    getProtectedBranchRequiredSignatures: [
      "GET /repos/:owner/:repo/branches/:branch/protection/required_signatures",
      {
        headers: { accept: "application/vnd.github.zzzax-preview+json" },
        mediaType: { previews: ["zzzax"] },
      },
    ],
    getProtectedBranchRequiredStatusChecks: [
      "GET /repos/:owner/:repo/branches/:branch/protection/required_status_checks",
    ],
    getProtectedBranchRestrictions: [
      "GET /repos/:owner/:repo/branches/:branch/protection/restrictions",
    ],
    getPunchCardStats: ["GET /repos/:owner/:repo/stats/punch_card"],
    getReadme: ["GET /repos/:owner/:repo/readme"],
    getRelease: ["GET /repos/:owner/:repo/releases/:release_id"],
    getReleaseAsset: ["GET /repos/:owner/:repo/releases/assets/:asset_id"],
    getReleaseByTag: ["GET /repos/:owner/:repo/releases/tags/:tag"],
    getTeamsWithAccessToProtectedBranch: [
      "GET /repos/:owner/:repo/branches/:branch/protection/restrictions/teams",
    ],
    getUsersWithAccessToProtectedBranch: [
      "GET /repos/:owner/:repo/branches/:branch/protection/restrictions/users",
    ],
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
    listCommitComments: ["GET /repos/:owner/:repo/comments"],
    listCommits: ["GET /repos/:owner/:repo/commits"],
    listContributors: ["GET /repos/:owner/:repo/contributors"],
    listDeployKeys: ["GET /repos/:owner/:repo/keys"],
    listDeploymentStatuses: [
      "GET /repos/:owner/:repo/deployments/:deployment_id/statuses",
    ],
    listDeployments: ["GET /repos/:owner/:repo/deployments"],
    listDownloads: ["GET /repos/:owner/:repo/downloads"],
    listForAuthenticatedUser: ["GET /user/repos"],
    listForOrg: ["GET /orgs/:org/repos"],
    listForUser: ["GET /users/:username/repos"],
    listForks: ["GET /repos/:owner/:repo/forks"],
    listHooks: ["GET /repos/:owner/:repo/hooks"],
    listInvitations: ["GET /repos/:owner/:repo/invitations"],
    listInvitationsForAuthenticatedUser: ["GET /user/repository_invitations"],
    listLanguages: ["GET /repos/:owner/:repo/languages"],
    listPagesBuilds: ["GET /repos/:owner/:repo/pages/builds"],
    listProtectedBranchRequiredStatusChecksContexts: [
      "GET /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts",
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
    listReleases: ["GET /repos/:owner/:repo/releases"],
    listStatusesForRef: ["GET /repos/:owner/:repo/commits/:ref/statuses"],
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
    merge: ["POST /repos/:owner/:repo/merges"],
    pingHook: ["POST /repos/:owner/:repo/hooks/:hook_id/pings"],
    removeBranchProtection: [
      "DELETE /repos/:owner/:repo/branches/:branch/protection",
    ],
    removeCollaborator: ["DELETE /repos/:owner/:repo/collaborators/:username"],
    removeDeployKey: ["DELETE /repos/:owner/:repo/keys/:key_id"],
    removeProtectedBranchAdminEnforcement: [
      "DELETE /repos/:owner/:repo/branches/:branch/protection/enforce_admins",
    ],
    removeProtectedBranchAppRestrictions: [
      "DELETE /repos/:owner/:repo/branches/:branch/protection/restrictions/apps",
    ],
    removeProtectedBranchPullRequestReviewEnforcement: [
      "DELETE /repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews",
    ],
    removeProtectedBranchRequiredSignatures: [
      "DELETE /repos/:owner/:repo/branches/:branch/protection/required_signatures",
      {
        headers: { accept: "application/vnd.github.zzzax-preview+json" },
        mediaType: { previews: ["zzzax"] },
      },
    ],
    removeProtectedBranchRequiredStatusChecks: [
      "DELETE /repos/:owner/:repo/branches/:branch/protection/required_status_checks",
    ],
    removeProtectedBranchRequiredStatusChecksContexts: [
      "DELETE /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts",
    ],
    removeProtectedBranchRestrictions: [
      "DELETE /repos/:owner/:repo/branches/:branch/protection/restrictions",
    ],
    removeProtectedBranchTeamRestrictions: [
      "DELETE /repos/:owner/:repo/branches/:branch/protection/restrictions/teams",
    ],
    removeProtectedBranchUserRestrictions: [
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
    ],
    replaceProtectedBranchRequiredStatusChecksContexts: [
      "PUT /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts",
    ],
    replaceProtectedBranchTeamRestrictions: [
      "PUT /repos/:owner/:repo/branches/:branch/protection/restrictions/teams",
    ],
    replaceProtectedBranchUserRestrictions: [
      "PUT /repos/:owner/:repo/branches/:branch/protection/restrictions/users",
    ],
    replaceTopics: [
      "PUT /repos/:owner/:repo/topics",
      {
        headers: { accept: "application/vnd.github.mercy-preview+json" },
        mediaType: { previews: ["mercy"] },
      },
      { renamed: ["repos", "replaceAllTopics"] },
    ],
    requestPageBuild: ["POST /repos/:owner/:repo/pages/builds"],
    testPushHook: ["POST /repos/:owner/:repo/hooks/:hook_id/tests"],
    transfer: ["POST /repos/:owner/:repo/transfer"],
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
    updateFile: [
      "PUT /repos/:owner/:repo/contents/:path",
      {},
      { renamed: ["repos", "createOrUpdateFile"] },
    ],
    updateHook: ["PATCH /repos/:owner/:repo/hooks/:hook_id"],
    updateInformationAboutPagesSite: ["PUT /repos/:owner/:repo/pages"],
    updateInvitation: ["PATCH /repos/:owner/:repo/invitations/:invitation_id"],
    updateProtectedBranchPullRequestReviewEnforcement: [
      "PATCH /repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews",
    ],
    updateProtectedBranchRequiredStatusChecks: [
      "PATCH /repos/:owner/:repo/branches/:branch/protection/required_status_checks",
    ],
    updateRelease: ["PATCH /repos/:owner/:repo/releases/:release_id"],
    updateReleaseAsset: ["PATCH /repos/:owner/:repo/releases/assets/:asset_id"],
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
    issues: [
      "GET /search/issues",
      {},
      { renamed: ["search", "issuesAndPullRequests"] },
    ],
    issuesAndPullRequests: ["GET /search/issues"],
    labels: ["GET /search/labels"],
    repos: ["GET /search/repositories"],
    topics: ["GET /search/topics"],
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
          "octokit.scim.addMemberLegacy() is deprecated, see https://developer.github.com/enterprise/2.20/v3/teams/members/#add-team-member-legacy",
      },
    ],
    addOrUpdateMembership: [
      "PUT /teams/:team_id/memberships/:username",
      {},
      { renamed: ["teams", "addOrUpdateMembership"] },
    ],
    addOrUpdateProject: [
      "PUT /teams/:team_id/projects/:project_id",
      {
        headers: { accept: "application/vnd.github.inertia-preview+json" },
        mediaType: { previews: ["inertia"] },
      },
      { renamed: ["teams", "addOrUpdateProject"] },
    ],
    addOrUpdateRepo: [
      "PUT /teams/:team_id/repos/:owner/:repo",
      {},
      { renamed: ["teams", "addOrUpdateRepo"] },
    ],
    checkManagesRepo: [
      "GET /teams/:team_id/repos/:owner/:repo",
      {},
      { renamed: ["teams", "checkManagesRepo"] },
    ],
    create: ["POST /orgs/:org/teams"],
    createDiscussion: [
      "POST /teams/:team_id/discussions",
      {},
      { renamed: ["teams", "createDiscussion"] },
    ],
    createDiscussionComment: [
      "POST /teams/:team_id/discussions/:discussion_number/comments",
      {},
      { renamed: ["teams", "createDiscussionComment"] },
    ],
    delete: ["DELETE /teams/:team_id", {}, { renamed: ["teams", "delete"] }],
    deleteDiscussion: [
      "DELETE /teams/:team_id/discussions/:discussion_number",
      {},
      { renamed: ["teams", "deleteDiscussion"] },
    ],
    deleteDiscussionComment: [
      "DELETE /teams/:team_id/discussions/:discussion_number/comments/:comment_number",
      {},
      { renamed: ["teams", "deleteDiscussionComment"] },
    ],
    get: ["GET /teams/:team_id", {}, { renamed: ["teams", "get"] }],
    getByName: ["GET /orgs/:org/teams/:team_slug"],
    getDiscussion: [
      "GET /teams/:team_id/discussions/:discussion_number",
      {},
      { renamed: ["teams", "getDiscussion"] },
    ],
    getDiscussionComment: [
      "GET /teams/:team_id/discussions/:discussion_number/comments/:comment_number",
      {},
      { renamed: ["teams", "getDiscussionComment"] },
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
          "octokit.scim.getMemberLegacy() is deprecated, see https://developer.github.com/enterprise/2.20/v3/teams/members/#get-team-member-legacy",
      },
    ],
    getMembership: [
      "GET /teams/:team_id/memberships/:username",
      {},
      { renamed: ["teams", "getMembership"] },
    ],
    list: ["GET /orgs/:org/teams"],
    listChild: [
      "GET /teams/:team_id/teams",
      {},
      { renamed: ["teams", "listChild"] },
    ],
    listDiscussionComments: [
      "GET /teams/:team_id/discussions/:discussion_number/comments",
      {},
      { renamed: ["teams", "listDiscussionComments"] },
    ],
    listDiscussions: [
      "GET /teams/:team_id/discussions",
      {},
      { renamed: ["teams", "listDiscussions"] },
    ],
    listForAuthenticatedUser: ["GET /user/teams"],
    listMembers: [
      "GET /teams/:team_id/members",
      {},
      { renamed: ["teams", "listMembers"] },
    ],
    listProjects: [
      "GET /teams/:team_id/projects",
      {
        headers: { accept: "application/vnd.github.inertia-preview+json" },
        mediaType: { previews: ["inertia"] },
      },
      { renamed: ["teams", "listProjects"] },
    ],
    listRepos: [
      "GET /teams/:team_id/repos",
      {},
      { renamed: ["teams", "listRepos"] },
    ],
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
          "octokit.scim.removeMemberLegacy() is deprecated, see https://developer.github.com/enterprise/2.20/v3/teams/members/#remove-team-member-legacy",
      },
    ],
    removeMembership: [
      "DELETE /teams/:team_id/memberships/:username",
      {},
      { renamed: ["teams", "removeMembership"] },
    ],
    removeProject: [
      "DELETE /teams/:team_id/projects/:project_id",
      {},
      { renamed: ["teams", "removeProject"] },
    ],
    removeRepo: [
      "DELETE /teams/:team_id/repos/:owner/:repo",
      {},
      { renamed: ["teams", "removeRepo"] },
    ],
    reviewProject: [
      "GET /teams/:team_id/projects/:project_id",
      {
        headers: { accept: "application/vnd.github.inertia-preview+json" },
        mediaType: { previews: ["inertia"] },
      },
      { renamed: ["teams", "reviewProject"] },
    ],
    update: ["PATCH /teams/:team_id", {}, { renamed: ["teams", "update"] }],
    updateDiscussion: [
      "PATCH /teams/:team_id/discussions/:discussion_number",
      {},
      { renamed: ["teams", "updateDiscussion"] },
    ],
    updateDiscussionComment: [
      "PATCH /teams/:team_id/discussions/:discussion_number/comments/:comment_number",
      {},
      { renamed: ["teams", "updateDiscussionComment"] },
    ],
  },
  users: {
    addEmails: ["POST /user/emails"],
    checkFollowing: ["GET /user/following/:username"],
    checkFollowingForUser: ["GET /users/:username/following/:target_user"],
    createGpgKey: ["POST /user/gpg_keys"],
    createPublicKey: ["POST /user/keys"],
    deleteEmails: ["DELETE /user/emails"],
    deleteGpgKey: ["DELETE /user/gpg_keys/:gpg_key_id"],
    deletePublicKey: ["DELETE /user/keys/:key_id"],
    follow: ["PUT /user/following/:username"],
    getAuthenticated: ["GET /user"],
    getByUsername: ["GET /users/:username"],
    getContextForUser: ["GET /users/:username/hovercard"],
    getGpgKey: ["GET /user/gpg_keys/:gpg_key_id"],
    getPublicKey: ["GET /user/keys/:key_id"],
    list: ["GET /users"],
    listEmails: ["GET /user/emails"],
    listFollowedByAuthenticated: ["GET /user/following"],
    listFollowersForAuthenticatedUser: ["GET /user/followers"],
    listFollowersForUser: ["GET /users/:username/followers"],
    listFollowingForAuthenticatedUser: [
      "GET /user/following",
      {},
      { renamed: ["users", "listFollowedByAuthenticated"] },
    ],
    listFollowingForUser: ["GET /users/:username/following"],
    listGpgKeys: ["GET /user/gpg_keys"],
    listGpgKeysForUser: ["GET /users/:username/gpg_keys"],
    listPublicEmails: ["GET /user/public_emails"],
    listPublicKeys: ["GET /user/keys"],
    listPublicKeysForUser: ["GET /users/:username/keys"],
    unfollow: ["DELETE /user/following/:username"],
    updateAuthenticated: ["PATCH /user"],
  },
};

export default Endpoints;
