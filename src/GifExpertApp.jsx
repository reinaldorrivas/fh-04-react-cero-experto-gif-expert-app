import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GIfGrid";

const GifExpertApp = () => {
  /*
   * Siempre que tenga que actualizar el HTML en base a un valor o grupo de valores,
   * debo pensar en implementar algún hook de React.js para efectuar dicha tarea.
   */

  const [categories, setCategories] = useState([
    "Dragon Ball",
    "One Punch Man",
  ]);

  /*
   * El prefijo "on" indica al desarrollador que esta función es un manejador de eventos.
   * Los eventos emiten acciones al componente padre, en este caso, el componente
   * GifExpertApp, para que este pueda actualizar su estado.
   */
  const onSetCategories = (value) => setCategories(value);

  const generateCategoryKey = (category) =>
    `${category.split(/\s+/).join("-")}`.toLocaleLowerCase();

  return (
    <>
      <h1>Gif Expert App!</h1>

      <AddCategory categories={categories} onSetCategories={onSetCategories} />

      <section>
        {categories.length &&
          categories.map((category) => (
            <GifGrid key={generateCategoryKey(category)} category={category} />
          ))}
      </section>
    </>
  );
};

export default GifExpertApp;
