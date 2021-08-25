import styled, { css } from "styled-components";

import { VideoPlayerProvider } from "../../core/hooks/use-video-player";
import { useVideosSearchState } from "../../core/hooks/use-video/search";
import { WatchSelectedVideo } from "./components/WatchSelectedVideo";
import { WatchVideoSideBar } from "./components/WatchVideoSideBar";

function WatchVideoPage() {
  const state = useVideosSearchState();

  if (!state.search) {
    return (
      <SignleContent>
        <h1>What's up GogoApps?</h1>
        <Message>
          To get some videos you have to type something in search field and
          press Enter button
        </Message>
      </SignleContent>
    );
  }

  return (
    <Grid>
      <WatchSelectedVideo />
      <WatchVideoSideBar />
    </Grid>
  );
}

const SignleContent = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: ${theme.space[4]};
  `
);

const Grid = styled.div(
  ({ theme }) => css`
    display: grid;
    grid-template-columns: 8fr 4fr;
    grid-gap: ${theme.space[4]};
  `
);

const Message = styled.p(
  ({ theme }) => css`
    max-width: 500px;
    color: ${theme.colors.text.secondary};
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
