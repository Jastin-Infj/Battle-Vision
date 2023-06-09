//@ts-ignore
import React from 'react';
//@ts-ignore
import { createRoot } from 'react-dom/client';

import App from './components/App';

export const END_POINT:string = 'http://localhost:8000/api/users';

const rootEl:Element | null = document.querySelector("#root");
if(rootEl){
  const root = createRoot(rootEl);
  root.render(
    <>
      <App />
    </>
  );
}