import React from "react";
import styled, { css, useTheme } from "styled-components";
import { useMediaQuery } from "react-responsive";

import { useVideoPlayerDispatch } from "../../../core/hooks/use-video-player";
import { useVideoList } from "../../../core/hooks/use-video";
import { VideoPreview } from "./VideoPreview";
import { useVideosSearchState } from "../../../core/hooks/use-video/search";
import { Spinner } from "../../../design-system/Spinner";
import { Button } from "../../../design-system/Button";

function WatchVideoSideBar() {
  const theme = useTheme();
  const searchState = useVideosSearchState();
  const state = useVideoList({ search: searchState.search });
  const dispatch = useVideoPlayerDispatch();

  const isDesktop = useMediaQuery({
    query: `(min-width: ${theme.breakpoints[0]})`,
  });

  function selectVideo(videoId: string) {
    // A code bellow adds scroll to top only if it's not Desktop as on mobile devices
    // the search list is too long to scroll and there is no way to add
    // position: sticky as its one column grid. Yeah! We can split the screen
    // in two parts but I have no time to do this. So, I hope it's okay to do this way

    if (!isDesktop) {
      window.scrollTo({
        top: 0,
        // Works only in Chrome. Can fix this with install additional library with polyfill
        behavior: "smooth",
      });
    }

    dispatch({
      type: "CHANGE_VIDEO_ID",
      payload: {
        videoId,
      },
    });
  }

  if (state.isLoading) {
    return (
      <Center>
        <Spinner />
      </Center>
    );
  }

  if (state.error) {
    return <div>{String(state.error)}</div>;
  }

  if (
    !state.data ||
    !state.data.pages ||
    state.data.pages.length === 0 ||
    state.data.pages[0]?.items.length === 0
  ) {
    return <div>Nothing to show you</div>;
  }

  return (
    <VideoPreviewsGrid>
      {state.data.pages.map((page) => (
        <React.Fragment key={page?.nextPageToken}>
          {page?.items.map((item) => (
            <VideoPreview
              key={item.id.videoId}
              videoId={item.id.videoId}
              title={item.snippet.title}
              thumbnail={item.snippet.thumbnails.default.url}
              onClick={selectVideo}
            />
          ))}
        </React.Fragment>
      ))}
      {state.hasNextPage ? (
        <Button onClick={() => state.fetchNextPage()}>
          {state.isFetchingNextPage ? "Loading more..." : "Load more"}
        </Button>
      ) : null}
    </VideoPreviewsGrid>
  );
}

const Center = styled.div`
  display: flex;
  justify-content: center;
`;

const VideoPreviewsGrid = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;

    > *:not(:last-child) {
      margin-bottom: ${theme.space[4]};
    }

    @media (min-width: ${theme.breakpoints[0]}) {
      > *:not(:last-child) {
        margin-bottom: ${theme.space[1]};
      }
    }
  `
);

export { WatchVideoSideBar };
