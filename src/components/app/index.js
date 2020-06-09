import { string } from 'prop-types';
import React from 'react';

import { useGithub } from 'hooks';
import { Pagination, Search, Table } from 'components';

import { columns, getRowId } from './settings';
import withStyle from './style';

export const App = ({ className }) => {
  const { loading, repos, fetch } = useGithub();

  return (
    <div className={className}>
      <Search onSubmit={fetch} />
      <Table
        columns={columns}
        rows={repos}
        getRowId={getRowId}
        loading={loading}
      />
      <Pagination />
    </div>
  );
};

App.propTypes = {
  className: string.isRequired,
};

App.defaultProps = {};

export default withStyle(App);
