import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { Instance, types as t } from 'mobx-state-tree';

type IRoot = Instance<typeof RootModel>;
const RootModel = t
  .model('Root', {})
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

export const MstGqlController = observer(() => (
  <MstContext.Provider value={createStore()}></MstContext.Provider>
));

export const DemoPageMobx: React.FC<{}> = observer(() => {
  return <></>;
});
