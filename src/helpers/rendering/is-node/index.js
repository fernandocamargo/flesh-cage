import { checkPropTypes, node, resetWarningCache } from 'prop-types/prop-types';

import { fail } from 'helpers/error';

export const propTypes = { object: node };

export default object => {
  resetWarningCache();

  try {
    checkPropTypes(propTypes, { object }, null, null, fail);

    return true;
  } catch {
    return false;
  }
};
