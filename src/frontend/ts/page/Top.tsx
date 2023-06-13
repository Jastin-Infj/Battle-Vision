import React from 'react';
import classnames from 'classnames';
import BrowserDetector from 'browser-dtector';
import { Top } from '../jsxform';

import { getBrowserEnv } from '../common';

// @ts-ignore IDE側がエラーとして認識するため
import image from '../../img/topimage.jpg';

import Messages from '../../json/Strings.json';
import '../../scss/page/top.scss';


// <img src={image} alt="image" className="absolute left-0 top-0 w-full h-full bg-fixed bg-left-top overflow-hidden object-cover"/>

function Page_Top() {

  const browser = new BrowserDetector(window.navigator.userAgent);
  const useBrowser = browser.parseUserAgent();

  const TitleLogo = () => {
    const env = getBrowserEnv(useBrowser);

    let styles:Top.Titlelogo = {
      "font-bold": true,
      "text-9xl": true,
      "text-white": true,
      "text-stroke-4": true,
      "text-stroke-titlelogo": true,
      "italic": true,
      "whitespace-nowrap": true
    };

    if(env === "Cent Browser"){
      styles = { ...styles , "font-titlelogo-c": true };
    } else {
      styles = { ...styles , "font-titlelogo": true };
    }

    return styles;

  };

  const style_titlelogo = TitleLogo();

  return (
    <>
      <div className="absolute left-0 top-0 h-screen w-screen">
        <body className="absolute left-0 top-0 w-full h-full">
          <div>
            <img src={image} alt="image" className="absolute left-0 top-0 w-full h-full bg-fixed bg-left-top overflow-hidden object-cover"/>
            <div className="absolute left-0 top-0 w-full h-full bg-black opacity-50"></div>
          </div>
          <main className="absolute left-0 top-0 w-full h-full">
            <div className="m-9">
              <p className={classnames(style_titlelogo)}>{Messages.Title}</p>
            </div>
            <sub className="left-[70%] right-[70%] top-[0%]">
              <div className="relative">
                <button className="relative w-[300px] h-[100px] bg-page-top-btn-bgColor rounded-2xl border-solid border-[1px] border-page-top-btn-boColor drop-shadow-xl">
                  <p className=" text-white text-3xl">{Messages.Page.Top.Button.Demo}</p>
                </button>
              </div>
              <div className="relative top-[15%]">
              <button className="relative w-[300px] h-[100px] bg-page-top-btn-bgColor rounded-2xl border-solid border-[1px] border-page-top-btn-boColor drop-shadow-xl">
                  <p className="text-white text-3xl">{Messages.Page.Top.Button.Used}</p>
                </button>
              </div>
            </sub>
          </main>
        </body>
      </div>
    </>
  );
}

export default Page_Top;