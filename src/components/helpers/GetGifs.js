export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${
    import.meta.env.VITE_GIPHY_API_KEY
  }&q=${category}&limit=20`;

  const response = await fetch(url);
  const { data } = await response.json();

  const gifsData = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  console.log("🚀 ~ getGifs ~ gifsData:", gifsData);
  return gifsData;
};
