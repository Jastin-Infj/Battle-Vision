//* Module
import React , { useEffect , useState } from 'react';
import classnames from 'classnames';
import BrowserDetector from 'browser-dtector';
//* nextJs
import { useRouter } from 'next/router';

//* common
import { QUERY_PATTREN, getBrowserEnv, getCurrentQueryMode, getQueryRequest, getQueryURL, onClickEvents } from '../src/frontend/ts/common';
import { CustomJSX } from '../src/frontend/ts/jsxform';


//* 設定関連
import Messages from '../src/frontend/json/Strings.json';
import Links from '../src/frontend/json/link.json';

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

  const router = useRouter();

  let currentQueryMode:string | null | string[] = getQueryURL(Links.Query["mode"].title);
  if(currentQueryMode) {
    const multiQuery = currentQueryMode.split(" ");
    if(multiQuery.length > 1) {
      currentQueryMode = multiQuery;
    }
  }

  const getQuery__Use = () => {

    const key_mode = Links.Query["mode"].title;

    const currentMode = getCurrentQueryMode(currentQueryMode,key_mode);

    switch(currentMode) {
      case 'None':
        return getQueryRequest(key_mode,Links.Query.mode.Demo);
      case 'tutorial':
        return getQueryRequest(key_mode,Links.Query.mode.Tutorial);
      case 'demo':
      case 'demo & tutorial':
        return getQueryRequest(key_mode,QUERY_PATTREN["Demo&Tutorial"]);
    }
  };

  useEffect(() => {
    const browser = new BrowserDetector(window.navigator.userAgent);
    const useBrowser = browser.parseUserAgent();
    // console.log(window.screen);

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
              <button name='use' onClick={() => {
                onClickEvents(router,{next: Links.Page.Top.Demo , query: getQuery__Use()});
              }}>
                <span>{Messages.Page.Top.Button.Demo}</span>
              </button>
            </div>
            <div>
              <button name='demo' onClick={() => {
                onClickEvents(router,{next: Links.Page.Top.Used});
              }}>
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