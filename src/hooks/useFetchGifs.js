import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";

const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await getGifs(category);
        setGifs(response);
        setLoading(false);
      } catch {
        setError(true);
        setLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { gifs, error, loading };
};

export default useFetchGifs;
