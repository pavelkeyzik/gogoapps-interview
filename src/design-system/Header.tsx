import styled, { css } from "styled-components";

const HeaderRoot = styled.header(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    background: ${theme.colors.header.background};
    min-height: 80px;
    padding: ${theme.space[0]} ${theme.space[3]};

    > *:not(:last-child) {
      margin-right: ${theme.space[4]};
    }
  `
);

const HeaderLogo = styled.a(
  ({ theme }) => css`
    font-size: 1.5em;
    font-weight: bold;
    transition: color ${theme.animation.speed};

    :hover {
      color: ${theme.colors.primary};
    }
  `
);

type HeaderItemProps = {
  full?: boolean; // used to fill all space in container
};

const HeaderItem = styled.div<HeaderItemProps>(
  ({ full }) => css`
    display: flex;

    ${full
      ? css`
          flex-grow: 1;
        `
      : null}
  `
);

const Header = Object.assign(HeaderRoot, {
  Logo: HeaderLogo,
  Item: HeaderItem,
});

export { Header };
