import React, { createElement, useCallback } from "react";

import withStyle from "./style";

export const Table = ({ className, columns, getRowId, rows }) => {
  const renderHeaderColumn = useCallback(
    ({ name, label }) => (
      <th key={name} className={name}>
        {label}
      </th>
    ),
    []
  );
  const renderRow = useCallback(
    row => {
      const key = getRowId(row);

      return (
        <tr key={key}>
          {columns.map(({ name, render }) => (
            <td key={name} className={name}>
              {createElement(render, row)}
            </td>
          ))}
        </tr>
      );
    },
    [getRowId, columns]
  );

  return (
    <table className={className}>
      <thead>
        <tr>{columns.map(renderHeaderColumn)}</tr>
      </thead>
      <tbody>{rows.map(renderRow)}</tbody>
    </table>
  );
};

Table.propTypes = {};

Table.defaultProps = {};

export default withStyle(Table);
