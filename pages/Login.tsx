import React from "react";
import classNames from "classnames";

import Messages from '../src/frontend/json/Strings.json';
import '../src/frontend/scss/login.scss';

function Login() {
  return (
    <>
      <div className='layer-canvas'>
        <header>
          <div className="header__text_Demo">
            <p>{Messages.Page.Header.Texts.Demo1}<br />{Messages.Page.Header.Texts.Demo2}</p>
          </div>
          <div className="header__textbox_search">
            <img />
            <input type="text" placeholder={Messages.Page.Header.Textbox.search} id="name" />
          </div>
          <div className="header__icon_step">
            <div>
              <div className="stepflow"></div>
              <span className="main">
                {Messages.Page.Header.Icon.Steps.Text1}
                <span className="back">{Messages.Page.Header.Icon.Steps.Text1}</span>
              </span>
              <div className="arrow"></div>
            </div>
            <div>
              <div className="stepflow"></div>
              <span className="main">
              {Messages.Page.Header.Icon.Steps.Text2}
                <span className="back">{Messages.Page.Header.Icon.Steps.Text2}</span>
              </span>
              <div className="arrow"></div>
            </div>
            <div>
              <div className="stepflow"></div>
              <span className="main">
              {Messages.Page.Header.Icon.Steps.Text3}
                <span className="back">{Messages.Page.Header.Icon.Steps.Text3}</span>
              </span>
              <div className="arrow"></div>
            </div>
            <div>
              <div className="stepflow"></div>
              <span className="main">
              {Messages.Page.Header.Icon.Steps.Text4}
                <span className="back">{Messages.Page.Header.Icon.Steps.Text4}</span>
              </span>
            </div>
          </div>
          <div className="header__icon_login">
            <div className="icon">
              <img className="none"/>
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
        <main>
          <div className="main__text_title">
            <span>{Messages.Page.Login.Text.Title}</span>
          </div>
          <div className="main__form">
            <div className="loginform">
              <input placeholder={Messages.Page.Login.Form.Login.Mail} />
              <input placeholder={Messages.Page.Login.Form.Login.Password}/>
            </div>
            <span className="password_forgetlink">{Messages.Page.Login.Form.Login.Forget1}<a href="https://www.google.com/">{Messages.Page.Login.Form.Login.Forget2}</a></span>
            <div className="BR">
              <div></div>
              <span>{Messages.Page.Login.Form.BR}</span>
              <div></div>
            </div>
            <div className="login_platform">
              <button className="google">
                <img className="icon" />
                <span className="main">{Messages.Page.Login.Form.Login_Platform.Google}</span>
                <img className="arrow" />
              </button>
              <button className="twitter">
                <img className="icon" />
                <span className="main">{Messages.Page.Login.Form.Login_Platform.Twitter}</span>
                <img className="arrow" />
              </button>
            </div>
          </div>
        </main>
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
              <button className="SignUp">
                <span>
                  {Messages.Page.Fotter.Accounts.SignUp}
                </span>
              </button>
              <button className="SignIn">
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
      </div>
    </>
  );
}

export default Login;