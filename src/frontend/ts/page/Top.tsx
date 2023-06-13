//* Module
import React from 'react';
import classnames from 'classnames';
import BrowserDetector from 'browser-dtector';
//* 共通関連
import { getBrowserEnv } from '../common';
//* 設定関連
import Messages from '../../json/Strings.json';
import { CustomJSX } from '../jsxform';
//* CSS
import '../../scss/page/top.scss';
//* 画像ファイル
// @ts-ignore IDE側がエラーとして認識するため
import image from '../../img/topimage.jpg';

function Page_Top() {

  const browser = new BrowserDetector(window.navigator.userAgent);
  const useBrowser = browser.parseUserAgent();

  const TitleLogo = () => {
    const env = getBrowserEnv(useBrowser);

    let styles:CustomJSX.cssStyle = {
      "text-titlelogo": true
    };

    if(env === "Cent Browser"){
      styles = { ...styles , "font-Inter-Default": true };
    } else {
      styles = { ...styles , "font-Inter-Chrome": true };
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
              <span className={classnames(style_titlelogo)}>{Messages.Title}</span>
            </div>
            <sub className="left-[70%] right-[70%] top-[0%]">
              <div className="relative">
                <button className="relative w-[300px] h-[100px] bg-page-top-btn-bgColor rounded-2xl border-solid border-[1px] border-page-top-btn-boColor">
                  <span className=" text-white text-3xl">{Messages.Page.Top.Button.Demo}</span>
                </button>
              </div>
              <div className="relative top-[15%]">
              <button className="relative w-[300px] h-[100px] bg-page-top-btn-bgColor rounded-2xl border-solid border-[1px] border-page-top-btn-boColor drop-shadow-2xl">
                  <span className="text-white text-3xl">{Messages.Page.Top.Button.Used}</span>
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