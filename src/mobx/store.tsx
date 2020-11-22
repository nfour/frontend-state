import * as React from 'react';
import { RootStore } from './demo';

export function useStore() {
  return React.useContext(StoreContext) || throwMissingStoreError();
}

export const StoreContext = React.createContext<RootStore | undefined>(
  undefined,
);

const throwMissingStoreError = () => {
  throw new Error('MobX Store provider context is missing');
};

export const Root: React.FC = ({ children }) => {
  const root = React.useMemo(() => new RootStore(), []);

  return <StoreContext.Provider value={root}>{children}</StoreContext.Provider>;
};
