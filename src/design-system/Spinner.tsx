import styled, { keyframes, css } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div(
  ({ theme }) => css`
    display: flex;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 6px solid ${theme.colors.spinner.secondaryLine};
    border-top-color: ${theme.colors.spinner.primaryLine};
    animation: ${rotate} 1s ease-in-out infinite;
  `
);

export { Spinner };
