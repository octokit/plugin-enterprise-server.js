import { Endpoints, RequestParameters } from "@octokit/types";

export type RestEndpointMethodTypes = {
  activity: {
    checkRepoIsStarredByAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/starred/{owner}/{repo}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/starred/{owner}/{repo}"]["response"];
    };
    deleteRepoSubscription: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/subscription"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/subscription"]["response"];
    };
    deleteThreadSubscription: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /notifications/threads/{thread_id}/subscription"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /notifications/threads/{thread_id}/subscription"]["response"];
    };
    getFeeds: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /feeds"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /feeds"]["response"];
    };
    getRepoSubscription: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/subscription"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/subscription"]["response"];
    };
    getThread: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /notifications/threads/{thread_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /notifications/threads/{thread_id}"]["response"];
    };
    getThreadSubscriptionForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /notifications/threads/{thread_id}/subscription"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /notifications/threads/{thread_id}/subscription"]["response"];
    };
    listEventsForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/{username}/events"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/{username}/events"]["response"];
    };
    listNotificationsForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /notifications"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /notifications"]["response"];
    };
    listOrgEventsForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/{username}/events/orgs/{org}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/{username}/events/orgs/{org}"]["response"];
    };
    listPublicEvents: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /events"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /events"]["response"];
    };
    listPublicEventsForRepoNetwork: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /networks/{owner}/{repo}/events"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /networks/{owner}/{repo}/events"]["response"];
    };
    listPublicEventsForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/{username}/events/public"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/{username}/events/public"]["response"];
    };
    listPublicOrgEvents: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/events"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/events"]["response"];
    };
    listReceivedEventsForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/{username}/received_events"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/{username}/received_events"]["response"];
    };
    listReceivedPublicEventsForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/{username}/received_events/public"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/{username}/received_events/public"]["response"];
    };
    listRepoEvents: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/events"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/events"]["response"];
    };
    listRepoNotificationsForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/notifications"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/notifications"]["response"];
    };
    listReposStarredByAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/starred"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/starred"]["response"];
    };
    listReposStarredByUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/{username}/starred"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/{username}/starred"]["response"];
    };
    listReposWatchedByUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/{username}/subscriptions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/{username}/subscriptions"]["response"];
    };
    listStargazersForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/stargazers"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/stargazers"]["response"];
    };
    listWatchedReposForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/subscriptions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/subscriptions"]["response"];
    };
    listWatchersForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/subscribers"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/subscribers"]["response"];
    };
    markNotificationsAsRead: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /notifications"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /notifications"]["response"];
    };
    markRepoNotificationsAsRead: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/notifications"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/notifications"]["response"];
    };
    markThreadAsRead: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /notifications/threads/{thread_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /notifications/threads/{thread_id}"]["response"];
    };
    setRepoSubscription: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/subscription"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/subscription"]["response"];
    };
    setThreadSubscription: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /notifications/threads/{thread_id}/subscription"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /notifications/threads/{thread_id}/subscription"]["response"];
    };
    starRepoForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /user/starred/{owner}/{repo}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /user/starred/{owner}/{repo}"]["response"];
    };
    unstarRepoForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /user/starred/{owner}/{repo}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /user/starred/{owner}/{repo}"]["response"];
    };
  };
  apps: {
    addRepoToInstallation: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /user/installations/{installation_id}/repositories/{repository_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /user/installations/{installation_id}/repositories/{repository_id}"]["response"];
    };
    checkToken: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /applications/{client_id}/token"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /applications/{client_id}/token"]["response"];
    };
    createContentAttachment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /content_references/{content_reference_id}/attachments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /content_references/{content_reference_id}/attachments"]["response"];
    };
    createContentAttachmentForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/content_references/{content_reference_id}/attachments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/content_references/{content_reference_id}/attachments"]["response"];
    };
    createFromManifest: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /app-manifests/{code}/conversions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /app-manifests/{code}/conversions"]["response"];
    };
    createInstallationAccessToken: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /app/installations/{installation_id}/access_tokens"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /app/installations/{installation_id}/access_tokens"]["response"];
    };
    deleteAuthorization: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /applications/{client_id}/grant"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /applications/{client_id}/grant"]["response"];
    };
    deleteInstallation: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /app/installations/{installation_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /app/installations/{installation_id}"]["response"];
    };
    deleteToken: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /applications/{client_id}/token"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /applications/{client_id}/token"]["response"];
    };
    getAuthenticated: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /app"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /app"]["response"];
    };
    getBySlug: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /apps/{app_slug}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /apps/{app_slug}"]["response"];
    };
    getInstallation: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /app/installations/{installation_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /app/installations/{installation_id}"]["response"];
    };
    getOrgInstallation: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/installation"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/installation"]["response"];
    };
    getRepoInstallation: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/installation"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/installation"]["response"];
    };
    getUserInstallation: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/{username}/installation"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/{username}/installation"]["response"];
    };
    listInstallationReposForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/installations/{installation_id}/repositories"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/installations/{installation_id}/repositories"]["response"];
    };
    listInstallations: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /app/installations"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /app/installations"]["response"];
    };
    listInstallationsForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/installations"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/installations"]["response"];
    };
    listReposAccessibleToInstallation: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /installation/repositories"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /installation/repositories"]["response"];
    };
    removeRepoFromInstallation: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /user/installations/{installation_id}/repositories/{repository_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /user/installations/{installation_id}/repositories/{repository_id}"]["response"];
    };
    resetToken: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /applications/{client_id}/token"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /applications/{client_id}/token"]["response"];
    };
    revokeInstallationAccessToken: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /installation/token"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /installation/token"]["response"];
    };
  };
  checks: {
    create: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/check-runs"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/check-runs"]["response"];
    };
    createSuite: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/check-suites"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/check-suites"]["response"];
    };
    get: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/check-runs/{check_run_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/check-runs/{check_run_id}"]["response"];
    };
    getSuite: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}"]["response"];
    };
    listAnnotations: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations"]["response"];
    };
    listForRef: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/commits/{ref}/check-runs"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/commits/{ref}/check-runs"]["response"];
    };
    listForSuite: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs"]["response"];
    };
    listSuitesForRef: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/commits/{ref}/check-suites"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/commits/{ref}/check-suites"]["response"];
    };
    rerequestSuite: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest"]["response"];
    };
    setSuitesPreferences: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/{owner}/{repo}/check-suites/preferences"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/{owner}/{repo}/check-suites/preferences"]["response"];
    };
    update: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}"]["response"];
    };
  };
  codesOfConduct: {
    getAllCodesOfConduct: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /codes_of_conduct"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /codes_of_conduct"]["response"];
    };
    getConductCode: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /codes_of_conduct/{key}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /codes_of_conduct/{key}"]["response"];
    };
  };
  emojis: {
    get: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /emojis"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /emojis"]["response"];
    };
  };
  enterpriseAdmin: {
    addAuthorizedSshKey: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /setup/api/settings/authorized-keys"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /setup/api/settings/authorized-keys"]["response"];
    };
    createEnterpriseServerLicense: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /setup/api/start"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /setup/api/start"]["response"];
    };
    createGlobalWebhook: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /admin/hooks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /admin/hooks"]["response"];
    };
    createImpersonationOAuthToken: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /admin/users/{username}/authorizations"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /admin/users/{username}/authorizations"]["response"];
    };
    createOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /admin/organizations"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /admin/organizations"]["response"];
    };
    createPreReceiveEnvironment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /admin/pre-receive-environments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /admin/pre-receive-environments"]["response"];
    };
    createPreReceiveHook: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /admin/pre-receive-hooks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /admin/pre-receive-hooks"]["response"];
    };
    createUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /admin/users"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /admin/users"]["response"];
    };
    deleteGlobalWebhook: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /admin/hooks/{hook_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /admin/hooks/{hook_id}"]["response"];
    };
    deleteImpersonationOAuthToken: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /admin/users/{username}/authorizations"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /admin/users/{username}/authorizations"]["response"];
    };
    deletePersonalAccessToken: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /admin/tokens/{token_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /admin/tokens/{token_id}"]["response"];
    };
    deletePreReceiveEnvironment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /admin/pre-receive-environments/{pre_receive_environment_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /admin/pre-receive-environments/{pre_receive_environment_id}"]["response"];
    };
    deletePreReceiveHook: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /admin/pre-receive-hooks/{pre_receive_hook_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /admin/pre-receive-hooks/{pre_receive_hook_id}"]["response"];
    };
    deletePublicKey: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /admin/keys/{key_ids}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /admin/keys/{key_ids}"]["response"];
    };
    deleteUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /admin/users/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /admin/users/{username}"]["response"];
    };
    demoteSiteAdministrator: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /users/{username}/site_admin"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /users/{username}/site_admin"]["response"];
    };
    enableOrDisableMaintenanceMode: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /setup/api/maintenance"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /setup/api/maintenance"]["response"];
    };
    getAllAuthorizedSshKeys: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /setup/api/settings/authorized-keys"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /setup/api/settings/authorized-keys"]["response"];
    };
    getAllStats: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /enterprise/stats/gists"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /enterprise/stats/gists"]["response"];
    };
    getCommentStats: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /enterprise/stats/comments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /enterprise/stats/comments"]["response"];
    };
    getConfigurationStatus: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /setup/api/configcheck"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /setup/api/configcheck"]["response"];
    };
    getDownloadStatusForPreReceiveEnvironment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /admin/pre-receive-environments/{pre_receive_environment_id}/downloads/latest"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /admin/pre-receive-environments/{pre_receive_environment_id}/downloads/latest"]["response"];
    };
    getGlobalWebhook: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /admin/hooks/{hook_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /admin/hooks/{hook_id}"]["response"];
    };
    getHooksStats: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /enterprise/stats/hooks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /enterprise/stats/hooks"]["response"];
    };
    getIssueStats: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /enterprise/stats/issues"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /enterprise/stats/issues"]["response"];
    };
    getLicenseInformation: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /enterprise/settings/license"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /enterprise/settings/license"]["response"];
    };
    getMaintenanceStatus: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /setup/api/maintenance"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /setup/api/maintenance"]["response"];
    };
    getMilestoneStats: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /enterprise/stats/milestones"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /enterprise/stats/milestones"]["response"];
    };
    getOrgStats: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /enterprise/stats/orgs"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /enterprise/stats/orgs"]["response"];
    };
    getPagesStats: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /enterprise/stats/pages"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /enterprise/stats/pages"]["response"];
    };
    getPreReceiveEnvironment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /admin/pre-receive-environments/{pre_receive_environment_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /admin/pre-receive-environments/{pre_receive_environment_id}"]["response"];
    };
    getPreReceiveHook: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /admin/pre-receive-hooks/{pre_receive_hook_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /admin/pre-receive-hooks/{pre_receive_hook_id}"]["response"];
    };
    getPreReceiveHookForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}"]["response"];
    };
    getPreReceiveHookForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}"]["response"];
    };
    getPullRequestStats: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /enterprise/stats/pulls"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /enterprise/stats/pulls"]["response"];
    };
    getRepoStats: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /enterprise/stats/repos"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /enterprise/stats/repos"]["response"];
    };
    getSettings: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /setup/api/settings"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /setup/api/settings"]["response"];
    };
    getUserStats: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /enterprise/stats/users"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /enterprise/stats/users"]["response"];
    };
    listGlobalWebhooks: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /admin/hooks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /admin/hooks"]["response"];
    };
    listPersonalAccessTokens: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /admin/tokens"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /admin/tokens"]["response"];
    };
    listPreReceiveEnvironments: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /admin/pre-receive-environments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /admin/pre-receive-environments"]["response"];
    };
    listPreReceiveHooks: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /admin/pre-receive-hooks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /admin/pre-receive-hooks"]["response"];
    };
    listPreReceiveHooksForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/pre-receive-hooks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/pre-receive-hooks"]["response"];
    };
    listPreReceiveHooksForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/pre-receive-hooks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/pre-receive-hooks"]["response"];
    };
    listPublicKeys: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /admin/keys"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /admin/keys"]["response"];
    };
    pingGlobalWebhook: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /admin/hooks/{hook_id}/pings"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /admin/hooks/{hook_id}/pings"]["response"];
    };
    promoteUserToBeSiteAdministrator: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /users/{username}/site_admin"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /users/{username}/site_admin"]["response"];
    };
    removeAuthorizedSshKey: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /setup/api/settings/authorized-keys"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /setup/api/settings/authorized-keys"]["response"];
    };
    removePreReceiveHookEnforcementForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}"]["response"];
    };
    removePreReceiveHookEnforcementForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}"]["response"];
    };
    setSettings: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /setup/api/settings"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /setup/api/settings"]["response"];
    };
    startConfigurationProcess: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /setup/api/configure"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /setup/api/configure"]["response"];
    };
    startPreReceiveEnvironmentDownload: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /admin/pre-receive-environments/{pre_receive_environment_id}/downloads"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /admin/pre-receive-environments/{pre_receive_environment_id}/downloads"]["response"];
    };
    suspendUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /users/{username}/suspended"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /users/{username}/suspended"]["response"];
    };
    syncLdapMappingForTeam: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /admin/ldap/teams/{team_id}/sync"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /admin/ldap/teams/{team_id}/sync"]["response"];
    };
    syncLdapMappingForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /admin/ldap/users/{username}/sync"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /admin/ldap/users/{username}/sync"]["response"];
    };
    unsuspendUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /users/{username}/suspended"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /users/{username}/suspended"]["response"];
    };
    updateGlobalWebhook: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /admin/hooks/{hook_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /admin/hooks/{hook_id}"]["response"];
    };
    updateLdapMappingForTeam: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /admin/ldap/teams/{team_id}/mapping"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /admin/ldap/teams/{team_id}/mapping"]["response"];
    };
    updateLdapMappingForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /admin/ldap/users/{username}/mapping"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /admin/ldap/users/{username}/mapping"]["response"];
    };
    updateOrgName: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /admin/organizations/{org}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /admin/organizations/{org}"]["response"];
    };
    updatePreReceiveEnvironment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /admin/pre-receive-environments/{pre_receive_environment_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /admin/pre-receive-environments/{pre_receive_environment_id}"]["response"];
    };
    updatePreReceiveHook: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /admin/pre-receive-hooks/{pre_receive_hook_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /admin/pre-receive-hooks/{pre_receive_hook_id}"]["response"];
    };
    updatePreReceiveHookEnforcementForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}"]["response"];
    };
    updatePreReceiveHookEnforcementForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}"]["response"];
    };
    updateUsernameForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /admin/users/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /admin/users/{username}"]["response"];
    };
    upgradeLicense: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /setup/api/upgrade"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /setup/api/upgrade"]["response"];
    };
  };
  gists: {
    checkIsStarred: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /gists/{gist_id}/star"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /gists/{gist_id}/star"]["response"];
    };
    create: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /gists"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /gists"]["response"];
    };
    createComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /gists/{gist_id}/comments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /gists/{gist_id}/comments"]["response"];
    };
    delete: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /gists/{gist_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /gists/{gist_id}"]["response"];
    };
    deleteComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /gists/{gist_id}/comments/{comment_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /gists/{gist_id}/comments/{comment_id}"]["response"];
    };
    fork: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /gists/{gist_id}/forks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /gists/{gist_id}/forks"]["response"];
    };
    get: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /gists/{gist_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /gists/{gist_id}"]["response"];
    };
    getComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /gists/{gist_id}/comments/{comment_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /gists/{gist_id}/comments/{comment_id}"]["response"];
    };
    getRevision: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /gists/{gist_id}/{sha}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /gists/{gist_id}/{sha}"]["response"];
    };
    list: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /gists"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /gists"]["response"];
    };
    listComments: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /gists/{gist_id}/comments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /gists/{gist_id}/comments"]["response"];
    };
    listCommits: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /gists/{gist_id}/commits"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /gists/{gist_id}/commits"]["response"];
    };
    listForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/{username}/gists"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/{username}/gists"]["response"];
    };
    listForks: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /gists/{gist_id}/forks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /gists/{gist_id}/forks"]["response"];
    };
    listPublic: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /gists/public"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /gists/public"]["response"];
    };
    listStarred: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /gists/starred"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /gists/starred"]["response"];
    };
    star: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /gists/{gist_id}/star"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /gists/{gist_id}/star"]["response"];
    };
    unstar: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /gists/{gist_id}/star"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /gists/{gist_id}/star"]["response"];
    };
    update: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /gists/{gist_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /gists/{gist_id}"]["response"];
    };
    updateComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /gists/{gist_id}/comments/{comment_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /gists/{gist_id}/comments/{comment_id}"]["response"];
    };
  };
  git: {
    createBlob: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/git/blobs"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/git/blobs"]["response"];
    };
    createCommit: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/git/commits"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/git/commits"]["response"];
    };
    createRef: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/git/refs"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/git/refs"]["response"];
    };
    createTag: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/git/tags"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/git/tags"]["response"];
    };
    createTree: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/git/trees"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/git/trees"]["response"];
    };
    deleteRef: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/git/refs/{ref}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/git/refs/{ref}"]["response"];
    };
    getBlob: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/git/blobs/{file_sha}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/git/blobs/{file_sha}"]["response"];
    };
    getCommit: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/git/commits/{commit_sha}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/git/commits/{commit_sha}"]["response"];
    };
    getRef: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/git/ref/{ref}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/git/ref/{ref}"]["response"];
    };
    getTag: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/git/tags/{tag_sha}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/git/tags/{tag_sha}"]["response"];
    };
    getTree: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/git/trees/{tree_sha}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/git/trees/{tree_sha}"]["response"];
    };
    listMatchingRefs: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/git/matching-refs/{ref}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/git/matching-refs/{ref}"]["response"];
    };
    updateRef: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/{owner}/{repo}/git/refs/{ref}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/{owner}/{repo}/git/refs/{ref}"]["response"];
    };
  };
  gitignore: {
    getAllTemplates: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /gitignore/templates"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /gitignore/templates"]["response"];
    };
    getTemplate: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /gitignore/templates/{name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /gitignore/templates/{name}"]["response"];
    };
  };
  issues: {
    addAssignees: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/issues/{issue_number}/assignees"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/issues/{issue_number}/assignees"]["response"];
    };
    addLabels: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/issues/{issue_number}/labels"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/issues/{issue_number}/labels"]["response"];
    };
    checkUserCanBeAssigned: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/assignees/{assignee}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/assignees/{assignee}"]["response"];
    };
    create: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/issues"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/issues"]["response"];
    };
    createComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/issues/{issue_number}/comments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/issues/{issue_number}/comments"]["response"];
    };
    createLabel: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/labels"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/labels"]["response"];
    };
    createMilestone: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/milestones"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/milestones"]["response"];
    };
    deleteComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}"]["response"];
    };
    deleteLabel: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/labels/{name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/labels/{name}"]["response"];
    };
    deleteMilestone: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/milestones/{milestone_number}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/milestones/{milestone_number}"]["response"];
    };
    get: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/issues/{issue_number}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/issues/{issue_number}"]["response"];
    };
    getComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/issues/comments/{comment_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/issues/comments/{comment_id}"]["response"];
    };
    getEvent: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/issues/events/{event_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/issues/events/{event_id}"]["response"];
    };
    getLabel: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/labels/{name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/labels/{name}"]["response"];
    };
    getMilestone: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/milestones/{milestone_number}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/milestones/{milestone_number}"]["response"];
    };
    list: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /issues"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /issues"]["response"];
    };
    listAssignees: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/assignees"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/assignees"]["response"];
    };
    listComments: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/issues/{issue_number}/comments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/issues/{issue_number}/comments"]["response"];
    };
    listCommentsForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/issues/comments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/issues/comments"]["response"];
    };
    listEvents: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/issues/{issue_number}/events"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/issues/{issue_number}/events"]["response"];
    };
    listEventsForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/issues/events"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/issues/events"]["response"];
    };
    listEventsForTimeline: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/issues/{issue_number}/timeline"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/issues/{issue_number}/timeline"]["response"];
    };
    listForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/issues"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/issues"]["response"];
    };
    listForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/issues"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/issues"]["response"];
    };
    listForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/issues"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/issues"]["response"];
    };
    listLabelsForMilestone: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels"]["response"];
    };
    listLabelsForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/labels"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/labels"]["response"];
    };
    listLabelsOnIssue: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/issues/{issue_number}/labels"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/issues/{issue_number}/labels"]["response"];
    };
    listMilestones: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/milestones"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/milestones"]["response"];
    };
    lock: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/issues/{issue_number}/lock"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/issues/{issue_number}/lock"]["response"];
    };
    removeAllLabels: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels"]["response"];
    };
    removeAssignees: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees"]["response"];
    };
    removeLabel: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}"]["response"];
    };
    setLabels: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/issues/{issue_number}/labels"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/issues/{issue_number}/labels"]["response"];
    };
    unlock: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock"]["response"];
    };
    update: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/{owner}/{repo}/issues/{issue_number}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/{owner}/{repo}/issues/{issue_number}"]["response"];
    };
    updateComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}"]["response"];
    };
    updateLabel: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/{owner}/{repo}/labels/{name}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/{owner}/{repo}/labels/{name}"]["response"];
    };
    updateMilestone: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/{owner}/{repo}/milestones/{milestone_number}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/{owner}/{repo}/milestones/{milestone_number}"]["response"];
    };
  };
  licenses: {
    get: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /licenses/{license}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /licenses/{license}"]["response"];
    };
    getAllCommonlyUsed: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /licenses"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /licenses"]["response"];
    };
    getForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/license"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/license"]["response"];
    };
  };
  markdown: {
    render: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /markdown"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /markdown"]["response"];
    };
    renderRaw: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /markdown/raw"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /markdown/raw"]["response"];
    };
  };
  meta: {
    get: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /meta"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /meta"]["response"];
    };
    getOctocat: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /octocat"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /octocat"]["response"];
    };
    getZen: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /zen"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /zen"]["response"];
    };
    root: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /"]["response"];
    };
  };
  orgs: {
    checkMembershipForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/members/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/members/{username}"]["response"];
    };
    checkPublicMembershipForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/public_members/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/public_members/{username}"]["response"];
    };
    convertMemberToOutsideCollaborator: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /orgs/{org}/outside_collaborators/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /orgs/{org}/outside_collaborators/{username}"]["response"];
    };
    createWebhook: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /orgs/{org}/hooks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /orgs/{org}/hooks"]["response"];
    };
    deleteWebhook: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/{org}/hooks/{hook_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/{org}/hooks/{hook_id}"]["response"];
    };
    get: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}"]["response"];
    };
    getMembershipForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/memberships/orgs/{org}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/memberships/orgs/{org}"]["response"];
    };
    getMembershipForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/memberships/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/memberships/{username}"]["response"];
    };
    getWebhook: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/hooks/{hook_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/hooks/{hook_id}"]["response"];
    };
    list: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /organizations"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /organizations"]["response"];
    };
    listAppInstallations: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/installations"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/installations"]["response"];
    };
    listForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/orgs"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/orgs"]["response"];
    };
    listForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/{username}/orgs"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/{username}/orgs"]["response"];
    };
    listMembers: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/members"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/members"]["response"];
    };
    listMembershipsForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/memberships/orgs"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/memberships/orgs"]["response"];
    };
    listOutsideCollaborators: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/outside_collaborators"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/outside_collaborators"]["response"];
    };
    listPublicMembers: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/public_members"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/public_members"]["response"];
    };
    listWebhooks: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/hooks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/hooks"]["response"];
    };
    pingWebhook: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /orgs/{org}/hooks/{hook_id}/pings"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /orgs/{org}/hooks/{hook_id}/pings"]["response"];
    };
    removeMember: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/{org}/members/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/{org}/members/{username}"]["response"];
    };
    removeMembershipForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/{org}/memberships/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/{org}/memberships/{username}"]["response"];
    };
    removeOutsideCollaborator: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/{org}/outside_collaborators/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/{org}/outside_collaborators/{username}"]["response"];
    };
    removePublicMembershipForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/{org}/public_members/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/{org}/public_members/{username}"]["response"];
    };
    setMembershipForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /orgs/{org}/memberships/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /orgs/{org}/memberships/{username}"]["response"];
    };
    setPublicMembershipForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /orgs/{org}/public_members/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /orgs/{org}/public_members/{username}"]["response"];
    };
    update: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /orgs/{org}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /orgs/{org}"]["response"];
    };
    updateMembershipForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /user/memberships/orgs/{org}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /user/memberships/orgs/{org}"]["response"];
    };
    updateWebhook: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /orgs/{org}/hooks/{hook_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /orgs/{org}/hooks/{hook_id}"]["response"];
    };
  };
  projects: {
    addCollaborator: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /projects/{project_id}/collaborators/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /projects/{project_id}/collaborators/{username}"]["response"];
    };
    createCard: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /projects/columns/{column_id}/cards"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /projects/columns/{column_id}/cards"]["response"];
    };
    createColumn: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /projects/{project_id}/columns"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /projects/{project_id}/columns"]["response"];
    };
    createForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /user/projects"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /user/projects"]["response"];
    };
    createForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /orgs/{org}/projects"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /orgs/{org}/projects"]["response"];
    };
    createForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/projects"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/projects"]["response"];
    };
    delete: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /projects/{project_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /projects/{project_id}"]["response"];
    };
    deleteCard: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /projects/columns/cards/{card_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /projects/columns/cards/{card_id}"]["response"];
    };
    deleteColumn: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /projects/columns/{column_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /projects/columns/{column_id}"]["response"];
    };
    get: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /projects/{project_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /projects/{project_id}"]["response"];
    };
    getCard: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /projects/columns/cards/{card_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /projects/columns/cards/{card_id}"]["response"];
    };
    getColumn: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /projects/columns/{column_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /projects/columns/{column_id}"]["response"];
    };
    getPermissionForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /projects/{project_id}/collaborators/{username}/permission"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /projects/{project_id}/collaborators/{username}/permission"]["response"];
    };
    listCards: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /projects/columns/{column_id}/cards"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /projects/columns/{column_id}/cards"]["response"];
    };
    listCollaborators: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /projects/{project_id}/collaborators"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /projects/{project_id}/collaborators"]["response"];
    };
    listColumns: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /projects/{project_id}/columns"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /projects/{project_id}/columns"]["response"];
    };
    listForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/projects"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/projects"]["response"];
    };
    listForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/projects"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/projects"]["response"];
    };
    listForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/{username}/projects"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/{username}/projects"]["response"];
    };
    moveCard: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /projects/columns/cards/{card_id}/moves"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /projects/columns/cards/{card_id}/moves"]["response"];
    };
    moveColumn: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /projects/columns/{column_id}/moves"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /projects/columns/{column_id}/moves"]["response"];
    };
    removeCollaborator: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /projects/{project_id}/collaborators/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /projects/{project_id}/collaborators/{username}"]["response"];
    };
    update: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /projects/{project_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /projects/{project_id}"]["response"];
    };
    updateCard: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /projects/columns/cards/{card_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /projects/columns/cards/{card_id}"]["response"];
    };
    updateColumn: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /projects/columns/{column_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /projects/columns/{column_id}"]["response"];
    };
  };
  pulls: {
    checkIfMerged: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}/merge"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}/merge"]["response"];
    };
    create: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/pulls"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/pulls"]["response"];
    };
    createReplyForReviewComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies"]["response"];
    };
    createReview: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews"]["response"];
    };
    createReviewComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/pulls/{pull_number}/comments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/pulls/{pull_number}/comments"]["response"];
    };
    deletePendingReview: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"]["response"];
    };
    deleteReviewComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}"]["response"];
    };
    dismissReview: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals"]["response"];
    };
    get: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}"]["response"];
    };
    getReview: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"]["response"];
    };
    getReviewComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}"]["response"];
    };
    list: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/pulls"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/pulls"]["response"];
    };
    listCommentsForReview: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments"]["response"];
    };
    listCommits: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}/commits"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}/commits"]["response"];
    };
    listFiles: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}/files"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}/files"]["response"];
    };
    listRequestedReviewers: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"]["response"];
    };
    listReviewComments: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}/comments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}/comments"]["response"];
    };
    listReviewCommentsForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/pulls/comments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/pulls/comments"]["response"];
    };
    listReviews: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews"]["response"];
    };
    merge: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge"]["response"];
    };
    removeRequestedReviewers: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"]["response"];
    };
    requestReviewers: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"]["response"];
    };
    submitReview: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events"]["response"];
    };
    update: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/{owner}/{repo}/pulls/{pull_number}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/{owner}/{repo}/pulls/{pull_number}"]["response"];
    };
    updateBranch: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch"]["response"];
    };
    updateReview: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"]["response"];
    };
    updateReviewComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}"]["response"];
    };
  };
  rateLimit: {
    get: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /rate_limit"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /rate_limit"]["response"];
    };
  };
  reactions: {
    createForCommitComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/comments/{comment_id}/reactions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/comments/{comment_id}/reactions"]["response"];
    };
    createForIssue: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/issues/{issue_number}/reactions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/issues/{issue_number}/reactions"]["response"];
    };
    createForIssueComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions"]["response"];
    };
    createForPullRequestReviewComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions"]["response"];
    };
    createForTeamDiscussionCommentInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions"]["response"];
    };
    createForTeamDiscussionInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions"]["response"];
    };
    deleteForCommitComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}"]["response"];
    };
    deleteForIssue: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}"]["response"];
    };
    deleteForIssueComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}"]["response"];
    };
    deleteForPullRequestComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}"]["response"];
    };
    deleteForTeamDiscussion: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}"]["response"];
    };
    deleteForTeamDiscussionComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}"]["response"];
    };
    deleteLegacy: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /reactions/{reaction_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /reactions/{reaction_id}"]["response"];
    };
    listForCommitComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/comments/{comment_id}/reactions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/comments/{comment_id}/reactions"]["response"];
    };
    listForIssue: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/issues/{issue_number}/reactions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/issues/{issue_number}/reactions"]["response"];
    };
    listForIssueComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions"]["response"];
    };
    listForPullRequestReviewComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions"]["response"];
    };
    listForTeamDiscussionCommentInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions"]["response"];
    };
    listForTeamDiscussionInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions"]["response"];
    };
  };
  repos: {
    acceptInvitation: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /user/repository_invitations/{invitation_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /user/repository_invitations/{invitation_id}"]["response"];
    };
    addAppAccessRestrictions: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps"]["response"];
    };
    addCollaborator: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/collaborators/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/collaborators/{username}"]["response"];
    };
    addStatusCheckContexts: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts"]["response"];
    };
    addTeamAccessRestrictions: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams"]["response"];
    };
    addUserAccessRestrictions: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users"]["response"];
    };
    checkCollaborator: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/collaborators/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/collaborators/{username}"]["response"];
    };
    compareCommits: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/compare/{base}...{head}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/compare/{base}...{head}"]["response"];
    };
    compareCommitsWithBasehead: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/compare/{basehead}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/compare/{basehead}"]["response"];
    };
    createCommitComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/commits/{commit_sha}/comments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/commits/{commit_sha}/comments"]["response"];
    };
    createCommitSignatureProtection: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"]["response"];
    };
    createCommitStatus: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/statuses/{sha}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/statuses/{sha}"]["response"];
    };
    createDeployKey: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/keys"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/keys"]["response"];
    };
    createDeployment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/deployments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/deployments"]["response"];
    };
    createDeploymentStatus: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"]["response"];
    };
    createDispatchEvent: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/dispatches"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/dispatches"]["response"];
    };
    createForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /user/repos"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /user/repos"]["response"];
    };
    createFork: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/forks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/forks"]["response"];
    };
    createInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /orgs/{org}/repos"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /orgs/{org}/repos"]["response"];
    };
    createOrUpdateFileContents: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/contents/{path}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/contents/{path}"]["response"];
    };
    createPagesSite: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/pages"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/pages"]["response"];
    };
    createRelease: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/releases"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/releases"]["response"];
    };
    createUsingTemplate: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{template_owner}/{template_repo}/generate"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{template_owner}/{template_repo}/generate"]["response"];
    };
    createWebhook: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/hooks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/hooks"]["response"];
    };
    declineInvitation: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /user/repository_invitations/{invitation_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /user/repository_invitations/{invitation_id}"]["response"];
    };
    delete: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}"]["response"];
    };
    deleteAccessRestrictions: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"]["response"];
    };
    deleteAdminBranchProtection: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"]["response"];
    };
    deleteBranchProtection: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/branches/{branch}/protection"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/branches/{branch}/protection"]["response"];
    };
    deleteCommitComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/comments/{comment_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/comments/{comment_id}"]["response"];
    };
    deleteCommitSignatureProtection: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"]["response"];
    };
    deleteDeployKey: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/keys/{key_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/keys/{key_id}"]["response"];
    };
    deleteDeployment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/deployments/{deployment_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/deployments/{deployment_id}"]["response"];
    };
    deleteFile: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/contents/{path}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/contents/{path}"]["response"];
    };
    deleteInvitation: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/invitations/{invitation_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/invitations/{invitation_id}"]["response"];
    };
    deletePagesSite: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/pages"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/pages"]["response"];
    };
    deletePullRequestReviewProtection: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"]["response"];
    };
    deleteRelease: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/releases/{release_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/releases/{release_id}"]["response"];
    };
    deleteReleaseAsset: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}"]["response"];
    };
    deleteWebhook: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/hooks/{hook_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/hooks/{hook_id}"]["response"];
    };
    downloadTarballArchive: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/tarball/{ref}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/tarball/{ref}"]["response"];
    };
    downloadZipballArchive: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/zipball/{ref}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/zipball/{ref}"]["response"];
    };
    get: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}"]["response"];
    };
    getAccessRestrictions: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"]["response"];
    };
    getAdminBranchProtection: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"]["response"];
    };
    getAllStatusCheckContexts: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts"]["response"];
    };
    getAllTopics: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/topics"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/topics"]["response"];
    };
    getAppsWithAccessToProtectedBranch: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps"]["response"];
    };
    getBranch: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/branches/{branch}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/branches/{branch}"]["response"];
    };
    getBranchProtection: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/branches/{branch}/protection"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/branches/{branch}/protection"]["response"];
    };
    getCodeFrequencyStats: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/stats/code_frequency"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/stats/code_frequency"]["response"];
    };
    getCollaboratorPermissionLevel: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/collaborators/{username}/permission"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/collaborators/{username}/permission"]["response"];
    };
    getCombinedStatusForRef: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/commits/{ref}/status"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/commits/{ref}/status"]["response"];
    };
    getCommit: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/commits/{ref}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/commits/{ref}"]["response"];
    };
    getCommitActivityStats: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/stats/commit_activity"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/stats/commit_activity"]["response"];
    };
    getCommitComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/comments/{comment_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/comments/{comment_id}"]["response"];
    };
    getCommitSignatureProtection: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"]["response"];
    };
    getContent: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/contents/{path}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/contents/{path}"]["response"];
    };
    getContributorsStats: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/stats/contributors"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/stats/contributors"]["response"];
    };
    getDeployKey: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/keys/{key_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/keys/{key_id}"]["response"];
    };
    getDeployment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/deployments/{deployment_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/deployments/{deployment_id}"]["response"];
    };
    getDeploymentStatus: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}"]["response"];
    };
    getLatestPagesBuild: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/pages/builds/latest"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/pages/builds/latest"]["response"];
    };
    getLatestRelease: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/releases/latest"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/releases/latest"]["response"];
    };
    getPages: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/pages"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/pages"]["response"];
    };
    getPagesBuild: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/pages/builds/{build_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/pages/builds/{build_id}"]["response"];
    };
    getParticipationStats: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/stats/participation"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/stats/participation"]["response"];
    };
    getPullRequestReviewProtection: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"]["response"];
    };
    getPunchCardStats: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/stats/punch_card"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/stats/punch_card"]["response"];
    };
    getReadme: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/readme"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/readme"]["response"];
    };
    getReadmeInDirectory: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/readme/{dir}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/readme/{dir}"]["response"];
    };
    getRelease: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/releases/{release_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/releases/{release_id}"]["response"];
    };
    getReleaseAsset: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/releases/assets/{asset_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/releases/assets/{asset_id}"]["response"];
    };
    getReleaseByTag: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/releases/tags/{tag}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/releases/tags/{tag}"]["response"];
    };
    getStatusChecksProtection: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"]["response"];
    };
    getTeamsWithAccessToProtectedBranch: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams"]["response"];
    };
    getUsersWithAccessToProtectedBranch: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users"]["response"];
    };
    getWebhook: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/hooks/{hook_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/hooks/{hook_id}"]["response"];
    };
    listBranches: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/branches"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/branches"]["response"];
    };
    listBranchesForHeadCommit: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head"]["response"];
    };
    listCollaborators: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/collaborators"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/collaborators"]["response"];
    };
    listCommentsForCommit: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/commits/{commit_sha}/comments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/commits/{commit_sha}/comments"]["response"];
    };
    listCommitCommentsForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/comments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/comments"]["response"];
    };
    listCommitStatusesForRef: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/commits/{ref}/statuses"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/commits/{ref}/statuses"]["response"];
    };
    listCommits: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/commits"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/commits"]["response"];
    };
    listContributors: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/contributors"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/contributors"]["response"];
    };
    listDeployKeys: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/keys"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/keys"]["response"];
    };
    listDeploymentStatuses: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"]["response"];
    };
    listDeployments: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/deployments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/deployments"]["response"];
    };
    listForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/repos"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/repos"]["response"];
    };
    listForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/repos"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/repos"]["response"];
    };
    listForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/{username}/repos"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/{username}/repos"]["response"];
    };
    listForks: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/forks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/forks"]["response"];
    };
    listInvitations: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/invitations"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/invitations"]["response"];
    };
    listInvitationsForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/repository_invitations"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/repository_invitations"]["response"];
    };
    listLanguages: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/languages"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/languages"]["response"];
    };
    listPagesBuilds: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/pages/builds"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/pages/builds"]["response"];
    };
    listPublic: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repositories"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repositories"]["response"];
    };
    listPullRequestsAssociatedWithCommit: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls"]["response"];
    };
    listReleaseAssets: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/releases/{release_id}/assets"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/releases/{release_id}/assets"]["response"];
    };
    listReleases: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/releases"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/releases"]["response"];
    };
    listTags: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/tags"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/tags"]["response"];
    };
    listTeams: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/teams"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/teams"]["response"];
    };
    listWebhooks: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/{owner}/{repo}/hooks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/{owner}/{repo}/hooks"]["response"];
    };
    merge: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/merges"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/merges"]["response"];
    };
    pingWebhook: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/hooks/{hook_id}/pings"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/hooks/{hook_id}/pings"]["response"];
    };
    removeAppAccessRestrictions: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps"]["response"];
    };
    removeCollaborator: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/collaborators/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/collaborators/{username}"]["response"];
    };
    removeStatusCheckContexts: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts"]["response"];
    };
    removeStatusCheckProtection: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"]["response"];
    };
    removeTeamAccessRestrictions: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams"]["response"];
    };
    removeUserAccessRestrictions: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users"]["response"];
    };
    replaceAllTopics: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/topics"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/topics"]["response"];
    };
    requestPagesBuild: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/pages/builds"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/pages/builds"]["response"];
    };
    setAdminBranchProtection: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"]["response"];
    };
    setAppAccessRestrictions: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps"]["response"];
    };
    setStatusCheckContexts: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts"]["response"];
    };
    setTeamAccessRestrictions: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams"]["response"];
    };
    setUserAccessRestrictions: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users"]["response"];
    };
    testPushWebhook: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/hooks/{hook_id}/tests"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/hooks/{hook_id}/tests"]["response"];
    };
    transfer: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/{owner}/{repo}/transfer"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/{owner}/{repo}/transfer"]["response"];
    };
    update: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/{owner}/{repo}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/{owner}/{repo}"]["response"];
    };
    updateBranchProtection: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/branches/{branch}/protection"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/branches/{branch}/protection"]["response"];
    };
    updateCommitComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/{owner}/{repo}/comments/{comment_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/{owner}/{repo}/comments/{comment_id}"]["response"];
    };
    updateInformationAboutPagesSite: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/{owner}/{repo}/pages"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/{owner}/{repo}/pages"]["response"];
    };
    updateInvitation: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/{owner}/{repo}/invitations/{invitation_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/{owner}/{repo}/invitations/{invitation_id}"]["response"];
    };
    updatePullRequestReviewProtection: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"]["response"];
    };
    updateRelease: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/{owner}/{repo}/releases/{release_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/{owner}/{repo}/releases/{release_id}"]["response"];
    };
    updateReleaseAsset: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}"]["response"];
    };
    updateStatusCheckProtection: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"]["response"];
    };
    updateWebhook: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/{owner}/{repo}/hooks/{hook_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/{owner}/{repo}/hooks/{hook_id}"]["response"];
    };
    uploadReleaseAsset: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST {origin}/repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST {origin}/repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}"]["response"];
    };
  };
  search: {
    code: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /search/code"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /search/code"]["response"];
    };
    commits: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /search/commits"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /search/commits"]["response"];
    };
    issuesAndPullRequests: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /search/issues"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /search/issues"]["response"];
    };
    labels: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /search/labels"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /search/labels"]["response"];
    };
    repos: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /search/repositories"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /search/repositories"]["response"];
    };
    topics: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /search/topics"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /search/topics"]["response"];
    };
    users: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /search/users"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /search/users"]["response"];
    };
  };
  teams: {
    addOrUpdateMembershipForUserInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /orgs/{org}/teams/{team_slug}/memberships/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /orgs/{org}/teams/{team_slug}/memberships/{username}"]["response"];
    };
    addOrUpdateProjectPermissionsInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}"]["response"];
    };
    addOrUpdateRepoPermissionsInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"]["response"];
    };
    checkPermissionsForProjectInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/teams/{team_slug}/projects/{project_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/teams/{team_slug}/projects/{project_id}"]["response"];
    };
    checkPermissionsForRepoInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"]["response"];
    };
    create: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /orgs/{org}/teams"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /orgs/{org}/teams"]["response"];
    };
    createDiscussionCommentInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"]["response"];
    };
    createDiscussionInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /orgs/{org}/teams/{team_slug}/discussions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /orgs/{org}/teams/{team_slug}/discussions"]["response"];
    };
    deleteDiscussionCommentInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"]["response"];
    };
    deleteDiscussionInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"]["response"];
    };
    deleteInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/{org}/teams/{team_slug}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/{org}/teams/{team_slug}"]["response"];
    };
    getByName: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/teams/{team_slug}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/teams/{team_slug}"]["response"];
    };
    getDiscussionCommentInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"]["response"];
    };
    getDiscussionInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"]["response"];
    };
    getMembershipForUserInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/teams/{team_slug}/memberships/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/teams/{team_slug}/memberships/{username}"]["response"];
    };
    list: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/teams"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/teams"]["response"];
    };
    listChildInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/teams/{team_slug}/teams"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/teams/{team_slug}/teams"]["response"];
    };
    listDiscussionCommentsInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"]["response"];
    };
    listDiscussionsInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/teams/{team_slug}/discussions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/teams/{team_slug}/discussions"]["response"];
    };
    listForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/teams"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/teams"]["response"];
    };
    listMembersInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/teams/{team_slug}/members"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/teams/{team_slug}/members"]["response"];
    };
    listProjectsInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/teams/{team_slug}/projects"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/teams/{team_slug}/projects"]["response"];
    };
    listReposInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/{org}/teams/{team_slug}/repos"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/{org}/teams/{team_slug}/repos"]["response"];
    };
    removeMembershipForUserInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}"]["response"];
    };
    removeProjectInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}"]["response"];
    };
    removeRepoInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"]["response"];
    };
    updateDiscussionCommentInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"]["response"];
    };
    updateDiscussionInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"]["response"];
    };
    updateInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /orgs/{org}/teams/{team_slug}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /orgs/{org}/teams/{team_slug}"]["response"];
    };
  };
  users: {
    addEmailForAuthenticated: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /user/emails"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /user/emails"]["response"];
    };
    checkFollowingForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/{username}/following/{target_user}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/{username}/following/{target_user}"]["response"];
    };
    checkPersonIsFollowedByAuthenticated: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/following/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/following/{username}"]["response"];
    };
    createGpgKeyForAuthenticated: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /user/gpg_keys"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /user/gpg_keys"]["response"];
    };
    createPublicSshKeyForAuthenticated: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /user/keys"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /user/keys"]["response"];
    };
    deleteEmailForAuthenticated: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /user/emails"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /user/emails"]["response"];
    };
    deleteGpgKeyForAuthenticated: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /user/gpg_keys/{gpg_key_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /user/gpg_keys/{gpg_key_id}"]["response"];
    };
    deletePublicSshKeyForAuthenticated: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /user/keys/{key_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /user/keys/{key_id}"]["response"];
    };
    follow: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /user/following/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /user/following/{username}"]["response"];
    };
    getAuthenticated: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user"]["response"];
    };
    getByUsername: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/{username}"]["response"];
    };
    getContextForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/{username}/hovercard"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/{username}/hovercard"]["response"];
    };
    getGpgKeyForAuthenticated: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/gpg_keys/{gpg_key_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/gpg_keys/{gpg_key_id}"]["response"];
    };
    getPublicSshKeyForAuthenticated: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/keys/{key_id}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/keys/{key_id}"]["response"];
    };
    list: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users"]["response"];
    };
    listEmailsForAuthenticated: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/emails"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/emails"]["response"];
    };
    listFollowedByAuthenticated: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/following"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/following"]["response"];
    };
    listFollowersForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/followers"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/followers"]["response"];
    };
    listFollowersForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/{username}/followers"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/{username}/followers"]["response"];
    };
    listFollowingForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/{username}/following"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/{username}/following"]["response"];
    };
    listGpgKeysForAuthenticated: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/gpg_keys"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/gpg_keys"]["response"];
    };
    listGpgKeysForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/{username}/gpg_keys"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/{username}/gpg_keys"]["response"];
    };
    listPublicEmailsForAuthenticated: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/public_emails"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/public_emails"]["response"];
    };
    listPublicKeysForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/{username}/keys"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/{username}/keys"]["response"];
    };
    listPublicSshKeysForAuthenticated: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/keys"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/keys"]["response"];
    };
    unfollow: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /user/following/{username}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /user/following/{username}"]["response"];
    };
    updateAuthenticated: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /user"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /user"]["response"];
    };
  };
};
