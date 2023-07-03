import React from "react";
import classNames from "classnames";

// style scss or json
import Messages from '../src/frontend/json/Strings.json';
import '../src/frontend/scss/login.scss';

// style JSX
import Canvas from "../src/frontend/ts/components/Canvas";
import Header from '../src/frontend/ts/components/Header';
import Footer from '../src/frontend/ts/components/Footer';

function Login() {
  return (
    <>
      <Canvas>
        <Header />
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
        <Footer />
      </Canvas>
    </>
  );
}

export default Login;