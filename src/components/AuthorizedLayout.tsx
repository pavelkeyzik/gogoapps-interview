import { PropsWithChildren } from "react";
import styled, { css } from "styled-components";

import { SearchVideoInput } from "./SearchVideoInput";
import { Header } from "../design-system";

function AuthorizedLayout(props: PropsWithChildren<unknown>) {
  return (
    <>
      <Header>
        <Header.Logo href="/">GogoApps</Header.Logo>
        <Header.Item>
          <SearchVideoInput />
        </Header.Item>
      </Header>
      <Main>{props.children}</Main>
    </>
  );
}

const Main = styled.main(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.space[4]} ${theme.space[5]};
  `
);

export { AuthorizedLayout };
