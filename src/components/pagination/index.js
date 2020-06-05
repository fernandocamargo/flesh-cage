import React from 'react';
import { TablePagination } from '@material-ui/core';

export const Pagination = () => (
  <TablePagination
    component="div"
    count={100}
    page={1}
    onChangePage={console.log.bind(console, 'onChangePage();')}
    rowsPerPage={20}
    onChangeRowsPerPage={console.log.bind(console, 'onChangeRowsPerPage();')}
  />
);

Pagination.propTypes = {};

Pagination.defaultProps = {};

export default Pagination;
