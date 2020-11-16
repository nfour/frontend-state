import { graphql } from '@gqless/react';
import * as React from 'react';
import { query } from './generated';

export const GqlessRoot = graphql(() => {
  return (
    <React.Suspense fallback={<>loading...</>}>
      <GqlessController />
    </React.Suspense>
  );
});

export const GqlessController = graphql(() => {
  return (
    <>
      <h2>Orders</h2>
      <ul>
        {query.allOrders().data.map((order) => (
          <li key={order?._id}>
            {order?.__typename}
            Credit card: {order?.creditCard.number}
            <br />
            {order?._id}
            <br />
            Status: {order?.status}
            <div>Customer {order?.customer._id}</div>
          </li>
        ))}
        <br />
        <br />
        <br />
        <br />
        {query.allProducts().data.map((product) => {
          return (
            <div>
              {product?.name} - {product?.price}
            </div>
          );
        })}
      </ul>
    </>
  );
});
