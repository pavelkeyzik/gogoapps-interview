import { css, createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle(
  ({ theme }) => css`
    @import url("https://fonts.googleapis.com/css?family=Poppins:400");

    html {
      font-size: 18px;
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      padding: 0;
      line-height: 1.75;
      font-family: "Poppins", sans-serif;
      background: ${theme.colors.body.background};
      color: ${theme.colors.body.color};
    }

    a {
      color: ${theme.colors.link.color};
      text-decoration: none;

      :hover {
        text-decoration: underline;
      }
    }
  `
);

export { GlobalStyles };
