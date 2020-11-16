import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { Instance, types as t } from 'mobx-state-tree';
import {
  addressModelPrimitives,
  creditCardModelPrimitives,
  customerModelPrimitives,
  OrderModelType,
  OrderPageModelType,
  RootStore as GqlRootModel,
} from './generated';
import { createHttpClient } from 'mst-gql';

type IRoot = Instance<typeof RootModel>;
const RootModel = t
  .model('Root', {
    gql: t.optional(GqlRootModel, {}),
  })
  .views((self) => ({}))
  .actions((self) => ({}));

const createStore = () => {
  return RootModel.create(
    {},
    {
      gqlHttpClient: createHttpClient('https://graphql.fauna.com/graphql', {
        headers: {
          'Content-Type': 'application/json',
          'authorization':
            'Basic Zm5BRDRWdDNWdEFDQ1RCNC1SVzBwM05tUUF5bF8wWEVGSmNra1Z1RDpmcm9udGVuZC1zdGF0ZTpzZXJ2ZXI=',
        },
      }),
    },
  );
};

const MstContext = React.createContext<IRoot | undefined>(undefined);

export const useStore = () => {
  return (
    React.useContext(MstContext) ||
    (() => {
      throw new Error('MST Store provider context is missing');
    })()
  );
};

export const MstGqlRoot = observer(() => {
  const [store] = React.useState(() => createStore());

  return (
    <MstContext.Provider value={store}>
      <MstGqlDemoController />
    </MstContext.Provider>
  );
});
export const MstGqlDemoController = observer(() => {
  const { gql } = useStore();

  React.useEffect(() => {
    gql.queryAllOrders({}, (q) =>
      q.data((q) =>
        q._id._ts.creationDate.status.shipDate
          .creditCard(creditCardModelPrimitives)
          .customer(customerModelPrimitives)
          .shipAddress(addressModelPrimitives),
      ),
    );
  }, []);

  const { orderPages } = gql;
  const firstOrder = [...orderPages.values()][0];

  console.log({ orderPages });

  return <DemoPageMobx {...{ orderPage: firstOrder }} />;
});

export const DemoPageMobx: React.FC<{
  orderPage?: OrderPageModelType;
}> = observer(({ orderPage }) => {
  const data: OrderModelType[] | undefined = orderPage?.data as any;

  return (
    <>
      <h2>Orders</h2>
      <ul>
        {data?.map((order) => (
          <li key={order._id}>
            {order.__typename}
            Credit card: {order.creditCard?.number}
            <br />
            {order._id}
            <br />
            Status: {order.status}
            <div>Customer {order.customer?._id}</div>
          </li>
        ))}
        <br />
        <br />
        <br />
        <br />
      </ul>
    </>
  );
});
