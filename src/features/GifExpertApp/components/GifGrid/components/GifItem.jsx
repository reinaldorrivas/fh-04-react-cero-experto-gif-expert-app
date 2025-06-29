export const GifItem = ({ title, url }) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <h3>{title || "Without Name"}</h3>
    </div>
  );
};

