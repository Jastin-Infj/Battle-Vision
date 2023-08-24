//* Module
import React , { useEffect , useState } from 'react';
import classnames from 'classnames';
import BrowserDetector from 'browser-dtector';
//* 共通関連
import { getBrowserEnv } from '../src/frontend/ts/common';
//* 設定関連
import Messages from '../src/frontend/json/Strings.json';
import { CustomJSX } from '../src/frontend/ts/jsxform';

//* JSX
import Canvas from './Canvas';
import Footer from './Footer';

//* CSS
import '../src/frontend/scss/top.scss';

//* 画像ファイル
// @ts-ignore IDE側がエラーとして認識するため
import image from '../src/frontend/img/topimage.jpg';

function Top() {
  const [style_titlelogo,SetStyleTitlelogo] = useState<CustomJSX.cssStyle>();
  const [,SetStyleFotterText] = useState<CustomJSX.cssStyle>();
  const [,SetStyleFotterCopyRight] = useState<CustomJSX.cssStyle>();
  const [,SetStyleFotterAccounts] = useState<CustomJSX.cssStyle>();
  const [,SetStyleFotterLinks] = useState<CustomJSX.cssStyle>();

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
      <Canvas id='Top'>
        <img src={image.src} className='back__image' />
        <main>
          <div className="main__text_titlelogo">
            <span className={classnames(style_titlelogo)}>{Messages.Title}</span>
          </div>
          <div className="main__button_start">
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
        </main>
        <Footer />
      </Canvas>
    </>
  );
}

export default Top;