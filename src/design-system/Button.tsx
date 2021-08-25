import styled, { css } from "styled-components";

type ButtonProps = {
  variant?: "secondary";
};

const Button = styled.button<ButtonProps>(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: ${theme.corner[1]};
    background: none;
    border: 2px solid ${theme.colors.button.secondary.border};
    color: ${theme.colors.button.secondary.color};
    font: inherit;
    cursor: pointer;
    padding: ${theme.space[2]} ${theme.space[3]};
    transition: ${theme.animation.speed};

    :hover {
      border-color: ${theme.colors.button.secondary.borderHover};
      color: ${theme.colors.button.secondary.colorHover};
    }
  `
);

Button.defaultProps = {
  variant: "secondary",
};

export { Button };
