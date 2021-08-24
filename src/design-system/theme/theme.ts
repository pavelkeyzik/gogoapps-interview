import { tokens } from "./tokens";

type SpaceType = {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
};

type Theme = {
  space: SpaceType;
  colors: {
    body: {
      background: string;
      color: string;
    };
    link: {
      color: string;
    };
    header: {
      background: string;
    };
  };
};

const defaultTheme: Theme = {
  space: {
    0: "0px",
    1: "4px",
    2: "8px",
    3: "16px",
    4: "24px",
  },
  colors: {
    body: {
      background: tokens.gray[100],
      color: tokens.gray[10],
    },
    link: {
      color: tokens.gray[10],
    },
    header: {
      background: tokens.gray[90],
    },
  },
};

const themes = {
  default: defaultTheme,
};

export type { Theme };
export { themes };
