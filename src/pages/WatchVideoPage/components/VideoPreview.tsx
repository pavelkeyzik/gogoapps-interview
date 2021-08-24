import styled, { css } from "styled-components";

type VideoPreviewProps = {
  title: string;
  thumbnail: string;
};

function VideoPreview(props: VideoPreviewProps) {
  return (
    <Root>
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
