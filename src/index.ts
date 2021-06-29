// THIS FILE IS GENERATED. PLEASE OPEN AN ISSUE IF YOU FIND A PROBLEM

import { Octokit } from "@octokit/core";

import { VERSION } from "./version";
import { endpointsToMethods } from "./endpoints-to-methods";

import ENDPOINTS_220 from "./generated/ghe-220-endpoints";
import ADMIN_ENDPOINTS_220 from "./generated/ghe-220-admin-endpoints";
import { RestEndpointMethods as RestEndpointMethods_220 } from "./generated/ghe-220-method-types";

import ENDPOINTS_221 from "./generated/ghe-221-endpoints";
import ADMIN_ENDPOINTS_221 from "./generated/ghe-221-admin-endpoints";
import { RestEndpointMethods as RestEndpointMethods_221 } from "./generated/ghe-221-method-types";

import ENDPOINTS_222 from "./generated/ghe-222-endpoints";
import ADMIN_ENDPOINTS_222 from "./generated/ghe-222-admin-endpoints";
import { RestEndpointMethods as RestEndpointMethods_222 } from "./generated/ghe-222-method-types";

import ENDPOINTS_30 from "./generated/ghe-30-endpoints";
import ADMIN_ENDPOINTS_30 from "./generated/ghe-30-admin-endpoints";
import { RestEndpointMethods as RestEndpointMethods_30 } from "./generated/ghe-30-method-types";

export function enterpriseServer220Admin(octokit: Octokit): {
  enterpriseAdmin: RestEndpointMethods_220["enterpriseAdmin"];
} {
  // @ts-ignore - not worth the hassle
  return endpointsToMethods(octokit, ADMIN_ENDPOINTS_220);
}
enterpriseServer220Admin.VERSION = VERSION;

export function enterpriseServer220(octokit: Octokit): RestEndpointMethods_220 {
  // @ts-ignore - not worth the hassle
  return endpointsToMethods(octokit, ENDPOINTS_220);
}
enterpriseServer220.VERSION = VERSION;

export function enterpriseServer221Admin(octokit: Octokit): {
  enterpriseAdmin: RestEndpointMethods_221["enterpriseAdmin"];
} {
  // @ts-ignore - not worth the hassle
  return endpointsToMethods(octokit, ADMIN_ENDPOINTS_221);
}
enterpriseServer221Admin.VERSION = VERSION;

export function enterpriseServer221(octokit: Octokit): RestEndpointMethods_221 {
  // @ts-ignore - not worth the hassle
  return endpointsToMethods(octokit, ENDPOINTS_221);
}
enterpriseServer221.VERSION = VERSION;

export function enterpriseServer222Admin(octokit: Octokit): {
  enterpriseAdmin: RestEndpointMethods_222["enterpriseAdmin"];
} {
  // @ts-ignore - not worth the hassle
  return endpointsToMethods(octokit, ADMIN_ENDPOINTS_222);
}
enterpriseServer222Admin.VERSION = VERSION;

export function enterpriseServer222(octokit: Octokit): RestEndpointMethods_222 {
  // @ts-ignore - not worth the hassle
  return endpointsToMethods(octokit, ENDPOINTS_222);
}
enterpriseServer222.VERSION = VERSION;

export function enterpriseServer30Admin(octokit: Octokit): {
  enterpriseAdmin: RestEndpointMethods_30["enterpriseAdmin"];
} {
  // @ts-ignore - not worth the hassle
  return endpointsToMethods(octokit, ADMIN_ENDPOINTS_30);
}
enterpriseServer30Admin.VERSION = VERSION;

export function enterpriseServer30(octokit: Octokit): RestEndpointMethods_30 {
  // @ts-ignore - not worth the hassle
  return endpointsToMethods(octokit, ENDPOINTS_30);
}
enterpriseServer30.VERSION = VERSION;
