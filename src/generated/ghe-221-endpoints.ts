import { EndpointsDefaultsAndDecorations } from "../types";
const Endpoints: EndpointsDefaultsAndDecorations = {
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
      { mediaType: { previews: ["machine-man"] } },
    ],
    checkAuthorization: [
      "GET /applications/{client_id}/tokens/{access_token}",
      {},
      {
        deprecated:
          "octokit.scim.checkAuthorization() is deprecated, see https://docs.github.com/enterprise-server@2.21/rest/reference/apps#check-an-authorization",
      },
    ],
    checkToken: ["POST /applications/{client_id}/token"],
    createContentAttachment: [
      "POST /content_references/{content_reference_id}/attachments",
      { mediaType: { previews: ["corsair"] } },
    ],
    createFromManifest: ["POST /app-manifests/{code}/conversions"],
    createInstallationAccessToken: [
      "POST /app/installations/{installation_id}/access_tokens",
      { mediaType: { previews: ["machine-man"] } },
    ],
    deleteAuthorization: ["DELETE /applications/{client_id}/grant"],
    deleteInstallation: [
      "DELETE /app/installations/{installation_id}",
      { mediaType: { previews: ["machine-man"] } },
    ],
    deleteToken: ["DELETE /applications/{client_id}/token"],
    getAuthenticated: [
      "GET /app",
      { mediaType: { previews: ["machine-man"] } },
    ],
    getBySlug: [
      "GET /apps/{app_slug}",
      { mediaType: { previews: ["machine-man"] } },
    ],
    getInstallation: [
      "GET /app/installations/{installation_id}",
      { mediaType: { previews: ["machine-man"] } },
    ],
    getOrgInstallation: [
      "GET /orgs/{org}/installation",
      { mediaType: { previews: ["machine-man"] } },
    ],
    getRepoInstallation: [
      "GET /repos/{owner}/{repo}/installation",
      { mediaType: { previews: ["machine-man"] } },
    ],
    getUserInstallation: [
      "GET /users/{username}/installation",
      { mediaType: { previews: ["machine-man"] } },
    ],
    listInstallationReposForAuthenticatedUser: [
      "GET /user/installations/{installation_id}/repositories",
      { mediaType: { previews: ["machine-man"] } },
    ],
    listInstallations: [
      "GET /app/installations",
      { mediaType: { previews: ["machine-man"] } },
    ],
    listInstallationsForAuthenticatedUser: [
      "GET /user/installations",
      { mediaType: { previews: ["machine-man"] } },
    ],
    listReposAccessibleToInstallation: [
      "GET /installation/repositories",
      { mediaType: { previews: ["machine-man"] } },
    ],
    removeRepoFromInstallation: [
      "DELETE /user/installations/{installation_id}/repositories/{repository_id}",
      { mediaType: { previews: ["machine-man"] } },
    ],
    resetAuthorization: [
      "POST /applications/{client_id}/tokens/{access_token}",
      {},
      {
        deprecated:
          "octokit.scim.resetAuthorization() is deprecated, see https://docs.github.com/enterprise-server@2.21/rest/reference/apps#reset-an-authorization",
      },
    ],
    resetToken: ["PATCH /applications/{client_id}/token"],
    revokeAuthorizationForApplication: [
      "DELETE /applications/{client_id}/tokens/{access_token}",
      {},
      {
        deprecated:
          "octokit.scim.revokeAuthorizationForApplication() is deprecated, see https://docs.github.com/enterprise-server@2.21/rest/reference/apps#revoke-an-authorization-for-an-application",
      },
    ],
    revokeGrantForApplication: [
      "DELETE /applications/{client_id}/grants/{access_token}",
      {},
      {
        deprecated:
          "octokit.scim.revokeGrantForApplication() is deprecated, see https://docs.github.com/enterprise-server@2.21/rest/reference/apps#revoke-a-grant-for-an-application",
      },
    ],
    revokeInstallationAccessToken: ["DELETE /installation/token"],
  },
  checks: {
    create: [
      "POST /repos/{owner}/{repo}/check-runs",
      { mediaType: { previews: ["antiope"] } },
    ],
    createSuite: [
      "POST /repos/{owner}/{repo}/check-suites",
      { mediaType: { previews: ["antiope"] } },
    ],
    get: [
      "GET /repos/{owner}/{repo}/check-runs/{check_run_id}",
      { mediaType: { previews: ["antiope"] } },
    ],
    getSuite: [
      "GET /repos/{owner}/{repo}/check-suites/{check_suite_id}",
      { mediaType: { previews: ["antiope"] } },
    ],
    listAnnotations: [
      "GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations",
      { mediaType: { previews: ["antiope"] } },
    ],
    listForRef: [
      "GET /repos/{owner}/{repo}/commits/{ref}/check-runs",
      { mediaType: { previews: ["antiope"] } },
    ],
    listForSuite: [
      "GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs",
      { mediaType: { previews: ["antiope"] } },
    ],
    listSuitesForRef: [
      "GET /repos/{owner}/{repo}/commits/{ref}/check-suites",
      { mediaType: { previews: ["antiope"] } },
    ],
    rerequestSuite: [
      "POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest",
      { mediaType: { previews: ["antiope"] } },
    ],
    setSuitesPreferences: [
      "PATCH /repos/{owner}/{repo}/check-suites/preferences",
      { mediaType: { previews: ["antiope"] } },
    ],
    update: [
      "PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}",
      { mediaType: { previews: ["antiope"] } },
    ],
  },
  codesOfConduct: {
    getAllCodesOfConduct: [
      "GET /codes_of_conduct",
      { mediaType: { previews: ["scarlet-witch"] } },
    ],
    getConductCode: [
      "GET /codes_of_conduct/{key}",
      { mediaType: { previews: ["scarlet-witch"] } },
    ],
  },
  emojis: { get: ["GET /emojis"] },
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
      { mediaType: { previews: ["mockingbird"] } },
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
    list: ["GET /organizations"],
    listAppInstallations: [
      "GET /orgs/{org}/installations",
      { mediaType: { previews: ["machine-man"] } },
    ],
    listForAuthenticatedUser: ["GET /user/orgs"],
    listForUser: ["GET /users/{username}/orgs"],
    listMembers: ["GET /orgs/{org}/members"],
    listMembershipsForAuthenticatedUser: ["GET /user/memberships/orgs"],
    listOutsideCollaborators: ["GET /orgs/{org}/outside_collaborators"],
    listPublicMembers: ["GET /orgs/{org}/public_members"],
    listWebhooks: ["GET /orgs/{org}/hooks"],
    pingWebhook: ["POST /orgs/{org}/hooks/{hook_id}/pings"],
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
  },
  projects: {
    addCollaborator: [
      "PUT /projects/{project_id}/collaborators/{username}",
      { mediaType: { previews: ["inertia"] } },
    ],
    createCard: [
      "POST /projects/columns/{column_id}/cards",
      { mediaType: { previews: ["inertia"] } },
    ],
    createColumn: [
      "POST /projects/{project_id}/columns",
      { mediaType: { previews: ["inertia"] } },
    ],
    createForAuthenticatedUser: [
      "POST /user/projects",
      { mediaType: { previews: ["inertia"] } },
    ],
    createForOrg: [
      "POST /orgs/{org}/projects",
      { mediaType: { previews: ["inertia"] } },
    ],
    createForRepo: [
      "POST /repos/{owner}/{repo}/projects",
      { mediaType: { previews: ["inertia"] } },
    ],
    delete: [
      "DELETE /projects/{project_id}",
      { mediaType: { previews: ["inertia"] } },
    ],
    deleteCard: [
      "DELETE /projects/columns/cards/{card_id}",
      { mediaType: { previews: ["inertia"] } },
    ],
    deleteColumn: [
      "DELETE /projects/columns/{column_id}",
      { mediaType: { previews: ["inertia"] } },
    ],
    get: [
      "GET /projects/{project_id}",
      { mediaType: { previews: ["inertia"] } },
    ],
    getCard: [
      "GET /projects/columns/cards/{card_id}",
      { mediaType: { previews: ["inertia"] } },
    ],
    getColumn: [
      "GET /projects/columns/{column_id}",
      { mediaType: { previews: ["inertia"] } },
    ],
    getPermissionForUser: [
      "GET /projects/{project_id}/collaborators/{username}/permission",
      { mediaType: { previews: ["inertia"] } },
    ],
    listCards: [
      "GET /projects/columns/{column_id}/cards",
      { mediaType: { previews: ["inertia"] } },
    ],
    listCollaborators: [
      "GET /projects/{project_id}/collaborators",
      { mediaType: { previews: ["inertia"] } },
    ],
    listColumns: [
      "GET /projects/{project_id}/columns",
      { mediaType: { previews: ["inertia"] } },
    ],
    listForOrg: [
      "GET /orgs/{org}/projects",
      { mediaType: { previews: ["inertia"] } },
    ],
    listForRepo: [
      "GET /repos/{owner}/{repo}/projects",
      { mediaType: { previews: ["inertia"] } },
    ],
    listForUser: [
      "GET /users/{username}/projects",
      { mediaType: { previews: ["inertia"] } },
    ],
    moveCard: [
      "POST /projects/columns/cards/{card_id}/moves",
      { mediaType: { previews: ["inertia"] } },
    ],
    moveColumn: [
      "POST /projects/columns/{column_id}/moves",
      { mediaType: { previews: ["inertia"] } },
    ],
    removeCollaborator: [
      "DELETE /projects/{project_id}/collaborators/{username}",
      { mediaType: { previews: ["inertia"] } },
    ],
    update: [
      "PATCH /projects/{project_id}",
      { mediaType: { previews: ["inertia"] } },
    ],
    updateCard: [
      "PATCH /projects/columns/cards/{card_id}",
      { mediaType: { previews: ["inertia"] } },
    ],
    updateColumn: [
      "PATCH /projects/columns/{column_id}",
      { mediaType: { previews: ["inertia"] } },
    ],
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
      { mediaType: { previews: ["lydian"] } },
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
      { mediaType: { previews: ["squirrel-girl"] } },
    ],
    createForIssue: [
      "POST /repos/{owner}/{repo}/issues/{issue_number}/reactions",
      { mediaType: { previews: ["squirrel-girl"] } },
    ],
    createForIssueComment: [
      "POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions",
      { mediaType: { previews: ["squirrel-girl"] } },
    ],
    createForPullRequestReviewComment: [
      "POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions",
      { mediaType: { previews: ["squirrel-girl"] } },
    ],
    createForTeamDiscussion: [
      "POST /teams/{team_id}/discussions/{discussion_number}/reactions",
    ],
    createForTeamDiscussionComment: [
      "POST /teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions",
    ],
    createForTeamDiscussionCommentInOrg: [
      "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions",
      { mediaType: { previews: ["squirrel-girl"] } },
    ],
    createForTeamDiscussionCommentLegacy: [
      "POST /teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions",
      { mediaType: { previews: ["squirrel-girl"] } },
      {
        deprecated:
          "octokit.scim.createForTeamDiscussionCommentLegacy() is deprecated, see https://docs.github.com/enterprise-server@2.21/rest/reference/reactions/#create-reaction-for-a-team-discussion-comment-legacy",
      },
    ],
    createForTeamDiscussionInOrg: [
      "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions",
      { mediaType: { previews: ["squirrel-girl"] } },
    ],
    createForTeamDiscussionLegacy: [
      "POST /teams/{team_id}/discussions/{discussion_number}/reactions",
      { mediaType: { previews: ["squirrel-girl"] } },
      {
        deprecated:
          "octokit.scim.createForTeamDiscussionLegacy() is deprecated, see https://docs.github.com/enterprise-server@2.21/rest/reference/reactions/#create-reaction-for-a-team-discussion-legacy",
      },
    ],
    delete: ["DELETE /reactions/{reaction_id}"],
    deleteForCommitComment: [
      "DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}",
      { mediaType: { previews: ["squirrel-girl"] } },
    ],
    deleteForIssue: [
      "DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}",
      { mediaType: { previews: ["squirrel-girl"] } },
    ],
    deleteForIssueComment: [
      "DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}",
      { mediaType: { previews: ["squirrel-girl"] } },
    ],
    deleteForPullRequestComment: [
      "DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}",
      { mediaType: { previews: ["squirrel-girl"] } },
    ],
    deleteForTeamDiscussion: [
      "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}",
      { mediaType: { previews: ["squirrel-girl"] } },
    ],
    deleteForTeamDiscussionComment: [
      "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}",
      { mediaType: { previews: ["squirrel-girl"] } },
    ],
    deleteLegacy: [
      "DELETE /reactions/{reaction_id}",
      { mediaType: { previews: ["squirrel-girl"] } },
      {
        deprecated:
          "octokit.scim.deleteLegacy() is deprecated, see https://docs.github.com/enterprise-server@2.21/rest/reference/reactions/#delete-a-reaction-legacy",
      },
    ],
    listForCommitComment: [
      "GET /repos/{owner}/{repo}/comments/{comment_id}/reactions",
      { mediaType: { previews: ["squirrel-girl"] } },
    ],
    listForIssue: [
      "GET /repos/{owner}/{repo}/issues/{issue_number}/reactions",
      { mediaType: { previews: ["squirrel-girl"] } },
    ],
    listForIssueComment: [
      "GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions",
      { mediaType: { previews: ["squirrel-girl"] } },
    ],
    listForPullRequestReviewComment: [
      "GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions",
      { mediaType: { previews: ["squirrel-girl"] } },
    ],
    listForTeamDiscussion: [
      "GET /teams/{team_id}/discussions/{discussion_number}/reactions",
    ],
    listForTeamDiscussionComment: [
      "GET /teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions",
    ],
    listForTeamDiscussionCommentInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions",
      { mediaType: { previews: ["squirrel-girl"] } },
    ],
    listForTeamDiscussionCommentLegacy: [
      "GET /teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions",
      { mediaType: { previews: ["squirrel-girl"] } },
      {
        deprecated:
          "octokit.scim.listForTeamDiscussionCommentLegacy() is deprecated, see https://docs.github.com/enterprise-server@2.21/rest/reference/reactions/#list-reactions-for-a-team-discussion-comment-legacy",
      },
    ],
    listForTeamDiscussionInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions",
      { mediaType: { previews: ["squirrel-girl"] } },
    ],
    listForTeamDiscussionLegacy: [
      "GET /teams/{team_id}/discussions/{discussion_number}/reactions",
      { mediaType: { previews: ["squirrel-girl"] } },
      {
        deprecated:
          "octokit.scim.listForTeamDiscussionLegacy() is deprecated, see https://docs.github.com/enterprise-server@2.21/rest/reference/reactions/#list-reactions-for-a-team-discussion-legacy",
      },
    ],
  },
  repos: {
    acceptInvitation: ["PATCH /user/repository_invitations/{invitation_id}"],
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
    compareCommits: ["GET /repos/{owner}/{repo}/compare/{base}...{head}"],
    createCommitComment: [
      "POST /repos/{owner}/{repo}/commits/{commit_sha}/comments",
    ],
    createCommitSignatureProtection: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures",
      { mediaType: { previews: ["zzzax"] } },
    ],
    createCommitStatus: ["POST /repos/{owner}/{repo}/statuses/{sha}"],
    createDeployKey: ["POST /repos/{owner}/{repo}/keys"],
    createDeployment: ["POST /repos/{owner}/{repo}/deployments"],
    createDeploymentStatus: [
      "POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses",
    ],
    createDispatchEvent: ["POST /repos/{owner}/{repo}/dispatches"],
    createForAuthenticatedUser: ["POST /user/repos"],
    createFork: ["POST /repos/{owner}/{repo}/forks{?org,organization}"],
    createInOrg: ["POST /orgs/{org}/repos"],
    createOrUpdateFileContents: ["PUT /repos/{owner}/{repo}/contents/{path}"],
    createPagesSite: [
      "POST /repos/{owner}/{repo}/pages",
      { mediaType: { previews: ["switcheroo"] } },
    ],
    createRelease: ["POST /repos/{owner}/{repo}/releases"],
    createUsingTemplate: [
      "POST /repos/{template_owner}/{template_repo}/generate",
      { mediaType: { previews: ["baptiste"] } },
    ],
    createWebhook: ["POST /repos/{owner}/{repo}/hooks"],
    declineInvitation: ["DELETE /user/repository_invitations/{invitation_id}"],
    delete: ["DELETE /repos/{owner}/{repo}"],
    deleteAccessRestrictions: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions",
    ],
    deleteAdminBranchProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins",
    ],
    deleteBranchProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection",
    ],
    deleteCommitComment: ["DELETE /repos/{owner}/{repo}/comments/{comment_id}"],
    deleteCommitSignatureProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures",
      { mediaType: { previews: ["zzzax"] } },
    ],
    deleteDeployKey: ["DELETE /repos/{owner}/{repo}/keys/{key_id}"],
    deleteDeployment: [
      "DELETE /repos/{owner}/{repo}/deployments/{deployment_id}",
    ],
    deleteFile: ["DELETE /repos/{owner}/{repo}/contents/{path}"],
    deleteInvitation: [
      "DELETE /repos/{owner}/{repo}/invitations/{invitation_id}",
    ],
    deletePagesSite: [
      "DELETE /repos/{owner}/{repo}/pages",
      { mediaType: { previews: ["switcheroo"] } },
    ],
    deletePullRequestReviewProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews",
    ],
    deleteRelease: ["DELETE /repos/{owner}/{repo}/releases/{release_id}"],
    deleteReleaseAsset: [
      "DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}",
    ],
    deleteWebhook: ["DELETE /repos/{owner}/{repo}/hooks/{hook_id}"],
    disableVulnerabilityAlerts: [
      "DELETE /repos/{owner}/{repo}/vulnerability-alerts",
      { mediaType: { previews: ["dorian"] } },
    ],
    downloadTarballArchive: ["GET /repos/{owner}/{repo}/tarball/{ref}"],
    downloadZipballArchive: ["GET /repos/{owner}/{repo}/zipball/{ref}"],
    enableVulnerabilityAlerts: [
      "PUT /repos/{owner}/{repo}/vulnerability-alerts",
      { mediaType: { previews: ["dorian"] } },
    ],
    get: ["GET /repos/{owner}/{repo}"],
    getAccessRestrictions: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions",
    ],
    getAdminBranchProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins",
    ],
    getAllStatusCheckContexts: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
    ],
    getAllTopics: [
      "GET /repos/{owner}/{repo}/topics",
      { mediaType: { previews: ["mercy"] } },
    ],
    getAppsWithAccessToProtectedBranch: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
    ],
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
      { mediaType: { previews: ["zzzax"] } },
    ],
    getContent: ["GET /repos/{owner}/{repo}/contents/{path}"],
    getContributorsStats: ["GET /repos/{owner}/{repo}/stats/contributors"],
    getDeployKey: ["GET /repos/{owner}/{repo}/keys/{key_id}"],
    getDeployment: ["GET /repos/{owner}/{repo}/deployments/{deployment_id}"],
    getDeploymentStatus: [
      "GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}",
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
    listBranches: ["GET /repos/{owner}/{repo}/branches"],
    listBranchesForHeadCommit: [
      "GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head",
      { mediaType: { previews: ["groot"] } },
    ],
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
      { mediaType: { previews: ["groot"] } },
    ],
    listReleaseAssets: [
      "GET /repos/{owner}/{repo}/releases/{release_id}/assets",
    ],
    listReleases: ["GET /repos/{owner}/{repo}/releases"],
    listTags: ["GET /repos/{owner}/{repo}/tags"],
    listTeams: ["GET /repos/{owner}/{repo}/teams"],
    listWebhooks: ["GET /repos/{owner}/{repo}/hooks"],
    merge: ["POST /repos/{owner}/{repo}/merges"],
    pingWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/pings"],
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
    replaceAllTopics: [
      "PUT /repos/{owner}/{repo}/topics",
      { mediaType: { previews: ["mercy"] } },
    ],
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
    uploadReleaseAsset: [
      "POST {origin}/repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}",
    ],
  },
  search: {
    code: ["GET /search/code"],
    commits: ["GET /search/commits", { mediaType: { previews: ["cloak"] } }],
    issuesAndPullRequests: ["GET /search/issues"],
    labels: ["GET /search/labels"],
    repos: ["GET /search/repositories"],
    topics: ["GET /search/topics", { mediaType: { previews: ["mercy"] } }],
    users: ["GET /search/users"],
  },
  teams: {
    addMemberLegacy: [
      "PUT /teams/{team_id}/members/{username}",
      {},
      {
        deprecated:
          "octokit.scim.addMemberLegacy() is deprecated, see https://docs.github.com/enterprise-server@2.21/rest/reference/teams#add-team-member-legacy",
      },
    ],
    addOrUpdateMembershipForUser: [
      "PUT /teams/{team_id}/memberships/{username}",
    ],
    addOrUpdateMembershipForUserInOrg: [
      "PUT /orgs/{org}/teams/{team_slug}/memberships/{username}",
    ],
    addOrUpdateMembershipForUserLegacy: [
      "PUT /teams/{team_id}/memberships/{username}",
      {},
      {
        deprecated:
          "octokit.scim.addOrUpdateMembershipForUserLegacy() is deprecated, see https://docs.github.com/enterprise-server@2.21/rest/reference/teams#add-or-update-team-membership-for-a-user-legacy",
      },
    ],
    addOrUpdateProjectPermissions: [
      "PUT /teams/{team_id}/projects/{project_id}",
    ],
    addOrUpdateProjectPermissionsInOrg: [
      "PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}",
      { mediaType: { previews: ["inertia"] } },
    ],
    addOrUpdateProjectPermissionsLegacy: [
      "PUT /teams/{team_id}/projects/{project_id}",
      { mediaType: { previews: ["inertia"] } },
      {
        deprecated:
          "octokit.scim.addOrUpdateProjectPermissionsLegacy() is deprecated, see https://docs.github.com/enterprise-server@2.21/rest/reference/teams/#add-or-update-team-project-permissions-legacy",
      },
    ],
    addOrUpdateRepoPermissions: ["PUT /teams/{team_id}/repos/{owner}/{repo}"],
    addOrUpdateRepoPermissionsInOrg: [
      "PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}",
    ],
    addOrUpdateRepoPermissionsLegacy: [
      "PUT /teams/{team_id}/repos/{owner}/{repo}",
      {},
      {
        deprecated:
          "octokit.scim.addOrUpdateRepoPermissionsLegacy() is deprecated, see https://docs.github.com/enterprise-server@2.21/rest/reference/teams/#add-or-update-team-repository-permissions-legacy",
      },
    ],
    checkPermissionsForProject: ["GET /teams/{team_id}/projects/{project_id}"],
    checkPermissionsForProjectInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/projects/{project_id}",
      { mediaType: { previews: ["inertia"] } },
    ],
    checkPermissionsForProjectLegacy: [
      "GET /teams/{team_id}/projects/{project_id}",
      { mediaType: { previews: ["inertia"] } },
      {
        deprecated:
          "octokit.scim.checkPermissionsForProjectLegacy() is deprecated, see https://docs.github.com/enterprise-server@2.21/rest/reference/teams/#check-team-permissions-for-a-project-legacy",
      },
    ],
    checkPermissionsForRepo: ["GET /teams/{team_id}/repos/{owner}/{repo}"],
    checkPermissionsForRepoInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}",
    ],
    checkPermissionsForRepoLegacy: [
      "GET /teams/{team_id}/repos/{owner}/{repo}",
      {},
      {
        deprecated:
          "octokit.scim.checkPermissionsForRepoLegacy() is deprecated, see https://docs.github.com/enterprise-server@2.21/rest/reference/teams/#check-team-permissions-for-a-repository-legacy",
      },
    ],
    create: ["POST /orgs/{org}/teams"],
    createDiscussion: ["POST /teams/{team_id}/discussions"],
    createDiscussionComment: [
      "POST /teams/{team_id}/discussions/{discussion_number}/comments",
    ],
    createDiscussionCommentInOrg: [
      "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments",
    ],
    createDiscussionCommentLegacy: [
      "POST /teams/{team_id}/discussions/{discussion_number}/comments",
      {},
      {
        deprecated:
          "octokit.scim.createDiscussionCommentLegacy() is deprecated, see https://docs.github.com/enterprise-server@2.21/rest/reference/teams#create-a-discussion-comment-legacy",
      },
    ],
    createDiscussionInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions"],
    createDiscussionLegacy: [
      "POST /teams/{team_id}/discussions",
      {},
      {
        deprecated:
          "octokit.scim.createDiscussionLegacy() is deprecated, see https://docs.github.com/enterprise-server@2.21/rest/reference/teams#create-a-discussion-legacy",
      },
    ],
    delete: ["DELETE /teams/{team_id}"],
    deleteDiscussion: [
      "DELETE /teams/{team_id}/discussions/{discussion_number}",
    ],
    deleteDiscussionComment: [
      "DELETE /teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}",
    ],
    deleteDiscussionCommentInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}",
    ],
    deleteDiscussionCommentLegacy: [
      "DELETE /teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}",
      {},
      {
        deprecated:
          "octokit.scim.deleteDiscussionCommentLegacy() is deprecated, see https://docs.github.com/enterprise-server@2.21/rest/reference/teams#delete-a-discussion-comment-legacy",
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
          "octokit.scim.deleteDiscussionLegacy() is deprecated, see https://docs.github.com/enterprise-server@2.21/rest/reference/teams#delete-a-discussion-legacy",
      },
    ],
    deleteInOrg: ["DELETE /orgs/{org}/teams/{team_slug}"],
    deleteLegacy: [
      "DELETE /teams/{team_id}",
      {},
      {
        deprecated:
          "octokit.scim.deleteLegacy() is deprecated, see https://docs.github.com/enterprise-server@2.21/rest/reference/teams/#delete-a-team-legacy",
      },
    ],
    get: ["GET /teams/{team_id}"],
    getByName: ["GET /orgs/{org}/teams/{team_slug}"],
    getDiscussion: ["GET /teams/{team_id}/discussions/{discussion_number}"],
    getDiscussionComment: [
      "GET /teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}",
    ],
    getDiscussionCommentInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}",
    ],
    getDiscussionCommentLegacy: [
      "GET /teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}",
      {},
      {
        deprecated:
          "octokit.scim.getDiscussionCommentLegacy() is deprecated, see https://docs.github.com/enterprise-server@2.21/rest/reference/teams#get-a-discussion-comment-legacy",
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
          "octokit.scim.getDiscussionLegacy() is deprecated, see https://docs.github.com/enterprise-server@2.21/rest/reference/teams#get-a-discussion-legacy",
      },
    ],
    getLegacy: [
      "GET /teams/{team_id}",
      {},
      {
        deprecated:
          "octokit.scim.getLegacy() is deprecated, see https://docs.github.com/enterprise-server@2.21/rest/reference/teams/#get-a-team-legacy",
      },
    ],
    getMemberLegacy: [
      "GET /teams/{team_id}/members/{username}",
      {},
      {
        deprecated:
          "octokit.scim.getMemberLegacy() is deprecated, see https://docs.github.com/enterprise-server@2.21/rest/reference/teams#get-team-member-legacy",
      },
    ],
    getMembershipForUser: ["GET /teams/{team_id}/memberships/{username}"],
    getMembershipForUserInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/memberships/{username}",
    ],
    getMembershipForUserLegacy: [
      "GET /teams/{team_id}/memberships/{username}",
      {},
      {
        deprecated:
          "octokit.scim.getMembershipForUserLegacy() is deprecated, see https://docs.github.com/enterprise-server@2.21/rest/reference/teams#get-team-membership-for-a-user-legacy",
      },
    ],
    list: ["GET /orgs/{org}/teams"],
    listChild: ["GET /teams/{team_id}/teams"],
    listChildInOrg: ["GET /orgs/{org}/teams/{team_slug}/teams"],
    listChildLegacy: [
      "GET /teams/{team_id}/teams",
      {},
      {
        deprecated:
          "octokit.scim.listChildLegacy() is deprecated, see https://docs.github.com/enterprise-server@2.21/rest/reference/teams/#list-child-teams-legacy",
      },
    ],
    listDiscussionComments: [
      "GET /teams/{team_id}/discussions/{discussion_number}/comments",
    ],
    listDiscussionCommentsInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments",
    ],
    listDiscussionCommentsLegacy: [
      "GET /teams/{team_id}/discussions/{discussion_number}/comments",
      {},
      {
        deprecated:
          "octokit.scim.listDiscussionCommentsLegacy() is deprecated, see https://docs.github.com/enterprise-server@2.21/rest/reference/teams#list-discussion-comments-legacy",
      },
    ],
    listDiscussions: ["GET /teams/{team_id}/discussions"],
    listDiscussionsInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions"],
    listDiscussionsLegacy: [
      "GET /teams/{team_id}/discussions",
      {},
      {
        deprecated:
          "octokit.scim.listDiscussionsLegacy() is deprecated, see https://docs.github.com/enterprise-server@2.21/rest/reference/teams#list-discussions-legacy",
      },
    ],
    listForAuthenticatedUser: ["GET /user/teams"],
    listMembers: ["GET /teams/{team_id}/members"],
    listMembersInOrg: ["GET /orgs/{org}/teams/{team_slug}/members"],
    listMembersLegacy: [
      "GET /teams/{team_id}/members",
      {},
      {
        deprecated:
          "octokit.scim.listMembersLegacy() is deprecated, see https://docs.github.com/enterprise-server@2.21/rest/reference/teams#list-team-members-legacy",
      },
    ],
    listProjects: ["GET /teams/{team_id}/projects"],
    listProjectsInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/projects",
      { mediaType: { previews: ["inertia"] } },
    ],
    listProjectsLegacy: [
      "GET /teams/{team_id}/projects",
      { mediaType: { previews: ["inertia"] } },
      {
        deprecated:
          "octokit.scim.listProjectsLegacy() is deprecated, see https://docs.github.com/enterprise-server@2.21/rest/reference/teams/#list-team-projects-legacy",
      },
    ],
    listRepos: ["GET /teams/{team_id}/repos"],
    listReposInOrg: ["GET /orgs/{org}/teams/{team_slug}/repos"],
    listReposLegacy: [
      "GET /teams/{team_id}/repos",
      {},
      {
        deprecated:
          "octokit.scim.listReposLegacy() is deprecated, see https://docs.github.com/enterprise-server@2.21/rest/reference/teams/#list-team-repositories-legacy",
      },
    ],
    removeMemberLegacy: [
      "DELETE /teams/{team_id}/members/{username}",
      {},
      {
        deprecated:
          "octokit.scim.removeMemberLegacy() is deprecated, see https://docs.github.com/enterprise-server@2.21/rest/reference/teams#remove-team-member-legacy",
      },
    ],
    removeMembershipForUser: ["DELETE /teams/{team_id}/memberships/{username}"],
    removeMembershipForUserInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}",
    ],
    removeMembershipForUserLegacy: [
      "DELETE /teams/{team_id}/memberships/{username}",
      {},
      {
        deprecated:
          "octokit.scim.removeMembershipForUserLegacy() is deprecated, see https://docs.github.com/enterprise-server@2.21/rest/reference/teams#remove-team-membership-for-a-user-legacy",
      },
    ],
    removeProject: ["DELETE /teams/{team_id}/projects/{project_id}"],
    removeProjectInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}",
    ],
    removeProjectLegacy: [
      "DELETE /teams/{team_id}/projects/{project_id}",
      {},
      {
        deprecated:
          "octokit.scim.removeProjectLegacy() is deprecated, see https://docs.github.com/enterprise-server@2.21/rest/reference/teams/#remove-a-project-from-a-team-legacy",
      },
    ],
    removeRepo: ["DELETE /teams/{team_id}/repos/{owner}/{repo}"],
    removeRepoInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}",
    ],
    removeRepoLegacy: [
      "DELETE /teams/{team_id}/repos/{owner}/{repo}",
      {},
      {
        deprecated:
          "octokit.scim.removeRepoLegacy() is deprecated, see https://docs.github.com/enterprise-server@2.21/rest/reference/teams/#remove-a-repository-from-a-team-legacy",
      },
    ],
    update: ["PATCH /teams/{team_id}"],
    updateDiscussion: [
      "PATCH /teams/{team_id}/discussions/{discussion_number}",
    ],
    updateDiscussionComment: [
      "PATCH /teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}",
    ],
    updateDiscussionCommentInOrg: [
      "PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}",
    ],
    updateDiscussionCommentLegacy: [
      "PATCH /teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}",
      {},
      {
        deprecated:
          "octokit.scim.updateDiscussionCommentLegacy() is deprecated, see https://docs.github.com/enterprise-server@2.21/rest/reference/teams#update-a-discussion-comment-legacy",
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
          "octokit.scim.updateDiscussionLegacy() is deprecated, see https://docs.github.com/enterprise-server@2.21/rest/reference/teams#update-a-discussion-legacy",
      },
    ],
    updateInOrg: ["PATCH /orgs/{org}/teams/{team_slug}"],
    updateLegacy: [
      "PATCH /teams/{team_id}",
      {},
      {
        deprecated:
          "octokit.scim.updateLegacy() is deprecated, see https://docs.github.com/enterprise-server@2.21/rest/reference/teams/#update-a-team-legacy",
      },
    ],
  },
  users: {
    addEmailForAuthenticated: ["POST /user/emails"],
    checkFollowingForUser: ["GET /users/{username}/following/{target_user}"],
    checkPersonIsFollowedByAuthenticated: ["GET /user/following/{username}"],
    createGpgKeyForAuthenticated: ["POST /user/gpg_keys"],
    createPublicSshKeyForAuthenticated: ["POST /user/keys"],
    deleteEmailForAuthenticated: ["DELETE /user/emails"],
    deleteGpgKeyForAuthenticated: ["DELETE /user/gpg_keys/{gpg_key_id}"],
    deletePublicSshKeyForAuthenticated: ["DELETE /user/keys/{key_id}"],
    follow: ["PUT /user/following/{username}"],
    getAuthenticated: ["GET /user"],
    getByUsername: ["GET /users/{username}"],
    getContextForUser: ["GET /users/{username}/hovercard"],
    getGpgKeyForAuthenticated: ["GET /user/gpg_keys/{gpg_key_id}"],
    getPublicSshKeyForAuthenticated: ["GET /user/keys/{key_id}"],
    list: ["GET /users"],
    listEmailsForAuthenticated: ["GET /user/emails"],
    listFollowedByAuthenticated: ["GET /user/following"],
    listFollowersForAuthenticatedUser: ["GET /user/followers"],
    listFollowersForUser: ["GET /users/{username}/followers"],
    listFollowingForUser: ["GET /users/{username}/following"],
    listGpgKeysForAuthenticated: ["GET /user/gpg_keys"],
    listGpgKeysForUser: ["GET /users/{username}/gpg_keys"],
    listPublicEmailsForAuthenticated: ["GET /user/public_emails"],
    listPublicKeysForUser: ["GET /users/{username}/keys"],
    listPublicSshKeysForAuthenticated: ["GET /user/keys"],
    unfollow: ["DELETE /user/following/{username}"],
    updateAuthenticated: ["PATCH /user"],
  },
};

export default Endpoints;
