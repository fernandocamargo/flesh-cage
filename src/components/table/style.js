import styled from "styled-components";

export default component => styled(component)`
  border-spacing: 0;
  border-collapse: separate;
  width: 100%;

  th,
  td {
    padding: 1rem;

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
  }

  th {
    text-align: center;
  }

  td {
    border-top: solid 1px #000;

    &.updated,
    &.stars,
    &.forks,
    &.issues {
      text-align: center;
    }

    &.metrics {
      div {
        align-items: center;
        display: flex;
        justify-content: center;
        padding: 0 2rem;
      }

      .MuiBadge-root:not(:first-of-type) {
        margin-left: 2rem;
      }
    }
  }
`;
