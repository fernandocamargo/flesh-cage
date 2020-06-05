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
    label: 'ID',
    render: ID,
  },
  {
    name: 'summary',
    label: 'Summary',
    render: Summary,
  },
  {
    name: 'language',
    label: 'Language',
    render: Language,
  },
  {
    name: 'updated',
    label: 'Last update',
    render: Updated,
  },
  {
    name: 'stars',
    label: 'Stars',
    render: Stars,
  },
  {
    name: 'forks',
    label: 'Forks',
    render: Forks,
  },
  {
    name: 'issues',
    label: 'Issues',
    render: Issues,
  },
  {
    name: 'metrics',
    label: 'Other metrics',
    render: Metrics,
  },
];

export const getRowId = ({ id }) => id;
