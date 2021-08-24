const config = {
  API_BASE_URL: "https://www.googleapis.com/youtube/v3/search",
  API_KEY: process.env.REACT_APP_YOUTUBE_API_KEY,
};

async function getVideosList() {
  const promise = await fetch(
    `${config.API_BASE_URL}?key=${config.API_KEY}&q=subaruteambelarus&part=snippet&type=video`
  );

  return await promise.json();
}

const api = { getVideosList };

export { api };
