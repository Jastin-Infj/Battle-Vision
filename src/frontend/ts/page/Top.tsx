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

  console.log(window.screen);

  const createElement = (str? :string) => {
    const env = getBrowserEnv(useBrowser);

    let styles:CustomJSX.cssStyle = {};

    if(env === "Cent Browser"){
      styles = { ...styles , "font-Inter-Default": true };
    } else {
      styles = { ...styles , "font-Inter-Chrome": true };
    }

    // 追加でclass を割り当てる

    if(str) {
      styles = { ...styles , [str]: true};
    }

    return styles;

  };

  const style_titlelogo = createElement();
  const style_fotter_text = createElement("footer__messages");
  const style_fotter_copyright = createElement("footer__copyright");
  const style_fotter_accounts = createElement("footer__accounts");
  const style_fotter_links = createElement("footer__links");

  return (
    <>
      <div className='layer-canvas'>
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
        <div className='footer'>
          <div className={classnames(style_fotter_text)}>
            <span>{Messages.Page.Top.Fotter.Messages.Text1}</span>
            <span>{Messages.Page.Top.Fotter.Messages.Text2}</span>
            <span>{Messages.Page.Top.Fotter.Messages.Text3}</span>
          </div>
          <div className={classnames(style_fotter_copyright)}>
            {/* <img></img> */}
            <span>{Messages.Page.Top.Fotter.Copyright.Text1}</span>
            <span>{Messages.Page.Top.Fotter.Copyright.Text2}</span>
          </div>
          <div className={classnames(style_fotter_accounts)}>
            <span>{Messages.Page.Top.Fotter.Accounts.Text}</span>
            <div>
              <button id="SignUp">
                <span>
                  {Messages.Page.Top.Fotter.Accounts.SignUp}
                </span>
              </button>
              <button id="SignIn">
                <span>
                  {Messages.Page.Top.Fotter.Accounts.SignIn}
                </span>
              </button>
              <button id="Demo">
                <span>
                  {Messages.Page.Top.Fotter.Accounts.Demo}
                </span>
              </button>
            </div>
          </div>
          <div className={classnames(style_fotter_links)}>
            <a>{Messages.Page.Top.Fotter.Links.Text1}</a>
            <a>{Messages.Page.Top.Fotter.Links.Text2}</a>
            <a>{Messages.Page.Top.Fotter.Links.Text3}</a>
          </div>
        </div>
        <div className='back'>
          <img src={image} alt="image"/>
          <div className='opacity'></div>
        </div>
      </div>
    </>
  );
}

export default Page_Top;