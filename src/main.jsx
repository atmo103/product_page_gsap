import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import * as Sentry from "@sentry/react";
import { browserTracingIntegration, replayIntegration } from "@sentry/react";

Sentry.init({
  dsn: "https://5a38d05d4913df6fc8749d8c817fb1044510284466683904.ingest.us.sentry.io/4510284466683904",
  integrations: [
    browserTracingIntegration(),                     // ✅ performance básico
    // OJO: quitamos metricsAggregatorIntegration (opcional y variable por versión)
    replayIntegration({ maskAllText: false, blockAllMedia: false }), // ✅ Session Replay
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  sendDefaultPii: true,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
