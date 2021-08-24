import { ComponentPropsWithRef } from "react";
import styled from "styled-components";

function VideoPlayer(props: ComponentPropsWithRef<"iframe">) {
  return (
    <Wrapper>
      <Iframe {...props} />
    </Wrapper>
  );
}

const Iframe = styled.iframe`
  display: flex;
  width: 100%;
  flex-grow: 1;
  border: 0;
`;

const Wrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export { VideoPlayer };
