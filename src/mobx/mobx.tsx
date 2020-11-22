import { observer } from 'mobx-react-lite';
import { Instance } from 'mobx-state-tree';
import * as React from 'react';
import { TinyMstRouter } from 'tiny-mst-router';
import { compile, match, MatchResult } from 'path-to-regexp';

class RootStore {}

class RouterModel {
  router: Instance<typeof TinyMstRouter>;

  static routes = {
    greenPage: '/green/:arg1?/:arg2?',
    redPage: '/red/:arg1?/:arg2?',
  };

  constructor() {
    this.router = TinyMstRouter.create();
  }

  get routes() {
    const { pathname } = this.router.location;

    if (!pathname) return;

    return [...Object.entries(routes)].reduce((a, [key, path]) => {
      const result = match(path, { decode: decodeURI, encode: encodeURI })(
        pathname,
      );

      if (!result) return a;

      return {
        ...a,
        [key]: { ...result, key },
      };
    }, {} as RouteParams);
  }
}

export const Root = observer(() => {
  return <></>;
});
