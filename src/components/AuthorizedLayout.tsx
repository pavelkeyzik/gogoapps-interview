import { PropsWithChildren } from "react";
import styled, { css } from "styled-components";

import { SearchVideoInput } from "./SearchVideoInput";
import { Header } from "../design-system";

function AuthorizedLayout(props: PropsWithChildren<unknown>) {
  return (
    <Root>
      <Header>
        <Header.Logo href="/">GogoApps</Header.Logo>
        <Header.Item>
          <SearchVideoInput />
        </Header.Item>
      </Header>
      <Main>{props.children}</Main>
    </Root>
  );
}

const Root = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
`;

const Main = styled.main(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.space[4]} ${theme.space[3]};

    @media (min-width: ${theme.breakpoints[0]}) {
      padding: ${theme.space[4]} ${theme.space[5]};
    }
  `
);

export { AuthorizedLayout };
