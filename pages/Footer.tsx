import React from "react";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { useSearchParams } from 'next/navigation';

// style json or scss
import Messages from '../src/frontend/json/Strings.json';
import Links from '../src/frontend/json/link.json';
import '../src/frontend/scss/_layerbase.scss';
import Link from "next/link";

interface Action {
  next: string;
  query?: ParsedUrlQuery;
}

function Footer() {

  // 画面遷移
  const router = useRouter();
  const onClickEvents = (action: Action) => {
    if(action.query) {
      router.query = action.query;
    }
    router.push(action.next);
  };

  // デモモード
  const searchParams = useSearchParams();
  const QUERY_PARAM = searchParams.get('mode');

  return (
    <>
      <footer>
        <div className="footer__text_messages">
          <span>{Messages.Page.Fotter.Messages.Text1}</span>
          <span>{Messages.Page.Fotter.Messages.Text2}</span>
          <span>{Messages.Page.Fotter.Messages.Text3}</span>
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
              if(QUERY_PARAM === null) {
                onClickEvents({next: Links.Page.Footer.Demo_enable , query: {mode: "demo"}});
              } else {
                onClickEvents({next: Links.Page.Footer.Demo_disabled});
              }
            }}>
              <span>
                {QUERY_PARAM === null ? Messages.Page.Fotter.Accounts.Demo : Messages.Page.Fotter.Accounts.Demo_enable}
              </span>
            </button>
          </div>
        </div>
        <div className="footer__link_info">
          <Link href={Links.Page.Footer.Text1}>{Messages.Page.Fotter.Links.Text1}</Link>
          <Link href={Links.Page.Footer.Text2}>{Messages.Page.Fotter.Links.Text2}</Link>
          <Link href={Links.Page.Footer.Text3}>{Messages.Page.Fotter.Links.Text3}</Link>
        </div>
      </footer>
    </>
  );
}

export default Footer;