import { Instance } from 'mobx-state-tree';
import { match, MatchResult } from 'path-to-regexp';
import { TinyMstRouter } from 'tiny-mst-router';
import * as t from 'io-ts';

const Route = <KEY extends string, PATH extends string, PARAMS extends {}>(
  key: KEY,
  path: PATH,
  params: PARAMS,
) => {
  return { key, path, params };
};

const Param = <KEY extends string>(key: KEY) => {};

const RoutePath = <PARAM extends ReturnType<typeof Param>>(params: PARAM[]) => {
  return params;
};

const fooRoute = Route('foo', '/green/:arg1/:arg2', <{}>{});
