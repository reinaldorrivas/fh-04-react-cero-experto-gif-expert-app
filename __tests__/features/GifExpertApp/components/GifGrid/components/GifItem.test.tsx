import { render, screen } from "@testing-library/react";
import { GifItem } from "../../../../../../src/features/GifExpertApp/components/GifGrid/components/GifItem";

describe("Testing GifItem Component: ", () => {
  const mockTitle = "Test Title";
  const mockUrl = "https://www.test.com/";

  test("Debe coincidir con la captura: ", () => {
    const { container } = render(<GifItem title={mockTitle} url={mockUrl} />);

    expect(container).toMatchSnapshot();
  });

  test("Debe mostrar la imagen con el URL y el ALT indicado: ", () => {
    render(<GifItem title={mockTitle} url={mockUrl} />);

    const { getByRole } = screen;

    const img: HTMLImageElement = getByRole("img");

    const { src, alt } = img;

    expect(alt).toBe(mockTitle);
    expect(src).toBe(mockUrl);
  });
});
