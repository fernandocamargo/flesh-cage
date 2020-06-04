import { useCallback, useState } from "react";

export const useRepos = () => {
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);
  const fetch = useCallback(({ keywords }) => {
    setLoading(true);
    setError(null);

    return window
      .fetch(`https://api.github.com/search/repositories?q=${keywords}`)
      .then(response => response.json())
      .then(({ items: repos }) => setRepos(repos))
      .finally(() => setLoading(false));
  }, []);

  return { fetch, loading, repos, error };
};
