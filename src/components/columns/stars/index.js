import numeral from 'numeral';
import { useMemo } from 'react';

export const Stars = ({ stargazers_count }) =>
  useMemo(() => numeral(stargazers_count).format('0a'), [stargazers_count]);

Stars.propTypes = {};

Stars.defaultProps = {};

export default Stars;
