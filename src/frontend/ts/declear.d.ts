// declare module 'react';
//* react NG useState useEffectなどが moduleとして認識し、IDE側で誤認識するため

declare module 'react-dom/client';
declare module 'react/jsx-runtime';
declare module 'axios';

declare namespace JSX {
  // 名前は固定
  interface IntrinsicElements {
    div:any,
    ul:any,
    li:any,
    span:any
  }
}