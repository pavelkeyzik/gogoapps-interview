import styled, { css } from "styled-components";
import { useVideoPlayerDispatch } from "../../../core/hooks/use-video-player";

import { useVideoList } from "../../../core/hooks/use-video";
import { VideoPreview } from "./VideoPreview";
import { useVideosSearchState } from "../../../core/hooks/use-video/search";

function WatchVideoSideBar() {
  const searchState = useVideosSearchState();
  const state = useVideoList({ search: searchState.search });
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

  if (!state.data || state.data.items.length === 0) {
    return <div>Nothing to show you</div>;
  }

  return (
    <VideoPreviewsGrid>
      {state.data.items?.map((item: any) => (
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
    display: flex;
    flex-direction: column;

    > *:not(:last-child) {
      margin-bottom: ${theme.space[1]};
    }
  `
);

export { WatchVideoSideBar };
