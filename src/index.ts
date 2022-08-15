// THIS FILE IS GENERATED. PLEASE OPEN AN ISSUE IF YOU FIND A PROBLEM

import { Octokit } from "@octokit/core";

import { VERSION } from "./version";
import { endpointsToMethods } from "./endpoints-to-methods";

import ENDPOINTS_32 from "./generated/ghe-32-endpoints";
import ADMIN_ENDPOINTS_32 from "./generated/ghe-32-admin-endpoints";

import ENDPOINTS_33 from "./generated/ghe-33-endpoints";
import ADMIN_ENDPOINTS_33 from "./generated/ghe-33-admin-endpoints";

import ENDPOINTS_34 from "./generated/ghe-34-endpoints";
import ADMIN_ENDPOINTS_34 from "./generated/ghe-34-admin-endpoints";

import ENDPOINTS_35 from "./generated/ghe-35-endpoints";
import ADMIN_ENDPOINTS_35 from "./generated/ghe-35-admin-endpoints";

import ENDPOINTS_36 from "./generated/ghe-36-endpoints";
import ADMIN_ENDPOINTS_36 from "./generated/ghe-36-admin-endpoints";

export function enterpriseServer32Admin(octokit: Octokit) {
  return endpointsToMethods(octokit, ADMIN_ENDPOINTS_32);
}
enterpriseServer32Admin.VERSION = VERSION;

export function enterpriseServer32(octokit: Octokit) {
  return endpointsToMethods(octokit, ENDPOINTS_32);
}
enterpriseServer32.VERSION = VERSION;

export function enterpriseServer33Admin(octokit: Octokit) {
  return endpointsToMethods(octokit, ADMIN_ENDPOINTS_33);
}
enterpriseServer33Admin.VERSION = VERSION;

export function enterpriseServer33(octokit: Octokit) {
  return endpointsToMethods(octokit, ENDPOINTS_33);
}
enterpriseServer33.VERSION = VERSION;

export function enterpriseServer34Admin(octokit: Octokit) {
  return endpointsToMethods(octokit, ADMIN_ENDPOINTS_34);
}
enterpriseServer34Admin.VERSION = VERSION;

export function enterpriseServer34(octokit: Octokit) {
  return endpointsToMethods(octokit, ENDPOINTS_34);
}
enterpriseServer34.VERSION = VERSION;

export function enterpriseServer35Admin(octokit: Octokit) {
  return endpointsToMethods(octokit, ADMIN_ENDPOINTS_35);
}
enterpriseServer35Admin.VERSION = VERSION;

export function enterpriseServer35(octokit: Octokit) {
  return endpointsToMethods(octokit, ENDPOINTS_35);
}
enterpriseServer35.VERSION = VERSION;

export function enterpriseServer36Admin(octokit: Octokit) {
  return endpointsToMethods(octokit, ADMIN_ENDPOINTS_36);
}
enterpriseServer36Admin.VERSION = VERSION;

export function enterpriseServer36(octokit: Octokit) {
  return endpointsToMethods(octokit, ENDPOINTS_36);
}
enterpriseServer36.VERSION = VERSION;
