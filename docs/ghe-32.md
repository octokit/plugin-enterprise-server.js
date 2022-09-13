# enterpriseServer32

<a name="admin"></a>

## Enterprise Administration

```js
octokit.enterpriseAdmin.addAuthorizedSshKey({ authorized_key, origin });
octokit.enterpriseAdmin.createEnterpriseServerLicense({
  license,
  password,
  settings,
  origin,
});
octokit.enterpriseAdmin.createGlobalWebhook({ name, config, events, active });
octokit.enterpriseAdmin.createImpersonationOAuthToken({ username, scopes });
octokit.enterpriseAdmin.createOrg({ login, admin, profile_name });
octokit.enterpriseAdmin.createPreReceiveEnvironment({ name, image_url });
octokit.enterpriseAdmin.createPreReceiveHook({
  name,
  script,
  script_repository,
  environment,
  enforcement,
  allow_downstream_configuration,
});
octokit.enterpriseAdmin.createUser({ login, email });
octokit.enterpriseAdmin.deleteGlobalWebhook({ hook_id });
octokit.enterpriseAdmin.deleteImpersonationOAuthToken({ username });
octokit.enterpriseAdmin.deletePersonalAccessToken({ token_id });
octokit.enterpriseAdmin.deletePreReceiveEnvironment({
  pre_receive_environment_id,
});
octokit.enterpriseAdmin.deletePreReceiveHook({ pre_receive_hook_id });
octokit.enterpriseAdmin.deletePublicKey({ key_ids });
octokit.enterpriseAdmin.deleteUser({ username });
octokit.enterpriseAdmin.demoteSiteAdministrator({ username });
octokit.enterpriseAdmin.disableSelectedOrganizationGithubActionsEnterprise({
  enterprise,
  org_id,
});
octokit.enterpriseAdmin.enableOrDisableMaintenanceMode({ maintenance, origin });
octokit.enterpriseAdmin.enableSelectedOrganizationGithubActionsEnterprise({
  enterprise,
  org_id,
});
octokit.enterpriseAdmin.getAllAuthorizedSshKeys({ origin });
octokit.enterpriseAdmin.getAllStats();
octokit.enterpriseAdmin.getAllowedActionsEnterprise({ enterprise });
octokit.enterpriseAdmin.getAnnouncement();
octokit.enterpriseAdmin.getCommentStats();
octokit.enterpriseAdmin.getConfigurationStatus({ origin });
octokit.enterpriseAdmin.getDownloadStatusForPreReceiveEnvironment({
  pre_receive_environment_id,
});
octokit.enterpriseAdmin.getGistStats();
octokit.enterpriseAdmin.getGithubActionsPermissionsEnterprise({ enterprise });
octokit.enterpriseAdmin.getGlobalWebhook({ hook_id });
octokit.enterpriseAdmin.getHooksStats();
octokit.enterpriseAdmin.getIssueStats();
octokit.enterpriseAdmin.getLicenseInformation();
octokit.enterpriseAdmin.getMaintenanceStatus({ origin });
octokit.enterpriseAdmin.getMilestoneStats();
octokit.enterpriseAdmin.getOrgStats();
octokit.enterpriseAdmin.getPagesStats();
octokit.enterpriseAdmin.getPreReceiveEnvironment({
  pre_receive_environment_id,
});
octokit.enterpriseAdmin.getPreReceiveHook({ pre_receive_hook_id });
octokit.enterpriseAdmin.getPreReceiveHookForOrg({ org, pre_receive_hook_id });
octokit.enterpriseAdmin.getPreReceiveHookForRepo({
  owner,
  repo,
  pre_receive_hook_id,
});
octokit.enterpriseAdmin.getPullRequestStats();
octokit.enterpriseAdmin.getRepoStats();
octokit.enterpriseAdmin.getSettings({ origin });
octokit.enterpriseAdmin.getUserStats();
octokit.enterpriseAdmin.listGlobalWebhooks({ per_page, page });
octokit.enterpriseAdmin.listPersonalAccessTokens({ per_page, page });
octokit.enterpriseAdmin.listPreReceiveEnvironments({
  per_page,
  page,
  direction,
  sort,
});
octokit.enterpriseAdmin.listPreReceiveHooks({
  per_page,
  page,
  direction,
  sort,
});
octokit.enterpriseAdmin.listPreReceiveHooksForOrg({
  org,
  per_page,
  page,
  direction,
  sort,
});
octokit.enterpriseAdmin.listPreReceiveHooksForRepo({
  owner,
  repo,
  per_page,
  page,
  direction,
  sort,
});
octokit.enterpriseAdmin.listPublicKeys({
  per_page,
  page,
  direction,
  sort,
  since,
});
octokit.enterpriseAdmin.listSelectedOrganizationsEnabledGithubActionsEnterprise(
  { enterprise, per_page, page }
);
octokit.enterpriseAdmin.pingGlobalWebhook({ hook_id });
octokit.enterpriseAdmin.promoteUserToBeSiteAdministrator({ username });
octokit.enterpriseAdmin.removeAnnouncement();
octokit.enterpriseAdmin.removeAuthorizedSshKey({ authorized_key, origin });
octokit.enterpriseAdmin.removePreReceiveHookEnforcementForOrg({
  org,
  pre_receive_hook_id,
});
octokit.enterpriseAdmin.removePreReceiveHookEnforcementForRepo({
  owner,
  repo,
  pre_receive_hook_id,
});
octokit.enterpriseAdmin.setAllowedActionsEnterprise({
  enterprise,
  github_owned_allowed,
  patterns_allowed,
});
octokit.enterpriseAdmin.setAnnouncement({ announcement, expires_at });
octokit.enterpriseAdmin.setGithubActionsPermissionsEnterprise({
  enterprise,
  enabled_organizations,
  allowed_actions,
});
octokit.enterpriseAdmin.setSelectedOrganizationsEnabledGithubActionsEnterprise({
  enterprise,
  selected_organization_ids,
});
octokit.enterpriseAdmin.setSettings({ settings, origin });
octokit.enterpriseAdmin.startConfigurationProcess({ origin });
octokit.enterpriseAdmin.startPreReceiveEnvironmentDownload({
  pre_receive_environment_id,
});
octokit.enterpriseAdmin.suspendUser({ username, reason });
octokit.enterpriseAdmin.syncLdapMappingForTeam({ team_id });
octokit.enterpriseAdmin.syncLdapMappingForUser({ username });
octokit.enterpriseAdmin.unsuspendUser({ username, reason });
octokit.enterpriseAdmin.updateGlobalWebhook({
  hook_id,
  config,
  events,
  active,
});
octokit.enterpriseAdmin.updateLdapMappingForTeam({ team_id, ldap_dn });
octokit.enterpriseAdmin.updateLdapMappingForUser({ username, ldap_dn });
octokit.enterpriseAdmin.updateOrgName({ org, login });
octokit.enterpriseAdmin.updatePreReceiveEnvironment({
  pre_receive_environment_id,
  name,
  image_url,
});
octokit.enterpriseAdmin.updatePreReceiveHook({
  pre_receive_hook_id,
  name,
  script,
  script_repository,
  environment,
  enforcement,
  allow_downstream_configuration,
});
octokit.enterpriseAdmin.updatePreReceiveHookEnforcementForOrg({
  org,
  pre_receive_hook_id,
  enforcement,
  allow_downstream_configuration,
});
octokit.enterpriseAdmin.updatePreReceiveHookEnforcementForRepo({
  owner,
  repo,
  pre_receive_hook_id,
  enforcement,
});
octokit.enterpriseAdmin.updateUsernameForUser({ username, login });
octokit.enterpriseAdmin.upgradeLicense({ license, origin });
```

