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
      color: string;
    };
    link: {
      color: string;
    };
    header: {
      background: string;
    };
    input: {
      background: string;
      color: string;
    };
    aside: {
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
      color: tokens.gray[10],
    },
    link: {
      color: tokens.gray[10],
    },
    header: {
      background: tokens.gray[90],
    },
    input: {
      background: tokens.gray[100],
      color: tokens.gray[10],
    },
    aside: {
      background: tokens.gray[90],
    },
  },
};

const themes = {
  default: defaultTheme,
};

export type { Theme };
export { themes };
