import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/* typefaces — Onest (display) · Inter (body) · Fragment Mono (readouts) */
import "@fontsource-variable/onest";
import "@fontsource-variable/inter";
import "@fontsource/fragment-mono";

/* ThreeUI Community component styles (MIT) */
import "@designcodeio/threeui/style.css";

/* Transporter design system */
import "./index.css";

import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
