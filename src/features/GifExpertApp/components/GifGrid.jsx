import useFetchGifs from "../../../hooks/useFetchGifs";
import GifItem from "./GifItem";

const GifGrid = ({ category }) => {
  const { gifs, error, loading } = useFetchGifs(category);

  return (
    <>
      <h2>{category}</h2>
      <div className="card-grid">
        {loading ? (
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
