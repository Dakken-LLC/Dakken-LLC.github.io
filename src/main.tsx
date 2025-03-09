import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";
import { Provider } from "./components/ui/provider";
import { Toaster } from "./components/ui/toaster.tsx";

// @ts-expect-error - This is a font source package
import "@fontsource/bebas-neue";
// @ts-expect-error - This is a font source package
import "@fontsource-variable/noto-sans-jp";
// @ts-expect-error - This is a font source package
import "@fontsource-variable/inter";
// @ts-expect-error - This is a font source package
import "@fontsource/m-plus-1p";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider forcedTheme="light">
        <App />
        <Toaster />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
