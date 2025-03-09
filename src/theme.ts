import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  globalCss: {
    body: {
      fontFamily: ".AppleSystemUIFont", // "Note Sans JP Variable" is available
    },
  },
  theme: {
    keyframes: {
      gradient: {
        "0%": {
          backgroundPosition: "0% 50%",
        },
        "50%": {
          backgroundPosition: "100% 50%",
        },
        "100%": {
          backgroundPosition: "0% 50%",
        },
      },
    },
    tokens: {
      fonts: {
        muted: { value: "M PLUS 1p" },
      },
      sizes: {
        "header-height": {
          value: "80px",
        },
        "opened-header-height": {
          value: "240px",
        },
        "hero-height": {
          value: "20vh",
        },
        "hero-skip": {
          value: "calc(20vh - 80px)",
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
