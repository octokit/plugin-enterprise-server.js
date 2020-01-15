import { Route, RequestParameters } from "@octokit/types";

type EndpointDecorations = {
  deprecated?: string;
  renamed?: [string, string];
};

export type EndpointsDefaultsAndDecorations = {
  [scope: string]: {
    [methodName: string]: [Route, RequestParameters?, EndpointDecorations?];
  };
};
