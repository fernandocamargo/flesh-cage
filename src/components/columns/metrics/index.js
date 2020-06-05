import { number, string } from 'prop-types';
import React from 'react';
import { GetApp as Size, Visibility } from '@material-ui/icons';

import { Counter } from 'components';

import withStyle from './style';

export const Metrics = ({ className, watchers_count, size }) => (
  <div className={className}>
    <Counter value={watchers_count} format="0a" title="Watchers">
      <Visibility />
    </Counter>
    <Counter value={size} format="0b" title="Size">
      <Size />
    </Counter>
  </div>
);

Metrics.propTypes = {
  className: string.isRequired,
  watchers_count: number.isRequired,
  size: number.isRequired,
};

Metrics.defaultProps = {};

export default withStyle(Metrics);
