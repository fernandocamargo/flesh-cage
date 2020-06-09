import { useCallback, useState } from 'react';

const parse = (stack, link) => {
  const [page] = link.match(/\d+/);
  const [, type] = link.match(/rel=\s*"?([^"]+)"?/);

  return Object.assign(stack, { [type]: Number(page) });
};

const getPaginationFrom = ({ headers }) =>
  Promise.resolve(
    headers
      .get('link')
      .split(',')
      .reduce(parse, {})
  );

export default () => {
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);
  const fetch = useCallback(({ keywords }) => {
    setLoading(true);
    setError(null);

    return window
      .fetch(
        `https://api.github.com/search/repositories?per_page=20&q=${keywords}`
      )
      .then(response =>
        Promise.all([response.json(), getPaginationFrom(response)])
      )
      .then(
        ([{ items: repos, total_count: total }, { last: pages }]) =>
          console.log({ total, pages }) || setRepos(repos)
      )
      .finally(() => setLoading(false));
  }, []);

  return { fetch, loading, repos, error };
};
