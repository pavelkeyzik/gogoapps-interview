import styled, { css } from "styled-components";

import { VideoPlayerProvider } from "../../core/hooks/use-video-player";
import { WatchSelectedVideo } from "./WatchSelectedVideo";
import { WatchVideoSideBar } from "./WatchVideoSideBar";

function WatchVideoPage() {
  return (
    <Root>
      <WatchSelectedVideo />
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

function WatchVideoPageWithWrapper() {
  return (
    <VideoPlayerProvider>
      <WatchVideoPage />
    </VideoPlayerProvider>
  );
}

export { WatchVideoPageWithWrapper as WatchVideoPage };
