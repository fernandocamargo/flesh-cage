import { useCallback, useState } from 'react';

export const useTable = ({ sortedBy = null, orderedBy = null }) => {
  const [settings, setSettings] = useState({ sortedBy, orderedBy });
  const sortBy = useCallback(() => {}, []);

  return { sortBy };
};
