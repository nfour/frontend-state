import * as React from 'react';
import { IndexPage } from './countriesExample/modelsAndViews';
import { Root } from './countriesExample/utils';
import { MobxTodoListExampleRoot } from './todoListExample/views';

export default {
  title: 'mobx',
};

export const countriesExample = () => {
  return (
    <Root>
      <IndexPage />
    </Root>
  );
};

export const todoListExample = () => {
  return <MobxTodoListExampleRoot />;
};
