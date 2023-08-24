import React from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";

// style json or scss
import Messages from '../../json/Strings.json';
import Links from '../../json/link.json';
import '../../scss/_layerbase.scss';

interface Action {
  next: string;
}

function Footer() {

  const router = useRouter();
  const onClickEvents = (action: Action) => {
    router.push(action.next);
  };

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
              onClickEvents({next: '/Login'});
            }}>
              <span>
                {Messages.Page.Fotter.Accounts.SignUp}
              </span>
            </button>
            <button className="SignIn" onClick={() => {
              location.href = Links.Page.Footer.SignIn;
            }}>
              <span>
                {Messages.Page.Fotter.Accounts.SignIn}
              </span>
            </button>
            <button className="Demo">
              <span>
                {Messages.Page.Fotter.Accounts.Demo}
              </span>
            </button>
          </div>
        </div>
        <div className="footer__link_info">
          <a>{Messages.Page.Fotter.Links.Text1}</a>
          <a>{Messages.Page.Fotter.Links.Text2}</a>
          <a>{Messages.Page.Fotter.Links.Text3}</a>
        </div>
      </footer>
    </>
  );
}

export default Footer;