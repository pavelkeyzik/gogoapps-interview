import { tokens } from "./tokens";

type AnimationType = {
  speed: string;
};

type CornerType = {
  0: string;
  1: string;
  2: string;
};

type SpaceType = {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
};

type Theme = {
  animation: AnimationType;
  space: SpaceType;
  corner: CornerType;
  colors: {
    primary: string;
    body: {
      background: string;
    };
    link: {
      color: string;
    };
    input: {
      background: string;
      color: string;
    };
    text: {
      primary: string;
      secondary: string;
    };
    box: {
      background: string;
    };
  };
};

const defaultTheme: Theme = {
  animation: {
    speed: "0.2s",
  },
  corner: {
    0: "0px",
    1: "4px",
    2: "8px",
  },
  space: {
    0: "0px",
    1: "4px",
    2: "8px",
    3: "16px",
    4: "24px",
    5: "48px",
  },
  colors: {
    primary: tokens.primary,
    body: {
      background: tokens.gray[100],
    },
    link: {
      color: tokens.gray[10],
    },
    input: {
      background: tokens.gray[100],
      color: tokens.gray[10],
    },
    text: {
      primary: tokens.gray[10],
      secondary: tokens.gray[30],
    },
    box: {
      background: tokens.gray[90],
    },
  },
};

const themes = {
  default: defaultTheme,
};

export type { Theme };
export { themes };
