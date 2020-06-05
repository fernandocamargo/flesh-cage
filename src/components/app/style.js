import styled from 'styled-components';

import { Table } from 'components';

export default component => styled(component)`
  ${Table} {
    th,
    td {
      padding: 1rem;
    }

    th {
      text-align: center;
      white-space: nowrap;
    }

    td {
      border-top: solid 1px #212529;
      font-size: ${({
        theme: {
          typography: { body2 },
          palette: {
            text: { secondary },
          },
        },
      }) => ({ ...body2, color: secondary })};

      &:nth-of-type(1) {
        background-color: #f8f9fa;
      }

      &:nth-of-type(2) {
        background-color: #e9ecef;
      }

      &:nth-of-type(3) {
        background-color: #dee2e6;
      }

      &:nth-of-type(4) {
        background-color: #ced4da;
      }

      &:nth-of-type(5) {
        background-color: #adb5bd;
      }

      &:nth-of-type(6) {
        background-color: #6c757d;
      }

      &:nth-of-type(7) {
        background-color: #495057;
      }

      &:nth-of-type(8) {
        background-color: #343a40;
      }

      &.language,
      &.updated,
      &.stars,
      &.forks,
      &.issues {
        text-align: center;
      }
    }
  }
`;
