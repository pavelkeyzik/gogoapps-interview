import { tokens } from "./tokens";

type BreakpointsType = {
  0: string;
};

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
  breakpoints: BreakpointsType;
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
    spinner: {
      primaryLine: string;
      secondaryLine: string;
    };
    button: {
      secondary: {
        border: string;
        borderHover: string;
        color: string;
        colorHover: string;
      };
    };
  };
};

const defaultTheme: Theme = {
  breakpoints: {
    0: "544px",
  },
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
    spinner: {
      primaryLine: tokens.gray[20],
      secondaryLine: tokens.gray[60],
    },
    button: {
      secondary: {
        border: tokens.gray[50],
        borderHover: tokens.red[50],
        color: tokens.gray[20],
        colorHover: tokens.red[50],
      },
    },
  },
};

const themes = {
  default: defaultTheme,
};

export type { Theme };
export { themes };
