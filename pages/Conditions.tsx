import React from "react";

// style scss or json
import Messages from '../src/frontend/json/Strings.json';
import '../src/frontend/scss/conditions.scss';

// style JSX
import Canvas from "../src/frontend/ts/components/Canvas";
import Header from "../src/frontend/ts/components/Header";
import Footer from "../src/frontend/ts/components/Footer";

function Conditions() {

  let renderJsx:any = {};
  for(const key in Messages.Page.PrivacyPolicy.Text.Message) {
    //メッセージを先に取得
    const msg = Messages.Page.PrivacyPolicy.Text.Message[key].map(val => <p key={key + "_" + val} className="main__text_messageText">{val}</p>);

    //出力スタイルの定義
    const renderstyle = (
      <div className="main__text_title">
        <span className="main__text_messageTitle">{Messages.Page.PrivacyPolicy.Text.Titles[key]}</span>
        <div className="main__br" />
        {msg}
      </div>
    );

    //保存
    renderJsx[key] = renderstyle;
  }

  return (
    <>
      <Canvas>
        <Header />
        <main>
          {renderJsx[1]}
          {renderJsx[2]}
          {renderJsx[3]}
          {renderJsx[4]}
          {renderJsx[5]}
          {renderJsx[6]}
          {renderJsx[7]}
          {renderJsx[8]}
          {renderJsx[9]}
          {renderJsx[10]}
          {renderJsx[11]}
          {renderJsx[12]}
          {renderJsx[13]}
          {renderJsx[14]}
          {renderJsx[15]}
          {renderJsx[16]}
        </main>
        <Footer /> 
      </Canvas>
    </>
  );
};

export default Conditions;