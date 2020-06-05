import React from 'react';
import { ThemeProvider as Theming } from 'styled-components';

import theme from 'theme';
import { App, Style } from 'components';

export const Root = () => (
  <Theming theme={theme}>
    <Style />
    <App />
  </Theming>
);

Root.propTypes = {};

Root.defaultProps = {};

export default Root;
