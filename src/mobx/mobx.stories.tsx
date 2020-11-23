import * as React from 'react';
import { IndexPage } from './countriesExample/views';
import { Root } from './countriesExample/models';
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
