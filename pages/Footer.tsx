import React from "react";
//* next js
import { useRouter } from "next/router";

//* common
import { LinkTextObject } from '../src/frontend/ts/jsxform';
import { QUERY_PATTREN, getCurrentQueryMode, getQueryRequest, getQueryRequestHref, getQueryURL, getQueryURLParams , onClickEvents } from "../src/frontend/ts/common";

// style json or scss
import Messages from '../src/frontend/json/Strings.json';
import Links from '../src/frontend/json/link.json';
import '../src/frontend/scss/_layerbase.scss';
import Link from "next/link";

function Footer() {

  // デモモード
  let QUERY_DEMO:string | null | string[] = getQueryURL(Links.Query["mode"].title);
  const QUERY_PARAMS = getQueryURLParams(Links.Query["mode"].title);
  const router = useRouter();

  // 複数クエリある場合は取得
  if(QUERY_DEMO) {
    let multiQuery = QUERY_DEMO.split(" ");
    if(multiQuery.length > 1) {
      QUERY_DEMO = multiQuery;
    }
  }

  //* クエリ作成
  const JSX_Demo = () => {

    let key_mode = Links.Query["mode"].title;
    let req:any = '';
    let render:JSX.Element = null!;

    let currentMode = getCurrentQueryMode(QUERY_DEMO,key_mode);
    switch(currentMode) {
      case 'None':
        render = (
          <>
            <button className="Demo" onClick={() => {
              // None
              req = getQueryRequest(key_mode,Links.Query.mode.Demo);

              onClickEvents(router,{next: Links.Page.Footer.Demo,query: req});
            }}>
              <span>
                {Messages.Page.Fotter.Accounts.Demo}
              </span>
            </button>
          </>
        );
        break;
      case 'demo':
        render = (
          <>
            <button className="Demo" onClick={() => {
              onClickEvents(router,{next: Links.Page.Footer.Demo});
            }}>
              <span>
                {Messages.Page.Fotter.Accounts.Demo_disabled}
              </span>
            </button>
          </>
        );
        break;
      case 'tutorial':
        render = (
          <>
            <button className="Demo" onClick={() => {
              // tutorial & demo
              req = getQueryRequest(key_mode,QUERY_PATTREN["Demo&Tutorial"]);
  
              onClickEvents(router,{next: Links.Page.Footer.Demo, query: req});
            }}>
              <span>
                {Messages.Page.Fotter.Accounts.Demo}
              </span>
            </button>
          </>
        );
        break;
      case 'demo & tutorial':
        render = (
          <>
            <button className="Demo" onClick={() => {
              // tutorial
              req = getQueryRequest(key_mode,Links.Query.mode.Tutorial);
  
              onClickEvents(router,{next: Links.Page.Footer.Demo, query: req});
            }}>
              <span>
                {Messages.Page.Fotter.Accounts.Demo_disabled}
              </span>
            </button>
          </>
        );
        break;
    }

    return render;
  }

  const JSX_Top = () => {
    let key_mode = Links.Query["mode"].title;
    let render:JSX.Element = null!;

    let currentMode = getCurrentQueryMode(QUERY_DEMO,key_mode);

    switch(currentMode) {
      case 'None':
      case 'tutorial':
        render = (
          <>
            <Link href={Links.Page.Footer.Text1}>
              {Messages.Page.Fotter.Links.Text1}
            </Link>
          </>
        );
        break;
      case 'demo':
        // mode?=demo
        render = (
          <>
            <Link href={getQueryRequestHref(Links.Page.Footer.Text1,Links.Query.mode.Demo)}>
              {Messages.Page.Fotter.Links.Text1}
            </Link>
          </>
        );
        break;
      case 'demo & tutorial':
        render = (
          <>
            <Link href={getQueryRequestHref(Links.Page.Footer.Text1,QUERY_PATTREN["Demo&Tutorial"])}>
              {Messages.Page.Fotter.Links.Text1}
            </Link>
          </>
        );
        break;
    }

    return render;
  };

  const JSX_Conditions = () => {
    let key_mode = Links.Query["mode"].title;
    let render:JSX.Element = null!;

    let currentMode = getCurrentQueryMode(QUERY_DEMO,key_mode);

    switch(currentMode) {
      case 'None':
        render = (
          <>
            <Link href={Links.Page.Footer.Text2}>
              {Messages.Page.Fotter.Links.Text2}
            </Link> 
          </>
        );
        break;
      case 'demo':
        // mode?=demo
        render = (
          <>
            <Link href={getQueryRequestHref(Links.Page.Footer.Text2,Links.Query.mode.Demo)}>
              {Messages.Page.Fotter.Links.Text2}
            </Link>
          </>
        );
        break;
      case 'tutorial':
        render = (
          <>
            <Link href={getQueryRequestHref(Links.Page.Footer.Text2,Links.Query.mode.Tutorial)}>
              {Messages.Page.Fotter.Links.Text2}
            </Link>
          </>
        );
        break;
      case 'demo & tutorial':
        render = (
          <>
            <Link href={getQueryRequestHref(Links.Page.Footer.Text2,QUERY_PATTREN["Demo&Tutorial"])}>
              {Messages.Page.Fotter.Links.Text2}
            </Link>
          </>
        );
        break;
    }

    return render;
  };

  const JSX_PrivacyPolicy = () => {
    let key_mode = Links.Query["mode"].title;
    let render:JSX.Element = null!;

    let currentMode = getCurrentQueryMode(QUERY_DEMO,key_mode);

    switch(currentMode) {
      case 'None':
        render = (
          <>
            <Link href={Links.Page.Footer.Text3}>
              {Messages.Page.Fotter.Links.Text3}
            </Link> 
          </>
        );
        break;
      case 'demo':
        // mode?=demo
        render = (
          <>
            <Link href={getQueryRequestHref(Links.Page.Footer.Text3,Links.Query.mode.Demo)}>
              {Messages.Page.Fotter.Links.Text3}
            </Link>
          </>
        );
        break;
      case 'tutorial':
        render = (
          <>
            <Link href={getQueryRequestHref(Links.Page.Footer.Text3,Links.Query.mode.Tutorial)}>
              {Messages.Page.Fotter.Links.Text3}
            </Link>
          </>
        );
        break;
      case 'demo & tutorial':
        render = (
          <>
            <Link href={getQueryRequestHref(Links.Page.Footer.Text3,QUERY_PATTREN["Demo&Tutorial"])}>
              {Messages.Page.Fotter.Links.Text3}
            </Link>
          </>
        );
        break;
    }

    return render;
  };

  //* リンクありテキスト作成
  const Links_textCreate = (texts: string[] , linkObj: LinkTextObject[] = []) => {
    let list =  texts.map((text,index) => {
      const match = linkObj.filter((item) => item.num === index);
      if(match.length > 0) {
        return <Link key={text} href={match[0].link.href} className={match[0].addclass}>{text}</Link>;
      } else {
        return (
          <span key={text + index}>{text}</span>
        );
      }
    });

    return list;
  }

  return (
    <>
      <footer>
        <div className="footer__text_messages">
          <span>
            {Links_textCreate(Messages.Page.Fotter.Messages["Text1 List"],[
              {link: new URL(Links.Page.Footer["Pokemon Inc"]), num: 1},
              {link: new URL(Links.Page.Footer["Nintedo Inc"]), num: 3},
              {link: new URL(Links.Page.Footer["Creatures Inc"]), num: 5},
              {link: new URL(Links.Page.Footer["Gamefreak Inc"]), num: 7}
            ])}
          </span>
          <span>{Messages.Page.Fotter.Messages.Text2}</span>
          <span>
            {Links_textCreate(Messages.Page.Fotter.Messages["Text3 List"],[
              {link: new URL(Links.Page.Footer["Flaticon"]), num: 1}
            ])}
          </span>
        </div>
        <div className="footer__text_copyright">
          <span>{Messages.Page.Fotter.Copyright.Text1}</span>
          <span>{Messages.Page.Fotter.Copyright.Text2}</span>
        </div>
        <div className="footer__button_accounts">
          <div className="title">
            <span>{Messages.Page.Fotter.Accounts.Text}</span>
          </div>
          <div className="buttons">
            <button className="SignUp" onClick={() => {
              onClickEvents(router,{next: Links.Page.Footer.SignUp});
            }}>
              <span>
                {Messages.Page.Fotter.Accounts.SignUp}
              </span>
            </button>
            <button className="SignIn" onClick={() => {
              onClickEvents(router,{next: Links.Page.Footer.SignIn});
            }}>
              <span>
                {Messages.Page.Fotter.Accounts.SignIn}
              </span>
            </button>
            {JSX_Demo()}
          </div>
        </div>
        <div className="footer__link_info">
          {JSX_Top()}
          {JSX_Conditions()}
          {JSX_PrivacyPolicy()}
        </div>
      </footer>
    </>
  );
}

export default Footer;