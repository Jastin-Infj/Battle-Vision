import { createRoot } from 'react-dom/client';

import App from "./components/App";

const rootEl = document.querySelector("#root");
const root = createRoot(rootEl);
root.render(
  <>
    <App />
  </>
);