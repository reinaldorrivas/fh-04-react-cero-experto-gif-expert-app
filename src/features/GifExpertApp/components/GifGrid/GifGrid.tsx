import type { FC } from "react";
import useFetchGifs from "../../../../hooks/useFetchGifs";
import { GifItem } from "./components";

interface GifGridProps {
  category: string;
}

export const GifGrid: FC<GifGridProps> = ({ category }) => {
  const { gifs, error, loading } = useFetchGifs(category);

  return (
    <>
      <h2>{category}</h2>
      <div className="card-grid">
        {loading ? (
          <h4>Cargando...</h4>
        ) : gifs.length ? (
          gifs.map((image) => <GifItem key={image.id} {...image} />)
        ) : (
          <p>No se encontraron GIFs para esta categoría.</p>
        )}
      </div>
      {error && <p>Error al cargar los GIFs 😢</p>}
    </>
  );
};
