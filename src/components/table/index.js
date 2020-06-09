import {
  arrayOf,
  elementType,
  func,
  node,
  object,
  oneOfType,
  shape,
  string,
} from 'prop-types';
import React, { createElement, Fragment, useCallback } from 'react';

import { isNode } from 'helpers/rendering';

import { useTable } from './hooks';
import withStyle from './style';

export const Table = ({ className, columns, rows, getRowId }) => {
  const table = useTable({});
  const renderHeaderColumn = useCallback(
    ({ name, header }) => (
      <th key={name} className={name}>
        {isNode(header) ? header : createElement(header)}
      </th>
    ),
    []
  );
  const renderRow = useCallback(
    row => {
      const key = getRowId(row);

      return (
        <tr key={key}>
          {columns.map(({ name, body }) => (
            <td key={name} className={name}>
              {isNode(body) ? body : createElement(body, row)}
            </td>
          ))}
        </tr>
      );
    },
    [getRowId, columns]
  );

  return (
    <Fragment>
      <pre>{JSON.stringify(table, null, 2)}</pre>
      <table className={className}>
        <thead>
          <tr>{columns.map(renderHeaderColumn)}</tr>
        </thead>
        <tbody>{rows.map(renderRow)}</tbody>
      </table>
    </Fragment>
  );
};

Table.propTypes = {
  className: string.isRequired,
  columns: arrayOf(
    shape({
      name: string.isRequired,
      header: oneOfType([node, elementType]),
      body: oneOfType([node, elementType]),
    }).isRequired
  ),
  rows: arrayOf(object),
  getRowId: func.isRequired,
};

Table.defaultProps = {
  columns: [],
  rows: [],
};

export default withStyle(Table);
