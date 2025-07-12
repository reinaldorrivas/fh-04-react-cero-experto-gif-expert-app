import { getGifs } from "../../../src/helpers/GetGifs";
import { gifDataProps } from "../../../src/types/GiphyTypes";

describe("Testing GetGifs(): ", () => {
  test("Debe retornar un arreglo de gifDataProps: ", async () => {
    const queryTest = "Dragon Ball Z";
    const parsedGifDataTest = {
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    };
    const gifsData: gifDataProps[] = await getGifs(queryTest);

    expect(gifsData.length).toBeGreaterThan(0);

    gifsData.forEach((gifData) => {
      expect(gifData).toStrictEqual(parsedGifDataTest);
    });
  });
});
