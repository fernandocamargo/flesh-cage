import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    font-family: ${({
      theme: {
        typography: { fontFamily },
      },
    }) => fontFamily};
    font-size: 16px;
    min-height: 100vh;
  }
`;
