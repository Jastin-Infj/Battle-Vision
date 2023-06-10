// @ts-ignore IDE側がエラーとして認識するため
import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';

export const END_POINT = 'http://localhost:8000/api/users';

const rootEl:Element | null = document.querySelector("#root");
if (rootEl) {
  const root = createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <div className="text-yellow-400">Hello Tailwind css!!</div>
      <App />
    </React.StrictMode>
  );
}