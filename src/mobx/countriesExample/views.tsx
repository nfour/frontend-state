import { computed, makeAutoObservable, makeObservable, observable } from 'mobx';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { css } from 'styled-components';
import { useStore } from './models';
import { XRoute, XRouter } from '../XRouter/XRouter';

const RootRoute = XRoute(
  'root',
  '/:language?',
  {} as { language?: 'en' | 'da' },
);

const AustraliaRoute = XRoute(
  'australia',
  '/:language(en)/:nation(australia)/:state(qld|nsw|sa|wa|vic|tas)',
  {} as {
    language: 'en';
    nation: 'australia';
    state: 'qld' | 'nsw' | 'sa' | 'wa' | 'vic' | 'tas';
  },
);

const danishLanguages = ['en', 'da'] as const;
const danishStates = ['dk01', 'dk02', 'dk03', 'dk04', 'dk05'] as const;

const DenmarkRoute = XRoute(
  'denmark',
  `/:language(${danishLanguages.join(
    '|',
  )})/:nation(denmark)/:state(${danishStates.join('|')})`,
  {} as {
    nation: 'denmark';
    language: typeof danishLanguages[number];
    state: typeof danishStates[number];
  },
);

abstract class Nation {
  name: string;
  code: string;

  constructor(
    protected root: RootStore,
    { name, code }: { name: string; code: string },
  ) {
    this.root = root;
    this.name = name;
    this.code = code;

    makeObservable(this, {
      code: observable,
      name: observable,
    });
  }

  get isActive(): boolean {
    throw 'Not implemented';
  }
}

class Australia extends Nation {
  constructor(root: any, opts: any) {
    super(root, opts);

    makeObservable(this, {
      isActive: computed,
    });
  }

  get isActive() {
    return this.root.router.routes.australia.isActive;
  }
}

class Denmark extends Nation {
  constructor(...args: any) {
    super(...(args as [any, any]));

    makeObservable(this, {
      isActive: computed,
    });
  }

  get isActive() {
    return this.root.router.routes.denmark.isActive;
  }
}

class Nations {
  nations: { Australia: Australia; Denmark: Denmark };

  get nationsList() {
    return Object.values(this.nations);
  }

  constructor(protected root: RootStore) {
    this.root = root;

    this.nations = {
      Australia: new Australia(this.root, { name: 'Australia', code: 'au' }),
      Denmark: new Denmark(this.root, { name: 'Denmark', code: 'dk' }),
    };
  }
}

export class RootStore {
  router = new XRouter([
    AustraliaRoute,
    DenmarkRoute,
    RootRoute,
    // ...
  ]);

  nations = new Nations(this);
}

export const IndexPage = () => {
  return (
    <div
      css={css`
        @import url('http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,700italic,300,400,700');

        background: #444;
        color: #ddd;
        font-family: 'Open Sans';
      `}
    >
      <NavBar />
      <NationsList />
    </div>
  );
};

const NationsList = observer(() => {
  const { nations } = useStore();

  return (
    <ul
      css={css`
        padding: 4em;

        li {
          padding: 1em;
          font-size: 2em;
        }
      `}
    >
      {nations.nationsList.map((nation) => (
        <li>
          {nation.name} - {nation.code} - {nation.isActive ? 'ACTIVE' : ''}
        </li>
      ))}
    </ul>
  );
});

const NavBar = observer(() => {
  const { router } = useStore();

  return (
    <>
      <div
        css={css`
          height: 50px;
        `}
      ></div>
      <header
        css={css`
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 50px;
          background: #0008;
          color: #fff;
          font-weight: bold;
          display: flex;
          justify-content: space-evenly;
          align-items: stretch;

          & > * {
            display: flex;
            align-items: center;
          }
        `}
      >
        <div>
          <h4>{router.route?.key} page</h4>
        </div>
        <a
          onClick={() =>
            router.routes.root.push({
              language: router.route?.params?.language,
            })
          }
        >
          Index
        </a>
        <a
          onClick={() =>
            router.routes.australia.push({
              language: 'en',
              nation: 'australia',
              state: 'qld',
            })
          }
        >
          Australia
        </a>
        <a
          onClick={() =>
            router.routes.denmark.push({
              language: router.route?.params?.language || 'en',
              nation: 'denmark',
              state: 'dk02',
            })
          }
        >
          Denmark
        </a>
        <div>
          <select
            value={router.route?.params?.language || 'en'}
            onChange={(e) => {
              if (!router.route) return;

              router.route.push({
                ...router.route.params,
                language: e.target.value as any,
              });
            }}
          >
            <option>en</option>
            <option>da</option>
          </select>
        </div>
      </header>
    </>
  );
});
