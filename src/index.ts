// THIS FILE IS GENERATED. PLEASE OPEN AN ISSUE IF YOU FIND A PROBLEM

import { Octokit } from "@octokit/core";

import { VERSION } from "./version.js";
import { endpointsToMethods } from "./endpoints-to-methods.js";

import ENDPOINTS_314 from "./generated/ghe-314-endpoints.js";
import ADMIN_ENDPOINTS_314 from "./generated/ghe-314-admin-endpoints.js";

import ENDPOINTS_315 from "./generated/ghe-315-endpoints.js";
import ADMIN_ENDPOINTS_315 from "./generated/ghe-315-admin-endpoints.js";

import ENDPOINTS_316 from "./generated/ghe-316-endpoints.js";
import ADMIN_ENDPOINTS_316 from "./generated/ghe-316-admin-endpoints.js";

import ENDPOINTS_317 from "./generated/ghe-317-endpoints.js";
import ADMIN_ENDPOINTS_317 from "./generated/ghe-317-admin-endpoints.js";

import ENDPOINTS_318 from "./generated/ghe-318-endpoints.js";
import ADMIN_ENDPOINTS_318 from "./generated/ghe-318-admin-endpoints.js";

export function enterpriseServer314Admin(octokit: Octokit) {
  return endpointsToMethods(octokit, ADMIN_ENDPOINTS_314);
}
enterpriseServer314Admin.VERSION = VERSION;

export function enterpriseServer314(octokit: Octokit) {
  return endpointsToMethods(octokit, ENDPOINTS_314);
}
enterpriseServer314.VERSION = VERSION;

export function enterpriseServer315Admin(octokit: Octokit) {
  return endpointsToMethods(octokit, ADMIN_ENDPOINTS_315);
}
enterpriseServer315Admin.VERSION = VERSION;

export function enterpriseServer315(octokit: Octokit) {
  return endpointsToMethods(octokit, ENDPOINTS_315);
}
enterpriseServer315.VERSION = VERSION;

export function enterpriseServer316Admin(octokit: Octokit) {
  return endpointsToMethods(octokit, ADMIN_ENDPOINTS_316);
}
enterpriseServer316Admin.VERSION = VERSION;

export function enterpriseServer316(octokit: Octokit) {
  return endpointsToMethods(octokit, ENDPOINTS_316);
}
enterpriseServer316.VERSION = VERSION;

export function enterpriseServer317Admin(octokit: Octokit) {
  return endpointsToMethods(octokit, ADMIN_ENDPOINTS_317);
}
enterpriseServer317Admin.VERSION = VERSION;

export function enterpriseServer317(octokit: Octokit) {
  return endpointsToMethods(octokit, ENDPOINTS_317);
}
enterpriseServer317.VERSION = VERSION;

export function enterpriseServer318Admin(octokit: Octokit) {
  return endpointsToMethods(octokit, ADMIN_ENDPOINTS_318);
}
enterpriseServer318Admin.VERSION = VERSION;

export function enterpriseServer318(octokit: Octokit) {
  return endpointsToMethods(octokit, ENDPOINTS_318);
}
enterpriseServer318.VERSION = VERSION;
