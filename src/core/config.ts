const config = {
  isDevelopment: process.env.REACT_APP_TYPE !== "production",
  api: {
    youtube: {
      baseURL: "https://www.googleapis.com/youtube/v3",
      key: process.env.REACT_APP_YOUTUBE_API_KEY,
    },
  },

  // I think that storing it's in config is great as we can replace
  // base URL in different environments
  getYouTubeEmbededUrlByVideoId(videoId: string) {
    return `https://www.youtube.com/embed/${videoId}`;
  },
};

export { config };
