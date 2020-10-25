import { graphql } from '@gqless/react';
import * as React from 'react';
import { query } from './generated';

export const GqlessRoot = graphql(() => {
  return (
    <React.Suspense fallback={<>loading</>}>
      <GqlessController />
    </React.Suspense>
  );
});
export const GqlessController = graphql(() => {
  const orders = (
    <ul>
      {query.allOrders().data.map((order) => (
        <li key={order?._id}>
          {order?.__typename}
          <br />
          {order?._id}
          <br />
          Status: {order?.status}
          <div>Customer {order?.customer._id}</div>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <h2>Orders</h2>
      {orders}
    </>
  );
});
