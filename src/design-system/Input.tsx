import styled, { css } from "styled-components";

const Input = styled.input(
  ({ theme }) => css`
    display: flex;
    width: 100%;
    border: none;
    background: ${theme.colors.input.background};
    color: ${theme.colors.input.color};
    height: 46px;
    padding: ${theme.space[0]} ${theme.space[3]};
    border-radius: ${theme.corner[1]};
    font: inherit;
  `
);

export { Input };
