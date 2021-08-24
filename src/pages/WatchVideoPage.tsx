import styled from "styled-components";
import { VideoPlayer } from "../components/VideoPlayer";

function WatchVideoPage() {
  return (
    <Root>
      <VideoPlayer src="https://www.w3schools.com/html/mov_bbb.mp4" controls />
      <b>Video Title</b>
      <span>Video Description</span>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

export { WatchVideoPage };
