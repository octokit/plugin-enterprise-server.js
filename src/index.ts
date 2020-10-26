// THIS FILE IS GENERATED. PLEASE OPEN AN ISSUE IF YOU FIND A PROBLEM

import type { Octokit } from "@octokit/core";

import { VERSION } from "./version";
import { endpointsToMethods } from "./endpoints-to-methods";

import ENDPOINTS_219 from "./generated/ghe-219-endpoints";
import ADMIN_ENDPOINTS_219 from "./generated/ghe-219-admin-endpoints";

import ENDPOINTS_220 from "./generated/ghe-220-endpoints";
import ADMIN_ENDPOINTS_220 from "./generated/ghe-220-admin-endpoints";

import ENDPOINTS_221 from "./generated/ghe-221-endpoints";
import ADMIN_ENDPOINTS_221 from "./generated/ghe-221-admin-endpoints";

import ENDPOINTS_222 from "./generated/ghe-222-endpoints";
import ADMIN_ENDPOINTS_222 from "./generated/ghe-222-admin-endpoints";

export function enterpriseServer219Admin(octokit: Octokit) {
  return endpointsToMethods(octokit, ADMIN_ENDPOINTS_219);
}
enterpriseServer219Admin.VERSION = VERSION;

export function enterpriseServer219(octokit: Octokit) {
  return endpointsToMethods(octokit, ENDPOINTS_219);
}
enterpriseServer219.VERSION = VERSION;

export function enterpriseServer220Admin(octokit: Octokit) {
  return endpointsToMethods(octokit, ADMIN_ENDPOINTS_220);
}
enterpriseServer220Admin.VERSION = VERSION;

export function enterpriseServer220(octokit: Octokit) {
  return endpointsToMethods(octokit, ENDPOINTS_220);
}
enterpriseServer220.VERSION = VERSION;

export function enterpriseServer221Admin(octokit: Octokit) {
  return endpointsToMethods(octokit, ADMIN_ENDPOINTS_221);
}
enterpriseServer221Admin.VERSION = VERSION;

export function enterpriseServer221(octokit: Octokit) {
  return endpointsToMethods(octokit, ENDPOINTS_221);
}
enterpriseServer221.VERSION = VERSION;

export function enterpriseServer222Admin(octokit: Octokit) {
  return endpointsToMethods(octokit, ADMIN_ENDPOINTS_222);
}
enterpriseServer222Admin.VERSION = VERSION;

export function enterpriseServer222(octokit: Octokit) {
  return endpointsToMethods(octokit, ENDPOINTS_222);
}
enterpriseServer222.VERSION = VERSION;
