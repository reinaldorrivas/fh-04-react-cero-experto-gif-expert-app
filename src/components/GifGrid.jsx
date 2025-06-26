import { useEffect, useState } from "react";
import { getGifs } from "./helpers/GetGifs";
import GifItem from "./GifItem";

const GifGrid = ({ category }) => {
  const [gifs, setGifs] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await getGifs(category);
        setGifs(response);
      } catch {
        setError(true);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h2>{category}</h2>
      <div className="card-grid">
        {gifs?.length === 0 ? (
          <p>No se encontraron GIFs para esta categoría.</p>
        ) : (
          gifs?.map((image) => <GifItem key={image.id} {...image} />)
        )}
      </div>
      {error && <p>Error al cargar los GIFs 😢</p>}
    </>
  );
};

export default GifGrid;
