import styled from 'styled-components';

export default component => styled(component)`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0 2rem;

  .MuiBadge-root:not(:first-of-type) {
    margin-left: 2rem;
  }
`;
