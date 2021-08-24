import styled, { css } from "styled-components";

import { VideoPlayer } from "../../components/VideoPlayer";
import {
  useVideoPlayerState,
  VideoPlayerProvider,
} from "../../core/hooks/use-video-player";
import { WatchVideoSideBar } from "./WatchVideoSideBar";

function WatchVideoPage() {
  const state = useVideoPlayerState();

  return (
    <Root>
      <div>
        <VideoPlayer src={state.link} />
        <VideoInformation>
          <b>Video Title</b>
          <span>Video Description</span>
        </VideoInformation>
      </div>
      <WatchVideoSideBar />
    </Root>
  );
}

const Root = styled.div(
  ({ theme }) => css`
    display: grid;
    grid-template-columns: 8fr 4fr;
    grid-gap: ${theme.space[4]};
  `
);

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

function WatchVideoPageWithWrapper() {
  return (
    <VideoPlayerProvider>
      <WatchVideoPage />
    </VideoPlayerProvider>
  );
}

export { WatchVideoPageWithWrapper as WatchVideoPage };
