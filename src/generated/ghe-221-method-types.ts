import { EndpointInterface, RequestInterface } from "@octokit/types";
import { RestEndpointMethodTypes } from "./ghe-221-parameters-and-response-types";

export type RestEndpointMethods = {
  activity: {
    checkRepoIsStarredByAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["activity"]["checkRepoIsStarredByAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["checkRepoIsStarredByAuthenticatedUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * This endpoint should only be used to stop watching a repository. To control whether or not you wish to receive notifications from a repository, [set the repository's subscription manually](https://docs.github.com/enterprise-server@2.21/rest/reference/activity#set-a-repository-subscription).
     */
    deleteRepoSubscription: {
      (
        params?: RestEndpointMethodTypes["activity"]["deleteRepoSubscription"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["deleteRepoSubscription"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Mutes all future notifications for a conversation until you comment on the thread or get an **@mention**. If you are watching the repository of the thread, you will still receive notifications. To ignore future notifications for a repository you are watching, use the [Set a thread subscription](https://docs.github.com/enterprise-server@2.21/rest/reference/activity#set-a-thread-subscription) endpoint and set `ignore` to `true`.
     */
    deleteThreadSubscription: {
      (
        params?: RestEndpointMethodTypes["activity"]["deleteThreadSubscription"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["deleteThreadSubscription"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * GitHub Enterprise Server provides several timeline resources in [Atom](http://en.wikipedia.org/wiki/Atom_(standard)) format. The Feeds API lists all the feeds available to the authenticated user:
     *
     * *   **Timeline**: The GitHub Enterprise Server global public timeline
     * *   **User**: The public timeline for any user, using [URI template](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#hypermedia)
     * *   **Current user public**: The public timeline for the authenticated user
     * *   **Current user**: The private timeline for the authenticated user
     * *   **Current user actor**: The private timeline for activity created by the authenticated user
     * *   **Current user organizations**: The private timeline for the organizations the authenticated user is a member of.
     * *   **Security advisories**: A collection of public announcements that provide information about security-related vulnerabilities in software on GitHub Enterprise Server.
     *
     * **Note**: Private feeds are only returned when [authenticating via Basic Auth](https://docs.github.com/enterprise-server@2.21/rest/overview/other-authentication-methods#basic-authentication) since current feed URIs use the older, non revocable auth tokens.
     */
    getFeeds: {
      (
        params?: RestEndpointMethodTypes["activity"]["getFeeds"]["parameters"]
      ): Promise<RestEndpointMethodTypes["activity"]["getFeeds"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getRepoSubscription: {
      (
        params?: RestEndpointMethodTypes["activity"]["getRepoSubscription"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["getRepoSubscription"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getThread: {
      (
        params?: RestEndpointMethodTypes["activity"]["getThread"]["parameters"]
      ): Promise<RestEndpointMethodTypes["activity"]["getThread"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * This checks to see if the current user is subscribed to a thread. You can also [get a repository subscription](https://docs.github.com/enterprise-server@2.21/rest/reference/activity#get-a-repository-subscription).
     *
     * Note that subscriptions are only generated if a user is participating in a conversation--for example, they've replied to the thread, were **@mentioned**, or manually subscribe to a thread.
     */
    getThreadSubscriptionForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["activity"]["getThreadSubscriptionForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["getThreadSubscriptionForAuthenticatedUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * If you are authenticated as the given user, you will see your private events. Otherwise, you'll only see public events.
     */
    listEventsForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["activity"]["listEventsForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["listEventsForAuthenticatedUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * List all notifications for the current user, sorted by most recently updated.
     */
    listNotificationsForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["activity"]["listNotificationsForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["listNotificationsForAuthenticatedUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * This is the user's organization dashboard. You must be authenticated as the user to view this.
     */
    listOrgEventsForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["activity"]["listOrgEventsForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["listOrgEventsForAuthenticatedUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * We delay the public events feed by five minutes, which means the most recent event returned by the public events API actually occurred at least five minutes ago.
     */
    listPublicEvents: {
      (
        params?: RestEndpointMethodTypes["activity"]["listPublicEvents"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["listPublicEvents"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listPublicEventsForRepoNetwork: {
      (
        params?: RestEndpointMethodTypes["activity"]["listPublicEventsForRepoNetwork"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["listPublicEventsForRepoNetwork"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listPublicEventsForUser: {
      (
        params?: RestEndpointMethodTypes["activity"]["listPublicEventsForUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["listPublicEventsForUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listPublicOrgEvents: {
      (
        params?: RestEndpointMethodTypes["activity"]["listPublicOrgEvents"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["listPublicOrgEvents"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * These are events that you've received by watching repos and following users. If you are authenticated as the given user, you will see private events. Otherwise, you'll only see public events.
     */
    listReceivedEventsForUser: {
      (
        params?: RestEndpointMethodTypes["activity"]["listReceivedEventsForUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["listReceivedEventsForUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listReceivedPublicEventsForUser: {
      (
        params?: RestEndpointMethodTypes["activity"]["listReceivedPublicEventsForUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["listReceivedPublicEventsForUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listRepoEvents: {
      (
        params?: RestEndpointMethodTypes["activity"]["listRepoEvents"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["listRepoEvents"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * List all notifications for the current user.
     */
    listRepoNotificationsForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["activity"]["listRepoNotificationsForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["listRepoNotificationsForAuthenticatedUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Lists repositories the authenticated user has starred.
     *
     * You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/enterprise-server@2.21/rest/overview/media-types/) via the `Accept` header:
     */
    listReposStarredByAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["activity"]["listReposStarredByAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["listReposStarredByAuthenticatedUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Lists repositories a user has starred.
     *
     * You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/enterprise-server@2.21/rest/overview/media-types/) via the `Accept` header:
     */
    listReposStarredByUser: {
      (
        params?: RestEndpointMethodTypes["activity"]["listReposStarredByUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["listReposStarredByUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Lists repositories a user is watching.
     */
    listReposWatchedByUser: {
      (
        params?: RestEndpointMethodTypes["activity"]["listReposWatchedByUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["listReposWatchedByUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Lists the people that have starred the repository.
     *
     * You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/enterprise-server@2.21/rest/overview/media-types/) via the `Accept` header:
     */
    listStargazersForRepo: {
      (
        params?: RestEndpointMethodTypes["activity"]["listStargazersForRepo"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["listStargazersForRepo"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Lists repositories the authenticated user is watching.
     */
    listWatchedReposForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["activity"]["listWatchedReposForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["listWatchedReposForAuthenticatedUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Lists the people watching the specified repository.
     */
    listWatchersForRepo: {
      (
        params?: RestEndpointMethodTypes["activity"]["listWatchersForRepo"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["listWatchersForRepo"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Marks all notifications as "read" removes it from the [default view on GitHub Enterprise Server](https://github.com/notifications). If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub Enterprise Server will run an asynchronous process to mark notifications as "read." To check whether any "unread" notifications remain, you can use the [List notifications for the authenticated user](https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.
     */
    markNotificationsAsRead: {
      (
        params?: RestEndpointMethodTypes["activity"]["markNotificationsAsRead"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["markNotificationsAsRead"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Marks all notifications in a repository as "read" removes them from the [default view on GitHub Enterprise Server](https://github.com/notifications). If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub Enterprise Server will run an asynchronous process to mark notifications as "read." To check whether any "unread" notifications remain, you can use the [List repository notifications for the authenticated user](https://docs.github.com/enterprise-server@2.21/rest/reference/activity#list-repository-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.
     */
    markRepoNotificationsAsRead: {
      (
        params?: RestEndpointMethodTypes["activity"]["markRepoNotificationsAsRead"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["markRepoNotificationsAsRead"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    markThreadAsRead: {
      (
        params?: RestEndpointMethodTypes["activity"]["markThreadAsRead"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["markThreadAsRead"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * If you would like to watch a repository, set `subscribed` to `true`. If you would like to ignore notifications made within a repository, set `ignored` to `true`. If you would like to stop watching a repository, [delete the repository's subscription](https://docs.github.com/enterprise-server@2.21/rest/reference/activity#delete-a-repository-subscription) completely.
     */
    setRepoSubscription: {
      (
        params?: RestEndpointMethodTypes["activity"]["setRepoSubscription"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["setRepoSubscription"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * If you are watching a repository, you receive notifications for all threads by default. Use this endpoint to ignore future notifications for threads until you comment on the thread or get an **@mention**.
     *
     * You can also use this endpoint to subscribe to threads that you are currently not receiving notifications for or to subscribed to threads that you have previously ignored.
     *
     * Unsubscribing from a conversation in a repository that you are not watching is functionally equivalent to the [Delete a thread subscription](https://docs.github.com/enterprise-server@2.21/rest/reference/activity#delete-a-thread-subscription) endpoint.
     */
    setThreadSubscription: {
      (
        params?: RestEndpointMethodTypes["activity"]["setThreadSubscription"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["setThreadSubscription"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#http-verbs)."
     */
    starRepoForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["activity"]["starRepoForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["starRepoForAuthenticatedUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    unstarRepoForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["activity"]["unstarRepoForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["unstarRepoForAuthenticatedUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
  };
  apps: {
    /**
     * Add a single repository to an installation. The authenticated user must have admin access to the repository.
     *
     * You must use a personal access token (which you can create via the [command line](https://docs.github.com/enterprise-server@2.21/github/authenticating-to-github/creating-a-personal-access-token) or [Basic Authentication](https://docs.github.com/enterprise-server@2.21/rest/overview/other-authentication-methods#basic-authentication)) to access this endpoint.
     */
    addRepoToInstallation: {
      (
        params?: RestEndpointMethodTypes["apps"]["addRepoToInstallation"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["addRepoToInstallation"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * OAuth applications can use a special API method for checking OAuth token validity without exceeding the normal rate limits for failed login attempts. Authentication works differently with this particular endpoint. You must use [Basic Authentication](https://docs.github.com/enterprise-server@2.21/rest/overview/other-authentication-methods#basic-authentication) to use this endpoint, where the username is the OAuth application `client_id` and the password is its `client_secret`. Invalid tokens will return `404 NOT FOUND`.
     */
    checkToken: {
      (
        params?: RestEndpointMethodTypes["apps"]["checkToken"]["parameters"]
      ): Promise<RestEndpointMethodTypes["apps"]["checkToken"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * **Deprecated:** use `apps.createContentAttachmentForRepo()` (`POST /repos/{owner}/{repo}/content_references/{content_reference_id}/attachments`) instead. Creates an attachment under a content reference URL in the body or comment of an issue or pull request. Use the `id` of the content reference from the [`content_reference` event](https://docs.github.com/webhooks/event-payloads/#content_reference) to create an attachment.
     *
     * The app must create a content attachment within six hours of the content reference URL being posted. See "[Using content attachments](https://docs.github.com/apps/using-content-attachments/)" for details about content attachments.
     *
     * You must use an [installation access token](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
     */
    createContentAttachment: {
      (
        params?: RestEndpointMethodTypes["apps"]["createContentAttachment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["createContentAttachment"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Creates an attachment under a content reference URL in the body or comment of an issue or pull request. Use the `id` and `repository` `full_name` of the content reference from the [`content_reference` event](https://docs.github.com/enterprise-server@2.21/webhooks/event-payloads/#content_reference) to create an attachment.
     *
     * The app must create a content attachment within six hours of the content reference URL being posted. See "[Using content attachments](https://docs.github.com/enterprise-server@2.21/apps/using-content-attachments/)" for details about content attachments.
     *
     * You must use an [installation access token](https://docs.github.com/enterprise-server@2.21/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
     */
    createContentAttachmentForRepo: {
      (
        params?: RestEndpointMethodTypes["apps"]["createContentAttachmentForRepo"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["createContentAttachmentForRepo"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Use this endpoint to complete the handshake necessary when implementing the [GitHub App Manifest flow](https://docs.github.com/enterprise-server@2.21/apps/building-github-apps/creating-github-apps-from-a-manifest/). When you create a GitHub App with the manifest flow, you receive a temporary `code` used to retrieve the GitHub App's `id`, `pem` (private key), and `webhook_secret`.
     */
    createFromManifest: {
      (
        params?: RestEndpointMethodTypes["apps"]["createFromManifest"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["createFromManifest"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Creates an installation access token that enables a GitHub App to make authenticated API requests for the app's installation on an organization or individual account. Installation tokens expire one hour from the time you create them. Using an expired token produces a status code of `401 - Unauthorized`, and requires creating a new installation token. By default the installation token has access to all repositories that the installation can access. To restrict the access to specific repositories, you can provide the `repository_ids` when creating the token. When you omit `repository_ids`, the response does not contain the `repositories` key.
     *
     * You must use a [JWT](https://docs.github.com/enterprise-server@2.21/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     */
    createInstallationAccessToken: {
      (
        params?: RestEndpointMethodTypes["apps"]["createInstallationAccessToken"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["createInstallationAccessToken"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * OAuth application owners can revoke a grant for their OAuth application and a specific user. You must use [Basic Authentication](https://docs.github.com/enterprise-server@2.21/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. You must also provide a valid OAuth `access_token` as an input parameter and the grant for the token's owner will be deleted.
     * Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for the user. Once deleted, the application will have no access to the user's account and will no longer be listed on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized).
     */
    deleteAuthorization: {
      (
        params?: RestEndpointMethodTypes["apps"]["deleteAuthorization"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["deleteAuthorization"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Uninstalls a GitHub App on a user, organization, or business account. You must use a [JWT](https://docs.github.com/enterprise-server@2.21/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     */
    deleteInstallation: {
      (
        params?: RestEndpointMethodTypes["apps"]["deleteInstallation"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["deleteInstallation"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * OAuth application owners can revoke a single token for an OAuth application. You must use [Basic Authentication](https://docs.github.com/enterprise-server@2.21/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password.
     */
    deleteToken: {
      (
        params?: RestEndpointMethodTypes["apps"]["deleteToken"]["parameters"]
      ): Promise<RestEndpointMethodTypes["apps"]["deleteToken"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Returns the GitHub App associated with the authentication credentials used. To see how many app installations are associated with this GitHub App, see the `installations_count` in the response. For more details about your app's installations, see the "[List installations for the authenticated app](https://docs.github.com/enterprise-server@2.21/rest/reference/apps#list-installations-for-the-authenticated-app)" endpoint.
     *
     * You must use a [JWT](https://docs.github.com/enterprise-server@2.21/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     */
    getAuthenticated: {
      (
        params?: RestEndpointMethodTypes["apps"]["getAuthenticated"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["getAuthenticated"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * **Note**: The `:app_slug` is just the URL-friendly name of your GitHub App. You can find this on the settings page for your GitHub App (e.g., `https://github.com/settings/apps/:app_slug`).
     *
     * If the GitHub App you specify is public, you can access this endpoint without authenticating. If the GitHub App you specify is private, you must authenticate with a [personal access token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) or an [installation access token](https://docs.github.com/enterprise-server@2.21/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
     */
    getBySlug: {
      (
        params?: RestEndpointMethodTypes["apps"]["getBySlug"]["parameters"]
      ): Promise<RestEndpointMethodTypes["apps"]["getBySlug"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Enables an authenticated GitHub App to find an installation's information using the installation id. The installation's account type (`target_type`) will be either an organization or a user account, depending which account the repository belongs to.
     *
     * You must use a [JWT](https://docs.github.com/enterprise-server@2.21/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     */
    getInstallation: {
      (
        params?: RestEndpointMethodTypes["apps"]["getInstallation"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["getInstallation"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Enables an authenticated GitHub App to find the organization's installation information.
     *
     * You must use a [JWT](https://docs.github.com/enterprise-server@2.21/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     */
    getOrgInstallation: {
      (
        params?: RestEndpointMethodTypes["apps"]["getOrgInstallation"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["getOrgInstallation"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Enables an authenticated GitHub App to find the repository's installation information. The installation's account type will be either an organization or a user account, depending which account the repository belongs to.
     *
     * You must use a [JWT](https://docs.github.com/enterprise-server@2.21/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     */
    getRepoInstallation: {
      (
        params?: RestEndpointMethodTypes["apps"]["getRepoInstallation"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["getRepoInstallation"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Enables an authenticated GitHub App to find the user’s installation information.
     *
     * You must use a [JWT](https://docs.github.com/enterprise-server@2.21/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     */
    getUserInstallation: {
      (
        params?: RestEndpointMethodTypes["apps"]["getUserInstallation"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["getUserInstallation"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * List repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access for an installation.
     *
     * The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.
     *
     * You must use a [user-to-server OAuth access token](https://docs.github.com/enterprise-server@2.21/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.
     *
     * The access the user has to each repository is included in the hash under the `permissions` key.
     */
    listInstallationReposForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["apps"]["listInstallationReposForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["listInstallationReposForAuthenticatedUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * You must use a [JWT](https://docs.github.com/enterprise-server@2.21/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * The permissions the installation has are included under the `permissions` key.
     */
    listInstallations: {
      (
        params?: RestEndpointMethodTypes["apps"]["listInstallations"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["listInstallations"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Lists installations of your GitHub App that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.
     *
     * You must use a [user-to-server OAuth access token](https://docs.github.com/enterprise-server@2.21/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.
     *
     * The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.
     *
     * You can find the permissions for the installation under the `permissions` key.
     */
    listInstallationsForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["apps"]["listInstallationsForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["listInstallationsForAuthenticatedUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * List repositories that an app installation can access.
     *
     * You must use an [installation access token](https://docs.github.com/enterprise-server@2.21/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
     */
    listReposAccessibleToInstallation: {
      (
        params?: RestEndpointMethodTypes["apps"]["listReposAccessibleToInstallation"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["listReposAccessibleToInstallation"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Remove a single repository from an installation. The authenticated user must have admin access to the repository.
     *
     * You must use a personal access token (which you can create via the [command line](https://docs.github.com/enterprise-server@2.21/github/authenticating-to-github/creating-a-personal-access-token) or [Basic Authentication](https://docs.github.com/enterprise-server@2.21/rest/overview/other-authentication-methods#basic-authentication)) to access this endpoint.
     */
    removeRepoFromInstallation: {
      (
        params?: RestEndpointMethodTypes["apps"]["removeRepoFromInstallation"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["removeRepoFromInstallation"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * OAuth applications can use this API method to reset a valid OAuth token without end-user involvement. Applications must save the "token" property in the response because changes take effect immediately. You must use [Basic Authentication](https://docs.github.com/enterprise-server@2.21/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.
     */
    resetToken: {
      (
        params?: RestEndpointMethodTypes["apps"]["resetToken"]["parameters"]
      ): Promise<RestEndpointMethodTypes["apps"]["resetToken"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Revokes the installation token you're using to authenticate as an installation and access this endpoint.
     *
     * Once an installation token is revoked, the token is invalidated and cannot be used. Other endpoints that require the revoked installation token must have a new installation token to work. You can create a new token using the "[Create an installation access token for an app](https://docs.github.com/enterprise-server@2.21/rest/reference/apps#create-an-installation-access-token-for-an-app)" endpoint.
     *
     * You must use an [installation access token](https://docs.github.com/enterprise-server@2.21/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
     */
    revokeInstallationAccessToken: {
      (
        params?: RestEndpointMethodTypes["apps"]["revokeInstallationAccessToken"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["revokeInstallationAccessToken"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
  };
  checks: {
    /**
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.
     *
     * Creates a new check run for a specific commit in a repository. Your GitHub App must have the `checks:write` permission to create check runs.
     *
     * In a check suite, GitHub limits the number of check runs with the same name to 1000. Once these check runs exceed 1000, GitHub will start to automatically delete older check runs.
     */
    create: {
      (
        params?: RestEndpointMethodTypes["checks"]["create"]["parameters"]
      ): Promise<RestEndpointMethodTypes["checks"]["create"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.
     *
     * By default, check suites are automatically created when you create a [check run](https://docs.github.com/enterprise-server@2.21/rest/reference/checks#check-runs). You only need to use this endpoint for manually creating check suites when you've disabled automatic creation using "[Update repository preferences for check suites](https://docs.github.com/enterprise-server@2.21/rest/reference/checks#update-repository-preferences-for-check-suites)". Your GitHub App must have the `checks:write` permission to create check suites.
     */
    createSuite: {
      (
        params?: RestEndpointMethodTypes["checks"]["createSuite"]["parameters"]
      ): Promise<RestEndpointMethodTypes["checks"]["createSuite"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.
     *
     * Gets a single check run using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.
     */
    get: {
      (
        params?: RestEndpointMethodTypes["checks"]["get"]["parameters"]
      ): Promise<RestEndpointMethodTypes["checks"]["get"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.
     *
     * Gets a single check suite using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check suites. OAuth Apps and authenticated users must have the `repo` scope to get check suites in a private repository.
     */
    getSuite: {
      (
        params?: RestEndpointMethodTypes["checks"]["getSuite"]["parameters"]
      ): Promise<RestEndpointMethodTypes["checks"]["getSuite"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Lists annotations for a check run using the annotation `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get annotations for a check run. OAuth Apps and authenticated users must have the `repo` scope to get annotations for a check run in a private repository.
     */
    listAnnotations: {
      (
        params?: RestEndpointMethodTypes["checks"]["listAnnotations"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["checks"]["listAnnotations"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.
     *
     * Lists check runs for a commit ref. The `ref` can be a SHA, branch name, or a tag name. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.
     */
    listForRef: {
      (
        params?: RestEndpointMethodTypes["checks"]["listForRef"]["parameters"]
      ): Promise<RestEndpointMethodTypes["checks"]["listForRef"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.
     *
     * Lists check runs for a check suite using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.
     */
    listForSuite: {
      (
        params?: RestEndpointMethodTypes["checks"]["listForSuite"]["parameters"]
      ): Promise<RestEndpointMethodTypes["checks"]["listForSuite"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.
     *
     * Lists check suites for a commit `ref`. The `ref` can be a SHA, branch name, or a tag name. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to list check suites. OAuth Apps and authenticated users must have the `repo` scope to get check suites in a private repository.
     */
    listSuitesForRef: {
      (
        params?: RestEndpointMethodTypes["checks"]["listSuitesForRef"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["checks"]["listSuitesForRef"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Triggers GitHub to rerequest an existing check suite, without pushing new code to a repository. This endpoint will trigger the [`check_suite` webhook](https://docs.github.com/enterprise-server@2.21/webhooks/event-payloads/#check_suite) event with the action `rerequested`. When a check suite is `rerequested`, its `status` is reset to `queued` and the `conclusion` is cleared.
     *
     * To rerequest a check suite, your GitHub App must have the `checks:read` permission on a private repository or pull access to a public repository.
     */
    rerequestSuite: {
      (
        params?: RestEndpointMethodTypes["checks"]["rerequestSuite"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["checks"]["rerequestSuite"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Changes the default automatic flow when creating check suites. By default, a check suite is automatically created each time code is pushed to a repository. When you disable the automatic creation of check suites, you can manually [Create a check suite](https://docs.github.com/enterprise-server@2.21/rest/reference/checks#create-a-check-suite). You must have admin permissions in the repository to set preferences for check suites.
     */
    setSuitesPreferences: {
      (
        params?: RestEndpointMethodTypes["checks"]["setSuitesPreferences"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["checks"]["setSuitesPreferences"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.
     *
     * Updates a check run for a specific commit in a repository. Your GitHub App must have the `checks:write` permission to edit check runs.
     */
    update: {
      (
        params?: RestEndpointMethodTypes["checks"]["update"]["parameters"]
      ): Promise<RestEndpointMethodTypes["checks"]["update"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
  };
  codesOfConduct: {
    getAllCodesOfConduct: {
      (
        params?: RestEndpointMethodTypes["codesOfConduct"]["getAllCodesOfConduct"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["codesOfConduct"]["getAllCodesOfConduct"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getConductCode: {
      (
        params?: RestEndpointMethodTypes["codesOfConduct"]["getConductCode"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["codesOfConduct"]["getConductCode"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
  };
  emojis: {
    /**
     * Lists all the emojis available to use on GitHub Enterprise Server.
     */
    get: {
      (
        params?: RestEndpointMethodTypes["emojis"]["get"]["parameters"]
      ): Promise<RestEndpointMethodTypes["emojis"]["get"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
  };
  enterpriseAdmin: {
    addAuthorizedSshKey: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["addAuthorizedSshKey"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["addAuthorizedSshKey"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * When you boot a GitHub instance for the first time, you can use the following endpoint to upload a license:
     *
     * Note that you need to POST to [`/setup/api/configure`](https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#start-a-configuration-process) to start the actual configuration process.
     *
     * When using this endpoint, your GitHub instance must have a password set. This can be accomplished two ways:
     *
     * 1.  If you're working directly with the API before accessing the web interface, you must pass in the password parameter to set your password.
     * 2.  If you set up your instance via the web interface before accessing the API, your calls to this endpoint do not need the password parameter.
     *
     * For a list of the available settings, see the [Get settings endpoint](https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#get-settings).
     */
    createEnterpriseServerLicense: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["createEnterpriseServerLicense"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["createEnterpriseServerLicense"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    createGlobalWebhook: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["createGlobalWebhook"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["createGlobalWebhook"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    createImpersonationOAuthToken: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["createImpersonationOAuthToken"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["createImpersonationOAuthToken"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    createOrg: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["createOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["createOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    createPreReceiveEnvironment: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["createPreReceiveEnvironment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["createPreReceiveEnvironment"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    createPreReceiveHook: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["createPreReceiveHook"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["createPreReceiveHook"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * If an external authentication mechanism is used, the login name should match the login name in the external system. If you are using LDAP authentication, you should also [update the LDAP mapping](https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#update-ldap-mapping-for-a-user) for the user.
     *
     * The login name will be normalized to only contain alphanumeric characters or single hyphens. For example, if you send `"octo_cat"` as the login, a user named `"octo-cat"` will be created.
     *
     * If the login name or email address is already associated with an account, the server will return a `422` response.
     */
    createUser: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["createUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["createUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    deleteGlobalWebhook: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["deleteGlobalWebhook"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["deleteGlobalWebhook"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    deleteImpersonationOAuthToken: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["deleteImpersonationOAuthToken"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["deleteImpersonationOAuthToken"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Deletes a personal access token. Returns a `403 - Forbidden` status when a personal access token is in use. For example, if you access this endpoint with the same personal access token that you are trying to delete, you will receive this error.
     */
    deletePersonalAccessToken: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["deletePersonalAccessToken"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["deletePersonalAccessToken"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * If you attempt to delete an environment that cannot be deleted, you will receive a `422 Unprocessable Entity` response.
     *
     * The possible error messages are:
     *
     * *   _Cannot modify or delete the default environment_
     * *   _Cannot delete environment that has hooks_
     * *   _Cannot delete environment when download is in progress_
     */
    deletePreReceiveEnvironment: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["deletePreReceiveEnvironment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["deletePreReceiveEnvironment"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    deletePreReceiveHook: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["deletePreReceiveHook"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["deletePreReceiveHook"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    deletePublicKey: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["deletePublicKey"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["deletePublicKey"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Deleting a user will delete all their repositories, gists, applications, and personal settings. [Suspending a user](https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#suspend-a-user) is often a better option.
     *
     * You can delete any user account except your own.
     */
    deleteUser: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["deleteUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["deleteUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * You can demote any user account except your own.
     */
    demoteSiteAdministrator: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["demoteSiteAdministrator"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["demoteSiteAdministrator"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * The possible values for `enabled` are `true` and `false`. When it's `false`, the attribute `when` is ignored and the maintenance mode is turned off. `when` defines the time period when the maintenance was enabled.
     *
     * The possible values for `when` are `now` or any date parseable by [mojombo/chronic](https://github.com/mojombo/chronic).
     */
    enableOrDisableMaintenanceMode: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["enableOrDisableMaintenanceMode"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["enableOrDisableMaintenanceMode"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getAllAuthorizedSshKeys: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["getAllAuthorizedSshKeys"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["getAllAuthorizedSshKeys"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getAllStats: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["getAllStats"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["getAllStats"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getCommentStats: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["getCommentStats"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["getCommentStats"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * This endpoint allows you to check the status of the most recent configuration process:
     *
     * Note that you may need to wait several seconds after you start a process before you can check its status.
     *
     * The different statuses are:
     *
     * | Status        | Description                       |
     * | ------------- | --------------------------------- |
     * | `PENDING`     | The job has not started yet       |
     * | `CONFIGURING` | The job is running                |
     * | `DONE`        | The job has finished correctly    |
     * | `FAILED`      | The job has finished unexpectedly |
     */
    getConfigurationStatus: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["getConfigurationStatus"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["getConfigurationStatus"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * In addition to seeing the download status at the "[Get a pre-receive environment](#get-a-pre-receive-environment)" endpoint, there is also this separate endpoint for just the download status.
     */
    getDownloadStatusForPreReceiveEnvironment: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["getDownloadStatusForPreReceiveEnvironment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["getDownloadStatusForPreReceiveEnvironment"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getGlobalWebhook: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["getGlobalWebhook"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["getGlobalWebhook"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getHooksStats: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["getHooksStats"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["getHooksStats"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getIssueStats: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["getIssueStats"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["getIssueStats"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getLicenseInformation: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["getLicenseInformation"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["getLicenseInformation"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Check your installation's maintenance status:
     */
    getMaintenanceStatus: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["getMaintenanceStatus"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["getMaintenanceStatus"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getMilestoneStats: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["getMilestoneStats"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["getMilestoneStats"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getOrgStats: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["getOrgStats"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["getOrgStats"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getPagesStats: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["getPagesStats"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["getPagesStats"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getPreReceiveEnvironment: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["getPreReceiveEnvironment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["getPreReceiveEnvironment"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getPreReceiveHook: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["getPreReceiveHook"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["getPreReceiveHook"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getPreReceiveHookForOrg: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["getPreReceiveHookForOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["getPreReceiveHookForOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getPreReceiveHookForRepo: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["getPreReceiveHookForRepo"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["getPreReceiveHookForRepo"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getPullRequestStats: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["getPullRequestStats"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["getPullRequestStats"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getRepoStats: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["getRepoStats"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["getRepoStats"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getSettings: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["getSettings"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["getSettings"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getUserStats: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["getUserStats"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["getUserStats"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listGlobalWebhooks: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["listGlobalWebhooks"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["listGlobalWebhooks"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Lists personal access tokens for all users, including admin users.
     */
    listPersonalAccessTokens: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["listPersonalAccessTokens"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["listPersonalAccessTokens"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listPreReceiveEnvironments: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["listPreReceiveEnvironments"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["listPreReceiveEnvironments"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listPreReceiveHooks: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["listPreReceiveHooks"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["listPreReceiveHooks"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * List all pre-receive hooks that are enabled or testing for this organization as well as any disabled hooks that can be configured at the organization level. Globally disabled pre-receive hooks that do not allow downstream configuration are not listed.
     */
    listPreReceiveHooksForOrg: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["listPreReceiveHooksForOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["listPreReceiveHooksForOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * List all pre-receive hooks that are enabled or testing for this repository as well as any disabled hooks that are allowed to be enabled at the repository level. Pre-receive hooks that are disabled at a higher level and are not configurable will not be listed.
     */
    listPreReceiveHooksForRepo: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["listPreReceiveHooksForRepo"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["listPreReceiveHooksForRepo"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listPublicKeys: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["listPublicKeys"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["listPublicKeys"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * This will trigger a [ping event](https://docs.github.com/enterprise-server@2.21/webhooks/#ping-event) to be sent to the webhook.
     */
    pingGlobalWebhook: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["pingGlobalWebhook"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["pingGlobalWebhook"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#http-verbs)."
     */
    promoteUserToBeSiteAdministrator: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["promoteUserToBeSiteAdministrator"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["promoteUserToBeSiteAdministrator"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    removeAuthorizedSshKey: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["removeAuthorizedSshKey"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["removeAuthorizedSshKey"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Removes any overrides for this hook at the org level for this org.
     */
    removePreReceiveHookEnforcementForOrg: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["removePreReceiveHookEnforcementForOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["removePreReceiveHookEnforcementForOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Deletes any overridden enforcement on this repository for the specified hook.
     *
     * Responds with effective values inherited from owner and/or global level.
     */
    removePreReceiveHookEnforcementForRepo: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["removePreReceiveHookEnforcementForRepo"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["removePreReceiveHookEnforcementForRepo"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * For a list of the available settings, see the [Get settings endpoint](https://docs.github.com/enterprise-server@2.21/rest/reference/enterprise-admin#get-settings).
     */
    setSettings: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["setSettings"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["setSettings"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * This endpoint allows you to start a configuration process at any time for your updated settings to take effect:
     */
    startConfigurationProcess: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["startConfigurationProcess"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["startConfigurationProcess"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Triggers a new download of the environment tarball from the environment's `image_url`. When the download is finished, the newly downloaded tarball will overwrite the existing environment.
     *
     * If a download cannot be triggered, you will receive a `422 Unprocessable Entity` response.
     *
     * The possible error messages are:
     *
     * * _Cannot modify or delete the default environment_
     * * _Can not start a new download when a download is in progress_
     */
    startPreReceiveEnvironmentDownload: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["startPreReceiveEnvironmentDownload"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["startPreReceiveEnvironmentDownload"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * If your GitHub instance uses [LDAP Sync with Active Directory LDAP servers](https://help.github.com/enterprise/admin/guides/user-management/using-ldap), Active Directory LDAP-authenticated users cannot be suspended through this API. If you attempt to suspend an Active Directory LDAP-authenticated user through this API, it will return a `403` response.
     *
     * You can suspend any user account except your own.
     *
     * Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#http-verbs)."
     */
    suspendUser: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["suspendUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["suspendUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Note that this API call does not automatically initiate an LDAP sync. Rather, if a `201` is returned, the sync job is queued successfully, and is performed when the instance is ready.
     */
    syncLdapMappingForTeam: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["syncLdapMappingForTeam"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["syncLdapMappingForTeam"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Note that this API call does not automatically initiate an LDAP sync. Rather, if a `201` is returned, the sync job is queued successfully, and is performed when the instance is ready.
     */
    syncLdapMappingForUser: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["syncLdapMappingForUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["syncLdapMappingForUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * If your GitHub instance uses [LDAP Sync with Active Directory LDAP servers](https://help.github.com/enterprise/admin/guides/user-management/using-ldap), this API is disabled and will return a `403` response. Active Directory LDAP-authenticated users cannot be unsuspended using the API.
     */
    unsuspendUser: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["unsuspendUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["unsuspendUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Parameters that are not provided will be overwritten with the default value or removed if no default exists.
     */
    updateGlobalWebhook: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["updateGlobalWebhook"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["updateGlobalWebhook"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Updates the [distinguished name](https://www.ldap.com/ldap-dns-and-rdns) (DN) of the LDAP entry to map to a team. [LDAP synchronization](https://help.github.com/enterprise/admin/guides/user-management/using-ldap/#enabling-ldap-sync) must be enabled to map LDAP entries to a team. Use the [Create a team](https://docs.github.com/enterprise-server@2.21/rest/reference/teams/#create-a-team) endpoint to create a team with LDAP mapping.
     *
     * You can also update the LDAP mapping of a child team.
     */
    updateLdapMappingForTeam: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["updateLdapMappingForTeam"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["updateLdapMappingForTeam"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    updateLdapMappingForUser: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["updateLdapMappingForUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["updateLdapMappingForUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    updateOrgName: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["updateOrgName"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["updateOrgName"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * You cannot modify the default environment. If you attempt to modify the default environment, you will receive a `422 Unprocessable Entity` response.
     */
    updatePreReceiveEnvironment: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["updatePreReceiveEnvironment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["updatePreReceiveEnvironment"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    updatePreReceiveHook: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["updatePreReceiveHook"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["updatePreReceiveHook"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * For pre-receive hooks which are allowed to be configured at the org level, you can set `enforcement` and `allow_downstream_configuration`
     */
    updatePreReceiveHookEnforcementForOrg: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["updatePreReceiveHookEnforcementForOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["updatePreReceiveHookEnforcementForOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * For pre-receive hooks which are allowed to be configured at the repo level, you can set `enforcement`
     */
    updatePreReceiveHookEnforcementForRepo: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["updatePreReceiveHookEnforcementForRepo"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["updatePreReceiveHookEnforcementForRepo"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    updateUsernameForUser: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["updateUsernameForUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["updateUsernameForUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * This API upgrades your license and also triggers the configuration process:
     */
    upgradeLicense: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["upgradeLicense"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["upgradeLicense"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
  };
  gists: {
    checkIsStarred: {
      (
        params?: RestEndpointMethodTypes["gists"]["checkIsStarred"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["gists"]["checkIsStarred"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Allows you to add a new gist with one or more files.
     *
     * **Note:** Don't name your files "gistfile" with a numerical suffix. This is the format of the automatic naming scheme that Gist uses internally.
     */
    create: {
      (
        params?: RestEndpointMethodTypes["gists"]["create"]["parameters"]
      ): Promise<RestEndpointMethodTypes["gists"]["create"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    createComment: {
      (
        params?: RestEndpointMethodTypes["gists"]["createComment"]["parameters"]
      ): Promise<RestEndpointMethodTypes["gists"]["createComment"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    delete: {
      (
        params?: RestEndpointMethodTypes["gists"]["delete"]["parameters"]
      ): Promise<RestEndpointMethodTypes["gists"]["delete"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    deleteComment: {
      (
        params?: RestEndpointMethodTypes["gists"]["deleteComment"]["parameters"]
      ): Promise<RestEndpointMethodTypes["gists"]["deleteComment"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * **Note**: This was previously `/gists/:gist_id/fork`.
     */
    fork: {
      (
        params?: RestEndpointMethodTypes["gists"]["fork"]["parameters"]
      ): Promise<RestEndpointMethodTypes["gists"]["fork"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    get: {
      (params?: RestEndpointMethodTypes["gists"]["get"]["parameters"]): Promise<
        RestEndpointMethodTypes["gists"]["get"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getComment: {
      (
        params?: RestEndpointMethodTypes["gists"]["getComment"]["parameters"]
      ): Promise<RestEndpointMethodTypes["gists"]["getComment"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getRevision: {
      (
        params?: RestEndpointMethodTypes["gists"]["getRevision"]["parameters"]
      ): Promise<RestEndpointMethodTypes["gists"]["getRevision"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Lists the authenticated user's gists or if called anonymously, this endpoint returns all public gists:
     */
    list: {
      (
        params?: RestEndpointMethodTypes["gists"]["list"]["parameters"]
      ): Promise<RestEndpointMethodTypes["gists"]["list"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listComments: {
      (
        params?: RestEndpointMethodTypes["gists"]["listComments"]["parameters"]
      ): Promise<RestEndpointMethodTypes["gists"]["listComments"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listCommits: {
      (
        params?: RestEndpointMethodTypes["gists"]["listCommits"]["parameters"]
      ): Promise<RestEndpointMethodTypes["gists"]["listCommits"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Lists public gists for the specified user:
     */
    listForUser: {
      (
        params?: RestEndpointMethodTypes["gists"]["listForUser"]["parameters"]
      ): Promise<RestEndpointMethodTypes["gists"]["listForUser"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listForks: {
      (
        params?: RestEndpointMethodTypes["gists"]["listForks"]["parameters"]
      ): Promise<RestEndpointMethodTypes["gists"]["listForks"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * List public gists sorted by most recently updated to least recently updated.
     *
     * Note: With [pagination](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#pagination), you can fetch up to 3000 gists. For example, you can fetch 100 pages with 30 gists per page or 30 pages with 100 gists per page.
     */
    listPublic: {
      (
        params?: RestEndpointMethodTypes["gists"]["listPublic"]["parameters"]
      ): Promise<RestEndpointMethodTypes["gists"]["listPublic"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * List the authenticated user's starred gists:
     */
    listStarred: {
      (
        params?: RestEndpointMethodTypes["gists"]["listStarred"]["parameters"]
      ): Promise<RestEndpointMethodTypes["gists"]["listStarred"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#http-verbs)."
     */
    star: {
      (
        params?: RestEndpointMethodTypes["gists"]["star"]["parameters"]
      ): Promise<RestEndpointMethodTypes["gists"]["star"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    unstar: {
      (
        params?: RestEndpointMethodTypes["gists"]["unstar"]["parameters"]
      ): Promise<RestEndpointMethodTypes["gists"]["unstar"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Allows you to update or delete a gist file and rename gist files. Files from the previous version of the gist that aren't explicitly changed during an edit are unchanged.
     */
    update: {
      (
        params?: RestEndpointMethodTypes["gists"]["update"]["parameters"]
      ): Promise<RestEndpointMethodTypes["gists"]["update"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    updateComment: {
      (
        params?: RestEndpointMethodTypes["gists"]["updateComment"]["parameters"]
      ): Promise<RestEndpointMethodTypes["gists"]["updateComment"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
  };
  git: {
    createBlob: {
      (
        params?: RestEndpointMethodTypes["git"]["createBlob"]["parameters"]
      ): Promise<RestEndpointMethodTypes["git"]["createBlob"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Creates a new Git [commit object](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects).
     *
     * **Signature verification object**
     *
     * The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
     *
     * | Name | Type | Description |
     * | ---- | ---- | ----------- |
     * | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
     * | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
     * | `signature` | `string` | The signature that was extracted from the commit. |
     * | `payload` | `string` | The value that was signed. |
     *
     * These are the possible values for `reason` in the `verification` object:
     *
     * | Value | Description |
     * | ----- | ----------- |
     * | `expired_key` | The key that made the signature is expired. |
     * | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
     * | `gpgverify_error` | There was an error communicating with the signature verification service. |
     * | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
     * | `unsigned` | The object does not include a signature. |
     * | `unknown_signature_type` | A non-PGP signature was found in the commit. |
     * | `no_user` | No user was associated with the `committer` email address in the commit. |
     * | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
     * | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
     * | `unknown_key` | The key that made the signature has not been registered with any user's account. |
     * | `malformed_signature` | There was an error parsing the signature. |
     * | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
     * | `valid` | None of the above errors applied, so the signature is considered to be verified. |
     */
    createCommit: {
      (
        params?: RestEndpointMethodTypes["git"]["createCommit"]["parameters"]
      ): Promise<RestEndpointMethodTypes["git"]["createCommit"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Creates a reference for your repository. You are unable to create new references for empty repositories, even if the commit SHA-1 hash used exists. Empty repositories are repositories without branches.
     */
    createRef: {
      (
        params?: RestEndpointMethodTypes["git"]["createRef"]["parameters"]
      ): Promise<RestEndpointMethodTypes["git"]["createRef"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Note that creating a tag object does not create the reference that makes a tag in Git. If you want to create an annotated tag in Git, you have to do this call to create the tag object, and then [create](https://docs.github.com/enterprise-server@2.21/rest/reference/git#create-a-reference) the `refs/tags/[tag]` reference. If you want to create a lightweight tag, you only have to [create](https://docs.github.com/enterprise-server@2.21/rest/reference/git#create-a-reference) the tag reference - this call would be unnecessary.
     *
     * **Signature verification object**
     *
     * The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
     *
     * | Name | Type | Description |
     * | ---- | ---- | ----------- |
     * | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
     * | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
     * | `signature` | `string` | The signature that was extracted from the commit. |
     * | `payload` | `string` | The value that was signed. |
     *
     * These are the possible values for `reason` in the `verification` object:
     *
     * | Value | Description |
     * | ----- | ----------- |
     * | `expired_key` | The key that made the signature is expired. |
     * | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
     * | `gpgverify_error` | There was an error communicating with the signature verification service. |
     * | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
     * | `unsigned` | The object does not include a signature. |
     * | `unknown_signature_type` | A non-PGP signature was found in the commit. |
     * | `no_user` | No user was associated with the `committer` email address in the commit. |
     * | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
     * | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
     * | `unknown_key` | The key that made the signature has not been registered with any user's account. |
     * | `malformed_signature` | There was an error parsing the signature. |
     * | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
     * | `valid` | None of the above errors applied, so the signature is considered to be verified. |
     */
    createTag: {
      (
        params?: RestEndpointMethodTypes["git"]["createTag"]["parameters"]
      ): Promise<RestEndpointMethodTypes["git"]["createTag"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * The tree creation API accepts nested entries. If you specify both a tree and a nested path modifying that tree, this endpoint will overwrite the contents of the tree with the new path contents, and create a new tree structure.
     *
     * If you use this endpoint to add, delete, or modify the file contents in a tree, you will need to commit the tree and then update a branch to point to the commit. For more information see "[Create a commit](https://docs.github.com/enterprise-server@2.21/rest/reference/git#create-a-commit)" and "[Update a reference](https://docs.github.com/enterprise-server@2.21/rest/reference/git#update-a-reference)."
     */
    createTree: {
      (
        params?: RestEndpointMethodTypes["git"]["createTree"]["parameters"]
      ): Promise<RestEndpointMethodTypes["git"]["createTree"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    deleteRef: {
      (
        params?: RestEndpointMethodTypes["git"]["deleteRef"]["parameters"]
      ): Promise<RestEndpointMethodTypes["git"]["deleteRef"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * The `content` in the response will always be Base64 encoded.
     *
     * _Note_: This API supports blobs up to 100 megabytes in size.
     */
    getBlob: {
      (
        params?: RestEndpointMethodTypes["git"]["getBlob"]["parameters"]
      ): Promise<RestEndpointMethodTypes["git"]["getBlob"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Gets a Git [commit object](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects).
     *
     * **Signature verification object**
     *
     * The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
     *
     * | Name | Type | Description |
     * | ---- | ---- | ----------- |
     * | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
     * | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
     * | `signature` | `string` | The signature that was extracted from the commit. |
     * | `payload` | `string` | The value that was signed. |
     *
     * These are the possible values for `reason` in the `verification` object:
     *
     * | Value | Description |
     * | ----- | ----------- |
     * | `expired_key` | The key that made the signature is expired. |
     * | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
     * | `gpgverify_error` | There was an error communicating with the signature verification service. |
     * | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
     * | `unsigned` | The object does not include a signature. |
     * | `unknown_signature_type` | A non-PGP signature was found in the commit. |
     * | `no_user` | No user was associated with the `committer` email address in the commit. |
     * | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
     * | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
     * | `unknown_key` | The key that made the signature has not been registered with any user's account. |
     * | `malformed_signature` | There was an error parsing the signature. |
     * | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
     * | `valid` | None of the above errors applied, so the signature is considered to be verified. |
     */
    getCommit: {
      (
        params?: RestEndpointMethodTypes["git"]["getCommit"]["parameters"]
      ): Promise<RestEndpointMethodTypes["git"]["getCommit"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Returns a single reference from your Git database. The `:ref` in the URL must be formatted as `heads/<branch name>` for branches and `tags/<tag name>` for tags. If the `:ref` doesn't match an existing ref, a `404` is returned.
     *
     * **Note:** You need to explicitly [request a pull request](https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#get-a-pull-request) to trigger a test merge commit, which checks the mergeability of pull requests. For more information, see "[Checking mergeability of pull requests](https://docs.github.com/enterprise-server@2.21/rest/guides/getting-started-with-the-git-database-api#checking-mergeability-of-pull-requests)".
     */
    getRef: {
      (
        params?: RestEndpointMethodTypes["git"]["getRef"]["parameters"]
      ): Promise<RestEndpointMethodTypes["git"]["getRef"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * **Signature verification object**
     *
     * The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
     *
     * | Name | Type | Description |
     * | ---- | ---- | ----------- |
     * | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
     * | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
     * | `signature` | `string` | The signature that was extracted from the commit. |
     * | `payload` | `string` | The value that was signed. |
     *
     * These are the possible values for `reason` in the `verification` object:
     *
     * | Value | Description |
     * | ----- | ----------- |
     * | `expired_key` | The key that made the signature is expired. |
     * | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
     * | `gpgverify_error` | There was an error communicating with the signature verification service. |
     * | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
     * | `unsigned` | The object does not include a signature. |
     * | `unknown_signature_type` | A non-PGP signature was found in the commit. |
     * | `no_user` | No user was associated with the `committer` email address in the commit. |
     * | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
     * | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
     * | `unknown_key` | The key that made the signature has not been registered with any user's account. |
     * | `malformed_signature` | There was an error parsing the signature. |
     * | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
     * | `valid` | None of the above errors applied, so the signature is considered to be verified. |
     */
    getTag: {
      (
        params?: RestEndpointMethodTypes["git"]["getTag"]["parameters"]
      ): Promise<RestEndpointMethodTypes["git"]["getTag"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Returns a single tree using the SHA1 value for that tree.
     *
     * If `truncated` is `true` in the response then the number of items in the `tree` array exceeded our maximum limit. If you need to fetch more items, use the non-recursive method of fetching trees, and fetch one sub-tree at a time.
     */
    getTree: {
      (
        params?: RestEndpointMethodTypes["git"]["getTree"]["parameters"]
      ): Promise<RestEndpointMethodTypes["git"]["getTree"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Returns an array of references from your Git database that match the supplied name. The `:ref` in the URL must be formatted as `heads/<branch name>` for branches and `tags/<tag name>` for tags. If the `:ref` doesn't exist in the repository, but existing refs start with `:ref`, they will be returned as an array.
     *
     * When you use this endpoint without providing a `:ref`, it will return an array of all the references from your Git database, including notes and stashes if they exist on the server. Anything in the namespace is returned, not just `heads` and `tags`.
     *
     * **Note:** You need to explicitly [request a pull request](https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#get-a-pull-request) to trigger a test merge commit, which checks the mergeability of pull requests. For more information, see "[Checking mergeability of pull requests](https://docs.github.com/enterprise-server@2.21/rest/guides/getting-started-with-the-git-database-api#checking-mergeability-of-pull-requests)".
     *
     * If you request matching references for a branch named `feature` but the branch `feature` doesn't exist, the response can still include other matching head refs that start with the word `feature`, such as `featureA` and `featureB`.
     */
    listMatchingRefs: {
      (
        params?: RestEndpointMethodTypes["git"]["listMatchingRefs"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["git"]["listMatchingRefs"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    updateRef: {
      (
        params?: RestEndpointMethodTypes["git"]["updateRef"]["parameters"]
      ): Promise<RestEndpointMethodTypes["git"]["updateRef"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
  };
  gitignore: {
    /**
     * List all templates available to pass as an option when [creating a repository](https://docs.github.com/enterprise-server@2.21/rest/reference/repos#create-a-repository-for-the-authenticated-user).
     */
    getAllTemplates: {
      (
        params?: RestEndpointMethodTypes["gitignore"]["getAllTemplates"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["gitignore"]["getAllTemplates"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * The API also allows fetching the source of a single template.
     * Use the raw [media type](https://docs.github.com/enterprise-server@2.21/rest/overview/media-types/) to get the raw contents.
     */
    getTemplate: {
      (
        params?: RestEndpointMethodTypes["gitignore"]["getTemplate"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["gitignore"]["getTemplate"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
  };
  issues: {
    /**
     * Adds up to 10 assignees to an issue. Users already assigned to an issue are not replaced.
     */
    addAssignees: {
      (
        params?: RestEndpointMethodTypes["issues"]["addAssignees"]["parameters"]
      ): Promise<RestEndpointMethodTypes["issues"]["addAssignees"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    addLabels: {
      (
        params?: RestEndpointMethodTypes["issues"]["addLabels"]["parameters"]
      ): Promise<RestEndpointMethodTypes["issues"]["addLabels"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Checks if a user has permission to be assigned to an issue in this repository.
     *
     * If the `assignee` can be assigned to issues in the repository, a `204` header with no content is returned.
     *
     * Otherwise a `404` status code is returned.
     */
    checkUserCanBeAssigned: {
      (
        params?: RestEndpointMethodTypes["issues"]["checkUserCanBeAssigned"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["issues"]["checkUserCanBeAssigned"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Any user with pull access to a repository can create an issue. If [issues are disabled in the repository](https://help.github.com/articles/disabling-issues/), the API returns a `410 Gone` status.
     *
     * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/guides/best-practices-for-integrators#dealing-with-abuse-rate-limits)" for details.
     */
    create: {
      (
        params?: RestEndpointMethodTypes["issues"]["create"]["parameters"]
      ): Promise<RestEndpointMethodTypes["issues"]["create"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/guides/best-practices-for-integrators#dealing-with-abuse-rate-limits)" for details.
     */
    createComment: {
      (
        params?: RestEndpointMethodTypes["issues"]["createComment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["issues"]["createComment"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    createLabel: {
      (
        params?: RestEndpointMethodTypes["issues"]["createLabel"]["parameters"]
      ): Promise<RestEndpointMethodTypes["issues"]["createLabel"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    createMilestone: {
      (
        params?: RestEndpointMethodTypes["issues"]["createMilestone"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["issues"]["createMilestone"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    deleteComment: {
      (
        params?: RestEndpointMethodTypes["issues"]["deleteComment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["issues"]["deleteComment"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    deleteLabel: {
      (
        params?: RestEndpointMethodTypes["issues"]["deleteLabel"]["parameters"]
      ): Promise<RestEndpointMethodTypes["issues"]["deleteLabel"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    deleteMilestone: {
      (
        params?: RestEndpointMethodTypes["issues"]["deleteMilestone"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["issues"]["deleteMilestone"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * The API returns a [`301 Moved Permanently` status](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#http-redirects-redirects) if the issue was
     * [transferred](https://help.github.com/articles/transferring-an-issue-to-another-repository/) to another repository. If
     * the issue was transferred to or deleted from a repository where the authenticated user lacks read access, the API
     * returns a `404 Not Found` status. If the issue was deleted from a repository where the authenticated user has read
     * access, the API returns a `410 Gone` status. To receive webhook events for transferred and deleted issues, subscribe
     * to the [`issues`](https://docs.github.com/enterprise-server@2.21/webhooks/event-payloads/#issues) webhook.
     *
     * **Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
     * reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
     * the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
     * request id, use the "[List pull requests](https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#list-pull-requests)" endpoint.
     */
    get: {
      (
        params?: RestEndpointMethodTypes["issues"]["get"]["parameters"]
      ): Promise<RestEndpointMethodTypes["issues"]["get"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getComment: {
      (
        params?: RestEndpointMethodTypes["issues"]["getComment"]["parameters"]
      ): Promise<RestEndpointMethodTypes["issues"]["getComment"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getEvent: {
      (
        params?: RestEndpointMethodTypes["issues"]["getEvent"]["parameters"]
      ): Promise<RestEndpointMethodTypes["issues"]["getEvent"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getLabel: {
      (
        params?: RestEndpointMethodTypes["issues"]["getLabel"]["parameters"]
      ): Promise<RestEndpointMethodTypes["issues"]["getLabel"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getMilestone: {
      (
        params?: RestEndpointMethodTypes["issues"]["getMilestone"]["parameters"]
      ): Promise<RestEndpointMethodTypes["issues"]["getMilestone"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * List issues assigned to the authenticated user across all visible repositories including owned repositories, member
     * repositories, and organization repositories. You can use the `filter` query parameter to fetch issues that are not
     * necessarily assigned to you.
     *
     *
     * **Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
     * reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
     * the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
     * request id, use the "[List pull requests](https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#list-pull-requests)" endpoint.
     */
    list: {
      (
        params?: RestEndpointMethodTypes["issues"]["list"]["parameters"]
      ): Promise<RestEndpointMethodTypes["issues"]["list"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Lists the [available assignees](https://help.github.com/articles/assigning-issues-and-pull-requests-to-other-github-users/) for issues in a repository.
     */
    listAssignees: {
      (
        params?: RestEndpointMethodTypes["issues"]["listAssignees"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["issues"]["listAssignees"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Issue Comments are ordered by ascending ID.
     */
    listComments: {
      (
        params?: RestEndpointMethodTypes["issues"]["listComments"]["parameters"]
      ): Promise<RestEndpointMethodTypes["issues"]["listComments"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * By default, Issue Comments are ordered by ascending ID.
     */
    listCommentsForRepo: {
      (
        params?: RestEndpointMethodTypes["issues"]["listCommentsForRepo"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["issues"]["listCommentsForRepo"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listEvents: {
      (
        params?: RestEndpointMethodTypes["issues"]["listEvents"]["parameters"]
      ): Promise<RestEndpointMethodTypes["issues"]["listEvents"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listEventsForRepo: {
      (
        params?: RestEndpointMethodTypes["issues"]["listEventsForRepo"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["issues"]["listEventsForRepo"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listEventsForTimeline: {
      (
        params?: RestEndpointMethodTypes["issues"]["listEventsForTimeline"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["issues"]["listEventsForTimeline"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * List issues across owned and member repositories assigned to the authenticated user.
     *
     * **Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
     * reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
     * the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
     * request id, use the "[List pull requests](https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#list-pull-requests)" endpoint.
     */
    listForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["issues"]["listForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["issues"]["listForAuthenticatedUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * List issues in an organization assigned to the authenticated user.
     *
     * **Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
     * reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
     * the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
     * request id, use the "[List pull requests](https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#list-pull-requests)" endpoint.
     */
    listForOrg: {
      (
        params?: RestEndpointMethodTypes["issues"]["listForOrg"]["parameters"]
      ): Promise<RestEndpointMethodTypes["issues"]["listForOrg"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * List issues in a repository.
     *
     * **Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
     * reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
     * the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
     * request id, use the "[List pull requests](https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#list-pull-requests)" endpoint.
     */
    listForRepo: {
      (
        params?: RestEndpointMethodTypes["issues"]["listForRepo"]["parameters"]
      ): Promise<RestEndpointMethodTypes["issues"]["listForRepo"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listLabelsForMilestone: {
      (
        params?: RestEndpointMethodTypes["issues"]["listLabelsForMilestone"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["issues"]["listLabelsForMilestone"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listLabelsForRepo: {
      (
        params?: RestEndpointMethodTypes["issues"]["listLabelsForRepo"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["issues"]["listLabelsForRepo"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listLabelsOnIssue: {
      (
        params?: RestEndpointMethodTypes["issues"]["listLabelsOnIssue"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["issues"]["listLabelsOnIssue"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listMilestones: {
      (
        params?: RestEndpointMethodTypes["issues"]["listMilestones"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["issues"]["listMilestones"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Users with push access can lock an issue or pull request's conversation.
     *
     * Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#http-verbs)."
     */
    lock: {
      (
        params?: RestEndpointMethodTypes["issues"]["lock"]["parameters"]
      ): Promise<RestEndpointMethodTypes["issues"]["lock"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    removeAllLabels: {
      (
        params?: RestEndpointMethodTypes["issues"]["removeAllLabels"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["issues"]["removeAllLabels"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Removes one or more assignees from an issue.
     */
    removeAssignees: {
      (
        params?: RestEndpointMethodTypes["issues"]["removeAssignees"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["issues"]["removeAssignees"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Removes the specified label from the issue, and returns the remaining labels on the issue. This endpoint returns a `404 Not Found` status if the label does not exist.
     */
    removeLabel: {
      (
        params?: RestEndpointMethodTypes["issues"]["removeLabel"]["parameters"]
      ): Promise<RestEndpointMethodTypes["issues"]["removeLabel"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Removes any previous labels and sets the new labels for an issue.
     */
    setLabels: {
      (
        params?: RestEndpointMethodTypes["issues"]["setLabels"]["parameters"]
      ): Promise<RestEndpointMethodTypes["issues"]["setLabels"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Users with push access can unlock an issue's conversation.
     */
    unlock: {
      (
        params?: RestEndpointMethodTypes["issues"]["unlock"]["parameters"]
      ): Promise<RestEndpointMethodTypes["issues"]["unlock"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Issue owners and users with push access can edit an issue.
     */
    update: {
      (
        params?: RestEndpointMethodTypes["issues"]["update"]["parameters"]
      ): Promise<RestEndpointMethodTypes["issues"]["update"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    updateComment: {
      (
        params?: RestEndpointMethodTypes["issues"]["updateComment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["issues"]["updateComment"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    updateLabel: {
      (
        params?: RestEndpointMethodTypes["issues"]["updateLabel"]["parameters"]
      ): Promise<RestEndpointMethodTypes["issues"]["updateLabel"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    updateMilestone: {
      (
        params?: RestEndpointMethodTypes["issues"]["updateMilestone"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["issues"]["updateMilestone"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
  };
  licenses: {
    get: {
      (
        params?: RestEndpointMethodTypes["licenses"]["get"]["parameters"]
      ): Promise<RestEndpointMethodTypes["licenses"]["get"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getAllCommonlyUsed: {
      (
        params?: RestEndpointMethodTypes["licenses"]["getAllCommonlyUsed"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["licenses"]["getAllCommonlyUsed"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * This method returns the contents of the repository's license file, if one is detected.
     *
     * Similar to [Get repository content](https://docs.github.com/enterprise-server@2.21/rest/reference/repos#get-repository-content), this method also supports [custom media types](https://docs.github.com/enterprise-server@2.21/rest/overview/media-types) for retrieving the raw license content or rendered license HTML.
     */
    getForRepo: {
      (
        params?: RestEndpointMethodTypes["licenses"]["getForRepo"]["parameters"]
      ): Promise<RestEndpointMethodTypes["licenses"]["getForRepo"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
  };
  markdown: {
    render: {
      (
        params?: RestEndpointMethodTypes["markdown"]["render"]["parameters"]
      ): Promise<RestEndpointMethodTypes["markdown"]["render"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * You must send Markdown as plain text (using a `Content-Type` header of `text/plain` or `text/x-markdown`) to this endpoint, rather than using JSON format. In raw mode, [GitHub Flavored Markdown](https://github.github.com/gfm/) is not supported and Markdown will be rendered in plain format like a README.md file. Markdown content must be 400 KB or less.
     */
    renderRaw: {
      (
        params?: RestEndpointMethodTypes["markdown"]["renderRaw"]["parameters"]
      ): Promise<RestEndpointMethodTypes["markdown"]["renderRaw"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
  };
  meta: {
    get: {
      (params?: RestEndpointMethodTypes["meta"]["get"]["parameters"]): Promise<
        RestEndpointMethodTypes["meta"]["get"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Get the octocat as ASCII art
     */
    getOctocat: {
      (
        params?: RestEndpointMethodTypes["meta"]["getOctocat"]["parameters"]
      ): Promise<RestEndpointMethodTypes["meta"]["getOctocat"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Get a random sentence from the Zen of GitHub
     */
    getZen: {
      (
        params?: RestEndpointMethodTypes["meta"]["getZen"]["parameters"]
      ): Promise<RestEndpointMethodTypes["meta"]["getZen"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Get Hypermedia links to resources accessible in GitHub's REST API
     */
    root: {
      (params?: RestEndpointMethodTypes["meta"]["root"]["parameters"]): Promise<
        RestEndpointMethodTypes["meta"]["root"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
  };
  orgs: {
    /**
     * Check if a user is, publicly or privately, a member of the organization.
     */
    checkMembershipForUser: {
      (
        params?: RestEndpointMethodTypes["orgs"]["checkMembershipForUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["orgs"]["checkMembershipForUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    checkPublicMembershipForUser: {
      (
        params?: RestEndpointMethodTypes["orgs"]["checkPublicMembershipForUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["orgs"]["checkPublicMembershipForUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * When an organization member is converted to an outside collaborator, they'll only have access to the repositories that their current team membership allows. The user will no longer be a member of the organization. For more information, see "[Converting an organization member to an outside collaborator](https://help.github.com/articles/converting-an-organization-member-to-an-outside-collaborator/)".
     */
    convertMemberToOutsideCollaborator: {
      (
        params?: RestEndpointMethodTypes["orgs"]["convertMemberToOutsideCollaborator"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["orgs"]["convertMemberToOutsideCollaborator"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Here's how you can create a hook that posts payloads in JSON format:
     */
    createWebhook: {
      (
        params?: RestEndpointMethodTypes["orgs"]["createWebhook"]["parameters"]
      ): Promise<RestEndpointMethodTypes["orgs"]["createWebhook"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    deleteWebhook: {
      (
        params?: RestEndpointMethodTypes["orgs"]["deleteWebhook"]["parameters"]
      ): Promise<RestEndpointMethodTypes["orgs"]["deleteWebhook"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * To see many of the organization response values, you need to be an authenticated organization owner with the `admin:org` scope. When the value of `two_factor_requirement_enabled` is `true`, the organization requires all members, billing managers, and outside collaborators to enable [two-factor authentication](https://help.github.com/articles/securing-your-account-with-two-factor-authentication-2fa/).
     *
     * GitHub Apps with the `Organization plan` permission can use this endpoint to retrieve information about an organization's GitHub Enterprise Server plan. See "[Authenticating with GitHub Apps](https://docs.github.com/enterprise-server@2.21/apps/building-github-apps/authenticating-with-github-apps/)" for details. For an example response, see 'Response with GitHub Enterprise Server plan information' below."
     */
    get: {
      (params?: RestEndpointMethodTypes["orgs"]["get"]["parameters"]): Promise<
        RestEndpointMethodTypes["orgs"]["get"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getMembershipForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["orgs"]["getMembershipForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["orgs"]["getMembershipForAuthenticatedUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * In order to get a user's membership with an organization, the authenticated user must be an organization member. The `state` parameter in the response can be used to identify the user's membership status.
     */
    getMembershipForUser: {
      (
        params?: RestEndpointMethodTypes["orgs"]["getMembershipForUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["orgs"]["getMembershipForUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Returns a webhook configured in an organization. To get only the webhook `config` properties, see "[Get a webhook configuration for an organization](/rest/reference/orgs#get-a-webhook-configuration-for-an-organization)."
     */
    getWebhook: {
      (
        params?: RestEndpointMethodTypes["orgs"]["getWebhook"]["parameters"]
      ): Promise<RestEndpointMethodTypes["orgs"]["getWebhook"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Lists all organizations, in the order that they were created on GitHub Enterprise Server.
     *
     * **Note:** Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of organizations.
     */
    list: {
      (params?: RestEndpointMethodTypes["orgs"]["list"]["parameters"]): Promise<
        RestEndpointMethodTypes["orgs"]["list"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Lists all GitHub Apps in an organization. The installation count includes all GitHub Apps installed on repositories in the organization. You must be an organization owner with `admin:read` scope to use this endpoint.
     */
    listAppInstallations: {
      (
        params?: RestEndpointMethodTypes["orgs"]["listAppInstallations"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["orgs"]["listAppInstallations"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * List organizations for the authenticated user.
     *
     * **OAuth scope requirements**
     *
     * This only lists organizations that your authorization allows you to operate on in some way (e.g., you can list teams with `read:org` scope, you can publicize your organization membership with `user` scope, etc.). Therefore, this API requires at least `user` or `read:org` scope. OAuth requests with insufficient scope receive a `403 Forbidden` response.
     */
    listForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["orgs"]["listForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["orgs"]["listForAuthenticatedUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * List [public organization memberships](https://help.github.com/articles/publicizing-or-concealing-organization-membership) for the specified user.
     *
     * This method only lists _public_ memberships, regardless of authentication. If you need to fetch all of the organization memberships (public and private) for the authenticated user, use the [List organizations for the authenticated user](https://docs.github.com/enterprise-server@2.21/rest/reference/orgs#list-organizations-for-the-authenticated-user) API instead.
     */
    listForUser: {
      (
        params?: RestEndpointMethodTypes["orgs"]["listForUser"]["parameters"]
      ): Promise<RestEndpointMethodTypes["orgs"]["listForUser"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * List all users who are members of an organization. If the authenticated user is also a member of this organization then both concealed and public members will be returned.
     */
    listMembers: {
      (
        params?: RestEndpointMethodTypes["orgs"]["listMembers"]["parameters"]
      ): Promise<RestEndpointMethodTypes["orgs"]["listMembers"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listMembershipsForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["orgs"]["listMembershipsForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["orgs"]["listMembershipsForAuthenticatedUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * List all users who are outside collaborators of an organization.
     */
    listOutsideCollaborators: {
      (
        params?: RestEndpointMethodTypes["orgs"]["listOutsideCollaborators"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["orgs"]["listOutsideCollaborators"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Members of an organization can choose to have their membership publicized or not.
     */
    listPublicMembers: {
      (
        params?: RestEndpointMethodTypes["orgs"]["listPublicMembers"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["orgs"]["listPublicMembers"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listWebhooks: {
      (
        params?: RestEndpointMethodTypes["orgs"]["listWebhooks"]["parameters"]
      ): Promise<RestEndpointMethodTypes["orgs"]["listWebhooks"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * This will trigger a [ping event](https://docs.github.com/enterprise-server@2.21/webhooks/#ping-event) to be sent to the hook.
     */
    pingWebhook: {
      (
        params?: RestEndpointMethodTypes["orgs"]["pingWebhook"]["parameters"]
      ): Promise<RestEndpointMethodTypes["orgs"]["pingWebhook"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Removing a user from this list will remove them from all teams and they will no longer have any access to the organization's repositories.
     */
    removeMember: {
      (
        params?: RestEndpointMethodTypes["orgs"]["removeMember"]["parameters"]
      ): Promise<RestEndpointMethodTypes["orgs"]["removeMember"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * In order to remove a user's membership with an organization, the authenticated user must be an organization owner.
     *
     * If the specified user is an active member of the organization, this will remove them from the organization. If the specified user has been invited to the organization, this will cancel their invitation. The specified user will receive an email notification in both cases.
     */
    removeMembershipForUser: {
      (
        params?: RestEndpointMethodTypes["orgs"]["removeMembershipForUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["orgs"]["removeMembershipForUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Removing a user from this list will remove them from all the organization's repositories.
     */
    removeOutsideCollaborator: {
      (
        params?: RestEndpointMethodTypes["orgs"]["removeOutsideCollaborator"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["orgs"]["removeOutsideCollaborator"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    removePublicMembershipForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["orgs"]["removePublicMembershipForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["orgs"]["removePublicMembershipForAuthenticatedUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Only authenticated organization owners can add a member to the organization or update the member's role.
     *
     * *   If the authenticated user is _adding_ a member to the organization, the invited user will receive an email inviting them to the organization. The user's [membership status](https://docs.github.com/enterprise-server@2.21/rest/reference/orgs#get-organization-membership-for-a-user) will be `pending` until they accept the invitation.
     *
     * *   Authenticated users can _update_ a user's membership by passing the `role` parameter. If the authenticated user changes a member's role to `admin`, the affected user will receive an email notifying them that they've been made an organization owner. If the authenticated user changes an owner's role to `member`, no email will be sent.
     *
     * **Rate limits**
     *
     * To prevent abuse, the authenticated user is limited to 50 organization invitations per 24 hour period. If the organization is more than one month old or on a paid plan, the limit is 500 invitations per 24 hour period.
     */
    setMembershipForUser: {
      (
        params?: RestEndpointMethodTypes["orgs"]["setMembershipForUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["orgs"]["setMembershipForUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * The user can publicize their own membership. (A user cannot publicize the membership for another user.)
     *
     * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#http-verbs)."
     */
    setPublicMembershipForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["orgs"]["setPublicMembershipForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["orgs"]["setPublicMembershipForAuthenticatedUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * **Parameter Deprecation Notice:** GitHub Enterprise Server will replace and discontinue `members_allowed_repository_creation_type` in favor of more granular permissions. The new input parameters are `members_can_create_public_repositories`, `members_can_create_private_repositories` for all organizations and `members_can_create_internal_repositories` for organizations associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+. For more information, see the [blog post](https://developer.github.com/changes/2019-12-03-internal-visibility-changes).
     *
     * Enables an authenticated organization owner with the `admin:org` scope to update the organization's profile and member privileges.
     */
    update: {
      (
        params?: RestEndpointMethodTypes["orgs"]["update"]["parameters"]
      ): Promise<RestEndpointMethodTypes["orgs"]["update"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    updateMembershipForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["orgs"]["updateMembershipForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["orgs"]["updateMembershipForAuthenticatedUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Updates a webhook configured in an organization. When you update a webhook, the `secret` will be overwritten. If you previously had a `secret` set, you must provide the same `secret` or set a new `secret` or the secret will be removed. If you are only updating individual webhook `config` properties, use "[Update a webhook configuration for an organization](/rest/reference/orgs#update-a-webhook-configuration-for-an-organization)."
     */
    updateWebhook: {
      (
        params?: RestEndpointMethodTypes["orgs"]["updateWebhook"]["parameters"]
      ): Promise<RestEndpointMethodTypes["orgs"]["updateWebhook"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
  };
  projects: {
    /**
     * Adds a collaborator to an organization project and sets their permission level. You must be an organization owner or a project `admin` to add a collaborator.
     */
    addCollaborator: {
      (
        params?: RestEndpointMethodTypes["projects"]["addCollaborator"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["projects"]["addCollaborator"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    createCard: {
      (
        params?: RestEndpointMethodTypes["projects"]["createCard"]["parameters"]
      ): Promise<RestEndpointMethodTypes["projects"]["createCard"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    createColumn: {
      (
        params?: RestEndpointMethodTypes["projects"]["createColumn"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["projects"]["createColumn"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    createForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["projects"]["createForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["projects"]["createForAuthenticatedUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Creates an organization project board. Returns a `404 Not Found` status if projects are disabled in the organization. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
     */
    createForOrg: {
      (
        params?: RestEndpointMethodTypes["projects"]["createForOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["projects"]["createForOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Creates a repository project board. Returns a `404 Not Found` status if projects are disabled in the repository. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
     */
    createForRepo: {
      (
        params?: RestEndpointMethodTypes["projects"]["createForRepo"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["projects"]["createForRepo"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Deletes a project board. Returns a `404 Not Found` status if projects are disabled.
     */
    delete: {
      (
        params?: RestEndpointMethodTypes["projects"]["delete"]["parameters"]
      ): Promise<RestEndpointMethodTypes["projects"]["delete"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    deleteCard: {
      (
        params?: RestEndpointMethodTypes["projects"]["deleteCard"]["parameters"]
      ): Promise<RestEndpointMethodTypes["projects"]["deleteCard"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    deleteColumn: {
      (
        params?: RestEndpointMethodTypes["projects"]["deleteColumn"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["projects"]["deleteColumn"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Gets a project by its `id`. Returns a `404 Not Found` status if projects are disabled. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
     */
    get: {
      (
        params?: RestEndpointMethodTypes["projects"]["get"]["parameters"]
      ): Promise<RestEndpointMethodTypes["projects"]["get"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getCard: {
      (
        params?: RestEndpointMethodTypes["projects"]["getCard"]["parameters"]
      ): Promise<RestEndpointMethodTypes["projects"]["getCard"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getColumn: {
      (
        params?: RestEndpointMethodTypes["projects"]["getColumn"]["parameters"]
      ): Promise<RestEndpointMethodTypes["projects"]["getColumn"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Returns the collaborator's permission level for an organization project. Possible values for the `permission` key: `admin`, `write`, `read`, `none`. You must be an organization owner or a project `admin` to review a user's permission level.
     */
    getPermissionForUser: {
      (
        params?: RestEndpointMethodTypes["projects"]["getPermissionForUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["projects"]["getPermissionForUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listCards: {
      (
        params?: RestEndpointMethodTypes["projects"]["listCards"]["parameters"]
      ): Promise<RestEndpointMethodTypes["projects"]["listCards"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Lists the collaborators for an organization project. For a project, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners. You must be an organization owner or a project `admin` to list collaborators.
     */
    listCollaborators: {
      (
        params?: RestEndpointMethodTypes["projects"]["listCollaborators"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["projects"]["listCollaborators"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listColumns: {
      (
        params?: RestEndpointMethodTypes["projects"]["listColumns"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["projects"]["listColumns"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Lists the projects in an organization. Returns a `404 Not Found` status if projects are disabled in the organization. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
     */
    listForOrg: {
      (
        params?: RestEndpointMethodTypes["projects"]["listForOrg"]["parameters"]
      ): Promise<RestEndpointMethodTypes["projects"]["listForOrg"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Lists the projects in a repository. Returns a `404 Not Found` status if projects are disabled in the repository. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
     */
    listForRepo: {
      (
        params?: RestEndpointMethodTypes["projects"]["listForRepo"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["projects"]["listForRepo"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listForUser: {
      (
        params?: RestEndpointMethodTypes["projects"]["listForUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["projects"]["listForUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    moveCard: {
      (
        params?: RestEndpointMethodTypes["projects"]["moveCard"]["parameters"]
      ): Promise<RestEndpointMethodTypes["projects"]["moveCard"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    moveColumn: {
      (
        params?: RestEndpointMethodTypes["projects"]["moveColumn"]["parameters"]
      ): Promise<RestEndpointMethodTypes["projects"]["moveColumn"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Removes a collaborator from an organization project. You must be an organization owner or a project `admin` to remove a collaborator.
     */
    removeCollaborator: {
      (
        params?: RestEndpointMethodTypes["projects"]["removeCollaborator"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["projects"]["removeCollaborator"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Updates a project board's information. Returns a `404 Not Found` status if projects are disabled. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
     */
    update: {
      (
        params?: RestEndpointMethodTypes["projects"]["update"]["parameters"]
      ): Promise<RestEndpointMethodTypes["projects"]["update"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    updateCard: {
      (
        params?: RestEndpointMethodTypes["projects"]["updateCard"]["parameters"]
      ): Promise<RestEndpointMethodTypes["projects"]["updateCard"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    updateColumn: {
      (
        params?: RestEndpointMethodTypes["projects"]["updateColumn"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["projects"]["updateColumn"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
  };
  pulls: {
    checkIfMerged: {
      (
        params?: RestEndpointMethodTypes["pulls"]["checkIfMerged"]["parameters"]
      ): Promise<RestEndpointMethodTypes["pulls"]["checkIfMerged"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team, GitHub Enterprise Server 2.17+, and GitHub Enterprise Cloud. You can create a new pull request. This endpoint triggers [notifications](https://docs.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" for details.
     */
    create: {
      (
        params?: RestEndpointMethodTypes["pulls"]["create"]["parameters"]
      ): Promise<RestEndpointMethodTypes["pulls"]["create"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Creates a reply to a review comment for a pull request. For the `comment_id`, provide the ID of the review comment you are replying to. This must be the ID of a _top-level review comment_, not a reply to that comment. Replies to replies are not supported.
     *
     * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
     */
    createReplyForReviewComment: {
      (
        params?: RestEndpointMethodTypes["pulls"]["createReplyForReviewComment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["pulls"]["createReplyForReviewComment"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
     *
     * Pull request reviews created in the `PENDING` state do not include the `submitted_at` property in the response.
     *
     * **Note:** To comment on a specific line in a file, you need to first determine the _position_ of that line in the diff. The GitHub REST API v3 offers the `application/vnd.github.v3.diff` [media type](https://docs.github.com/enterprise-server@2.21/rest/overview/media-types#commits-commit-comparison-and-pull-requests). To see a pull request diff, add this media type to the `Accept` header of a call to the [single pull request](https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#get-a-pull-request) endpoint.
     *
     * The `position` value equals the number of lines down from the first "@@" hunk header in the file you want to add a comment. The line just below the "@@" line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.
     */
    createReview: {
      (
        params?: RestEndpointMethodTypes["pulls"]["createReview"]["parameters"]
      ): Promise<RestEndpointMethodTypes["pulls"]["createReview"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Creates a review comment in the pull request diff. To add a regular comment to a pull request timeline, see "[Create an issue comment](https://docs.github.com/enterprise-server@2.21/rest/reference/issues#create-an-issue-comment)." We recommend creating a review comment using `line`, `side`, and optionally `start_line` and `start_side` if your comment applies to more than one line in the pull request diff.
     *
     * You can still create a review comment using the `position` parameter. When you use `position`, the `line`, `side`, `start_line`, and `start_side` parameters are not required. For more information, see the [`comfort-fade` preview notice](https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#create-a-review-comment-for-a-pull-request-preview-notices).
     *
     * **Note:** The position value equals the number of lines down from the first "@@" hunk header in the file you want to add a comment. The line just below the "@@" line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.
     *
     * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
     */
    createReviewComment: {
      (
        params?: RestEndpointMethodTypes["pulls"]["createReviewComment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["pulls"]["createReviewComment"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    deletePendingReview: {
      (
        params?: RestEndpointMethodTypes["pulls"]["deletePendingReview"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["pulls"]["deletePendingReview"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Deletes a review comment.
     */
    deleteReviewComment: {
      (
        params?: RestEndpointMethodTypes["pulls"]["deleteReviewComment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["pulls"]["deleteReviewComment"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * **Note:** To dismiss a pull request review on a [protected branch](https://docs.github.com/enterprise-server@2.21/rest/reference/repos#branches), you must be a repository administrator or be included in the list of people or teams who can dismiss pull request reviews.
     */
    dismissReview: {
      (
        params?: RestEndpointMethodTypes["pulls"]["dismissReview"]["parameters"]
      ): Promise<RestEndpointMethodTypes["pulls"]["dismissReview"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Lists details of a pull request by providing its number.
     *
     * When you get, [create](https://docs.github.com/enterprise-server@2.21/rest/reference/pulls/#create-a-pull-request), or [edit](https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#update-a-pull-request) a pull request, GitHub Enterprise Server creates a merge commit to test whether the pull request can be automatically merged into the base branch. This test commit is not added to the base branch or the head branch. You can review the status of the test commit using the `mergeable` key. For more information, see "[Checking mergeability of pull requests](https://docs.github.com/enterprise-server@2.21/rest/guides/getting-started-with-the-git-database-api#checking-mergeability-of-pull-requests)".
     *
     * The value of the `mergeable` attribute can be `true`, `false`, or `null`. If the value is `null`, then GitHub Enterprise Server has started a background job to compute the mergeability. After giving the job time to complete, resubmit the request. When the job finishes, you will see a non-`null` value for the `mergeable` attribute in the response. If `mergeable` is `true`, then `merge_commit_sha` will be the SHA of the _test_ merge commit.
     *
     * The value of the `merge_commit_sha` attribute changes depending on the state of the pull request. Before merging a pull request, the `merge_commit_sha` attribute holds the SHA of the _test_ merge commit. After merging a pull request, the `merge_commit_sha` attribute changes depending on how you merged the pull request:
     *
     * *   If merged as a [merge commit](https://help.github.com/articles/about-merge-methods-on-github/), `merge_commit_sha` represents the SHA of the merge commit.
     * *   If merged via a [squash](https://help.github.com/articles/about-merge-methods-on-github/#squashing-your-merge-commits), `merge_commit_sha` represents the SHA of the squashed commit on the base branch.
     * *   If [rebased](https://help.github.com/articles/about-merge-methods-on-github/#rebasing-and-merging-your-commits), `merge_commit_sha` represents the commit that the base branch was updated to.
     *
     * Pass the appropriate [media type](https://docs.github.com/enterprise-server@2.21/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to fetch diff and patch formats.
     */
    get: {
      (params?: RestEndpointMethodTypes["pulls"]["get"]["parameters"]): Promise<
        RestEndpointMethodTypes["pulls"]["get"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getReview: {
      (
        params?: RestEndpointMethodTypes["pulls"]["getReview"]["parameters"]
      ): Promise<RestEndpointMethodTypes["pulls"]["getReview"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Provides details for a review comment.
     */
    getReviewComment: {
      (
        params?: RestEndpointMethodTypes["pulls"]["getReviewComment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["pulls"]["getReviewComment"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team, GitHub Enterprise Server 2.17+, and GitHub Enterprise Cloud.
     */
    list: {
      (
        params?: RestEndpointMethodTypes["pulls"]["list"]["parameters"]
      ): Promise<RestEndpointMethodTypes["pulls"]["list"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * List comments for a specific pull request review.
     */
    listCommentsForReview: {
      (
        params?: RestEndpointMethodTypes["pulls"]["listCommentsForReview"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["pulls"]["listCommentsForReview"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Lists a maximum of 250 commits for a pull request. To receive a complete commit list for pull requests with more than 250 commits, use the [List commits](https://docs.github.com/enterprise-server@2.21/rest/reference/repos#list-commits) endpoint.
     */
    listCommits: {
      (
        params?: RestEndpointMethodTypes["pulls"]["listCommits"]["parameters"]
      ): Promise<RestEndpointMethodTypes["pulls"]["listCommits"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * **Note:** Responses include a maximum of 3000 files. The paginated response returns 30 files per page by default.
     */
    listFiles: {
      (
        params?: RestEndpointMethodTypes["pulls"]["listFiles"]["parameters"]
      ): Promise<RestEndpointMethodTypes["pulls"]["listFiles"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listRequestedReviewers: {
      (
        params?: RestEndpointMethodTypes["pulls"]["listRequestedReviewers"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["pulls"]["listRequestedReviewers"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Lists all review comments for a pull request. By default, review comments are in ascending order by ID.
     */
    listReviewComments: {
      (
        params?: RestEndpointMethodTypes["pulls"]["listReviewComments"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["pulls"]["listReviewComments"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Lists review comments for all pull requests in a repository. By default, review comments are in ascending order by ID.
     */
    listReviewCommentsForRepo: {
      (
        params?: RestEndpointMethodTypes["pulls"]["listReviewCommentsForRepo"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["pulls"]["listReviewCommentsForRepo"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * The list of reviews returns in chronological order.
     */
    listReviews: {
      (
        params?: RestEndpointMethodTypes["pulls"]["listReviews"]["parameters"]
      ): Promise<RestEndpointMethodTypes["pulls"]["listReviews"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * This endpoint triggers [notifications](https://docs.github.com/enterprise-server@2.21/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/guides/best-practices-for-integrators#dealing-with-abuse-rate-limits)" for details.
     */
    merge: {
      (
        params?: RestEndpointMethodTypes["pulls"]["merge"]["parameters"]
      ): Promise<RestEndpointMethodTypes["pulls"]["merge"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    removeRequestedReviewers: {
      (
        params?: RestEndpointMethodTypes["pulls"]["removeRequestedReviewers"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["pulls"]["removeRequestedReviewers"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * This endpoint triggers [notifications](https://docs.github.com/enterprise-server@2.21/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/guides/best-practices-for-integrators#dealing-with-abuse-rate-limits)" for details.
     */
    requestReviewers: {
      (
        params?: RestEndpointMethodTypes["pulls"]["requestReviewers"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["pulls"]["requestReviewers"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    submitReview: {
      (
        params?: RestEndpointMethodTypes["pulls"]["submitReview"]["parameters"]
      ): Promise<RestEndpointMethodTypes["pulls"]["submitReview"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team, GitHub Enterprise Server 2.17+, and GitHub Enterprise Cloud.
     */
    update: {
      (
        params?: RestEndpointMethodTypes["pulls"]["update"]["parameters"]
      ): Promise<RestEndpointMethodTypes["pulls"]["update"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Updates the pull request branch with the latest upstream changes by merging HEAD from the base branch into the pull request branch.
     */
    updateBranch: {
      (
        params?: RestEndpointMethodTypes["pulls"]["updateBranch"]["parameters"]
      ): Promise<RestEndpointMethodTypes["pulls"]["updateBranch"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Update the review summary comment with new text.
     */
    updateReview: {
      (
        params?: RestEndpointMethodTypes["pulls"]["updateReview"]["parameters"]
      ): Promise<RestEndpointMethodTypes["pulls"]["updateReview"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Enables you to edit a review comment.
     */
    updateReviewComment: {
      (
        params?: RestEndpointMethodTypes["pulls"]["updateReviewComment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["pulls"]["updateReviewComment"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
  };
  rateLimit: {
    /**
     * **Note:** Accessing this endpoint does not count against your REST API rate limit.
     *
     * **Note:** The `rate` object is deprecated. If you're writing new API client code or updating existing code, you should use the `core` object instead of the `rate` object. The `core` object contains the same information that is present in the `rate` object.
     */
    get: {
      (
        params?: RestEndpointMethodTypes["rateLimit"]["get"]["parameters"]
      ): Promise<RestEndpointMethodTypes["rateLimit"]["get"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
  };
  reactions: {
    /**
     * Create a reaction to a [commit comment](https://docs.github.com/enterprise-server@2.21/rest/reference/repos#comments). A response with an HTTP `200` status means that you already added the reaction type to this commit comment.
     */
    createForCommitComment: {
      (
        params?: RestEndpointMethodTypes["reactions"]["createForCommitComment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["reactions"]["createForCommitComment"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Create a reaction to an [issue](https://docs.github.com/enterprise-server@2.21/rest/reference/issues/). A response with an HTTP `200` status means that you already added the reaction type to this issue.
     */
    createForIssue: {
      (
        params?: RestEndpointMethodTypes["reactions"]["createForIssue"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["reactions"]["createForIssue"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Create a reaction to an [issue comment](https://docs.github.com/enterprise-server@2.21/rest/reference/issues#comments). A response with an HTTP `200` status means that you already added the reaction type to this issue comment.
     */
    createForIssueComment: {
      (
        params?: RestEndpointMethodTypes["reactions"]["createForIssueComment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["reactions"]["createForIssueComment"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Create a reaction to a [pull request review comment](https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#comments). A response with an HTTP `200` status means that you already added the reaction type to this pull request review comment.
     */
    createForPullRequestReviewComment: {
      (
        params?: RestEndpointMethodTypes["reactions"]["createForPullRequestReviewComment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["reactions"]["createForPullRequestReviewComment"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Create a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion comment.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`.
     */
    createForTeamDiscussionCommentInOrg: {
      (
        params?: RestEndpointMethodTypes["reactions"]["createForTeamDiscussionCommentInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["reactions"]["createForTeamDiscussionCommentInOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Create a reaction to a [team discussion](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.
     */
    createForTeamDiscussionInOrg: {
      (
        params?: RestEndpointMethodTypes["reactions"]["createForTeamDiscussionInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["reactions"]["createForTeamDiscussionInOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * **Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/comments/:comment_id/reactions/:reaction_id`.
     *
     * Delete a reaction to a [commit comment](https://docs.github.com/enterprise-server@2.21/rest/reference/repos#comments).
     */
    deleteForCommitComment: {
      (
        params?: RestEndpointMethodTypes["reactions"]["deleteForCommitComment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["reactions"]["deleteForCommitComment"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * **Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/issues/:issue_number/reactions/:reaction_id`.
     *
     * Delete a reaction to an [issue](https://docs.github.com/enterprise-server@2.21/rest/reference/issues/).
     */
    deleteForIssue: {
      (
        params?: RestEndpointMethodTypes["reactions"]["deleteForIssue"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["reactions"]["deleteForIssue"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * **Note:** You can also specify a repository by `repository_id` using the route `DELETE delete /repositories/:repository_id/issues/comments/:comment_id/reactions/:reaction_id`.
     *
     * Delete a reaction to an [issue comment](https://docs.github.com/enterprise-server@2.21/rest/reference/issues#comments).
     */
    deleteForIssueComment: {
      (
        params?: RestEndpointMethodTypes["reactions"]["deleteForIssueComment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["reactions"]["deleteForIssueComment"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * **Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/pulls/comments/:comment_id/reactions/:reaction_id.`
     *
     * Delete a reaction to a [pull request review comment](https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#review-comments).
     */
    deleteForPullRequestComment: {
      (
        params?: RestEndpointMethodTypes["reactions"]["deleteForPullRequestComment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["reactions"]["deleteForPullRequestComment"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * **Note:** You can also specify a team or organization with `team_id` and `org_id` using the route `DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions/:reaction_id`.
     *
     * Delete a reaction to a [team discussion](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     */
    deleteForTeamDiscussion: {
      (
        params?: RestEndpointMethodTypes["reactions"]["deleteForTeamDiscussion"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["reactions"]["deleteForTeamDiscussion"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * **Note:** You can also specify a team or organization with `team_id` and `org_id` using the route `DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions/:reaction_id`.
     *
     * Delete a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     */
    deleteForTeamDiscussionComment: {
      (
        params?: RestEndpointMethodTypes["reactions"]["deleteForTeamDiscussionComment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["reactions"]["deleteForTeamDiscussionComment"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Reactions API. We recommend migrating your existing code to use the new delete reactions endpoints. For more information, see this [blog post](https://developer.github.com/changes/2020-02-26-new-delete-reactions-endpoints/).
     *
     * OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), when deleting a [team discussion](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#discussions) or [team discussion comment](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#discussion-comments).
     * @deprecated octokit.rest.reactions.deleteLegacy() is deprecated, see https://docs.github.com/enterprise-server@2.21/rest/reference/reactions/#delete-a-reaction-legacy
     */
    deleteLegacy: {
      (
        params?: RestEndpointMethodTypes["reactions"]["deleteLegacy"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["reactions"]["deleteLegacy"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * List the reactions to a [commit comment](https://docs.github.com/enterprise-server@2.21/rest/reference/repos#comments).
     */
    listForCommitComment: {
      (
        params?: RestEndpointMethodTypes["reactions"]["listForCommitComment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["reactions"]["listForCommitComment"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * List the reactions to an [issue](https://docs.github.com/enterprise-server@2.21/rest/reference/issues).
     */
    listForIssue: {
      (
        params?: RestEndpointMethodTypes["reactions"]["listForIssue"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["reactions"]["listForIssue"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * List the reactions to an [issue comment](https://docs.github.com/enterprise-server@2.21/rest/reference/issues#comments).
     */
    listForIssueComment: {
      (
        params?: RestEndpointMethodTypes["reactions"]["listForIssueComment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["reactions"]["listForIssueComment"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * List the reactions to a [pull request review comment](https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#review-comments).
     */
    listForPullRequestReviewComment: {
      (
        params?: RestEndpointMethodTypes["reactions"]["listForPullRequestReviewComment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["reactions"]["listForPullRequestReviewComment"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * List the reactions to a [team discussion comment](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#discussion-comments/). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`.
     */
    listForTeamDiscussionCommentInOrg: {
      (
        params?: RestEndpointMethodTypes["reactions"]["listForTeamDiscussionCommentInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["reactions"]["listForTeamDiscussionCommentInOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * List the reactions to a [team discussion](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#discussions). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.
     */
    listForTeamDiscussionInOrg: {
      (
        params?: RestEndpointMethodTypes["reactions"]["listForTeamDiscussionInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["reactions"]["listForTeamDiscussionInOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
  };
  repos: {
    acceptInvitation: {
      (
        params?: RestEndpointMethodTypes["repos"]["acceptInvitation"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["acceptInvitation"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Grants the specified apps push access for this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.
     *
     * | Type    | Description                                                                                                                                                |
     * | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
     * | `array` | The GitHub Apps that have push access to this branch. Use the app's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     */
    addAppAccessRestrictions: {
      (
        params?: RestEndpointMethodTypes["repos"]["addAppAccessRestrictions"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["addAppAccessRestrictions"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
     *
     * For more information the permission levels, see "[Repository permission levels for an organization](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)".
     *
     * Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#http-verbs)."
     *
     * The invitee will receive a notification that they have been invited to the repository, which they must accept or decline. They may do this via the notifications page, the email they receive, or by using the [repository invitations API endpoints](https://docs.github.com/enterprise-server@2.21/rest/reference/repos#invitations).
     *
     * **Rate limits**
     *
     * To prevent abuse, you are limited to sending 50 invitations to a repository per 24 hour period. Note there is no limit if you are inviting organization members to an organization repository.
     */
    addCollaborator: {
      (
        params?: RestEndpointMethodTypes["repos"]["addCollaborator"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["addCollaborator"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     */
    addStatusCheckContexts: {
      (
        params?: RestEndpointMethodTypes["repos"]["addStatusCheckContexts"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["addStatusCheckContexts"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Grants the specified teams push access for this branch. You can also give push access to child teams.
     *
     * | Type    | Description                                                                                                                                |
     * | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
     * | `array` | The teams that can have push access. Use the team's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     */
    addTeamAccessRestrictions: {
      (
        params?: RestEndpointMethodTypes["repos"]["addTeamAccessRestrictions"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["addTeamAccessRestrictions"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Grants the specified people push access for this branch.
     *
     * | Type    | Description                                                                                                                   |
     * | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
     * | `array` | Usernames for people who can have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     */
    addUserAccessRestrictions: {
      (
        params?: RestEndpointMethodTypes["repos"]["addUserAccessRestrictions"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["addUserAccessRestrictions"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.
     *
     * Team members will include the members of child teams.
     */
    checkCollaborator: {
      (
        params?: RestEndpointMethodTypes["repos"]["checkCollaborator"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["checkCollaborator"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * **Deprecated**: Use `repos.compareCommitsWithBasehead()` (`GET /repos/{owner}/{repo}/compare/{basehead}`) instead. Both `:base` and `:head` must be branch names in `:repo`. To compare branches across other repositories in the same network as `:repo`, use the format `<USERNAME>:branch`.
     *
     * The response from the API is equivalent to running the `git log base..head` command; however, commits are returned in chronological order. Pass the appropriate [media type](https://docs.github.com/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to fetch diff and patch formats.
     *
     * The response also includes details on the files that were changed between the two commits. This includes the status of the change (for example, if a file was added, removed, modified, or renamed), and details of the change itself. For example, files with a `renamed` status have a `previous_filename` field showing the previous filename of the file, and files with a `modified` status have a `patch` field showing the changes made to the file.
     *
     * **Working with large comparisons**
     *
     * To process a response with a large number of commits, you can use (`per_page` or `page`) to paginate the results. When using paging, the list of changed files is only returned with page 1, but includes all changed files for the entire comparison. For more information on working with pagination, see "[Traversing with pagination](/rest/guides/traversing-with-pagination)."
     *
     * When calling this API without any paging parameters (`per_page` or `page`), the returned list is limited to 250 commits and the last commit in the list is the most recent of the entire comparison. When a paging parameter is specified, the first commit in the returned list of each page is the earliest.
     *
     * **Signature verification object**
     *
     * The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
     *
     * | Name | Type | Description |
     * | ---- | ---- | ----------- |
     * | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
     * | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
     * | `signature` | `string` | The signature that was extracted from the commit. |
     * | `payload` | `string` | The value that was signed. |
     *
     * These are the possible values for `reason` in the `verification` object:
     *
     * | Value | Description |
     * | ----- | ----------- |
     * | `expired_key` | The key that made the signature is expired. |
     * | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
     * | `gpgverify_error` | There was an error communicating with the signature verification service. |
     * | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
     * | `unsigned` | The object does not include a signature. |
     * | `unknown_signature_type` | A non-PGP signature was found in the commit. |
     * | `no_user` | No user was associated with the `committer` email address in the commit. |
     * | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
     * | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
     * | `unknown_key` | The key that made the signature has not been registered with any user's account. |
     * | `malformed_signature` | There was an error parsing the signature. |
     * | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
     * | `valid` | None of the above errors applied, so the signature is considered to be verified. |
     */
    compareCommits: {
      (
        params?: RestEndpointMethodTypes["repos"]["compareCommits"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["compareCommits"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * The `basehead` param is comprised of two parts: `base` and `head`. Both must be branch names in `repo`. To compare branches across other repositories in the same network as `repo`, use the format `<USERNAME>:branch`.
     *
     * The response from the API is equivalent to running the `git log base..head` command; however, commits are returned in chronological order. Pass the appropriate [media type](https://docs.github.com/enterprise-server@2.21/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to fetch diff and patch formats.
     *
     * The response also includes details on the files that were changed between the two commits. This includes the status of the change (for example, if a file was added, removed, modified, or renamed), and details of the change itself. For example, files with a `renamed` status have a `previous_filename` field showing the previous filename of the file, and files with a `modified` status have a `patch` field showing the changes made to the file.
     *
     * **Working with large comparisons**
     *
     * The response will include a comparison of up to 250 commits. If you are working with a larger commit range, you can use the [List commits](https://docs.github.com/enterprise-server@2.21/rest/reference/repos#list-commits) to enumerate all commits in the range.
     *
     * For comparisons with extremely large diffs, you may receive an error response indicating that the diff took too long
     * to generate. You can typically resolve this error by using a smaller commit range.
     *
     * **Signature verification object**
     *
     * The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
     *
     * | Name | Type | Description |
     * | ---- | ---- | ----------- |
     * | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
     * | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
     * | `signature` | `string` | The signature that was extracted from the commit. |
     * | `payload` | `string` | The value that was signed. |
     *
     * These are the possible values for `reason` in the `verification` object:
     *
     * | Value | Description |
     * | ----- | ----------- |
     * | `expired_key` | The key that made the signature is expired. |
     * | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
     * | `gpgverify_error` | There was an error communicating with the signature verification service. |
     * | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
     * | `unsigned` | The object does not include a signature. |
     * | `unknown_signature_type` | A non-PGP signature was found in the commit. |
     * | `no_user` | No user was associated with the `committer` email address in the commit. |
     * | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
     * | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
     * | `unknown_key` | The key that made the signature has not been registered with any user's account. |
     * | `malformed_signature` | There was an error parsing the signature. |
     * | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
     * | `valid` | None of the above errors applied, so the signature is considered to be verified. |
     */
    compareCommitsWithBasehead: {
      (
        params?: RestEndpointMethodTypes["repos"]["compareCommitsWithBasehead"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["compareCommitsWithBasehead"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Create a comment for a commit using its `:commit_sha`.
     *
     * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
     */
    createCommitComment: {
      (
        params?: RestEndpointMethodTypes["repos"]["createCommitComment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["createCommitComment"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * When authenticated with admin or owner permissions to the repository, you can use this endpoint to require signed commits on a branch. You must enable branch protection to require signed commits.
     */
    createCommitSignatureProtection: {
      (
        params?: RestEndpointMethodTypes["repos"]["createCommitSignatureProtection"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["createCommitSignatureProtection"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Users with push access in a repository can create commit statuses for a given SHA.
     *
     * Note: there is a limit of 1000 statuses per `sha` and `context` within a repository. Attempts to create more than 1000 statuses will result in a validation error.
     */
    createCommitStatus: {
      (
        params?: RestEndpointMethodTypes["repos"]["createCommitStatus"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["createCommitStatus"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * You can create a read-only deploy key.
     */
    createDeployKey: {
      (
        params?: RestEndpointMethodTypes["repos"]["createDeployKey"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["createDeployKey"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Deployments offer a few configurable parameters with certain defaults.
     *
     * The `ref` parameter can be any named branch, tag, or SHA. At GitHub Enterprise Server we often deploy branches and verify them
     * before we merge a pull request.
     *
     * The `environment` parameter allows deployments to be issued to different runtime environments. Teams often have
     * multiple environments for verifying their applications, such as `production`, `staging`, and `qa`. This parameter
     * makes it easier to track which environments have requested deployments. The default environment is `production`.
     *
     * The `auto_merge` parameter is used to ensure that the requested ref is not behind the repository's default branch. If
     * the ref _is_ behind the default branch for the repository, we will attempt to merge it for you. If the merge succeeds,
     * the API will return a successful merge commit. If merge conflicts prevent the merge from succeeding, the API will
     * return a failure response.
     *
     * By default, [commit statuses](https://docs.github.com/enterprise-server@2.21/rest/reference/repos#statuses) for every submitted context must be in a `success`
     * state. The `required_contexts` parameter allows you to specify a subset of contexts that must be `success`, or to
     * specify contexts that have not yet been submitted. You are not required to use commit statuses to deploy. If you do
     * not require any contexts or create any commit statuses, the deployment will always succeed.
     *
     * The `payload` parameter is available for any extra information that a deployment system might need. It is a JSON text
     * field that will be passed on when a deployment event is dispatched.
     *
     * The `task` parameter is used by the deployment system to allow different execution paths. In the web world this might
     * be `deploy:migrations` to run schema changes on the system. In the compiled world this could be a flag to compile an
     * application with debugging enabled.
     *
     * Users with `repo` or `repo_deployment` scopes can create a deployment for a given ref.
     *
     * #### Merged branch response
     * You will see this response when GitHub automatically merges the base branch into the topic branch instead of creating
     * a deployment. This auto-merge happens when:
     * *   Auto-merge option is enabled in the repository
     * *   Topic branch does not include the latest changes on the base branch, which is `master` in the response example
     * *   There are no merge conflicts
     *
     * If there are no new commits in the base branch, a new request to create a deployment should give a successful
     * response.
     *
     * #### Merge conflict response
     * This error happens when the `auto_merge` option is enabled and when the default branch (in this case `master`), can't
     * be merged into the branch that's being deployed (in this case `topic-branch`), due to merge conflicts.
     *
     * #### Failed commit status checks
     * This error happens when the `required_contexts` parameter indicates that one or more contexts need to have a `success`
     * status for the commit to be deployed, but one or more of the required contexts do not have a state of `success`.
     */
    createDeployment: {
      (
        params?: RestEndpointMethodTypes["repos"]["createDeployment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["createDeployment"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Users with `push` access can create deployment statuses for a given deployment.
     *
     * GitHub Apps require `read & write` access to "Deployments" and `read-only` access to "Repo contents" (for private repos). OAuth Apps require the `repo_deployment` scope.
     */
    createDeploymentStatus: {
      (
        params?: RestEndpointMethodTypes["repos"]["createDeploymentStatus"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["createDeploymentStatus"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * You can use this endpoint to trigger a webhook event called `repository_dispatch` when you want activity that happens outside of GitHub Enterprise Server to trigger a GitHub Actions workflow or GitHub App webhook. You must configure your GitHub Actions workflow or GitHub App to run when the `repository_dispatch` event occurs. For an example `repository_dispatch` webhook payload, see "[RepositoryDispatchEvent](https://docs.github.com/enterprise-server@2.21/webhooks/event-payloads/#repository_dispatch)."
     *
     * The `client_payload` parameter is available for any extra information that your workflow might need. This parameter is a JSON payload that will be passed on when the webhook event is dispatched. For example, the `client_payload` can include a message that a user would like to send using a GitHub Actions workflow. Or the `client_payload` can be used as a test to debug your workflow.
     *
     * This endpoint requires write access to the repository by providing either:
     *
     *   - Personal access tokens with `repo` scope. For more information, see "[Creating a personal access token for the command line](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line)" in the GitHub Help documentation.
     *   - GitHub Apps with both `metadata:read` and `contents:read&write` permissions.
     *
     * This input example shows how you can use the `client_payload` as a test to debug your workflow.
     */
    createDispatchEvent: {
      (
        params?: RestEndpointMethodTypes["repos"]["createDispatchEvent"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["createDispatchEvent"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Creates a new repository for the authenticated user.
     *
     * **OAuth scope requirements**
     *
     * When using [OAuth](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:
     *
     * *   `public_repo` scope or `repo` scope to create a public repository. Note: For GitHub AE, use `repo` scope to create an internal repository.
     * *   `repo` scope to create a private repository.
     */
    createForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["repos"]["createForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["createForAuthenticatedUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Create a fork for the authenticated user.
     *
     * **Note**: Forking a Repository happens asynchronously. You may have to wait a short period of time before you can access the git objects. If this takes longer than 5 minutes, be sure to contact [GitHub Enterprise Server Support](https://support.github.com/contact) or [GitHub Enterprise Server Premium Support](https://premium.githubsupport.com).
     */
    createFork: {
      (
        params?: RestEndpointMethodTypes["repos"]["createFork"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["createFork"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Creates a new repository in the specified organization. The authenticated user must be a member of the organization.
     *
     * **OAuth scope requirements**
     *
     * When using [OAuth](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:
     *
     * *   `public_repo` scope or `repo` scope to create a public repository. Note: For GitHub AE, use `repo` scope to create an internal repository.
     * *   `repo` scope to create a private repository
     */
    createInOrg: {
      (
        params?: RestEndpointMethodTypes["repos"]["createInOrg"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["createInOrg"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Creates a new file or replaces an existing file in a repository.
     */
    createOrUpdateFileContents: {
      (
        params?: RestEndpointMethodTypes["repos"]["createOrUpdateFileContents"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["createOrUpdateFileContents"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Configures a GitHub Enterprise Server Pages site. For more information, see "[About GitHub Pages](/github/working-with-github-pages/about-github-pages)."
     */
    createPagesSite: {
      (
        params?: RestEndpointMethodTypes["repos"]["createPagesSite"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["createPagesSite"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Users with push access to the repository can create a release.
     *
     * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
     */
    createRelease: {
      (
        params?: RestEndpointMethodTypes["repos"]["createRelease"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["createRelease"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Creates a new repository using a repository template. Use the `template_owner` and `template_repo` route parameters to specify the repository to use as the template. The authenticated user must own or be a member of an organization that owns the repository. To check if a repository is available to use as a template, get the repository's information using the [Get a repository](https://docs.github.com/enterprise-server@2.21/rest/reference/repos#get-a-repository) endpoint and check that the `is_template` key is `true`.
     *
     * **OAuth scope requirements**
     *
     * When using [OAuth](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:
     *
     * *   `public_repo` scope or `repo` scope to create a public repository. Note: For GitHub AE, use `repo` scope to create an internal repository.
     * *   `repo` scope to create a private repository
     */
    createUsingTemplate: {
      (
        params?: RestEndpointMethodTypes["repos"]["createUsingTemplate"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["createUsingTemplate"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Repositories can have multiple webhooks installed. Each webhook should have a unique `config`. Multiple webhooks can
     * share the same `config` as long as those webhooks do not have any `events` that overlap.
     */
    createWebhook: {
      (
        params?: RestEndpointMethodTypes["repos"]["createWebhook"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["createWebhook"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    declineInvitation: {
      (
        params?: RestEndpointMethodTypes["repos"]["declineInvitation"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["declineInvitation"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Deleting a repository requires admin access. If OAuth is used, the `delete_repo` scope is required.
     *
     * If an organization owner has configured the organization to prevent members from deleting organization-owned
     * repositories, you will get a `403 Forbidden` response.
     */
    delete: {
      (
        params?: RestEndpointMethodTypes["repos"]["delete"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["delete"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Disables the ability to restrict who can push to this branch.
     */
    deleteAccessRestrictions: {
      (
        params?: RestEndpointMethodTypes["repos"]["deleteAccessRestrictions"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["deleteAccessRestrictions"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Removing admin enforcement requires admin or owner permissions to the repository and branch protection to be enabled.
     */
    deleteAdminBranchProtection: {
      (
        params?: RestEndpointMethodTypes["repos"]["deleteAdminBranchProtection"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["deleteAdminBranchProtection"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     */
    deleteBranchProtection: {
      (
        params?: RestEndpointMethodTypes["repos"]["deleteBranchProtection"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["deleteBranchProtection"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    deleteCommitComment: {
      (
        params?: RestEndpointMethodTypes["repos"]["deleteCommitComment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["deleteCommitComment"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * When authenticated with admin or owner permissions to the repository, you can use this endpoint to disable required signed commits on a branch. You must enable branch protection to require signed commits.
     */
    deleteCommitSignatureProtection: {
      (
        params?: RestEndpointMethodTypes["repos"]["deleteCommitSignatureProtection"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["deleteCommitSignatureProtection"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Deploy keys are immutable. If you need to update a key, remove the key and create a new one instead.
     */
    deleteDeployKey: {
      (
        params?: RestEndpointMethodTypes["repos"]["deleteDeployKey"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["deleteDeployKey"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * To ensure there can always be an active deployment, you can only delete an _inactive_ deployment. Anyone with `repo` or `repo_deployment` scopes can delete an inactive deployment.
     *
     * To set a deployment as inactive, you must:
     *
     * *   Create a new deployment that is active so that the system has a record of the current state, then delete the previously active deployment.
     * *   Mark the active deployment as inactive by adding any non-successful deployment status.
     *
     * For more information, see "[Create a deployment](https://docs.github.com/enterprise-server@2.21/rest/reference/repos/#create-a-deployment)" and "[Create a deployment status](https://docs.github.com/enterprise-server@2.21/rest/reference/repos#create-a-deployment-status)."
     */
    deleteDeployment: {
      (
        params?: RestEndpointMethodTypes["repos"]["deleteDeployment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["deleteDeployment"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Deletes a file in a repository.
     *
     * You can provide an additional `committer` parameter, which is an object containing information about the committer. Or, you can provide an `author` parameter, which is an object containing information about the author.
     *
     * The `author` section is optional and is filled in with the `committer` information if omitted. If the `committer` information is omitted, the authenticated user's information is used.
     *
     * You must provide values for both `name` and `email`, whether you choose to use `author` or `committer`. Otherwise, you'll receive a `422` status code.
     */
    deleteFile: {
      (
        params?: RestEndpointMethodTypes["repos"]["deleteFile"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["deleteFile"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    deleteInvitation: {
      (
        params?: RestEndpointMethodTypes["repos"]["deleteInvitation"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["deleteInvitation"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    deletePagesSite: {
      (
        params?: RestEndpointMethodTypes["repos"]["deletePagesSite"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["deletePagesSite"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     */
    deletePullRequestReviewProtection: {
      (
        params?: RestEndpointMethodTypes["repos"]["deletePullRequestReviewProtection"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["deletePullRequestReviewProtection"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Users with push access to the repository can delete a release.
     */
    deleteRelease: {
      (
        params?: RestEndpointMethodTypes["repos"]["deleteRelease"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["deleteRelease"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    deleteReleaseAsset: {
      (
        params?: RestEndpointMethodTypes["repos"]["deleteReleaseAsset"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["deleteReleaseAsset"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    deleteWebhook: {
      (
        params?: RestEndpointMethodTypes["repos"]["deleteWebhook"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["deleteWebhook"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Gets a redirect URL to download a tar archive for a repository. If you omit `:ref`, the repository’s default branch (usually
     * `master`) will be used. Please make sure your HTTP framework is configured to follow redirects or you will need to use
     * the `Location` header to make a second `GET` request.
     * **Note**: For private repositories, these links are temporary and expire after five minutes.
     */
    downloadTarballArchive: {
      (
        params?: RestEndpointMethodTypes["repos"]["downloadTarballArchive"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["downloadTarballArchive"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Gets a redirect URL to download a zip archive for a repository. If you omit `:ref`, the repository’s default branch (usually
     * `master`) will be used. Please make sure your HTTP framework is configured to follow redirects or you will need to use
     * the `Location` header to make a second `GET` request.
     * **Note**: For private repositories, these links are temporary and expire after five minutes.
     */
    downloadZipballArchive: {
      (
        params?: RestEndpointMethodTypes["repos"]["downloadZipballArchive"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["downloadZipballArchive"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * When you pass the `scarlet-witch-preview` media type, requests to get a repository will also return the repository's code of conduct if it can be detected from the repository's code of conduct file.
     *
     * The `parent` and `source` objects are present when the repository is a fork. `parent` is the repository this repository was forked from, `source` is the ultimate source for the network.
     */
    get: {
      (params?: RestEndpointMethodTypes["repos"]["get"]["parameters"]): Promise<
        RestEndpointMethodTypes["repos"]["get"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Lists who has access to this protected branch.
     *
     * **Note**: Users, apps, and teams `restrictions` are only available for organization-owned repositories.
     */
    getAccessRestrictions: {
      (
        params?: RestEndpointMethodTypes["repos"]["getAccessRestrictions"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getAccessRestrictions"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     */
    getAdminBranchProtection: {
      (
        params?: RestEndpointMethodTypes["repos"]["getAdminBranchProtection"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getAdminBranchProtection"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     */
    getAllStatusCheckContexts: {
      (
        params?: RestEndpointMethodTypes["repos"]["getAllStatusCheckContexts"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getAllStatusCheckContexts"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getAllTopics: {
      (
        params?: RestEndpointMethodTypes["repos"]["getAllTopics"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["getAllTopics"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Lists the GitHub Apps that have push access to this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.
     */
    getAppsWithAccessToProtectedBranch: {
      (
        params?: RestEndpointMethodTypes["repos"]["getAppsWithAccessToProtectedBranch"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getAppsWithAccessToProtectedBranch"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getBranch: {
      (
        params?: RestEndpointMethodTypes["repos"]["getBranch"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["getBranch"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     */
    getBranchProtection: {
      (
        params?: RestEndpointMethodTypes["repos"]["getBranchProtection"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getBranchProtection"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Returns a weekly aggregate of the number of additions and deletions pushed to a repository.
     */
    getCodeFrequencyStats: {
      (
        params?: RestEndpointMethodTypes["repos"]["getCodeFrequencyStats"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getCodeFrequencyStats"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Checks the repository permission of a collaborator. The possible repository permissions are `admin`, `write`, `read`, and `none`.
     */
    getCollaboratorPermissionLevel: {
      (
        params?: RestEndpointMethodTypes["repos"]["getCollaboratorPermissionLevel"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getCollaboratorPermissionLevel"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Users with pull access in a repository can access a combined view of commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name.
     *
     * The most recent status for each context is returned, up to 100. This field [paginates](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#pagination) if there are over 100 contexts.
     *
     * Additionally, a combined `state` is returned. The `state` is one of:
     *
     * *   **failure** if any of the contexts report as `error` or `failure`
     * *   **pending** if there are no statuses or a context is `pending`
     * *   **success** if the latest status for all contexts is `success`
     */
    getCombinedStatusForRef: {
      (
        params?: RestEndpointMethodTypes["repos"]["getCombinedStatusForRef"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getCombinedStatusForRef"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Returns the contents of a single commit reference. You must have `read` access for the repository to use this endpoint.
     *
     * **Note:** If there are more than 300 files in the commit diff, the response will include pagination link headers for the remaining files, up to a limit of 3000 files. Each page contains the static commit information, and the only changes are to the file listing.
     *
     * You can pass the appropriate [media type](https://docs.github.com/enterprise-server@2.21/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to  fetch `diff` and `patch` formats. Diffs with binary data will have no `patch` property.
     *
     * To return only the SHA-1 hash of the commit reference, you can provide the `sha` custom [media type](https://docs.github.com/enterprise-server@2.21/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) in the `Accept` header. You can use this endpoint to check if a remote reference's SHA-1 hash is the same as your local reference's SHA-1 hash by providing the local SHA-1 reference as the ETag.
     *
     * **Signature verification object**
     *
     * The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
     *
     * | Name | Type | Description |
     * | ---- | ---- | ----------- |
     * | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
     * | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
     * | `signature` | `string` | The signature that was extracted from the commit. |
     * | `payload` | `string` | The value that was signed. |
     *
     * These are the possible values for `reason` in the `verification` object:
     *
     * | Value | Description |
     * | ----- | ----------- |
     * | `expired_key` | The key that made the signature is expired. |
     * | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
     * | `gpgverify_error` | There was an error communicating with the signature verification service. |
     * | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
     * | `unsigned` | The object does not include a signature. |
     * | `unknown_signature_type` | A non-PGP signature was found in the commit. |
     * | `no_user` | No user was associated with the `committer` email address in the commit. |
     * | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
     * | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
     * | `unknown_key` | The key that made the signature has not been registered with any user's account. |
     * | `malformed_signature` | There was an error parsing the signature. |
     * | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
     * | `valid` | None of the above errors applied, so the signature is considered to be verified. |
     */
    getCommit: {
      (
        params?: RestEndpointMethodTypes["repos"]["getCommit"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["getCommit"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Returns the last year of commit activity grouped by week. The `days` array is a group of commits per day, starting on `Sunday`.
     */
    getCommitActivityStats: {
      (
        params?: RestEndpointMethodTypes["repos"]["getCommitActivityStats"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getCommitActivityStats"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getCommitComment: {
      (
        params?: RestEndpointMethodTypes["repos"]["getCommitComment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getCommitComment"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * When authenticated with admin or owner permissions to the repository, you can use this endpoint to check whether a branch requires signed commits. An enabled status of `true` indicates you must sign commits on this branch. For more information, see [Signing commits with GPG](https://help.github.com/articles/signing-commits-with-gpg) in GitHub Help.
     *
     * **Note**: You must enable branch protection to require signed commits.
     */
    getCommitSignatureProtection: {
      (
        params?: RestEndpointMethodTypes["repos"]["getCommitSignatureProtection"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getCommitSignatureProtection"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Gets the contents of a file or directory in a repository. Specify the file path or directory in `:path`. If you omit
     * `:path`, you will receive the contents of the repository's root directory. See the description below regarding what the API response includes for directories.
     *
     * Files and symlinks support [a custom media type](https://docs.github.com/enterprise-server@2.21/rest/reference/repos#custom-media-types) for
     * retrieving the raw content or rendered HTML (when supported). All content types support [a custom media
     * type](https://docs.github.com/enterprise-server@2.21/rest/reference/repos#custom-media-types) to ensure the content is returned in a consistent
     * object format.
     *
     * **Note**:
     * *   To get a repository's contents recursively, you can [recursively get the tree](https://docs.github.com/enterprise-server@2.21/rest/reference/git#trees).
     * *   This API has an upper limit of 1,000 files for a directory. If you need to retrieve more files, use the [Git Trees
     * API](https://docs.github.com/enterprise-server@2.21/rest/reference/git#get-a-tree).
     * *   This API supports files up to 1 megabyte in size.
     *
     * #### If the content is a directory
     * The response will be an array of objects, one object for each item in the directory.
     * When listing the contents of a directory, submodules have their "type" specified as "file". Logically, the value
     * _should_ be "submodule". This behavior exists in API v3 [for backwards compatibility purposes](https://git.io/v1YCW).
     * In the next major version of the API, the type will be returned as "submodule".
     *
     * #### If the content is a symlink
     * If the requested `:path` points to a symlink, and the symlink's target is a normal file in the repository, then the
     * API responds with the content of the file (in the format shown in the example. Otherwise, the API responds with an object
     * describing the symlink itself.
     *
     * #### If the content is a submodule
     * The `submodule_git_url` identifies the location of the submodule repository, and the `sha` identifies a specific
     * commit within the submodule repository. Git uses the given URL when cloning the submodule repository, and checks out
     * the submodule at that specific commit.
     *
     * If the submodule repository is not hosted on github.com, the Git URLs (`git_url` and `_links["git"]`) and the
     * github.com URLs (`html_url` and `_links["html"]`) will have null values.
     */
    getContent: {
      (
        params?: RestEndpointMethodTypes["repos"]["getContent"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["getContent"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Returns the `total` number of commits authored by the contributor. In addition, the response includes a Weekly Hash (`weeks` array) with the following information:
     *
     * *   `w` - Start of the week, given as a [Unix timestamp](http://en.wikipedia.org/wiki/Unix_time).
     * *   `a` - Number of additions
     * *   `d` - Number of deletions
     * *   `c` - Number of commits
     */
    getContributorsStats: {
      (
        params?: RestEndpointMethodTypes["repos"]["getContributorsStats"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getContributorsStats"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getDeployKey: {
      (
        params?: RestEndpointMethodTypes["repos"]["getDeployKey"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["getDeployKey"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getDeployment: {
      (
        params?: RestEndpointMethodTypes["repos"]["getDeployment"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["getDeployment"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Users with pull access can view a deployment status for a deployment:
     */
    getDeploymentStatus: {
      (
        params?: RestEndpointMethodTypes["repos"]["getDeploymentStatus"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getDeploymentStatus"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getLatestPagesBuild: {
      (
        params?: RestEndpointMethodTypes["repos"]["getLatestPagesBuild"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getLatestPagesBuild"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * View the latest published full release for the repository.
     *
     * The latest release is the most recent non-prerelease, non-draft release, sorted by the `created_at` attribute. The `created_at` attribute is the date of the commit used for the release, and not the date when the release was drafted or published.
     */
    getLatestRelease: {
      (
        params?: RestEndpointMethodTypes["repos"]["getLatestRelease"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getLatestRelease"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getPages: {
      (
        params?: RestEndpointMethodTypes["repos"]["getPages"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["getPages"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getPagesBuild: {
      (
        params?: RestEndpointMethodTypes["repos"]["getPagesBuild"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["getPagesBuild"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Returns the total commit counts for the `owner` and total commit counts in `all`. `all` is everyone combined, including the `owner` in the last 52 weeks. If you'd like to get the commit counts for non-owners, you can subtract `owner` from `all`.
     *
     * The array order is oldest week (index 0) to most recent week.
     */
    getParticipationStats: {
      (
        params?: RestEndpointMethodTypes["repos"]["getParticipationStats"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getParticipationStats"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     */
    getPullRequestReviewProtection: {
      (
        params?: RestEndpointMethodTypes["repos"]["getPullRequestReviewProtection"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getPullRequestReviewProtection"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Each array contains the day number, hour number, and number of commits:
     *
     * *   `0-6`: Sunday - Saturday
     * *   `0-23`: Hour of day
     * *   Number of commits
     *
     * For example, `[2, 14, 25]` indicates that there were 25 total commits, during the 2:00pm hour on Tuesdays. All times are based on the time zone of individual commits.
     */
    getPunchCardStats: {
      (
        params?: RestEndpointMethodTypes["repos"]["getPunchCardStats"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getPunchCardStats"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Gets the preferred README for a repository.
     *
     * READMEs support [custom media types](https://docs.github.com/enterprise-server@2.21/rest/reference/repos#custom-media-types) for retrieving the raw content or rendered HTML.
     */
    getReadme: {
      (
        params?: RestEndpointMethodTypes["repos"]["getReadme"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["getReadme"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Gets the README from a repository directory.
     *
     * READMEs support [custom media types](https://docs.github.com/enterprise-server@2.21/rest/reference/repos#custom-media-types) for retrieving the raw content or rendered HTML.
     */
    getReadmeInDirectory: {
      (
        params?: RestEndpointMethodTypes["repos"]["getReadmeInDirectory"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getReadmeInDirectory"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * **Note:** This returns an `upload_url` key corresponding to the endpoint for uploading release assets. This key is a [hypermedia resource](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#hypermedia).
     */
    getRelease: {
      (
        params?: RestEndpointMethodTypes["repos"]["getRelease"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["getRelease"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * To download the asset's binary content, set the `Accept` header of the request to [`application/octet-stream`](https://docs.github.com/enterprise-server@2.21/rest/overview/media-types). The API will either redirect the client to the location, or stream it directly if possible. API clients should handle both a `200` or `302` response.
     */
    getReleaseAsset: {
      (
        params?: RestEndpointMethodTypes["repos"]["getReleaseAsset"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getReleaseAsset"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Get a published release with the specified tag.
     */
    getReleaseByTag: {
      (
        params?: RestEndpointMethodTypes["repos"]["getReleaseByTag"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getReleaseByTag"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     */
    getStatusChecksProtection: {
      (
        params?: RestEndpointMethodTypes["repos"]["getStatusChecksProtection"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getStatusChecksProtection"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Lists the teams who have push access to this branch. The list includes child teams.
     */
    getTeamsWithAccessToProtectedBranch: {
      (
        params?: RestEndpointMethodTypes["repos"]["getTeamsWithAccessToProtectedBranch"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getTeamsWithAccessToProtectedBranch"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Lists the people who have push access to this branch.
     */
    getUsersWithAccessToProtectedBranch: {
      (
        params?: RestEndpointMethodTypes["repos"]["getUsersWithAccessToProtectedBranch"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getUsersWithAccessToProtectedBranch"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Returns a webhook configured in a repository. To get only the webhook `config` properties, see "[Get a webhook configuration for a repository](/rest/reference/repos#get-a-webhook-configuration-for-a-repository)."
     */
    getWebhook: {
      (
        params?: RestEndpointMethodTypes["repos"]["getWebhook"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["getWebhook"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listBranches: {
      (
        params?: RestEndpointMethodTypes["repos"]["listBranches"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["listBranches"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Returns all branches where the given commit SHA is the HEAD, or latest commit for the branch.
     */
    listBranchesForHeadCommit: {
      (
        params?: RestEndpointMethodTypes["repos"]["listBranchesForHeadCommit"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["listBranchesForHeadCommit"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.
     *
     * Team members will include the members of child teams.
     */
    listCollaborators: {
      (
        params?: RestEndpointMethodTypes["repos"]["listCollaborators"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["listCollaborators"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Use the `:commit_sha` to specify the commit that will have its comments listed.
     */
    listCommentsForCommit: {
      (
        params?: RestEndpointMethodTypes["repos"]["listCommentsForCommit"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["listCommentsForCommit"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Commit Comments use [these custom media types](https://docs.github.com/enterprise-server@2.21/rest/reference/repos#custom-media-types). You can read more about the use of media types in the API [here](https://docs.github.com/enterprise-server@2.21/rest/overview/media-types/).
     *
     * Comments are ordered by ascending ID.
     */
    listCommitCommentsForRepo: {
      (
        params?: RestEndpointMethodTypes["repos"]["listCommitCommentsForRepo"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["listCommitCommentsForRepo"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Users with pull access in a repository can view commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name. Statuses are returned in reverse chronological order. The first status in the list will be the latest one.
     *
     * This resource is also available via a legacy route: `GET /repos/:owner/:repo/statuses/:ref`.
     */
    listCommitStatusesForRef: {
      (
        params?: RestEndpointMethodTypes["repos"]["listCommitStatusesForRef"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["listCommitStatusesForRef"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * **Signature verification object**
     *
     * The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
     *
     * | Name | Type | Description |
     * | ---- | ---- | ----------- |
     * | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
     * | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
     * | `signature` | `string` | The signature that was extracted from the commit. |
     * | `payload` | `string` | The value that was signed. |
     *
     * These are the possible values for `reason` in the `verification` object:
     *
     * | Value | Description |
     * | ----- | ----------- |
     * | `expired_key` | The key that made the signature is expired. |
     * | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
     * | `gpgverify_error` | There was an error communicating with the signature verification service. |
     * | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
     * | `unsigned` | The object does not include a signature. |
     * | `unknown_signature_type` | A non-PGP signature was found in the commit. |
     * | `no_user` | No user was associated with the `committer` email address in the commit. |
     * | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
     * | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
     * | `unknown_key` | The key that made the signature has not been registered with any user's account. |
     * | `malformed_signature` | There was an error parsing the signature. |
     * | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
     * | `valid` | None of the above errors applied, so the signature is considered to be verified. |
     */
    listCommits: {
      (
        params?: RestEndpointMethodTypes["repos"]["listCommits"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["listCommits"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Lists contributors to the specified repository and sorts them by the number of commits per contributor in descending order. This endpoint may return information that is a few hours old because the GitHub REST API v3 caches contributor data to improve performance.
     *
     * GitHub identifies contributors by author email address. This endpoint groups contribution counts by GitHub user, which includes all associated email addresses. To improve performance, only the first 500 author email addresses in the repository link to GitHub users. The rest will appear as anonymous contributors without associated GitHub user information.
     */
    listContributors: {
      (
        params?: RestEndpointMethodTypes["repos"]["listContributors"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["listContributors"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listDeployKeys: {
      (
        params?: RestEndpointMethodTypes["repos"]["listDeployKeys"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["listDeployKeys"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Users with pull access can view deployment statuses for a deployment:
     */
    listDeploymentStatuses: {
      (
        params?: RestEndpointMethodTypes["repos"]["listDeploymentStatuses"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["listDeploymentStatuses"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Simple filtering of deployments is available via query parameters:
     */
    listDeployments: {
      (
        params?: RestEndpointMethodTypes["repos"]["listDeployments"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["listDeployments"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Lists repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.
     *
     * The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.
     */
    listForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["repos"]["listForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["listForAuthenticatedUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Lists repositories for the specified organization.
     */
    listForOrg: {
      (
        params?: RestEndpointMethodTypes["repos"]["listForOrg"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["listForOrg"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Lists public repositories for the specified user. Note: For GitHub AE, this endpoint will list internal repositories for the specified user.
     */
    listForUser: {
      (
        params?: RestEndpointMethodTypes["repos"]["listForUser"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["listForUser"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listForks: {
      (
        params?: RestEndpointMethodTypes["repos"]["listForks"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["listForks"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * When authenticating as a user with admin rights to a repository, this endpoint will list all currently open repository invitations.
     */
    listInvitations: {
      (
        params?: RestEndpointMethodTypes["repos"]["listInvitations"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["listInvitations"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * When authenticating as a user, this endpoint will list all currently open repository invitations for that user.
     */
    listInvitationsForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["repos"]["listInvitationsForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["listInvitationsForAuthenticatedUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Lists languages for the specified repository. The value shown for each language is the number of bytes of code written in that language.
     */
    listLanguages: {
      (
        params?: RestEndpointMethodTypes["repos"]["listLanguages"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["listLanguages"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listPagesBuilds: {
      (
        params?: RestEndpointMethodTypes["repos"]["listPagesBuilds"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["listPagesBuilds"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Lists all public repositories in the order that they were created.
     *
     * Note:
     * - For GitHub Enterprise Server, this endpoint will only list repositories available to all users on the enterprise.
     * - Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of repositories.
     */
    listPublic: {
      (
        params?: RestEndpointMethodTypes["repos"]["listPublic"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["listPublic"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Lists the merged pull request that introduced the commit to the repository. If the commit is not present in the default branch, additionally returns open pull requests associated with the commit. The results may include open and closed pull requests. Additional preview headers may be required to see certain details for associated pull requests, such as whether a pull request is in a draft state. For more information about previews that might affect this endpoint, see the [List pull requests](https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#list-pull-requests) endpoint.
     */
    listPullRequestsAssociatedWithCommit: {
      (
        params?: RestEndpointMethodTypes["repos"]["listPullRequestsAssociatedWithCommit"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["listPullRequestsAssociatedWithCommit"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listReleaseAssets: {
      (
        params?: RestEndpointMethodTypes["repos"]["listReleaseAssets"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["listReleaseAssets"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * This returns a list of releases, which does not include regular Git tags that have not been associated with a release. To get a list of Git tags, use the [Repository Tags API](https://docs.github.com/enterprise-server@2.21/rest/reference/repos#list-repository-tags).
     *
     * Information about published releases are available to everyone. Only users with push access will receive listings for draft releases.
     */
    listReleases: {
      (
        params?: RestEndpointMethodTypes["repos"]["listReleases"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["listReleases"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listTags: {
      (
        params?: RestEndpointMethodTypes["repos"]["listTags"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["listTags"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listTeams: {
      (
        params?: RestEndpointMethodTypes["repos"]["listTeams"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["listTeams"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listWebhooks: {
      (
        params?: RestEndpointMethodTypes["repos"]["listWebhooks"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["listWebhooks"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    merge: {
      (
        params?: RestEndpointMethodTypes["repos"]["merge"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["merge"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * This will trigger a [ping event](https://docs.github.com/enterprise-server@2.21/webhooks/#ping-event) to be sent to the hook.
     */
    pingWebhook: {
      (
        params?: RestEndpointMethodTypes["repos"]["pingWebhook"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["pingWebhook"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Removes the ability of an app to push to this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.
     *
     * | Type    | Description                                                                                                                                                |
     * | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
     * | `array` | The GitHub Apps that have push access to this branch. Use the app's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     */
    removeAppAccessRestrictions: {
      (
        params?: RestEndpointMethodTypes["repos"]["removeAppAccessRestrictions"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["removeAppAccessRestrictions"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    removeCollaborator: {
      (
        params?: RestEndpointMethodTypes["repos"]["removeCollaborator"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["removeCollaborator"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     */
    removeStatusCheckContexts: {
      (
        params?: RestEndpointMethodTypes["repos"]["removeStatusCheckContexts"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["removeStatusCheckContexts"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     */
    removeStatusCheckProtection: {
      (
        params?: RestEndpointMethodTypes["repos"]["removeStatusCheckProtection"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["removeStatusCheckProtection"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Removes the ability of a team to push to this branch. You can also remove push access for child teams.
     *
     * | Type    | Description                                                                                                                                         |
     * | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
     * | `array` | Teams that should no longer have push access. Use the team's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     */
    removeTeamAccessRestrictions: {
      (
        params?: RestEndpointMethodTypes["repos"]["removeTeamAccessRestrictions"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["removeTeamAccessRestrictions"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Removes the ability of a user to push to this branch.
     *
     * | Type    | Description                                                                                                                                   |
     * | ------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
     * | `array` | Usernames of the people who should no longer have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     */
    removeUserAccessRestrictions: {
      (
        params?: RestEndpointMethodTypes["repos"]["removeUserAccessRestrictions"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["removeUserAccessRestrictions"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    replaceAllTopics: {
      (
        params?: RestEndpointMethodTypes["repos"]["replaceAllTopics"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["replaceAllTopics"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * You can request that your site be built from the latest revision on the default branch. This has the same effect as pushing a commit to your default branch, but does not require an additional commit. Manually triggering page builds can be helpful when diagnosing build warnings and failures.
     *
     * Build requests are limited to one concurrent build per repository and one concurrent build per requester. If you request a build while another is still in progress, the second request will be queued until the first completes.
     */
    requestPagesBuild: {
      (
        params?: RestEndpointMethodTypes["repos"]["requestPagesBuild"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["requestPagesBuild"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Adding admin enforcement requires admin or owner permissions to the repository and branch protection to be enabled.
     */
    setAdminBranchProtection: {
      (
        params?: RestEndpointMethodTypes["repos"]["setAdminBranchProtection"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["setAdminBranchProtection"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Replaces the list of apps that have push access to this branch. This removes all apps that previously had push access and grants push access to the new list of apps. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.
     *
     * | Type    | Description                                                                                                                                                |
     * | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
     * | `array` | The GitHub Apps that have push access to this branch. Use the app's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     */
    setAppAccessRestrictions: {
      (
        params?: RestEndpointMethodTypes["repos"]["setAppAccessRestrictions"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["setAppAccessRestrictions"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     */
    setStatusCheckContexts: {
      (
        params?: RestEndpointMethodTypes["repos"]["setStatusCheckContexts"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["setStatusCheckContexts"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Replaces the list of teams that have push access to this branch. This removes all teams that previously had push access and grants push access to the new list of teams. Team restrictions include child teams.
     *
     * | Type    | Description                                                                                                                                |
     * | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
     * | `array` | The teams that can have push access. Use the team's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     */
    setTeamAccessRestrictions: {
      (
        params?: RestEndpointMethodTypes["repos"]["setTeamAccessRestrictions"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["setTeamAccessRestrictions"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Replaces the list of people that have push access to this branch. This removes all people that previously had push access and grants push access to the new list of people.
     *
     * | Type    | Description                                                                                                                   |
     * | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
     * | `array` | Usernames for people who can have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     */
    setUserAccessRestrictions: {
      (
        params?: RestEndpointMethodTypes["repos"]["setUserAccessRestrictions"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["setUserAccessRestrictions"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * This will trigger the hook with the latest push to the current repository if the hook is subscribed to `push` events. If the hook is not subscribed to `push` events, the server will respond with 204 but no test POST will be generated.
     *
     * **Note**: Previously `/repos/:owner/:repo/hooks/:hook_id/test`
     */
    testPushWebhook: {
      (
        params?: RestEndpointMethodTypes["repos"]["testPushWebhook"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["testPushWebhook"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * A transfer request will need to be accepted by the new owner when transferring a personal repository to another user. The response will contain the original `owner`, and the transfer will continue asynchronously. For more details on the requirements to transfer personal and organization-owned repositories, see [about repository transfers](https://help.github.com/articles/about-repository-transfers/).
     */
    transfer: {
      (
        params?: RestEndpointMethodTypes["repos"]["transfer"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["transfer"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * **Note**: To edit a repository's topics, use the [Replace all repository topics](https://docs.github.com/enterprise-server@2.21/rest/reference/repos#replace-all-repository-topics) endpoint.
     */
    update: {
      (
        params?: RestEndpointMethodTypes["repos"]["update"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["update"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Protecting a branch requires admin or owner permissions to the repository.
     *
     * **Note**: Passing new arrays of `users` and `teams` replaces their previous values.
     *
     * **Note**: The list of users, apps, and teams in total is limited to 100 items.
     */
    updateBranchProtection: {
      (
        params?: RestEndpointMethodTypes["repos"]["updateBranchProtection"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["updateBranchProtection"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    updateCommitComment: {
      (
        params?: RestEndpointMethodTypes["repos"]["updateCommitComment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["updateCommitComment"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Updates information for a GitHub Enterprise Server Pages site. For more information, see "[About GitHub Pages](/github/working-with-github-pages/about-github-pages).
     */
    updateInformationAboutPagesSite: {
      (
        params?: RestEndpointMethodTypes["repos"]["updateInformationAboutPagesSite"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["updateInformationAboutPagesSite"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    updateInvitation: {
      (
        params?: RestEndpointMethodTypes["repos"]["updateInvitation"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["updateInvitation"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Updating pull request review enforcement requires admin or owner permissions to the repository and branch protection to be enabled.
     *
     * **Note**: Passing new arrays of `users` and `teams` replaces their previous values.
     */
    updatePullRequestReviewProtection: {
      (
        params?: RestEndpointMethodTypes["repos"]["updatePullRequestReviewProtection"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["updatePullRequestReviewProtection"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Users with push access to the repository can edit a release.
     */
    updateRelease: {
      (
        params?: RestEndpointMethodTypes["repos"]["updateRelease"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["updateRelease"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Users with push access to the repository can edit a release asset.
     */
    updateReleaseAsset: {
      (
        params?: RestEndpointMethodTypes["repos"]["updateReleaseAsset"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["updateReleaseAsset"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Updating required status checks requires admin or owner permissions to the repository and branch protection to be enabled.
     */
    updateStatusCheckProtection: {
      (
        params?: RestEndpointMethodTypes["repos"]["updateStatusCheckProtection"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["updateStatusCheckProtection"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Updates a webhook configured in a repository. If you previously had a `secret` set, you must provide the same `secret` or set a new `secret` or the secret will be removed. If you are only updating individual webhook `config` properties, use "[Update a webhook configuration for a repository](/rest/reference/repos#update-a-webhook-configuration-for-a-repository)."
     */
    updateWebhook: {
      (
        params?: RestEndpointMethodTypes["repos"]["updateWebhook"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["updateWebhook"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * This endpoint makes use of [a Hypermedia relation](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#hypermedia) to determine which URL to access. The endpoint you call to upload release assets is specific to your release. Use the `upload_url` returned in
     * the response of the [Create a release endpoint](https://docs.github.com/enterprise-server@2.21/rest/reference/repos#create-a-release) to upload a release asset.
     *
     * You need to use an HTTP client which supports [SNI](http://en.wikipedia.org/wiki/Server_Name_Indication) to make calls to this endpoint.
     *
     * Most libraries will set the required `Content-Length` header automatically. Use the required `Content-Type` header to provide the media type of the asset. For a list of media types, see [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml). For example:
     *
     * `application/zip`
     *
     * GitHub Enterprise Server expects the asset data in its raw binary form, rather than JSON. You will send the raw binary content of the asset as the request body. Everything else about the endpoint is the same as the rest of the API. For example,
     * you'll still need to pass your authentication to be able to upload an asset.
     *
     * When an upstream failure occurs, you will receive a `502 Bad Gateway` status. This may leave an empty asset with a state of `starter`. It can be safely deleted.
     *
     * **Notes:**
     * *   GitHub Enterprise Server renames asset filenames that have special characters, non-alphanumeric characters, and leading or trailing periods. The "[List assets for a release](https://docs.github.com/enterprise-server@2.21/rest/reference/repos#list-assets-for-a-release)"
     * endpoint lists the renamed filenames. For more information and help, contact [GitHub Enterprise Server Support](https://support.github.com/contact).
     * *   If you upload an asset with the same filename as another uploaded asset, you'll receive an error and must delete the old file before you can re-upload the new asset.
     */
    uploadReleaseAsset: {
      (
        params?: RestEndpointMethodTypes["repos"]["uploadReleaseAsset"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["uploadReleaseAsset"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
  };
  search: {
    /**
     * Searches for query terms inside of a file. This method returns up to 100 results [per page](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#pagination).
     *
     * When searching for code, you can get text match metadata for the file **content** and file **path** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/enterprise-server@2.21/rest/reference/search#text-match-metadata).
     *
     * For example, if you want to find the definition of the `addClass` function inside [jQuery](https://github.com/jquery/jquery) repository, your query would look something like this:
     *
     * `q=addClass+in:file+language:js+repo:jquery/jquery`
     *
     * This query searches for the keyword `addClass` within a file's contents. The query limits the search to files where the language is JavaScript in the `jquery/jquery` repository.
     *
     * #### Considerations for code search
     *
     * Due to the complexity of searching code, there are a few restrictions on how searches are performed:
     *
     * *   Only the _default branch_ is considered. In most cases, this will be the `master` branch.
     * *   Only files smaller than 384 KB are searchable.
     * *   You must always include at least one search term when searching source code. For example, searching for [`language:go`](https://github.com/search?utf8=%E2%9C%93&q=language%3Ago&type=Code) is not valid, while [`amazing
     * language:go`](https://github.com/search?utf8=%E2%9C%93&q=amazing+language%3Ago&type=Code) is.
     */
    code: {
      (
        params?: RestEndpointMethodTypes["search"]["code"]["parameters"]
      ): Promise<RestEndpointMethodTypes["search"]["code"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Find commits via various criteria on the default branch (usually `master`). This method returns up to 100 results [per page](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#pagination).
     *
     * When searching for commits, you can get text match metadata for the **message** field when you provide the `text-match` media type. For more details about how to receive highlighted search results, see [Text match
     * metadata](https://docs.github.com/enterprise-server@2.21/rest/reference/search#text-match-metadata).
     *
     * For example, if you want to find commits related to CSS in the [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) repository. Your query would look something like this:
     *
     * `q=repo:octocat/Spoon-Knife+css`
     */
    commits: {
      (
        params?: RestEndpointMethodTypes["search"]["commits"]["parameters"]
      ): Promise<RestEndpointMethodTypes["search"]["commits"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Find issues by state and keyword. This method returns up to 100 results [per page](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#pagination).
     *
     * When searching for issues, you can get text match metadata for the issue **title**, issue **body**, and issue **comment body** fields when you pass the `text-match` media type. For more details about how to receive highlighted
     * search results, see [Text match metadata](https://docs.github.com/enterprise-server@2.21/rest/reference/search#text-match-metadata).
     *
     * For example, if you want to find the oldest unresolved Python bugs on Windows. Your query might look something like this.
     *
     * `q=windows+label:bug+language:python+state:open&sort=created&order=asc`
     *
     * This query searches for the keyword `windows`, within any open issue that is labeled as `bug`. The search runs across repositories whose primary language is Python. The results are sorted by creation date in ascending order, which means the oldest issues appear first in the search results.
     *
     * **Note:** For [user-to-server](https://docs.github.com/developers/apps/identifying-and-authorizing-users-for-github-apps#user-to-server-requests) GitHub App requests, you can't retrieve a combination of issues and pull requests in a single query. Requests that don't include the `is:issue` or `is:pull-request` qualifier will receive an HTTP `422 Unprocessable Entity` response. To get results for both issues and pull requests, you must send separate queries for issues and pull requests. For more information about the `is` qualifier, see "[Searching only issues or pull requests](https://docs.github.com/github/searching-for-information-on-github/searching-issues-and-pull-requests#search-only-issues-or-pull-requests)."
     */
    issuesAndPullRequests: {
      (
        params?: RestEndpointMethodTypes["search"]["issuesAndPullRequests"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["search"]["issuesAndPullRequests"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Find labels in a repository with names or descriptions that match search keywords. Returns up to 100 results [per page](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#pagination).
     *
     * When searching for labels, you can get text match metadata for the label **name** and **description** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/enterprise-server@2.21/rest/reference/search#text-match-metadata).
     *
     * For example, if you want to find labels in the `linguist` repository that match `bug`, `defect`, or `enhancement`. Your query might look like this:
     *
     * `q=bug+defect+enhancement&repository_id=64778136`
     *
     * The labels that best match the query appear first in the search results.
     */
    labels: {
      (
        params?: RestEndpointMethodTypes["search"]["labels"]["parameters"]
      ): Promise<RestEndpointMethodTypes["search"]["labels"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Find repositories via various criteria. This method returns up to 100 results [per page](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#pagination).
     *
     * When searching for repositories, you can get text match metadata for the **name** and **description** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/enterprise-server@2.21/rest/reference/search#text-match-metadata).
     *
     * For example, if you want to search for popular Tetris repositories written in assembly code, your query might look like this:
     *
     * `q=tetris+language:assembly&sort=stars&order=desc`
     *
     * This query searches for repositories with the word `tetris` in the name, the description, or the README. The results are limited to repositories where the primary language is assembly. The results are sorted by stars in descending order, so that the most popular repositories appear first in the search results.
     *
     * When you include the `mercy` preview header, you can also search for multiple topics by adding more `topic:` instances. For example, your query might look like this:
     *
     * `q=topic:ruby+topic:rails`
     */
    repos: {
      (
        params?: RestEndpointMethodTypes["search"]["repos"]["parameters"]
      ): Promise<RestEndpointMethodTypes["search"]["repos"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Find topics via various criteria. Results are sorted by best match. This method returns up to 100 results [per page](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#pagination). See "[Searching topics](https://help.github.com/articles/searching-topics/)" for a detailed list of qualifiers.
     *
     * When searching for topics, you can get text match metadata for the topic's **short\_description**, **description**, **name**, or **display\_name** field when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/enterprise-server@2.21/rest/reference/search#text-match-metadata).
     *
     * For example, if you want to search for topics related to Ruby that are featured on https://github.com/topics. Your query might look like this:
     *
     * `q=ruby+is:featured`
     *
     * This query searches for topics with the keyword `ruby` and limits the results to find only topics that are featured. The topics that are the best match for the query appear first in the search results.
     */
    topics: {
      (
        params?: RestEndpointMethodTypes["search"]["topics"]["parameters"]
      ): Promise<RestEndpointMethodTypes["search"]["topics"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Find users via various criteria. This method returns up to 100 results [per page](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#pagination).
     *
     * When searching for users, you can get text match metadata for the issue **login**, **email**, and **name** fields when you pass the `text-match` media type. For more details about highlighting search results, see [Text match metadata](https://docs.github.com/enterprise-server@2.21/rest/reference/search#text-match-metadata). For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/enterprise-server@2.21/rest/reference/search#text-match-metadata).
     *
     * For example, if you're looking for a list of popular users, you might try this query:
     *
     * `q=tom+repos:%3E42+followers:%3E1000`
     *
     * This query searches for users with the name `tom`. The results are restricted to users with more than 42 repositories and over 1,000 followers.
     */
    users: {
      (
        params?: RestEndpointMethodTypes["search"]["users"]["parameters"]
      ): Promise<RestEndpointMethodTypes["search"]["users"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
  };
  teams: {
    /**
     * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Adds an organization member to a team. An authenticated organization owner or team maintainer can add organization members to a team.
     *
     * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
     *
     * An organization owner can add someone who is not part of the team's organization to a team. When an organization owner adds someone to a team who is not an organization member, this endpoint will send an invitation to the person via email. This newly-created membership will be in the "pending" state until the person accepts the invitation, at which point the membership will transition to the "active" state and the user will be added as a member of the team.
     *
     * If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a team maintainer.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/memberships/{username}`.
     */
    addOrUpdateMembershipForUserInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["addOrUpdateMembershipForUserInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["addOrUpdateMembershipForUserInOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Adds an organization project to a team. To add a project to a team or update the team's permission on a project, the authenticated user must have `admin` permissions for the project. The project and team must be part of the same organization.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/projects/{project_id}`.
     */
    addOrUpdateProjectPermissionsInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["addOrUpdateProjectPermissionsInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["addOrUpdateProjectPermissionsInOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be able to see the team. The repository must be owned by the organization, or a direct fork of a repository owned by the organization. You will get a `422 Unprocessable Entity` status if you attempt to add a repository to a team that is not owned by the organization. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#http-verbs)."
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.
     *
     * For more information about the permission levels, see "[Repository permission levels for an organization](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)".
     */
    addOrUpdateRepoPermissionsInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["addOrUpdateRepoPermissionsInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["addOrUpdateRepoPermissionsInOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. The response includes projects inherited from a parent team.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/projects/{project_id}`.
     */
    checkPermissionsForProjectInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["checkPermissionsForProjectInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["checkPermissionsForProjectInOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Checks whether a team has `admin`, `push`, `maintain`, `triage`, or `pull` permission for a repository. Repositories inherited through a parent team will also be checked.
     *
     * You can also get information about the specified repository, including what permissions the team grants on it, by passing the following custom [media type](https://docs.github.com/enterprise-server@2.21/rest/overview/media-types/) via the `application/vnd.github.v3.repository+json` accept header.
     *
     * If a team doesn't have permission for the repository, you will receive a `404 Not Found` response status.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.
     */
    checkPermissionsForRepoInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["checkPermissionsForRepoInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["checkPermissionsForRepoInOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * To create a team, the authenticated user must be a member or owner of `{org}`. By default, organization members can create teams. Organization owners can limit team creation to organization owners. For more information, see "[Setting team creation permissions](https://help.github.com/en/articles/setting-team-creation-permissions-in-your-organization)."
     *
     * When you create a new team, you automatically become a team maintainer without explicitly adding yourself to the optional array of `maintainers`. For more information, see "[About teams](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/about-teams)".
     */
    create: {
      (
        params?: RestEndpointMethodTypes["teams"]["create"]["parameters"]
      ): Promise<RestEndpointMethodTypes["teams"]["create"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Creates a new comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments`.
     */
    createDiscussionCommentInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["createDiscussionCommentInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["createDiscussionCommentInOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Creates a new discussion post on a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/{org_id}/team/{team_id}/discussions`.
     */
    createDiscussionInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["createDiscussionInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["createDiscussionInOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Deletes a comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.
     */
    deleteDiscussionCommentInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["deleteDiscussionCommentInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["deleteDiscussionCommentInOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Delete a discussion from a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.
     */
    deleteDiscussionInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["deleteDiscussionInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["deleteDiscussionInOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * To delete a team, the authenticated user must be an organization owner or team maintainer.
     *
     * If you are an organization owner, deleting a parent team will delete all of its child teams as well.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}`.
     */
    deleteInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["deleteInOrg"]["parameters"]
      ): Promise<RestEndpointMethodTypes["teams"]["deleteInOrg"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Gets a team using the team's `slug`. GitHub Enterprise Server generates the `slug` from the team `name`.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}`.
     */
    getByName: {
      (
        params?: RestEndpointMethodTypes["teams"]["getByName"]["parameters"]
      ): Promise<RestEndpointMethodTypes["teams"]["getByName"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Get a specific comment on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.
     */
    getDiscussionCommentInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["getDiscussionCommentInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["getDiscussionCommentInOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Get a specific discussion on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.
     */
    getDiscussionInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["getDiscussionInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["getDiscussionInOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Team members will include the members of child teams.
     *
     * To get a user's membership with a team, the team must be visible to the authenticated user.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/memberships/{username}`.
     *
     * **Note:**
     * The response contains the `state` of the membership and the member's `role`.
     *
     * The `role` for organization owners is set to `maintainer`. For more information about `maintainer` roles, see see [Create a team](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#create-a-team).
     */
    getMembershipForUserInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["getMembershipForUserInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["getMembershipForUserInOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Lists all teams in an organization that are visible to the authenticated user.
     */
    list: {
      (
        params?: RestEndpointMethodTypes["teams"]["list"]["parameters"]
      ): Promise<RestEndpointMethodTypes["teams"]["list"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Lists the child teams of the team specified by `{team_slug}`.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/teams`.
     */
    listChildInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["listChildInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["listChildInOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * List all comments on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments`.
     */
    listDiscussionCommentsInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["listDiscussionCommentsInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["listDiscussionCommentsInOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * List all discussions on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions`.
     */
    listDiscussionsInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["listDiscussionsInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["listDiscussionsInOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * List all of the teams across all of the organizations to which the authenticated user belongs. This method requires `user`, `repo`, or `read:org` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/) when authenticating via [OAuth](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/).
     */
    listForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["teams"]["listForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["listForAuthenticatedUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Team members will include the members of child teams.
     *
     * To list members in a team, the team must be visible to the authenticated user.
     */
    listMembersInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["listMembersInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["listMembersInOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Lists the organization projects for a team.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/projects`.
     */
    listProjectsInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["listProjectsInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["listProjectsInOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Lists a team's repositories visible to the authenticated user.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/repos`.
     */
    listReposInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["listReposInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["listReposInOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team.
     *
     * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/memberships/{username}`.
     */
    removeMembershipForUserInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["removeMembershipForUserInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["removeMembershipForUserInOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Removes an organization project from a team. An organization owner or a team maintainer can remove any project from the team. To remove a project from a team as an organization member, the authenticated user must have `read` access to both the team and project, or `admin` access to the team or project. This endpoint removes the project from the team, but does not delete the project.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/projects/{project_id}`.
     */
    removeProjectInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["removeProjectInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["removeProjectInOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. This does not delete the repository, it just removes it from the team.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.
     */
    removeRepoInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["removeRepoInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["removeRepoInOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Edits the body text of a discussion comment. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.
     */
    updateDiscussionCommentInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["updateDiscussionCommentInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["updateDiscussionCommentInOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Edits the title and body text of a discussion post. Only the parameters you provide are updated. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.
     */
    updateDiscussionInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["updateDiscussionInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["updateDiscussionInOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * To edit a team, the authenticated user must either be an organization owner or a team maintainer.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}`.
     */
    updateInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["updateInOrg"]["parameters"]
      ): Promise<RestEndpointMethodTypes["teams"]["updateInOrg"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
  };
  users: {
    /**
     * This endpoint is accessible with the `user` scope.
     */
    addEmailForAuthenticated: {
      (
        params?: RestEndpointMethodTypes["users"]["addEmailForAuthenticated"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["users"]["addEmailForAuthenticated"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    checkFollowingForUser: {
      (
        params?: RestEndpointMethodTypes["users"]["checkFollowingForUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["users"]["checkFollowingForUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    checkPersonIsFollowedByAuthenticated: {
      (
        params?: RestEndpointMethodTypes["users"]["checkPersonIsFollowedByAuthenticated"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["users"]["checkPersonIsFollowedByAuthenticated"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Adds a GPG key to the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth, or OAuth with at least `write:gpg_key` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     */
    createGpgKeyForAuthenticated: {
      (
        params?: RestEndpointMethodTypes["users"]["createGpgKeyForAuthenticated"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["users"]["createGpgKeyForAuthenticated"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Adds a public SSH key to the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth, or OAuth with at least `write:public_key` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     */
    createPublicSshKeyForAuthenticated: {
      (
        params?: RestEndpointMethodTypes["users"]["createPublicSshKeyForAuthenticated"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["users"]["createPublicSshKeyForAuthenticated"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * This endpoint is accessible with the `user` scope.
     */
    deleteEmailForAuthenticated: {
      (
        params?: RestEndpointMethodTypes["users"]["deleteEmailForAuthenticated"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["users"]["deleteEmailForAuthenticated"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Removes a GPG key from the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `admin:gpg_key` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     */
    deleteGpgKeyForAuthenticated: {
      (
        params?: RestEndpointMethodTypes["users"]["deleteGpgKeyForAuthenticated"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["users"]["deleteGpgKeyForAuthenticated"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Removes a public SSH key from the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `admin:public_key` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     */
    deletePublicSshKeyForAuthenticated: {
      (
        params?: RestEndpointMethodTypes["users"]["deletePublicSshKeyForAuthenticated"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["users"]["deletePublicSshKeyForAuthenticated"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#http-verbs)."
     *
     * Following a user requires the user to be logged in and authenticated with basic auth or OAuth with the `user:follow` scope.
     */
    follow: {
      (
        params?: RestEndpointMethodTypes["users"]["follow"]["parameters"]
      ): Promise<RestEndpointMethodTypes["users"]["follow"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * If the authenticated user is authenticated through basic authentication or OAuth with the `user` scope, then the response lists public and private profile information.
     *
     * If the authenticated user is authenticated through OAuth without the `user` scope, then the response lists only public profile information.
     */
    getAuthenticated: {
      (
        params?: RestEndpointMethodTypes["users"]["getAuthenticated"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["users"]["getAuthenticated"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Provides publicly available information about someone with a GitHub account.
     *
     * GitHub Apps with the `Plan` user permission can use this endpoint to retrieve information about a user's GitHub Enterprise Server plan. The GitHub App must be authenticated as a user. See "[Identifying and authorizing users for GitHub Apps](https://docs.github.com/enterprise-server@2.21/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)" for details about authentication. For an example response, see 'Response with GitHub Enterprise Server plan information' below"
     *
     * The `email` key in the following response is the publicly visible email address from your GitHub Enterprise Server [profile page](https://github.com/settings/profile). When setting up your profile, you can select a primary email address to be “public” which provides an email entry for this endpoint. If you do not set a public email address for `email`, then it will have a value of `null`. You only see publicly visible email addresses when authenticated with GitHub Enterprise Server. For more information, see [Authentication](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#authentication).
     *
     * The Emails API enables you to list all of your email addresses, and toggle a primary email to be visible publicly. For more information, see "[Emails API](https://docs.github.com/enterprise-server@2.21/rest/reference/users#emails)".
     */
    getByUsername: {
      (
        params?: RestEndpointMethodTypes["users"]["getByUsername"]["parameters"]
      ): Promise<RestEndpointMethodTypes["users"]["getByUsername"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Provides hovercard information when authenticated through basic auth or OAuth with the `repo` scope. You can find out more about someone in relation to their pull requests, issues, repositories, and organizations.
     *
     * The `subject_type` and `subject_id` parameters provide context for the person's hovercard, which returns more information than without the parameters. For example, if you wanted to find out more about `octocat` who owns the `Spoon-Knife` repository via cURL, it would look like this:
     *
     * ```shell
     *  curl -u username:token
     *   https://api.github.com/users/octocat/hovercard?subject_type=repository&subject_id=1300192
     * ```
     */
    getContextForUser: {
      (
        params?: RestEndpointMethodTypes["users"]["getContextForUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["users"]["getContextForUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * View extended details for a single GPG key. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:gpg_key` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     */
    getGpgKeyForAuthenticated: {
      (
        params?: RestEndpointMethodTypes["users"]["getGpgKeyForAuthenticated"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["users"]["getGpgKeyForAuthenticated"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * View extended details for a single public SSH key. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:public_key` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     */
    getPublicSshKeyForAuthenticated: {
      (
        params?: RestEndpointMethodTypes["users"]["getPublicSshKeyForAuthenticated"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["users"]["getPublicSshKeyForAuthenticated"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Lists all users, in the order that they signed up on GitHub Enterprise Server. This list includes personal user accounts and organization accounts.
     *
     * Note: Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of users.
     */
    list: {
      (
        params?: RestEndpointMethodTypes["users"]["list"]["parameters"]
      ): Promise<RestEndpointMethodTypes["users"]["list"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Lists all of your email addresses, and specifies which one is visible to the public. This endpoint is accessible with the `user:email` scope.
     */
    listEmailsForAuthenticated: {
      (
        params?: RestEndpointMethodTypes["users"]["listEmailsForAuthenticated"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["users"]["listEmailsForAuthenticated"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Lists the people who the authenticated user follows.
     */
    listFollowedByAuthenticated: {
      (
        params?: RestEndpointMethodTypes["users"]["listFollowedByAuthenticated"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["users"]["listFollowedByAuthenticated"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Lists the people following the authenticated user.
     */
    listFollowersForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["users"]["listFollowersForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["users"]["listFollowersForAuthenticatedUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Lists the people following the specified user.
     */
    listFollowersForUser: {
      (
        params?: RestEndpointMethodTypes["users"]["listFollowersForUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["users"]["listFollowersForUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Lists the people who the specified user follows.
     */
    listFollowingForUser: {
      (
        params?: RestEndpointMethodTypes["users"]["listFollowingForUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["users"]["listFollowingForUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Lists the current user's GPG keys. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:gpg_key` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     */
    listGpgKeysForAuthenticated: {
      (
        params?: RestEndpointMethodTypes["users"]["listGpgKeysForAuthenticated"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["users"]["listGpgKeysForAuthenticated"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Lists the GPG keys for a user. This information is accessible by anyone.
     */
    listGpgKeysForUser: {
      (
        params?: RestEndpointMethodTypes["users"]["listGpgKeysForUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["users"]["listGpgKeysForUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Lists your publicly visible email address, which you can set with the [Set primary email visibility for the authenticated user](https://docs.github.com/enterprise-server@2.21/rest/reference/users#set-primary-email-visibility-for-the-authenticated-user) endpoint. This endpoint is accessible with the `user:email` scope.
     */
    listPublicEmailsForAuthenticated: {
      (
        params?: RestEndpointMethodTypes["users"]["listPublicEmailsForAuthenticated"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["users"]["listPublicEmailsForAuthenticated"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Lists the _verified_ public SSH keys for a user. This is accessible by anyone.
     */
    listPublicKeysForUser: {
      (
        params?: RestEndpointMethodTypes["users"]["listPublicKeysForUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["users"]["listPublicKeysForUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Lists the public SSH keys for the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:public_key` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     */
    listPublicSshKeysForAuthenticated: {
      (
        params?: RestEndpointMethodTypes["users"]["listPublicSshKeysForAuthenticated"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["users"]["listPublicSshKeysForAuthenticated"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * Unfollowing a user requires the user to be logged in and authenticated with basic auth or OAuth with the `user:follow` scope.
     */
    unfollow: {
      (
        params?: RestEndpointMethodTypes["users"]["unfollow"]["parameters"]
      ): Promise<RestEndpointMethodTypes["users"]["unfollow"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
    /**
     * **Note:** If your email is set to private and you send an `email` parameter as part of this request to update your profile, your privacy settings are still enforced: the email address will not be displayed on your public profile or via the API.
     */
    updateAuthenticated: {
      (
        params?: RestEndpointMethodTypes["users"]["updateAuthenticated"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["users"]["updateAuthenticated"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
  };
};
