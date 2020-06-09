import React from 'react';

import { Sorter } from 'components';
import {
  Forks,
  ID,
  Issues,
  Language,
  Metrics,
  Stars,
  Summary,
  Updated,
} from 'components/columns';

export const columns = [
  {
    name: 'id',
    header: 'ID',
    body: ID,
  },
  {
    name: 'summary',
    header: () => 'Summary',
    body: Summary,
  },
  {
    name: 'language',
    header: 'Language',
    body: Language,
  },
  {
    name: 'updated',
    header: () => <Sorter>Last update</Sorter>,
    body: Updated,
  },
  {
    name: 'stars',
    header: () => <Sorter>Stars</Sorter>,
    body: Stars,
  },
  {
    name: 'forks',
    header: () => <Sorter>Forks</Sorter>,
    body: Forks,
  },
  {
    name: 'issues',
    header: 'Issues',
    body: Issues,
  },
  {
    name: 'metrics',
    header: 'Other metrics',
    body: Metrics,
  },
];

export const getRowId = ({ id }) => id;
