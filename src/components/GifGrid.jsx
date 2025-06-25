import { getGifs } from "./helpers/GetGifs";

const GifGrid = ({ category }) => {
  console.log(getGifs(category));

  return (
    <>
      <h3>{category}</h3>
      <p>{category}</p>
    </>
  );
};

export default GifGrid;
