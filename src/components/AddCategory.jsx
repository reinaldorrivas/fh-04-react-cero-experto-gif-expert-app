import { useState } from "react";

import styles from "./AddCategory.module.css";

const AddCategory = ({ categories, onSetCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  const disabledSubmit = () =>
    !inputValue.trim() ||
    categories.find(
      (category) =>
        category.toLocaleLowerCase() === inputValue.toLocaleLowerCase()
    );

  const handleSubmit = (event) => {
    event.preventDefault();

    if (disabledSubmit()) {
      return;
    }

    onSetCategories([inputValue, ...categories]);
    setInputValue("");
  };

  const {
    btn,
    ["btn-disabled"]: btnDisabled,
    ["btn-enabled"]: btnEnabled,
  } = styles;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-category">What are you searching for?</label>
      <input
        type="text"
        name="new-category"
        id="new-category"
        value={inputValue}
        onChange={handleChange}
        placeholder="Introduce your search..."
      />

      <input
        className={`${btn} ${disabledSubmit() ? btnDisabled : btnEnabled}`}
        type="submit"
        value="Search"
      />
    </form>
  );
};

export default AddCategory;
