import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";
import type { gifDataProps } from "../types/GiphyTypes";

interface UseFetchGifsProps {
  gifs: gifDataProps[];
  error: boolean;
  loading: boolean;
}

const useFetchGifs = (category: string): UseFetchGifsProps => {
  const [gifs, setGifs] = useState<gifDataProps[]>([]);
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
