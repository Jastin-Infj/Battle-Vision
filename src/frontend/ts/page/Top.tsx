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

    let styles:CustomJSX.cssStyle = {};

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
      <div className="layer-main">
        <div className='layer-canvas'>
          <div>
            <img src={image} alt="image" className="back__img"/>
            <div className="back"></div>
          </div>
          <div className="layer-components">
            <div id="titlelogo">
              <span className={classnames(style_titlelogo)}>{Messages.Title}</span>
            </div>
            <div id="buttons">
              <div>
                <button name='use'>
                  <span>{Messages.Page.Top.Button.Demo}</span>
                </button>
              </div>
              <div>
                <button name='demo'>
                  <span>{Messages.Page.Top.Button.Used}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page_Top;