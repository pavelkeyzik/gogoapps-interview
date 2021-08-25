import styled, { css } from "styled-components";

import { VideoPlayer } from "../../../components/VideoPlayer";
import { useVideoById, useVideoPlayerState } from "../../../core";

function WatchSelectedVideo() {
  const state = useVideoPlayerState();
  const videoInformation = useVideoById({ id: state.videoId });

  if (!videoInformation.data || videoInformation.error) {
    return <CenterBox>Nothing to show you...</CenterBox>;
  }

  return (
    <Root>
      <StickyContainer>
        <VideoPlayer src={state.link} />
        <VideoInformation>
          <b>{videoInformation.data.title || "Unknown"}</b>
          <span>
            {videoInformation.data.description || "No description providen"}
          </span>
        </VideoInformation>
      </StickyContainer>
    </Root>
  );
}

const Root = styled.div`
  position: relative;
  height: 100%;
`;

const StickyContainer = styled.div(
  ({ theme }) => css`
    position: sticky;
    top: ${theme.space[4]};
  `
);

const VideoInformation = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.space[4]} ${theme.space[4]};
    background: ${theme.colors.box.background};

    & > *:not(:last-child) {
      margin-bottom: ${theme.space[2]};
    }
  `
);

const CenterBox = styled.div(
  ({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${theme.colors.box.background};
    color: ${theme.colors.text.secondary};
    padding: ${theme.space[4]};
  `
);

export { WatchSelectedVideo };
