import styled, { css } from "styled-components";

import { VideoPlayerProvider, useVideosSearchState } from "../../core";
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
    justify-content: center;
    text-align: center;
    padding: ${theme.space[4]};
    height: 100%;
  `
);

const Grid = styled.div(
  ({ theme }) => css`
    display: grid;
    grid-template-rows: min-content;
    grid-gap: ${theme.space[4]};
    align-items: flex-start;
    height: 100%;

    @media (min-width: ${theme.breakpoints[0]}) {
      display: grid;
      grid-template-columns: 8fr 4fr;
    }
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
