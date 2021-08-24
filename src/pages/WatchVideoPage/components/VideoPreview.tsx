import styled, { css } from "styled-components";

type VideoPreviewProps = {
  videoId: string;
  title: string;
  thumbnail: string;
  onClick?: (videoId: string) => void;
};

function VideoPreview(props: VideoPreviewProps) {
  function handleClick() {
    props.onClick && props.onClick(props.videoId);
  }

  return (
    <Root onClick={handleClick}>
      <ImageContainer>
        <Image src={props.thumbnail} />
      </ImageContainer>
      <Title>{props.title}</Title>
    </Root>
  );
}

const Root = styled.div(
  ({ theme }) => css`
    display: grid;
    grid-template-columns: 4fr 8fr;
    grid-gap: ${theme.space[4]};
    align-items: flex-start;
    cursor: pointer;
    transition: color ${theme.animation.speed};

    :hover {
      color: ${theme.colors.primary};
    }
  `
);

const ImageContainer = styled.div`
  flex-shrink: 0;
`;

const Title = styled.b`
  word-break: break-all;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export { VideoPreview };
