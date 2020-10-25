import { Client, QueryFetcher } from 'gqless';
import { schema, Query } from './generated';

const endpoint = 'https://graphql.fauna.com/graphql';

const fetchQuery: QueryFetcher = async (query, variables) => {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'authorization':
        'Basic Zm5BRDRWdDNWdEFDQ1RCNC1SVzBwM05tUUF5bF8wWEVGSmNra1Z1RDpmcm9udGVuZC1zdGF0ZTpzZXJ2ZXI=',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    mode: 'cors',
  });

  if (!response.ok) {
    throw new Error(`Network error, received status code ${response.status}`);
  }

  const json = await response.json();

  return json;
};

export const client = new Client<Query>(schema.Query, fetchQuery);

export const query = client.query;
