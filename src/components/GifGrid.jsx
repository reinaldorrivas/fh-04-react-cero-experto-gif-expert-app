import { useEffect } from "react";
import { getGifs } from "./helpers/GetGifs";

const GifGrid = ({ category }) => {
  useEffect(() => {
    getGifs(category);
  });

  return (
    <>
      <h3>{category}</h3>
      <p>{category}</p>
    </>
  );
};

export default GifGrid;
