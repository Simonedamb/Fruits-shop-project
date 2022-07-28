import { useState, useEffect } from "react";

export const useFetch = (url, options) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const call = await fetch(url, options);
        const response = await call.json();
        setData(response);
        setLoading(false);
        return response;
      } catch (err) {
        setLoading(false);
        setError(err);
        console.log(err);
      }
    })();
  }, []);
  return { data, loading, error };
};
