import { createRoot } from 'react-dom/client';

import App from "./components/App";

export const ENDPOINT_URL = 'http://localhost:8000/api/users/'

const rootEl = document.querySelector("#root");
const root = createRoot(rootEl);
root.render(
  <>
    <App />
  </>
);