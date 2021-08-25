import styled, { css } from "styled-components";

import { VideoPlayer } from "../../components/VideoPlayer";
import { useVideoById } from "../../core/hooks/use-video";
import { useVideoPlayerState } from "../../core/hooks/use-video-player";

function WatchSelectedVideo() {
  const state = useVideoPlayerState();
  const videoInformation = useVideoById({ id: state.videoId });

  if (!videoInformation.data || videoInformation.error) {
    return <div>Nothing to show you</div>;
  }

  return (
    <div>
      <VideoPlayer src={state.link} />
      <VideoInformation>
        <b>{videoInformation.data.title || "Unknown"}</b>
        <span>
          {videoInformation.data.description || "No description providen"}
        </span>
      </VideoInformation>
    </div>
  );
}

const VideoInformation = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.space[4]} ${theme.space[4]};
    background: ${theme.colors.header.background};

    & > *:not(:last-child) {
      margin-bottom: ${theme.space[2]};
    }
  `
);

export { WatchSelectedVideo };
