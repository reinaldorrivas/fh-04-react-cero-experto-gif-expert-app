import type { FC } from "react";

interface GifItemProps {
  title: string;
  url: string;
}

export const GifItem: FC<GifItemProps> = ({ title, url }) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <h3>{title || "Without Name"}</h3>
    </div>
  );
};
