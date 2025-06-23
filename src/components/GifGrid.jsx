const GifGrid = ({ category }) => {

  console.log(import.meta.env.VITE_GIPHY_API_KEY)

  return (
    <>
      <h3>{category}</h3>
      <p>{category}</p>
    </>
  );
};

export default GifGrid;
