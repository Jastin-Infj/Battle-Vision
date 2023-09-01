import React from "react";
import { getCurrentQueryMode , getQueryRequestHref, getQueryURL } from "../src/frontend/ts/common";
import { useRouter } from "next/router";

import Messages from '../src/frontend/json/Strings.json';
import Links from '../src/frontend/json/link.json';

import '../src/frontend/scss/_layerbase.scss';
import TextStroke from "../src/frontend/ts/components/_textStroke";


function Header() {

  const router = useRouter();

  //* デモモード確認
  let QUERY_DEMO:string | null | string[] = getQueryURL(Links.Query["mode"].title);

  // 複数クエリある場合は取得
  if(QUERY_DEMO) {
    const multiQuery = QUERY_DEMO.split(" ");
    if(multiQuery.length > 1) {
      QUERY_DEMO = multiQuery;
    }
  }

  //* クエリ関連
  const key_mode = Links.Query["mode"].title;
  const currentMode = getCurrentQueryMode(QUERY_DEMO,key_mode);

  const JSX_DemoMode = () => {

    let render: JSX.Element = null!;

    switch(currentMode) {
      case 'None':
        render = (<></>);
        break;
      case 'demo':
        render = (
          <>
            <p>{Messages.Page.Header.Texts.Demo1}<br />{Messages.Page.Header.Texts.Demo2}</p>
          </>
        );
        break;
    }
    return render;
  }

  //* クエリ関係
  const JSX_StepFlow = (stepNum: number) => {
    
    let render: JSX.Element = null!;
    let text: string = null!;
    let href: string = null!;

    switch(stepNum) {
      case 1:
        text = Messages.Page.Header.Icon.Steps.Text1;
        href = Links.Page.Header.Step1;
        break;
      case 2:
        text = Messages.Page.Header.Icon.Steps.Text2;
        href = Links.Page.Header.Step2;
        break;
      case 3:
        text = Messages.Page.Header.Icon.Steps.Text3;
        href = Links.Page.Header.Step3;
        break;
      case 4:
        text = Messages.Page.Header.Icon.Steps.Text4;
        href = Links.Page.Header.Step4;
        break;
      default:
        new Error(Messages.FrontEnd.DevelopError["01"]);
        break;
    }

    switch(currentMode) {
      case 'None':
        render = (
          <>
            <TextStroke 
              text={text}
              type="Link" 
              href={href} 
            />
          </>
        );
      break;
      case 'demo':
        href = getQueryRequestHref(href,Links.Query.mode.Demo);
        render = (
          <>
            <TextStroke 
              text={text}
              type="Link"
              href={href} 
            />
          </>
        );
      break;
    }

    return render;
  }

  const JSX_HeaderMenu = (num: number , type: string) => {
    let render: JSX.Element = null!;
    let text: string = null!;
    let href: string = "";

    switch(num) {
      case 1:
        text = Messages.Page.Header.Box.Menus.Text1;
        //todo
        break;
      case 2:
        text = Messages.Page.Header.Box.Menus.Text2;
        href = Links.Page.Header.Menu2;
        break;
      case 3:
        text = Messages.Page.Header.Box.Menus.Text3;
        href = Links.Page.Header.Menu3;
        break;
      case 4:
        text = Messages.Page.Header.Box.Menus.Text4;
        href = Links.Page.Header.Menu4;
        break;
      case 5:
        text = Messages.Page.Header.Box.Menus.Text5;
        href = Links.Page.Header.Menu5;
        break;
      case 6:
        text = Messages.Page.Header.Box.Menus.Text6;
        href = Links.Page.Header.Menu6;
        break;
      case 7:
        switch(currentMode) {
          case 'None':
            text = Messages.Page.Header.Box.Menus.Text7;
            href = getQueryRequestHref(router.route,Links.Query.mode.Demo);
            break;
          case 'demo':
            text = Messages.Page.Header.Box.Menus.Text7_disbled;
            href = router.route;
            break;
        }
        break;
      case 8:
        text = Messages.Page.Header.Box.Menus.Text8;
        //todo
        break;
      case 9:
        text = Messages.Page.Header.Box.Menus.Text9;
        //todo
        break;
      default:
        new Error(Messages.FrontEnd.DevelopError["01"]);
        break;
    }

    if(href) {
      switch(currentMode) {
        case 'demo':
          if(num !== 7) {
            href = getQueryRequestHref(href,Links.Query.mode.Demo);
          }
          break;
      }
    }

    switch(type) {
      case 'Link':
        render = (
          <>
            <li>
              <TextStroke text={text} type="Link" href={href} />
            </li>
          </>
        );
        break;
      case 'a':
        render = (
          <>
            <li>
              <TextStroke text={text} type="a" href={href} />
            </li>
          </>
        );
        break;
      case 'span':
        render = (
          <>
            <li>
              <TextStroke text={text} />
            </li>
          </>
        );
        break;
    }

    return render;
  };

  return (
    <>
      <header>
        <input type="checkbox" name={"header__icon"} id={"header__icon"} />
        <div className="header__text_Demo">
          {JSX_DemoMode()}
        </div>
        <div className="header__textbox_search">
          <img />
          <input type="text" placeholder={Messages.Page.Header.Textbox.search} id="name" />
        </div>
        <div className="header__icon_step">
          <div className="row">
            <div className="stepflow" />
            {JSX_StepFlow(1)}
            <div className="arrow" />
          </div>
          <div className="row">
            <div className="stepflow"></div>
            {JSX_StepFlow(2)}
            <div className="arrow"></div>
          </div>
          <div className="row">
            <div className="stepflow"></div>
            {JSX_StepFlow(3)}
            <div className="arrow"></div>
          </div>
          <div className="row">
            <div className="stepflow"></div>
            {JSX_StepFlow(4)}
          </div>
        </div>
        <div className="header__icon_login">
          <div className="icon">
            <label htmlFor={"header__icon"} id={"header__icon"}>
              <img className="none" id={"header__icon"} />
            </label>
          </div>
          <div className="logout disabled">
            <span>
            {Messages.Page.Header.Icon.Logins.Logout}
              <span>{Messages.Page.Header.Icon.Logins.Logout}</span>
            </span>
          </div>
          <div className="login disabled">
            <span>
            {Messages.Page.Header.Icon.Logins.Login}
              <span>{Messages.Page.Header.Icon.Logins.Login}</span>
            </span>
          </div>
        </div>
        <div className="header__box_menu">
          <ul>
            {JSX_HeaderMenu(1 , "span")}
            {JSX_HeaderMenu(2 , "Link")}
            {JSX_HeaderMenu(3 , "Link")}
            {JSX_HeaderMenu(4 , "Link")}
            {JSX_HeaderMenu(5 , "Link")}
            {JSX_HeaderMenu(6 , "Link")}
            {JSX_HeaderMenu(7 , "a")}
            {JSX_HeaderMenu(8 , "span")}
            {JSX_HeaderMenu(9 , "span")}
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;