import React from "react";
import classNames from "classnames";

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
              <span>
                ポケモンを追加
                <span>ポケモンを追加</span>
              </span>
              <div className="arrow"></div>
            </div>
            <div>
              <div className="stepflow"></div>
              <span>
                チームを登録
                <span>チームを登録</span>
              </span>
              <div className="arrow"></div>
            </div>
            <div>
              <div className="stepflow"></div>
              <span>
                対戦を記録
                <span>対戦を記録</span>
              </span>
              <div className="arrow"></div>
            </div>
            <div>
              <div className="stepflow"></div>
              <span>
                対戦記録を見る
                <span>対戦記録を見る</span>
              </span>
            </div>
          </div>
        </header>
        <main>main</main>
        <footer>footer</footer>
      </div>
    </>
  );
}

export default Login;