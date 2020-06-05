import numeral from 'numeral';
import { useMemo } from 'react';

export const Forks = ({ forks_count }) =>
  useMemo(() => numeral(forks_count).format('0a'), [forks_count]);

Forks.propTypes = {};

Forks.defaultProps = {};

export default Forks;
