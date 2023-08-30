import React from "react";
import { getCurrentQueryMode , getQueryRequestHref, getQueryURL } from "../src/frontend/ts/common";

import Messages from '../src/frontend/json/Strings.json';
import Links from '../src/frontend/json/link.json';

import '../src/frontend/scss/_layerbase.scss';
import TextStroke from "../src/frontend/ts/components/_textStroke";

function Header() {

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
              type="a" 
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
              type="a" 
              href={href} 
            />
          </>
        );
      break;
    }

    return render;
  }

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
            <li>
              <span className="main">
              {Messages.Page.Header.Box.Menus.Text1}
                <span className="back">{Messages.Page.Header.Box.Menus.Text1}</span>
              </span>
            </li>
            <li>
              <span className="main">
              {Messages.Page.Header.Box.Menus.Text2}
                <span className="back">{Messages.Page.Header.Box.Menus.Text2}</span>
              </span>
            </li>
            <li>
              <span className="main">
              {Messages.Page.Header.Box.Menus.Text3}
                <span className="back">{Messages.Page.Header.Box.Menus.Text3}</span>
              </span>
            </li>
            <li>
              <span className="main">
              {Messages.Page.Header.Box.Menus.Text4}
                <span className="back">{Messages.Page.Header.Box.Menus.Text4}</span>
              </span>
            </li>
            <li>
              <span className="main">
              {Messages.Page.Header.Box.Menus.Text5}
                <span className="back">{Messages.Page.Header.Box.Menus.Text5}</span>
              </span>
            </li>
            <li>
              <span className="main">
              {Messages.Page.Header.Box.Menus.Text6}
                <span className="back">{Messages.Page.Header.Box.Menus.Text6}</span>
              </span>
            </li>
            <li>
              <span className="main">
              {Messages.Page.Header.Box.Menus.Text7}
                <span className="back">{Messages.Page.Header.Box.Menus.Text7}</span>
              </span>
            </li>
            <li>
              <span className="main">
              {Messages.Page.Header.Box.Menus.Text8}
                <span className="back">{Messages.Page.Header.Box.Menus.Text8}</span>
              </span>
            </li>
            <li>
              <span className="main">
              {Messages.Page.Header.Box.Menus.Text9}
                <span className="back">{Messages.Page.Header.Box.Menus.Text9}</span>
              </span>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;