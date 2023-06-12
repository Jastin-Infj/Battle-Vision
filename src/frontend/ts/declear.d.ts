// declare module 'react';
//* react NG useState useEffectなどが moduleとして認識し、IDE側で誤認識するため

declare module 'react-dom/client';
declare module 'react/jsx-runtime';
declare module 'axios';
declare module 'browser-dtector';

declare namespace JSX {
  // 名前は固定
  interface IntrinsicElements {
    body:any,
    div:any,
    p:any,
    span:any,
    ul:any,
    li:any,
    button:any,
    img:any,

    screen: any,
    opasity: any,
    titlelogo: any,
    backbg:any,
    main:any,
    sub: any,
  }
}