<a name="others"></a>

## Others

```js
octokit.actions.addSelectedRepoToOrgSecret({org, secret_name, repository_id});
octokit.actions.cancelWorkflowRun({owner, repo, run_id});
octokit.actions.createOrUpdateEnvironmentSecret({repository_id, environment_name, secret_name, encrypted_value, key_id});
octokit.actions.createOrUpdateOrgSecret({org, secret_name, encrypted_value, key_id, visibility, selected_repository_ids});
octokit.actions.createOrUpdateRepoSecret({owner, repo, secret_name, encrypted_value, key_id});
octokit.actions.createRegistrationTokenForOrg({org});
octokit.actions.createRegistrationTokenForRepo({owner, repo});
octokit.actions.createRemoveTokenForOrg({org});
octokit.actions.createRemoveTokenForRepo({owner, repo});
octokit.actions.createWorkflowDispatch({owner, repo, workflow_id, ref, inputs});
octokit.actions.deleteArtifact({owner, repo, artifact_id});
octokit.actions.deleteEnvironmentSecret({repository_id, environment_name, secret_name});
octokit.actions.deleteOrgSecret({org, secret_name});
octokit.actions.deleteRepoSecret({owner, repo, secret_name});
octokit.actions.deleteSelfHostedRunnerFromOrg({org, runner_id});
octokit.actions.deleteSelfHostedRunnerFromRepo({owner, repo, runner_id});
octokit.actions.deleteWorkflowRun({owner, repo, run_id});
octokit.actions.deleteWorkflowRunLogs({owner, repo, run_id});
octokit.actions.disableSelectedRepositoryGithubActionsOrganization({org, repository_id});
octokit.actions.disableWorkflow({owner, repo, workflow_id});
octokit.actions.downloadArtifact({owner, repo, artifact_id, archive_format});
octokit.actions.downloadJobLogsForWorkflowRun({owner, repo, job_id});
octokit.actions.downloadWorkflowRunLogs({owner, repo, run_id});
octokit.actions.enableSelectedRepositoryGithubActionsOrganization({org, repository_id});
octokit.actions.enableWorkflow({owner, repo, workflow_id});
octokit.actions.getAllowedActionsOrganization({org});
octokit.actions.getAllowedActionsRepository({owner, repo});
octokit.actions.getArtifact({owner, repo, artifact_id});
octokit.actions.getEnvironmentPublicKey({repository_id, environment_name});
octokit.actions.getEnvironmentSecret({repository_id, environment_name, secret_name});
octokit.actions.getGithubActionsPermissionsOrganization({org});
octokit.actions.getGithubActionsPermissionsRepository({owner, repo});
octokit.actions.getJobForWorkflowRun({owner, repo, job_id});
octokit.actions.getOrgPublicKey({org});
octokit.actions.getOrgSecret({org, secret_name});
octokit.actions.getPendingDeploymentsForRun({owner, repo, run_id});
octokit.actions.getRepoPublicKey({owner, repo});
octokit.actions.getRepoSecret({owner, repo, secret_name});
octokit.actions.getReviewsForRun({owner, repo, run_id});
octokit.actions.getSelfHostedRunnerForOrg({org, runner_id});
octokit.actions.getSelfHostedRunnerForRepo({owner, repo, runner_id});
octokit.actions.getWorkflow({owner, repo, workflow_id});
octokit.actions.getWorkflowRun({owner, repo, run_id, exclude_pull_requests});
octokit.actions.listArtifactsForRepo({owner, repo, per_page, page});
octokit.actions.listEnvironmentSecrets({repository_id, environment_name, per_page, page});
octokit.actions.listJobsForWorkflowRun({owner, repo, run_id, filter, per_page, page});
octokit.actions.listOrgSecrets({org, per_page, page});
octokit.actions.listRepoSecrets({owner, repo, per_page, page});
octokit.actions.listRepoWorkflows({owner, repo, per_page, page});
octokit.actions.listRunnerApplicationsForOrg({org});
octokit.actions.listRunnerApplicationsForRepo({owner, repo});
octokit.actions.listSelectedReposForOrgSecret({org, secret_name, page, per_page});
octokit.actions.listSelectedRepositoriesEnabledGithubActionsOrganization({org, per_page, page});
octokit.actions.listSelfHostedRunnersForOrg({org, per_page, page});
octokit.actions.listSelfHostedRunnersForRepo({owner, repo, per_page, page});
octokit.actions.listWorkflowRunArtifacts({owner, repo, run_id, per_page, page});
octokit.actions.listWorkflowRuns({owner, repo, workflow_id, actor, branch, event, status, per_page, page, created, exclude_pull_requests});
octokit.actions.listWorkflowRunsForRepo({owner, repo, actor, branch, event, status, per_page, page, created, exclude_pull_requests});
octokit.actions.reRunWorkflow({owner, repo, run_id});
octokit.actions.removeSelectedRepoFromOrgSecret({org, secret_name, repository_id});
octokit.actions.reviewPendingDeploymentsForRun({owner, repo, run_id, environment_ids, state, comment});
octokit.actions.setAllowedActionsOrganization({org, github_owned_allowed, patterns_allowed});
octokit.actions.setAllowedActionsRepository({owner, repo, github_owned_allowed, patterns_allowed});
octokit.actions.setGithubActionsPermissionsOrganization({org, enabled_repositories, allowed_actions});
octokit.actions.setGithubActionsPermissionsRepository({owner, repo, enabled, allowed_actions});
octokit.actions.setSelectedReposForOrgSecret({org, secret_name, selected_repository_ids});
octokit.actions.setSelectedRepositoriesEnabledGithubActionsOrganization({org, selected_repository_ids});
octokit.activity.checkRepoIsStarredByAuthenticatedUser({owner, repo});
octokit.activity.deleteRepoSubscription({owner, repo});
octokit.activity.deleteThreadSubscription({thread_id});
octokit.activity.getFeeds();
octokit.activity.getRepoSubscription({owner, repo});
octokit.activity.getThread({thread_id});
octokit.activity.getThreadSubscriptionForAuthenticatedUser({thread_id});
octokit.activity.listEventsForAuthenticatedUser({username, per_page, page});
octokit.activity.listNotificationsForAuthenticatedUser({all, participating, since, before, page, per_page});
octokit.activity.listOrgEventsForAuthenticatedUser({username, org, per_page, page});
octokit.activity.listPublicEvents({per_page, page});
octokit.activity.listPublicEventsForRepoNetwork({owner, repo, per_page, page});
octokit.activity.listPublicEventsForUser({username, per_page, page});
octokit.activity.listPublicOrgEvents({org, per_page, page});
octokit.activity.listReceivedEventsForUser({username, per_page, page});
octokit.activity.listReceivedPublicEventsForUser({username, per_page, page});
octokit.activity.listRepoEvents({owner, repo, per_page, page});
octokit.activity.listRepoNotificationsForAuthenticatedUser({owner, repo, all, participating, since, before, per_page, page});
octokit.activity.listReposStarredByAuthenticatedUser({sort, direction, per_page, page});
octokit.activity.listReposStarredByUser({username, sort, direction, per_page, page});
octokit.activity.listReposWatchedByUser({username, per_page, page});
octokit.activity.listStargazersForRepo({owner, repo, per_page, page});
octokit.activity.listWatchedReposForAuthenticatedUser({per_page, page});
octokit.activity.listWatchersForRepo({owner, repo, per_page, page});
octokit.activity.markNotificationsAsRead({last_read_at, read});
octokit.activity.markRepoNotificationsAsRead({owner, repo, last_read_at});
octokit.activity.markThreadAsRead({thread_id});
octokit.activity.setRepoSubscription({owner, repo, subscribed, ignored});
octokit.activity.setThreadSubscription({thread_id, ignored});
octokit.activity.starRepoForAuthenticatedUser({owner, repo});
octokit.activity.unstarRepoForAuthenticatedUser({owner, repo});
octokit.apps.addRepoToInstallation({installation_id, repository_id});
octokit.apps.addRepoToInstallationForAuthenticatedUser({installation_id, repository_id});
octokit.apps.checkAuthorization({client_id, access_token});
octokit.apps.checkToken({client_id, access_token});
octokit.apps.createContentAttachment({content_reference_id, title, body});
octokit.apps.createContentAttachmentForRepo({owner, repo, content_reference_id, title, body});
octokit.apps.createFromManifest({code});
octokit.apps.createInstallationAccessToken({installation_id, repositories, repository_ids, permissions});
octokit.apps.deleteAuthorization({client_id, access_token});
octokit.apps.deleteInstallation({installation_id});
octokit.apps.deleteToken({client_id, access_token});
octokit.apps.getAuthenticated();
octokit.apps.getBySlug({app_slug});
octokit.apps.getInstallation({installation_id});
octokit.apps.getOrgInstallation({org});
octokit.apps.getRepoInstallation({owner, repo});
octokit.apps.getUserInstallation({username});
octokit.apps.getWebhookConfigForApp();
octokit.apps.getWebhookDelivery({delivery_id});
octokit.apps.listInstallationReposForAuthenticatedUser({installation_id, per_page, page});
octokit.apps.listInstallations({per_page, page, since, outdated});
octokit.apps.listInstallationsForAuthenticatedUser({per_page, page});
octokit.apps.listReposAccessibleToInstallation({per_page, page});
octokit.apps.listWebhookDeliveries({per_page, cursor});
octokit.apps.redeliverWebhookDelivery({delivery_id});
octokit.apps.removeRepoFromInstallation({installation_id, repository_id});
octokit.apps.removeRepoFromInstallationForAuthenticatedUser({installation_id, repository_id});
octokit.apps.resetAuthorization({client_id, access_token});
octokit.apps.resetToken({client_id, access_token});
octokit.apps.revokeAuthorizationForApplication({client_id, access_token});
octokit.apps.revokeGrantForApplication({client_id, access_token});
octokit.apps.revokeInstallationAccessToken();
octokit.apps.scopeToken({client_id, access_token, target, target_id, repositories, repository_ids, permissions});
octokit.apps.suspendInstallation({installation_id});
octokit.apps.unsuspendInstallation({installation_id});
octokit.apps.updateWebhookConfigForApp({url, content_type, secret, insecure_ssl});
octokit.checks.create({owner, repo, status, *});
octokit.checks.createSuite({owner, repo, head_sha});
octokit.checks.get({owner, repo, check_run_id});
octokit.checks.getSuite({owner, repo, check_suite_id});
octokit.checks.listAnnotations({owner, repo, check_run_id, per_page, page});
octokit.checks.listForRef({owner, repo, ref, check_name, status, filter, per_page, page, app_id});
octokit.checks.listForSuite({owner, repo, check_suite_id, check_name, status, filter, per_page, page});
octokit.checks.listSuitesForRef({owner, repo, ref, app_id, check_name, per_page, page});
octokit.checks.rerequestSuite({owner, repo, check_suite_id});
octokit.checks.setSuitesPreferences({owner, repo, auto_trigger_checks});
octokit.checks.update({owner, repo, check_run_id, name, details_url, external_id, started_at, status, conclusion, completed_at, output, actions});
octokit.codeScanning.deleteAnalysis({owner, repo, analysis_id, confirm_delete});
octokit.codeScanning.getAlert({owner, repo, alert_number});
octokit.codeScanning.getAnalysis({owner, repo, analysis_id});
octokit.codeScanning.getSarif({owner, repo, sarif_id});
octokit.codeScanning.listAlertInstances({owner, repo, alert_number, page, per_page, ref});
octokit.codeScanning.listAlertsForRepo({owner, repo, tool_name, tool_guid, page, per_page, ref, state});
octokit.codeScanning.listAlertsInstances({owner, repo, alert_number, page, per_page, ref});
octokit.codeScanning.listRecentAnalyses({owner, repo, tool_name, tool_guid, page, per_page, ref, sarif_id});
octokit.codeScanning.updateAlert({owner, repo, alert_number, state, dismissed_reason});
octokit.codeScanning.uploadSarif({owner, repo, commit_sha, ref, sarif, checkout_uri, started_at, tool_name});
octokit.codesOfConduct.getAllCodesOfConduct();
octokit.codesOfConduct.getConductCode({key});
octokit.codesOfConduct.getForRepo({owner, repo});
octokit.emojis.get();
octokit.gists.checkIsStarred({gist_id});
octokit.gists.create({description, files, public});
octokit.gists.createComment({gist_id, body});
octokit.gists.delete({gist_id});
octokit.gists.deleteComment({gist_id, comment_id});
octokit.gists.fork({gist_id});
octokit.gists.get({gist_id});
octokit.gists.getComment({gist_id, comment_id});
octokit.gists.getRevision({gist_id, sha});
octokit.gists.list({since, per_page, page});
octokit.gists.listComments({gist_id, per_page, page});
octokit.gists.listCommits({gist_id, per_page, page});
octokit.gists.listForUser({username, since, per_page, page});
octokit.gists.listForks({gist_id, per_page, page});
octokit.gists.listPublic({since, per_page, page});
octokit.gists.listStarred({since, per_page, page});
octokit.gists.star({gist_id});
octokit.gists.unstar({gist_id});
octokit.gists.update({gist_id, description, files});
octokit.gists.updateComment({gist_id, comment_id, body});
octokit.git.createBlob({owner, repo, content, encoding});
octokit.git.createCommit({owner, repo, message, tree, parents, author, committer, signature});
octokit.git.createRef({owner, repo, ref, sha, key});
octokit.git.createTag({owner, repo, tag, message, object, type, tagger});
octokit.git.createTree({owner, repo, tree, base_tree});
octokit.git.deleteRef({owner, repo, ref});
octokit.git.getBlob({owner, repo, file_sha});
octokit.git.getCommit({owner, repo, commit_sha});
octokit.git.getRef({owner, repo, ref});
octokit.git.getTag({owner, repo, tag_sha});
octokit.git.getTree({owner, repo, tree_sha, recursive});
octokit.git.listMatchingRefs({owner, repo, ref});
octokit.git.updateRef({owner, repo, ref, sha, force});
octokit.gitignore.getAllTemplates();
octokit.gitignore.getTemplate({name});
octokit.issues.addAssignees({owner, repo, issue_number, assignees});
octokit.issues.addLabels({owner, repo, issue_number, labels});
octokit.issues.checkUserCanBeAssigned({owner, repo, assignee});
octokit.issues.create({owner, repo, title, body, assignee, milestone, labels, assignees});
octokit.issues.createComment({owner, repo, issue_number, body});
octokit.issues.createLabel({owner, repo, name, color, description});
octokit.issues.createMilestone({owner, repo, title, state, description, due_on});
octokit.issues.deleteComment({owner, repo, comment_id});
octokit.issues.deleteLabel({owner, repo, name});
octokit.issues.deleteMilestone({owner, repo, milestone_number});
octokit.issues.get({owner, repo, issue_number});
octokit.issues.getComment({owner, repo, comment_id});
octokit.issues.getEvent({owner, repo, event_id});
octokit.issues.getLabel({owner, repo, name});
octokit.issues.getMilestone({owner, repo, milestone_number});
octokit.issues.list({filter, state, labels, sort, direction, since, collab, orgs, owned, pulls, per_page, page});
octokit.issues.listAssignees({owner, repo, per_page, page});
octokit.issues.listComments({owner, repo, issue_number, since, per_page, page});
octokit.issues.listCommentsForRepo({owner, repo, sort, direction, since, per_page, page});
octokit.issues.listEvents({owner, repo, issue_number, per_page, page});
octokit.issues.listEventsForRepo({owner, repo, per_page, page});
octokit.issues.listEventsForTimeline({owner, repo, issue_number, per_page, page});
octokit.issues.listForAuthenticatedUser({filter, state, labels, sort, direction, since, per_page, page});
octokit.issues.listForOrg({org, filter, state, labels, sort, direction, since, per_page, page});
octokit.issues.listForRepo({owner, repo, milestone, state, assignee, creator, mentioned, labels, sort, direction, since, per_page, page});
octokit.issues.listLabelsForMilestone({owner, repo, milestone_number, per_page, page});
octokit.issues.listLabelsForRepo({owner, repo, per_page, page});
octokit.issues.listLabelsOnIssue({owner, repo, issue_number, per_page, page});
octokit.issues.listMilestones({owner, repo, state, sort, direction, per_page, page});
octokit.issues.lock({owner, repo, issue_number, lock_reason});
octokit.issues.removeAllLabels({owner, repo, issue_number});
octokit.issues.removeAssignees({owner, repo, issue_number, assignees});
octokit.issues.removeLabel({owner, repo, issue_number, name});
octokit.issues.setLabels({owner, repo, issue_number, labels});
octokit.issues.unlock({owner, repo, issue_number});
octokit.issues.update({owner, repo, issue_number, title, body, assignee, state, state_reason, milestone, labels, assignees});
octokit.issues.updateComment({owner, repo, comment_id, body});
octokit.issues.updateLabel({owner, repo, name, new_name, color, description});
octokit.issues.updateMilestone({owner, repo, milestone_number, title, state, description, due_on});
octokit.licenses.get({license});
octokit.licenses.getAllCommonlyUsed({featured, per_page, page});
octokit.licenses.getForRepo({owner, repo});
octokit.markdown.render({text, mode, context});
octokit.markdown.renderRaw({data});
octokit.meta.get();
octokit.meta.getOctocat({s});
octokit.meta.getZen();
octokit.meta.root();
octokit.orgs.checkMembershipForUser({org, username});
octokit.orgs.checkPublicMembershipForUser({org, username});
octokit.orgs.convertMemberToOutsideCollaborator({org, username, async});
octokit.orgs.createWebhook({org, name, config, events, active});
octokit.orgs.deleteWebhook({org, hook_id});
octokit.orgs.get({org});
octokit.orgs.getMembershipForAuthenticatedUser({org});
octokit.orgs.getMembershipForUser({org, username});
octokit.orgs.getWebhook({org, hook_id});
octokit.orgs.getWebhookConfigForOrg({org, hook_id});
octokit.orgs.getWebhookDelivery({org, hook_id, delivery_id});
octokit.orgs.list({since, per_page});
octokit.orgs.listAppInstallations({org, per_page, page});
octokit.orgs.listForAuthenticatedUser({per_page, page});
octokit.orgs.listForUser({username, per_page, page});
octokit.orgs.listMembers({org, filter, role, per_page, page});
octokit.orgs.listMembershipsForAuthenticatedUser({state, per_page, page});
octokit.orgs.listOutsideCollaborators({org, filter, per_page, page});
octokit.orgs.listPublicMembers({org, per_page, page});
octokit.orgs.listWebhookDeliveries({org, hook_id, per_page, cursor});
octokit.orgs.listWebhooks({org, per_page, page});
octokit.orgs.pingWebhook({org, hook_id});
octokit.orgs.redeliverWebhookDelivery({org, hook_id, delivery_id});
octokit.orgs.removeMember({org, username});
octokit.orgs.removeMembershipForUser({org, username});
octokit.orgs.removeOutsideCollaborator({org, username});
octokit.orgs.removePublicMembershipForAuthenticatedUser({org, username});
octokit.orgs.setMembershipForUser({org, username, role});
octokit.orgs.setPublicMembershipForAuthenticatedUser({org, username});
octokit.orgs.update({org, billing_email, company, email, twitter_username, location, name, description, has_organization_projects, has_repository_projects, default_repository_permission, members_can_create_repositories, members_can_create_internal_repositories, members_can_create_private_repositories, members_can_create_public_repositories, members_allowed_repository_creation_type, members_can_create_pages, blog});
octokit.orgs.updateMembershipForAuthenticatedUser({org, state});
octokit.orgs.updateWebhook({org, hook_id, config, events, active, name});
octokit.orgs.updateWebhookConfigForOrg({org, hook_id, url, content_type, secret, insecure_ssl});
octokit.projects.addCollaborator({project_id, username, permission});
octokit.projects.createCard({column_id, note, content_id, content_type});
octokit.projects.createColumn({project_id, name});
octokit.projects.createForAuthenticatedUser({name, body});
octokit.projects.createForOrg({org, name, body});
octokit.projects.createForRepo({owner, repo, name, body});
octokit.projects.delete({project_id});
octokit.projects.deleteCard({card_id});
octokit.projects.deleteColumn({column_id});
octokit.projects.get({project_id});
octokit.projects.getCard({card_id});
octokit.projects.getColumn({column_id});
octokit.projects.getPermissionForUser({project_id, username});
octokit.projects.listCards({column_id, archived_state, per_page, page});
octokit.projects.listCollaborators({project_id, affiliation, per_page, page});
octokit.projects.listColumns({project_id, per_page, page});
octokit.projects.listForOrg({org, state, per_page, page});
octokit.projects.listForRepo({owner, repo, state, per_page, page});
octokit.projects.listForUser({username, state, per_page, page});
octokit.projects.moveCard({card_id, position, column_id});
octokit.projects.moveColumn({column_id, position});
octokit.projects.removeCollaborator({project_id, username});
octokit.projects.update({project_id, name, body, state, organization_permission, private});
octokit.projects.updateCard({card_id, note, archived});
octokit.projects.updateColumn({column_id, name});
octokit.pulls.checkIfMerged({owner, repo, pull_number});
octokit.pulls.create({owner, repo, title, head, base, body, maintainer_can_modify, draft, issue});
octokit.pulls.createReplyForReviewComment({owner, repo, pull_number, comment_id, body});
octokit.pulls.createReview({owner, repo, pull_number, commit_id, body, event, comments});
octokit.pulls.createReviewComment({owner, repo, pull_number, body, commit_id, path, position, side, line, start_line, start_side, in_reply_to});
octokit.pulls.deletePendingReview({owner, repo, pull_number, review_id});
octokit.pulls.deleteReviewComment({owner, repo, comment_id});
octokit.pulls.dismissReview({owner, repo, pull_number, review_id, message, event});
octokit.pulls.get({owner, repo, pull_number});
octokit.pulls.getReview({owner, repo, pull_number, review_id});
octokit.pulls.getReviewComment({owner, repo, comment_id});
octokit.pulls.list({owner, repo, state, head, base, sort, direction, per_page, page});
octokit.pulls.listCommentsForReview({owner, repo, pull_number, review_id, per_page, page});
octokit.pulls.listCommits({owner, repo, pull_number, per_page, page});
octokit.pulls.listFiles({owner, repo, pull_number, per_page, page});
octokit.pulls.listRequestedReviewers({owner, repo, pull_number});
octokit.pulls.listReviewComments({owner, repo, pull_number, sort, direction, since, per_page, page});
octokit.pulls.listReviewCommentsForRepo({owner, repo, sort, direction, since, per_page, page});
octokit.pulls.listReviews({owner, repo, pull_number, per_page, page});
octokit.pulls.merge({owner, repo, pull_number, commit_title, commit_message, sha, merge_method});
octokit.pulls.removeRequestedReviewers({owner, repo, pull_number, reviewers, team_reviewers});
octokit.pulls.requestReviewers({owner, repo, pull_number, reviewers, team_reviewers});
octokit.pulls.submitReview({owner, repo, pull_number, review_id, body, event});
octokit.pulls.update({owner, repo, pull_number, title, body, state, base, maintainer_can_modify});
octokit.pulls.updateBranch({owner, repo, pull_number, expected_head_sha});
octokit.pulls.updateReview({owner, repo, pull_number, review_id, body});
octokit.pulls.updateReviewComment({owner, repo, comment_id, body});
octokit.rateLimit.get();
octokit.reactions.createForCommitComment({owner, repo, comment_id, content});
octokit.reactions.createForIssue({owner, repo, issue_number, content});
octokit.reactions.createForIssueComment({owner, repo, comment_id, content});
octokit.reactions.createForPullRequestReviewComment({owner, repo, comment_id, content});
octokit.reactions.createForRelease({owner, repo, release_id, content});
octokit.reactions.createForTeamDiscussionCommentInOrg({org, team_slug, discussion_number, comment_number, content});
octokit.reactions.createForTeamDiscussionCommentLegacy({team_id, discussion_number, comment_number, content});
octokit.reactions.createForTeamDiscussionInOrg({org, team_slug, discussion_number, content});
octokit.reactions.createForTeamDiscussionLegacy({team_id, discussion_number, content});
octokit.reactions.deleteForCommitComment({owner, repo, comment_id, reaction_id});
octokit.reactions.deleteForIssue({owner, repo, issue_number, reaction_id});
octokit.reactions.deleteForIssueComment({owner, repo, comment_id, reaction_id});
octokit.reactions.deleteForPullRequestComment({owner, repo, comment_id, reaction_id});
octokit.reactions.deleteForRelease({owner, repo, release_id, reaction_id});
octokit.reactions.deleteForTeamDiscussion({org, team_slug, discussion_number, reaction_id});
octokit.reactions.deleteForTeamDiscussionComment({org, team_slug, discussion_number, comment_number, reaction_id});
octokit.reactions.deleteLegacy({reaction_id});
octokit.reactions.listForCommitComment({owner, repo, comment_id, content, per_page, page});
octokit.reactions.listForIssue({owner, repo, issue_number, content, per_page, page});
octokit.reactions.listForIssueComment({owner, repo, comment_id, content, per_page, page});
octokit.reactions.listForPullRequestReviewComment({owner, repo, comment_id, content, per_page, page});
octokit.reactions.listForRelease({owner, repo, release_id, content, per_page, page});
octokit.reactions.listForTeamDiscussionCommentInOrg({org, team_slug, discussion_number, comment_number, content, per_page, page});
octokit.reactions.listForTeamDiscussionCommentLegacy({team_id, discussion_number, comment_number, content, per_page, page});
octokit.reactions.listForTeamDiscussionInOrg({org, team_slug, discussion_number, content, per_page, page});
octokit.reactions.listForTeamDiscussionLegacy({team_id, discussion_number, content, per_page, page});
octokit.repos.acceptInvitation({invitation_id});
octokit.repos.acceptInvitationForAuthenticatedUser({invitation_id});
octokit.repos.addAppAccessRestrictions({owner, repo, branch, apps});
octokit.repos.addCollaborator({owner, repo, username, permission});
octokit.repos.addStatusCheckContexts({owner, repo, branch, contexts});
octokit.repos.addTeamAccessRestrictions({owner, repo, branch, teams});
octokit.repos.addUserAccessRestrictions({owner, repo, branch, users});
octokit.repos.checkCollaborator({owner, repo, username});
octokit.repos.compareCommits({owner, repo, base, head, per_page, page});
octokit.repos.compareCommitsWithBasehead({owner, repo, page, per_page, basehead});
octokit.repos.createCommitComment({owner, repo, commit_sha, body, path, position, line});
octokit.repos.createCommitSignatureProtection({owner, repo, branch});
octokit.repos.createCommitStatus({owner, repo, sha, state, target_url, description, context});
octokit.repos.createDeployKey({owner, repo, title, key, read_only});
octokit.repos.createDeployment({owner, repo, ref, task, auto_merge, required_contexts, payload, environment, description, transient_environment, production_environment});
octokit.repos.createDeploymentBranchPolicy({owner, repo, environment_name, name});
octokit.repos.createDeploymentStatus({owner, repo, deployment_id, state, target_url, log_url, description, environment, environment_url, auto_inactive});
octokit.repos.createDispatchEvent({owner, repo, event_type, client_payload});
octokit.repos.createForAuthenticatedUser({name, description, homepage, private, has_issues, has_projects, has_wiki, team_id, auto_init, gitignore_template, license_template, allow_squash_merge, allow_merge_commit, allow_rebase_merge, delete_branch_on_merge, squash_merge_commit_title, squash_merge_commit_message, merge_commit_title, merge_commit_message, has_downloads, is_template});
octokit.repos.createFork({owner, repo, organization});
octokit.repos.createInOrg({org, name, description, homepage, private, visibility, has_issues, has_projects, has_wiki, is_template, team_id, auto_init, gitignore_template, license_template, allow_squash_merge, allow_merge_commit, allow_rebase_merge, delete_branch_on_merge, use_squash_pr_title_as_default, squash_merge_commit_title, squash_merge_commit_message, merge_commit_title, merge_commit_message});
octokit.repos.createOrUpdateEnvironment({owner, repo, environment_name, wait_timer, reviewers, deployment_branch_policy});
octokit.repos.createOrUpdateFileContents({owner, repo, path, message, content, sha, branch, committer, author});
octokit.repos.createPagesSite({owner, repo, build_type, source});
octokit.repos.createRelease({owner, repo, tag_name, target_commitish, name, body, draft, prerelease});
octokit.repos.createUsingTemplate({template_owner, template_repo, owner, name, description, include_all_branches, private});
octokit.repos.createWebhook({owner, repo, name, config, events, active});
octokit.repos.declineInvitation({invitation_id});
octokit.repos.declineInvitationForAuthenticatedUser({invitation_id});
octokit.repos.delete({owner, repo});
octokit.repos.deleteAccessRestrictions({owner, repo, branch});
octokit.repos.deleteAdminBranchProtection({owner, repo, branch});
octokit.repos.deleteAnEnvironment({owner, repo, environment_name});
octokit.repos.deleteBranchProtection({owner, repo, branch});
octokit.repos.deleteCommitComment({owner, repo, comment_id});
octokit.repos.deleteCommitSignatureProtection({owner, repo, branch});
octokit.repos.deleteDeployKey({owner, repo, key_id});
octokit.repos.deleteDeployment({owner, repo, deployment_id});
octokit.repos.deleteDeploymentBranchPolicy({owner, repo, environment_name, branch_policy_id});
octokit.repos.deleteFile({owner, repo, path, message, sha, branch, committer, author});
octokit.repos.deleteInvitation({owner, repo, invitation_id});
octokit.repos.deletePagesSite({owner, repo});
octokit.repos.deletePullRequestReviewProtection({owner, repo, branch});
octokit.repos.deleteRelease({owner, repo, release_id});
octokit.repos.deleteReleaseAsset({owner, repo, asset_id});
octokit.repos.deleteWebhook({owner, repo, hook_id});
octokit.repos.downloadTarballArchive({owner, repo, ref});
octokit.repos.downloadZipballArchive({owner, repo, ref});
octokit.repos.get({owner, repo});
octokit.repos.getAccessRestrictions({owner, repo, branch});
octokit.repos.getAdminBranchProtection({owner, repo, branch});
octokit.repos.getAllEnvironments({owner, repo, per_page, page});
octokit.repos.getAllStatusCheckContexts({owner, repo, branch});
octokit.repos.getAllTopics({owner, repo, page, per_page});
octokit.repos.getAppsWithAccessToProtectedBranch({owner, repo, branch});
octokit.repos.getBranch({owner, repo, branch});
octokit.repos.getBranchProtection({owner, repo, branch});
octokit.repos.getCodeFrequencyStats({owner, repo});
octokit.repos.getCollaboratorPermissionLevel({owner, repo, username});
octokit.repos.getCombinedStatusForRef({owner, repo, ref, per_page, page});
octokit.repos.getCommit({owner, repo, page, per_page, ref});
octokit.repos.getCommitActivityStats({owner, repo});
octokit.repos.getCommitComment({owner, repo, comment_id});
octokit.repos.getCommitSignatureProtection({owner, repo, branch});
octokit.repos.getContent({owner, repo, path, ref});
octokit.repos.getContributorsStats({owner, repo});
octokit.repos.getDeployKey({owner, repo, key_id});
octokit.repos.getDeployment({owner, repo, deployment_id});
octokit.repos.getDeploymentBranchPolicy({owner, repo, environment_name, branch_policy_id});
octokit.repos.getDeploymentStatus({owner, repo, deployment_id, status_id});
octokit.repos.getEnvironment({owner, repo, environment_name});
octokit.repos.getLatestPagesBuild({owner, repo});
octokit.repos.getLatestRelease({owner, repo});
octokit.repos.getPages({owner, repo});
octokit.repos.getPagesBuild({owner, repo, build_id});
octokit.repos.getParticipationStats({owner, repo});
octokit.repos.getPullRequestReviewProtection({owner, repo, branch});
octokit.repos.getPunchCardStats({owner, repo});
octokit.repos.getReadme({owner, repo, ref});
octokit.repos.getReadmeInDirectory({owner, repo, dir, ref});
octokit.repos.getRelease({owner, repo, release_id});
octokit.repos.getReleaseAsset({owner, repo, asset_id});
octokit.repos.getReleaseByTag({owner, repo, tag});
octokit.repos.getStatusChecksProtection({owner, repo, branch});
octokit.repos.getTeamsWithAccessToProtectedBranch({owner, repo, branch});
octokit.repos.getUsersWithAccessToProtectedBranch({owner, repo, branch});
octokit.repos.getWebhook({owner, repo, hook_id});
octokit.repos.getWebhookConfigForRepo({owner, repo, hook_id});
octokit.repos.getWebhookDelivery({owner, repo, hook_id, delivery_id});
octokit.repos.listBranches({owner, repo, protected, per_page, page});
octokit.repos.listBranchesForHeadCommit({owner, repo, commit_sha});
octokit.repos.listCollaborators({owner, repo, affiliation, permission, per_page, page});
octokit.repos.listCommentsForCommit({owner, repo, commit_sha, per_page, page});
octokit.repos.listCommitCommentsForRepo({owner, repo, per_page, page});
octokit.repos.listCommitStatusesForRef({owner, repo, ref, per_page, page});
octokit.repos.listCommits({owner, repo, sha, path, author, since, until, per_page, page});
octokit.repos.listContributors({owner, repo, anon, per_page, page});
octokit.repos.listDeployKeys({owner, repo, per_page, page});
octokit.repos.listDeploymentBranchPolicies({owner, repo, environment_name, per_page, page});
octokit.repos.listDeploymentStatuses({owner, repo, deployment_id, per_page, page});
octokit.repos.listDeployments({owner, repo, sha, ref, task, environment, per_page, page});
octokit.repos.listForAuthenticatedUser({visibility, affiliation, type, sort, direction, per_page, page, since, before});
octokit.repos.listForOrg({org, type, sort, direction, per_page, page});
octokit.repos.listForUser({username, type, sort, direction, per_page, page});
octokit.repos.listForks({owner, repo, sort, per_page, page});
octokit.repos.listInvitations({owner, repo, per_page, page});
octokit.repos.listInvitationsForAuthenticatedUser({per_page, page});
octokit.repos.listLanguages({owner, repo});
octokit.repos.listPagesBuilds({owner, repo, per_page, page});
octokit.repos.listPublic({since, visibility});
octokit.repos.listPullRequestsAssociatedWithCommit({owner, repo, commit_sha, per_page, page});
octokit.repos.listReleaseAssets({owner, repo, release_id, per_page, page});
octokit.repos.listReleases({owner, repo, per_page, page});
octokit.repos.listTags({owner, repo, per_page, page});
octokit.repos.listTeams({owner, repo, per_page, page});
octokit.repos.listWebhookDeliveries({owner, repo, hook_id, per_page, cursor});
octokit.repos.listWebhooks({owner, repo, per_page, page});
octokit.repos.merge({owner, repo, base, head, commit_message});
octokit.repos.pingWebhook({owner, repo, hook_id});
octokit.repos.redeliverWebhookDelivery({owner, repo, hook_id, delivery_id});
octokit.repos.removeAppAccessRestrictions({owner, repo, branch, apps});
octokit.repos.removeCollaborator({owner, repo, username});
octokit.repos.removeStatusCheckContexts({owner, repo, branch, contexts});
octokit.repos.removeStatusCheckProtection({owner, repo, branch});
octokit.repos.removeTeamAccessRestrictions({owner, repo, branch, teams});
octokit.repos.removeUserAccessRestrictions({owner, repo, branch, users});
octokit.repos.renameBranch({owner, repo, branch, new_name});
octokit.repos.replaceAllTopics({owner, repo, names});
octokit.repos.requestPagesBuild({owner, repo});
octokit.repos.setAdminBranchProtection({owner, repo, branch});
octokit.repos.setAppAccessRestrictions({owner, repo, branch, apps});
octokit.repos.setStatusCheckContexts({owner, repo, branch, contexts});
octokit.repos.setTeamAccessRestrictions({owner, repo, branch, teams});
octokit.repos.setUserAccessRestrictions({owner, repo, branch, users});
octokit.repos.testPushWebhook({owner, repo, hook_id});
octokit.repos.transfer({owner, repo, new_owner, team_ids});
octokit.repos.update({owner, repo, name, description, homepage, private, visibility, security_and_analysis, has_issues, has_projects, has_wiki, is_template, default_branch, allow_squash_merge, allow_merge_commit, allow_rebase_merge, delete_branch_on_merge, allow_update_branch, use_squash_pr_title_as_default, squash_merge_commit_title, squash_merge_commit_message, merge_commit_title, merge_commit_message, archived, allow_forking});
octokit.repos.updateBranchProtection({owner, repo, branch, required_status_checks, enforce_admins, required_pull_request_reviews, restrictions, required_linear_history, allow_force_pushes, allow_deletions, block_creations, required_conversation_resolution, contexts});
octokit.repos.updateCommitComment({owner, repo, comment_id, body});
octokit.repos.updateDeploymentBranchPolicy({owner, repo, environment_name, branch_policy_id, name});
octokit.repos.updateInformationAboutPagesSite({owner, repo, cname, https_enforced, public, build_type, source});
octokit.repos.updateInvitation({owner, repo, invitation_id, permissions});
octokit.repos.updatePullRequestReviewProtection({owner, repo, branch, dismissal_restrictions, dismiss_stale_reviews, require_code_owner_reviews, required_approving_review_count});
octokit.repos.updateRelease({owner, repo, release_id, tag_name, target_commitish, name, body, draft, prerelease});
octokit.repos.updateReleaseAsset({owner, repo, asset_id, name, label, state});
octokit.repos.updateStatusCheckProtection({owner, repo, branch, strict, contexts});
octokit.repos.updateWebhook({owner, repo, hook_id, config, events, add_events, remove_events, active});
octokit.repos.updateWebhookConfigForRepo({owner, repo, hook_id, url, content_type, secret, insecure_ssl});
octokit.repos.uploadReleaseAsset({owner, repo, release_id, name, label, data, origin});
octokit.search.code({q, sort, order, per_page, page});
octokit.search.commits({q, sort, order, per_page, page});
octokit.search.issuesAndPullRequests({q, sort, order, per_page, page});
octokit.search.labels({repository_id, q, sort, order, per_page, page});
octokit.search.repos({q, sort, order, per_page, page});
octokit.search.topics({q, per_page, page});
octokit.search.users({q, sort, order, per_page, page});
octokit.secretScanning.getAlert({owner, repo, alert_number});
octokit.secretScanning.listAlertsForRepo({owner, repo, state, secret_type, resolution, page, per_page});
octokit.secretScanning.updateAlert({owner, repo, alert_number, state, resolution});
octokit.teams.addMemberLegacy({team_id, username});
octokit.teams.addOrUpdateMembershipForUserInOrg({org, team_slug, username, role});
octokit.teams.addOrUpdateMembershipForUserLegacy({team_id, username, role});
octokit.teams.addOrUpdateProjectPermissionsInOrg({org, team_slug, project_id, permission});
octokit.teams.addOrUpdateProjectPermissionsLegacy({team_id, project_id, permission});
octokit.teams.addOrUpdateRepoPermissionsInOrg({org, team_slug, owner, repo, permission});
octokit.teams.addOrUpdateRepoPermissionsLegacy({team_id, owner, repo, permission});
octokit.teams.checkPermissionsForProjectInOrg({org, team_slug, project_id});
octokit.teams.checkPermissionsForProjectLegacy({team_id, project_id});
octokit.teams.checkPermissionsForRepoInOrg({org, team_slug, owner, repo});
octokit.teams.checkPermissionsForRepoLegacy({team_id, owner, repo});
octokit.teams.create({org, name, description, maintainers, repo_names, privacy, permission, parent_team_id, ldap_dn});
octokit.teams.createDiscussionCommentInOrg({org, team_slug, discussion_number, body});
octokit.teams.createDiscussionCommentLegacy({team_id, discussion_number, body});
octokit.teams.createDiscussionInOrg({org, team_slug, title, body, private});
octokit.teams.createDiscussionLegacy({team_id, title, body, private});
octokit.teams.deleteDiscussionCommentInOrg({org, team_slug, discussion_number, comment_number});
octokit.teams.deleteDiscussionCommentLegacy({team_id, discussion_number, comment_number});
octokit.teams.deleteDiscussionInOrg({org, team_slug, discussion_number});
octokit.teams.deleteDiscussionLegacy({team_id, discussion_number});
octokit.teams.deleteInOrg({org, team_slug});
octokit.teams.deleteLegacy({team_id});
octokit.teams.getByName({org, team_slug});
octokit.teams.getDiscussionCommentInOrg({org, team_slug, discussion_number, comment_number});
octokit.teams.getDiscussionCommentLegacy({team_id, discussion_number, comment_number});
octokit.teams.getDiscussionInOrg({org, team_slug, discussion_number});
octokit.teams.getDiscussionLegacy({team_id, discussion_number});
octokit.teams.getLegacy({team_id});
octokit.teams.getMemberLegacy({team_id, username});
octokit.teams.getMembershipForUserInOrg({org, team_slug, username});
octokit.teams.getMembershipForUserLegacy({team_id, username});
octokit.teams.list({org, per_page, page});
octokit.teams.listChildInOrg({org, team_slug, per_page, page});
octokit.teams.listChildLegacy({team_id, per_page, page});
octokit.teams.listDiscussionCommentsInOrg({org, team_slug, discussion_number, direction, per_page, page});
octokit.teams.listDiscussionCommentsLegacy({team_id, discussion_number, direction, per_page, page});
octokit.teams.listDiscussionsInOrg({org, team_slug, direction, per_page, page, pinned});
octokit.teams.listDiscussionsLegacy({team_id, direction, per_page, page});
octokit.teams.listForAuthenticatedUser({per_page, page});
octokit.teams.listMembersInOrg({org, team_slug, role, per_page, page});
octokit.teams.listMembersLegacy({team_id, role, per_page, page});
octokit.teams.listProjectsInOrg({org, team_slug, per_page, page});
octokit.teams.listProjectsLegacy({team_id, per_page, page});
octokit.teams.listReposInOrg({org, team_slug, per_page, page});
octokit.teams.listReposLegacy({team_id, per_page, page});
octokit.teams.removeMemberLegacy({team_id, username});
octokit.teams.removeMembershipForUserInOrg({org, team_slug, username});
octokit.teams.removeMembershipForUserLegacy({team_id, username});
octokit.teams.removeProjectInOrg({org, team_slug, project_id});
octokit.teams.removeProjectLegacy({team_id, project_id});
octokit.teams.removeRepoInOrg({org, team_slug, owner, repo});
octokit.teams.removeRepoLegacy({team_id, owner, repo});
octokit.teams.updateDiscussionCommentInOrg({org, team_slug, discussion_number, comment_number, body});
octokit.teams.updateDiscussionCommentLegacy({team_id, discussion_number, comment_number, body});
octokit.teams.updateDiscussionInOrg({org, team_slug, discussion_number, title, body});
octokit.teams.updateDiscussionLegacy({team_id, discussion_number, title, body});
octokit.teams.updateInOrg({org, team_slug, name, description, privacy, permission, parent_team_id});
octokit.teams.updateLegacy({team_id, name, description, privacy, permission, parent_team_id});
octokit.users.addEmailForAuthenticated({emails});
octokit.users.addEmailForAuthenticatedUser({emails});
octokit.users.checkFollowingForUser({username, target_user});
octokit.users.checkPersonIsFollowedByAuthenticated({username});
octokit.users.createGpgKeyForAuthenticated({armored_public_key});
octokit.users.createGpgKeyForAuthenticatedUser({armored_public_key});
octokit.users.createPublicSshKeyForAuthenticated({title, key});
octokit.users.createPublicSshKeyForAuthenticatedUser({title, key});
octokit.users.deleteEmailForAuthenticated({emails});
octokit.users.deleteEmailForAuthenticatedUser({emails});
octokit.users.deleteGpgKeyForAuthenticated({gpg_key_id});
octokit.users.deleteGpgKeyForAuthenticatedUser({gpg_key_id});
octokit.users.deletePublicSshKeyForAuthenticated({key_id});
octokit.users.deletePublicSshKeyForAuthenticatedUser({key_id});
octokit.users.follow({username});
octokit.users.getAuthenticated();
octokit.users.getByUsername({username});
octokit.users.getContextForUser({username, subject_type, subject_id});
octokit.users.getGpgKeyForAuthenticated({gpg_key_id});
octokit.users.getGpgKeyForAuthenticatedUser({gpg_key_id});
octokit.users.getPublicSshKeyForAuthenticated({key_id});
octokit.users.getPublicSshKeyForAuthenticatedUser({key_id});
octokit.users.list({since, per_page});
octokit.users.listEmailsForAuthenticated({per_page, page});
octokit.users.listEmailsForAuthenticatedUser({per_page, page});
octokit.users.listFollowedByAuthenticated({per_page, page});
octokit.users.listFollowedByAuthenticatedUser({per_page, page});
octokit.users.listFollowersForAuthenticatedUser({per_page, page});
octokit.users.listFollowersForUser({username, per_page, page});
octokit.users.listFollowingForUser({username, per_page, page});
octokit.users.listGpgKeysForAuthenticated({per_page, page});
octokit.users.listGpgKeysForAuthenticatedUser({per_page, page});
octokit.users.listGpgKeysForUser({username, per_page, page});
octokit.users.listPublicEmailsForAuthenticated({per_page, page});
octokit.users.listPublicEmailsForAuthenticatedUser({per_page, page});
octokit.users.listPublicKeysForUser({username, per_page, page});
octokit.users.listPublicSshKeysForAuthenticated({per_page, page});
octokit.users.listPublicSshKeysForAuthenticatedUser({per_page, page});
octokit.users.unfollow({username});
octokit.users.updateAuthenticated({name, email, blog, twitter_username, company, location, hireable, bio});
```
