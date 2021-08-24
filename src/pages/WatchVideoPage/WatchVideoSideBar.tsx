import styled, { css } from "styled-components";
import { useVideoPlayerDispatch } from "../../core/hooks/use-video-player";

import { useVideoList } from "../../core/hooks/use-videos";
import { VideoPreview } from "./components/VideoPreview";

function WatchVideoSideBar() {
  const state = useVideoList();
  const dispatch = useVideoPlayerDispatch();

  function selectVideo(videoId: string) {
    dispatch({
      type: "CHANGE_VIDEO_ID",
      payload: {
        videoId,
      },
    });
  }

  if (state.isLoading) {
    return <div>Loading...</div>;
  }

  if (state.error) {
    return <div>{String(state.error)}</div>;
  }

  return (
    <VideoPreviewsGrid>
      {state.data.items.map((item: any) => (
        <VideoPreview
          key={item.id.videoId}
          videoId={item.id.videoId}
          title={item.snippet.title}
          thumbnail={item.snippet.thumbnails.default.url}
          onClick={selectVideo}
        />
      ))}
    </VideoPreviewsGrid>
  );
}

const VideoPreviewsGrid = styled.div(
  ({ theme }) => css`
    display: grid;
    grid-gap: ${theme.space[1]};
  `
);

export { WatchVideoSideBar };
