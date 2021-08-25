const config = {
  API_BASE_URL: "https://www.googleapis.com/youtube/v3",
  API_KEY: process.env.REACT_APP_YOUTUBE_API_KEY,
};

async function getVideosList() {
  const promise = await fetch(
    `${config.API_BASE_URL}/search?key=${config.API_KEY}&q=subaruteambelarus&part=snippet&type=video`
  );

  return await promise.json();
}

async function getVideoById(params: { id?: string }) {
  if (!params.id) {
    return null;
  }

  const promise = await fetch(
    `${config.API_BASE_URL}/videos?key=${config.API_KEY}&id=${params.id}&part=snippet`
  );

  return await promise.json();
}

const api = { getVideosList, getVideoById };

export { api };
