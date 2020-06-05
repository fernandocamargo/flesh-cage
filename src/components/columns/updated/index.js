import { useMemo } from 'react';

import locale from 'locale';

export const Updated = ({ updated_at }) =>
  useMemo(
    () =>
      new Date(updated_at).toLocaleDateString(locale, {
        dateStyle: 'full',
        timeStyle: 'medium',
      }),
    [updated_at]
  );

Updated.propTypes = {};

Updated.defaultProps = {};

export default Updated;
