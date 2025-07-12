import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../../../../src/features/GifExpertApp/components/AddCategory/AddCategory";

describe("Pruebas en AddCategory: ", () => {
  const mockValue = "Saitama";
  const mockEvent = { target: { value: mockValue } };

  test("Debe cambiar el valor en el input[type='text']: ", () => {
    render(<AddCategory categories={[]} onSetCategories={() => {}} />);

    const { getByRole } = screen;
    const mockInput = getByRole("textbox") as HTMLInputElement;

    fireEvent.input(mockInput, mockEvent);

    expect(mockInput.value).toBe(mockValue);
  });
});
