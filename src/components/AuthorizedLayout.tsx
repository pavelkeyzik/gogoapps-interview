import { PropsWithChildren } from "react";
import styled, { css } from "styled-components";

import { Header, Input } from "../design-system";

function AuthorizedLayout(props: PropsWithChildren<unknown>) {
  return (
    <>
      <Header>
        <Header.Logo href="/">GogoApps</Header.Logo>
        <Header.Item>
          <Input placeholder="Search..." />
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
