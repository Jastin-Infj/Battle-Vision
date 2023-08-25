import React from "react";
//* common
import { LinkTextObject } from '../src/frontend/ts/jsxform';
import { getQueryURL, getQueryURLParams , onClickEvents } from "../src/frontend/ts/common";

// style json or scss
import Messages from '../src/frontend/json/Strings.json';
import Links from '../src/frontend/json/link.json';
import '../src/frontend/scss/_layerbase.scss';
import Link from "next/link";

function Footer() {

  // デモモード
  const QUERY_DEMO = getQueryURL("demo");
  const QUERY_PARAMS = getQueryURLParams("demo");

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
              onClickEvents({next: Links.Page.Footer.SignUp});
            }}>
              <span>
                {Messages.Page.Fotter.Accounts.SignUp}
              </span>
            </button>
            <button className="SignIn" onClick={() => {
              onClickEvents({next: Links.Page.Footer.SignIn});
            }}>
              <span>
                {Messages.Page.Fotter.Accounts.SignIn}
              </span>
            </button>
            <button className="Demo" onClick={() => {
              if(QUERY_DEMO === null) {
                onClickEvents({next: Links.Page.Footer.Demo , query: {mode: Links.Query.Demo}});
              } else {
                onClickEvents({next: Links.Page.Footer.Demo});
              }
            }}>
              <span>
                {QUERY_DEMO === null ? Messages.Page.Fotter.Accounts.Demo : Messages.Page.Fotter.Accounts.Demo_enable}
              </span>
            </button>
          </div>
        </div>
        <div className="footer__link_info">
          {
            !QUERY_DEMO ? <Link href={Links.Page.Footer.Text1}>{Messages.Page.Fotter.Links.Text1}</Link> 
            : <Link href={Links.Page.Footer.Text1 + QUERY_PARAMS}>{Messages.Page.Fotter.Links.Text1}</Link> 
          }
          {
            !QUERY_DEMO ? <Link href={Links.Page.Footer.Text2}>{Messages.Page.Fotter.Links.Text2}</Link> 
            : <Link href={Links.Page.Footer.Text2 + QUERY_PARAMS}>{Messages.Page.Fotter.Links.Text2}</Link> 
          }
          {
            !QUERY_DEMO ? <Link href={Links.Page.Footer.Text3}>{Messages.Page.Fotter.Links.Text3}</Link> 
            : <Link href={Links.Page.Footer.Text3 + QUERY_PARAMS}>{Messages.Page.Fotter.Links.Text3}</Link> 
          }
        </div>
      </footer>
    </>
  );
}

export default Footer;