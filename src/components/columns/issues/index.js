import numeral from 'numeral';
import { number } from 'prop-types';
import { useMemo } from 'react';

export const Issues = ({ open_issues_count }) =>
  useMemo(() => numeral(open_issues_count).format('0a'), [open_issues_count]);

Issues.propTypes = {
  open_issues_count: number.isRequired,
};

Issues.defaultProps = {};

export default Issues;
