import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";
import { Provider } from "./components/ui/provider";
import { Toaster } from "./components/ui/toaster.tsx";

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
