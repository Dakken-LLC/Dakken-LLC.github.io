import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  globalCss: {
    body: {
      fontFamily: "'Noto Sans JP', sans-serif",
    },
  },
  theme: {
    keyframes: {
      gradient: {
        "0%": {
          backgroundPosition: "0% 0%",
        },
        "50%": {
          backgroundPosition: "0% 100%",
        },
        "100%": {
          backgroundPosition: "0% 0%",
        },
      },
      blink: {
        "25%": {
          opacity: 1,
        },
        "50%": {
          opacity: 0,
        },
        "75%": {
          opacity: 1,
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
