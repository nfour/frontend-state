import * as React from 'react';

export function createStore() {
  const root = {};
}

export function useStore() {
  return React.useContext(StoreContext) || throwMissingStoreError();
}

export type IStore = ReturnType<typeof createStore>;

const StoreContext = React.createContext<IStore | undefined>(undefined);

const throwMissingStoreError = () => {
  throw new Error('MobX Store provider context is missing');
};
