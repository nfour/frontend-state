import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { Instance, types as t } from 'mobx-state-tree';
import { RootStore } from './generated';

type IRoot = Instance<typeof RootModel>;
const RootModel = t
  .model('Root', {
    gql: RootStore,
  })
  .views((self) => ({}))
  .actions((self) => ({}));

const createStore = () => {
  return RootModel.create();
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

  // TODO: need to feed this some data and define root types first
  return <DemoPageMobx />;
});

export const DemoPageMobx: React.FC<{}> = observer(() => {
  return (
    <>
      <ul>{}</ul>
    </>
  );
});
