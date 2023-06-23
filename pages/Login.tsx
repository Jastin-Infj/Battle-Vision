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
            <p>デモ<br />モード</p>
          </div>
          <div className="header__textbox_search">
            <img />
            <input type="text" placeholder="チームの検索" id="name" />
          </div>
          <div className="header__icon_step">
            <div>
              <div className="stepflow"></div>
              <span className="main">
                ポケモンを追加
                <span className="back">ポケモンを追加</span>
              </span>
              <div className="arrow"></div>
            </div>
            <div>
              <div className="stepflow"></div>
              <span className="main">
                チームを登録
                <span className="back">チームを登録</span>
              </span>
              <div className="arrow"></div>
            </div>
            <div>
              <div className="stepflow"></div>
              <span className="main">
                対戦を記録
                <span className="back">対戦を記録</span>
              </span>
              <div className="arrow"></div>
            </div>
            <div>
              <div className="stepflow"></div>
              <span className="main">
                対戦記録を見る
                <span className="back">対戦記録を見る</span>
              </span>
            </div>
          </div>
          <div className="header__icon_login">
            <div className="icon">
              <img className="none"/>
            </div>
            <div className="logout disabled">
              <span>
                ログアウト
                <span>ログアウト</span>
              </span>
            </div>
            <div className="login disabled">
              <span>
                ログイン
                <span>ログイン</span>
              </span>
            </div>
          </div>
          <div className="header__box_menu">
            <ul>
              <li>
                <span className="main">
                  マイページ
                  <span className="back">マイページ</span>
                </span>
              </li>
              <li>
                <span className="main">
                  ポケモン新規登録
                  <span className="back">ポケモン新規登録</span>
                </span>
              </li>
              <li>
                <span className="main">
                  ポケモン一覧
                  <span className="back">ポケモン一覧</span>
                </span>
              </li>
              <li>
                <span className="main">
                  チーム一覧
                  <span className="back">チーム一覧</span>
                </span>
              </li>
              <li>
                <span className="main">
                  対戦を記録
                  <span className="back">対戦を記録</span>
                </span>
              </li>
              <li>
                <span className="main">
                  成績結果を見る
                  <span className="back">成績結果を見る</span>
                </span>
              </li>
              <li>
                <span className="main">
                  デモデータを試す
                  <span className="back">デモデータを試す</span>
                </span>
              </li>
              <li>
                <span className="main">
                  チュートリアル
                  <span className="back">チュートリアル</span>
                </span>
              </li>
              <li>
                <span className="main">
                  ログアウト
                  <span className="back">ログアウト</span>
                </span>
              </li>
            </ul>
          </div>
        </header>
        <main>main</main>
        <footer>
          <div className="footer__text_messages">
            <span>{Messages.Page.Top.Fotter.Messages.Text1}</span>
            <span>{Messages.Page.Top.Fotter.Messages.Text2}</span>
            <span>{Messages.Page.Top.Fotter.Messages.Text3}</span>
          </div>
          <div className="footer__text_copyright">
            <span>{Messages.Page.Top.Fotter.Copyright.Text1}</span>
            <span>{Messages.Page.Top.Fotter.Copyright.Text2}</span>
          </div>
          <div className="footer__button_accounts">
            <div className="title">
              <span>{Messages.Page.Top.Fotter.Accounts.Text}</span>
            </div>
            <div className="buttons">
              <button className="SignUp">
                <span>
                  {Messages.Page.Top.Fotter.Accounts.SignUp}
                </span>
              </button>
              <button className="SignIn">
                <span>
                  {Messages.Page.Top.Fotter.Accounts.SignIn}
                </span>
              </button>
              <button className="Demo">
                <span>
                  {Messages.Page.Top.Fotter.Accounts.Demo}
                </span>
              </button>
            </div>
          </div>
          <div className="footer__link_info">
            <a>{Messages.Page.Top.Fotter.Links.Text1}</a>
            <a>{Messages.Page.Top.Fotter.Links.Text2}</a>
            <a>{Messages.Page.Top.Fotter.Links.Text3}</a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Login;