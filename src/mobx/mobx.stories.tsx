import * as React from 'react';
import { IndexPage } from './demo';
import { Root } from './store';

export default {
  title: 'mobx',
};

export const demo = () => {
  return (
    <Root>
      <IndexPage />
    </Root>
  );
};
