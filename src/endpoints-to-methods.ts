import { Octokit } from "@octokit/core";
import {
  EndpointOptions,
  RequestParameters,
  RequestMethod,
  Route,
  Url,
} from "@octokit/types";
import { EndpointsDefaultsAndDecorations } from "./types";

type EndpointMethods = {
  [methodName: string]: typeof Octokit.prototype.request;
};

export function endpointsToMethods(
  octokit: Octokit,
  endpointsMap: EndpointsDefaultsAndDecorations
) {
  const newMethods = {} as Record<string, Record<string, Function>>;

  for (const [scope, endpoints] of Object.entries(endpointsMap)) {
    for (const [methodName, endpoint] of Object.entries(endpoints)) {
      const [route, defaults, decorations = {}] = endpoint;
      const [method, url] = route.split(/ /) as [RequestMethod, Url];
      const endpointDefaults: EndpointOptions = Object.assign(
        { method, url },
        defaults
      );

      if (!newMethods[scope]) {
        newMethods[scope] = {};
      }

      const scopeMethods = newMethods[scope] as EndpointMethods;

      if (decorations.renamed) {
        const [newScope, newMethodName] = decorations.renamed;
        scopeMethods[methodName] = deprecate(
          octokit,
          `octokit.${scope}.${methodName}() has been renamed to octokit.${newScope}.${newMethodName}()`,
          endpointDefaults
        );
        continue;
      }

      /* istanbul ignore next - there are currently no deprecated methods*/
      if (decorations.deprecated) {
        scopeMethods[methodName] = deprecate(
          octokit,
          decorations.deprecated,
          endpointDefaults
        );
        continue;
      }

      scopeMethods[methodName] = octokit.request.defaults(endpointDefaults);
    }
  }

  return newMethods;
}

function deprecate(
  octokit: Octokit,
  deprecation: string,
  defaults: EndpointOptions
): typeof Octokit.prototype.request {
  const requestWithDefaults = octokit.request.defaults(defaults);
  function deprecated(
    ...args: [Route, RequestParameters?] | [EndpointOptions]
  ) {
    octokit.log.warn(deprecation);
    // @ts-ignore https://github.com/microsoft/TypeScript/issues/25488
    return requestWithDefaults(...args);
  }
  return Object.assign(deprecated, requestWithDefaults);
}
