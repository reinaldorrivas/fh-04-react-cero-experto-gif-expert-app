import { useState, type FC, type FormEvent } from "react";

import styles from "./AddCategory.module.css";

interface AddCategoryProps {
  categories: string[];
  onSetCategories: (value: string[]) => void;
}

const disabledSubmit = (inputValue: string, categories: string[]) =>
  !inputValue.trim() ||
  categories.find(
    (category) =>
      category.toLocaleLowerCase() === inputValue.toLocaleLowerCase()
  );

export const AddCategory: FC<AddCategoryProps> = ({
  categories,
  onSetCategories,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(value);
  };


  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (disabledSubmit(inputValue, categories)) {
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
        className={`${btn} ${
          disabledSubmit(inputValue, categories) ? btnDisabled : btnEnabled
        }`}
        type="submit"
        value="Search"
      />
    </form>
  );
};
