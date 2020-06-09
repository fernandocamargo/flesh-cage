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
        },
      }) => ({ ...body2, color: '#000' })};
      transition: ${({
        theme: {
          transitions: {
            easing: { easeInOut },
          },
        },
      }) => `background-color 0.25s ${easeInOut}, color 0.25s ${easeInOut}`};

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
        color: #fff;
      }

      &:nth-of-type(7) {
        background-color: #495057;
        color: #fff;
      }

      &:nth-of-type(8) {
        background-color: #343a40;
        color: #fff;
      }

      &.language,
      &.updated,
      &.stars,
      &.forks,
      &.issues {
        text-align: center;
      }
    }

    tr:hover {
      td {
        &:not(:nth-of-type(1)) {
          color: #fff;
        }

        &:nth-of-type(1) {
          background-color: #e0aaff;
        }

        &:nth-of-type(2) {
          background-color: #c77dff;
        }

        &:nth-of-type(3) {
          background-color: #9d4edd;
        }

        &:nth-of-type(4) {
          background-color: #7b2cbf;
        }

        &:nth-of-type(5) {
          background-color: #5a189a;
        }

        &:nth-of-type(6) {
          background-color: #3c096c;
        }

        &:nth-of-type(7) {
          background-color: #240046;
        }

        &:nth-of-type(8) {
          background-color: #10002b;
        }
      }
    }
  }
`;
