import styled, { css } from "styled-components";

const HeaderRoot = styled.header(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${theme.colors.box.background};
    padding: ${theme.space[3]} ${theme.space[3]};

    > *:not(:last-child) {
      margin-bottom: ${theme.space[4]};
    }

    @media (min-width: ${theme.breakpoints[0]}) {
      padding: ${theme.space[3]} ${theme.space[5]};
      flex-direction: row;
      height: 80px;

      > *:not(:last-child) {
        margin-bottom: 0;
        margin-right: ${theme.space[4]};
      }
    }
  `
);

const HeaderLogo = styled.a(
  ({ theme }) => css`
    font-size: 1.5em;
    font-weight: bold;
    transition: color ${theme.animation.speed};
    color: ${theme.colors.primary};

    :hover {
      color: ${theme.colors.link.color};
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
