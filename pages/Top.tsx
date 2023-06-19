//* Module
import React , { useEffect , useState } from 'react';
import classnames from 'classnames';
import BrowserDetector from 'browser-dtector';
//* 共通関連
import { getBrowserEnv } from '../src/frontend/ts/common';
//* 設定関連
import Messages from '../src/frontend/json/Strings.json';
import { CustomJSX } from '../src/frontend/ts/jsxform';
//* CSS
import '../src/frontend/scss/top.scss';

//* 画像ファイル
// @ts-ignore IDE側がエラーとして認識するため
import image from '../src/frontend/img/topimage.jpg';

function Top() {
  const [style_titlelogo,SetStyleTitlelogo] = useState<CustomJSX.cssStyle>();
  const [style_fotter_text,SetStyleFotterText] = useState<CustomJSX.cssStyle>();
  const [style_fotter_copyright,SetStyleFotterCopyRight] = useState<CustomJSX.cssStyle>();
  const [style_fotter_accounts,SetStyleFotterAccounts] = useState<CustomJSX.cssStyle>();
  const [style_fotter_links,SetStyleFotterLinks] = useState<CustomJSX.cssStyle>();

  useEffect(() => {
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

    SetStyleTitlelogo(createElement());
    SetStyleFotterText(createElement('footer__messages'));
    SetStyleFotterCopyRight(createElement("footer__copyright"));
    SetStyleFotterAccounts(createElement("footer__accounts"));
    SetStyleFotterLinks(createElement("footer__links"));

  },[]);

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
          <img src={image.src} alt="image"/>
          <div className='opacity'></div>
        </div>
      </div>
    </>
  );
}

export default Top;