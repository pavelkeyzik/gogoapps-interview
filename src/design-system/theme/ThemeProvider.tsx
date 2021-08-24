import { PropsWithChildren } from "react";
import { ThemeProvider as BaseThemeProvider } from "styled-components";

import { GlobalStyles } from "./GlobalStyles";
import { Theme, themes } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

function ThemeProvider(props: PropsWithChildren<unknown>) {
  return (
    <BaseThemeProvider theme={themes.default}>
      <GlobalStyles />
      {props.children}
    </BaseThemeProvider>
  );
}

export { ThemeProvider };
