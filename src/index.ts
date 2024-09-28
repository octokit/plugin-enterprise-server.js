// THIS FILE IS GENERATED. PLEASE OPEN AN ISSUE IF YOU FIND A PROBLEM

import { Octokit } from "@octokit/core";

import { VERSION } from "./version.js";
import { endpointsToMethods } from "./endpoints-to-methods.js";

import ENDPOINTS_311 from "./generated/ghe-311-endpoints.js";
import ADMIN_ENDPOINTS_311 from "./generated/ghe-311-admin-endpoints.js";

import ENDPOINTS_312 from "./generated/ghe-312-endpoints.js";
import ADMIN_ENDPOINTS_312 from "./generated/ghe-312-admin-endpoints.js";

export function enterpriseServer311Admin(octokit: Octokit) {
  return endpointsToMethods(octokit, ADMIN_ENDPOINTS_311);
}
enterpriseServer311Admin.VERSION = VERSION;

export function enterpriseServer311(octokit: Octokit) {
  return endpointsToMethods(octokit, ENDPOINTS_311);
}
enterpriseServer311.VERSION = VERSION;

export function enterpriseServer312Admin(octokit: Octokit) {
  return endpointsToMethods(octokit, ADMIN_ENDPOINTS_312);
}
enterpriseServer312Admin.VERSION = VERSION;

export function enterpriseServer312(octokit: Octokit) {
  return endpointsToMethods(octokit, ENDPOINTS_312);
}
enterpriseServer312.VERSION = VERSION;
