import type { gifDataProps, GiphyResponseProps } from "../types/GiphyTypes";


export const getGifs = async (category: string): Promise<gifDataProps[]> => {
  let gifsData: gifDataProps[] = [];

  try {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${
      import.meta.env.VITE_GIPHY_API_KEY
    }&q=${category}&limit=10`;

    const response = await fetch(url);
    const { data } = await response.json();

    gifsData = data.map((img: GiphyResponseProps) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));

    return gifsData;
  } catch (error) {
    console.error(`Error: ${error}`);
    return gifsData;
  }
};
