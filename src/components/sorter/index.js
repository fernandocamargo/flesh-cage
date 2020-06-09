import { node, string } from 'prop-types';
import React, { useCallback } from 'react';

import withStyle from './style';

export const Sorter = ({ className, children }) => {
  const onClick = useCallback(event => {
    event.preventDefault();
    console.log('Sorter.click();');
  }, []);

  return (
    <a href="#" className={className} onClick={onClick}>
      {children}
    </a>
  );
};

Sorter.propTypes = {
  className: string.isRequired,
  children: node.isRequired,
};

Sorter.defaultProps = {};

export default withStyle(Sorter);
