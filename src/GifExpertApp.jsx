import { useState } from "react";

const GifExpertApp = () => {
  /*
   * Siempre que tenga que actualizar el HTML en base a un valor o grupo de valores,
   * debo pensar en implementar algún hook de React.js para efectuar dicha tarea.
   */

  const [categories, setCategories] = useState(["1", "2"]);

  const generateCategoryKey = (category, index) => {
    return `${category.split(/\s+/).join("-")}-${index}`;
  };

  return (
    <>
      {/* Titulo */}
      <h1>Gif Expert App!</h1>

      {/* Buscador */}

      {/* Listado Gifs */}
      <ol>
        {categories.length &&
          categories.map((category, index) => (
            <li key={generateCategoryKey(category, index)}>{`${category}`}</li>
          ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
