import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { XRoute, XRouter } from './XRouter';

export default {
  title: 'XRouter',
};

/** Example with no XRoute constructor */
const aRoute = {
  key: 'a',
  resource: '/a/:b(b|e)/c/:d?',
  params: {} as { b: 'b' | 'e'; d?: string },
} as const;

/** With constructor */
const a2Route = XRoute(
  'a2',
  '/a/b/:c(c)/:d(e|f)',
  {} as { c: 'c'; d: 'e' | 'f' },
);

const demoRouteList = [
  aRoute,
  a2Route,
  /** Inline... */
  XRoute('b', '/b/:c/:d', {} as { c: string; d: string }),
  XRoute('default', '/:x(.*)?', {} as { x?: string }),
];

export const Demo1 = () => {
  const DemoComponent = observer(() => {
    /** Create the router for the demo with the route list */
    const [router] = React.useState(() => new XRouter(demoRouteList));
    const activeProps = {
      style: { color: 'green', outline: '2px solid green' },
    };

    return (
      <>
        <dl
          style={{
            fontFamily: 'consolas, monospace',
          }}
        >
          <dl>
            <dt>INPUT:</dt>
            <dd>
              <dt>Links:</dt>
              <dd>
                <dl>
                  <dt {...(router.route?.key === 'a' ? activeProps : {})}>
                    Route A
                  </dt>
                  <dd>
                    <button
                      onClick={() => router.routes.a.push({ b: 'e', d: 'zz' })}
                    >
                      /a/e/zz
                    </button>
                    <button onClick={() => router.routes.a.push({ b: 'b' })}>
                      /a/b
                    </button>
                  </dd>
                  <dt {...(router.route?.key === 'b' ? activeProps : {})}>
                    Route B
                  </dt>
                  <dd>
                    <button
                      onClick={() => router.routes.b.push({ c: 'x', d: 'x' })}
                    >
                      /b/x/x
                    </button>
                  </dd>
                  <dt {...(router.route?.key === 'default' ? activeProps : {})}>
                    Route default
                  </dt>
                  <dd>
                    <button
                      onClick={() =>
                        router.routes.default.push({ x: 'asdadadasdasdasd' })
                      }
                    >
                      /asdadadasdasdasd
                    </button>
                    <button onClick={() => router.routes.default.push({})}>
                      /
                    </button>
                  </dd>
                </dl>
              </dd>
              <dt>URL Bar:</dt>
              <dd>
                <input
                  value={router.route?.path}
                  onChange={(e) => router.replace(e.target.value)}
                />
              </dd>
            </dd>
          </dl>
          <dt>router.location</dt>
          <dd>
            <pre>{JSON.stringify(router.location)}</pre>
          </dd>
          <dt>
            router.route (<b>ACTIVE ROUTE: {router.route?.key}</b>)
          </dt>
          <dd>
            <pre>{JSON.stringify(router.route, null, 2)}</pre>
          </dd>

          <dl>
            <dt>router.routes</dt>
            <dd>
              <pre>{JSON.stringify(router.routes, null, 2)}</pre>
            </dd>
          </dl>
        </dl>
      </>
    );
  });

  return <DemoComponent />;
};

export const Shared_Language_Params = () => {
  const validLanguages = ['en', 'da', 'de'] as const;
  const languageParam = `:language(${validLanguages.join('|')})`;

  type ILanguage = typeof validLanguages[number];

  const FooRoute = XRoute(
    'foo',
    `/${languageParam}/foo`,
    {} as { language: ILanguage },
  );
  const BazRoute = XRoute(
    'baz',
    `/${languageParam}/baz`,
    {} as { language: ILanguage },
  );

  const DefaultRoute = XRoute(
    'default',
    '/:language?',
    {} as { language?: ILanguage },
  );
  const DemoComponent = observer(() => {
    /** Create the router for the demo with the route list */
    const [router] = React.useState(
      () => new XRouter([FooRoute, BazRoute, DefaultRoute]),
    );
    const activeProps = {
      style: { color: 'green', outline: '2px solid green' },
    };

    return (
      <>
        <dl
          style={{
            fontFamily: 'consolas, monospace',
          }}
        >
          <dl>
            <dt>INPUT:</dt>
            <dd>
              <dt>URL Bar:</dt>
              <dd>
                <input
                  value={router.route?.path}
                  onChange={(e) => router.replace(e.target.value)}
                />
              </dd>
              <dt>Links:</dt>
              <dd>
                <dl>
                  <dt {...activeProps}>(Active route: {router.route?.key})</dt>
                  <dd>
                    {validLanguages.map((language) => (
                      <>
                        <div>
                          <button
                            onClick={() => router.route?.push({ language })}
                          >
                            {language}
                          </button>
                        </div>
                      </>
                    ))}
                  </dd>
                  <dt {...(router.route?.key === 'foo' ? activeProps : {})}>
                    FOO
                  </dt>
                  <dd>
                    <button
                      onClick={() => router.routes.foo.push({ language: 'en' })}
                    >
                      /en/foo
                    </button>
                    <br />
                    <button
                      onClick={() =>
                        router.routes.foo.push({
                          // Re-use the current route's language param or default to en
                          language: router.route?.params?.language || 'en',
                        })
                      }
                    >
                      /:language/foo
                    </button>
                  </dd>
                  <dt {...(router.route?.key === 'baz' ? activeProps : {})}>
                    BAZ
                  </dt>
                  <dd>
                    <button
                      onClick={() => router.routes.baz.push({ language: 'en' })}
                    >
                      /en/baz
                    </button>
                    <br />
                    <button
                      onClick={() =>
                        router.routes.baz.push({
                          language: router.route?.params?.language || 'en',
                        })
                      }
                    >
                      /:language/baz
                    </button>
                  </dd>
                  <dt {...(router.route?.key === 'default' ? activeProps : {})}>
                    DEFAULT
                  </dt>
                  <dd>
                    <button
                      onClick={() =>
                        router.routes.default.push({ ...router.route?.params })
                      }
                    >
                      /:language/
                    </button>
                    <br />
                    <button
                      onClick={() =>
                        router.routes.default.push({ language: 'da' })
                      }
                    >
                      /da/
                    </button>
                    <br />
                    <button
                      onClick={() =>
                        router.routes.default.push({ language: undefined })
                      }
                    >
                      /
                    </button>
                  </dd>
                </dl>
              </dd>
            </dd>
          </dl>
          <dt>router.location</dt>
          <dd>
            <pre>{JSON.stringify(router.location)}</pre>
          </dd>
          <dt>router.route</dt>
          <dd>
            <pre>{JSON.stringify(router.route, null, 2)}</pre>
          </dd>

          <dl>
            <dt>router.routes</dt>
            <dd>
              <pre>{JSON.stringify(router.routes, null, 2)}</pre>
            </dd>
          </dl>
        </dl>
      </>
    );
  });

  return <DemoComponent />;
};
