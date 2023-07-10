import React, { ReactFragment, useState } from "react";

// style scss or json
import Messages from '../src/frontend/json/Strings.json';
import '../src/frontend/scss/main.scss';

// style JSX
import Canvas from "../src/frontend/ts/components/Canvas";
import Header from "../src/frontend/ts/components/Header";
import Footer from "../src/frontend/ts/components/Footer";

function Main() {
  const MAX_PATRY_MEMBERS = 6;
  const CREATE_PATRY = ['me','target'];

  interface I_STATE_PATRYS {
    [key:string]: Array<string>;
  };
  const STATE_PATRYS:I_STATE_PATRYS = {
    'me': [],
    'target': []
  };

  interface I_JSX_PATRY {
    [key:string]: Array<React.JSX.Element>;
  }
  const JSX_PATRYS:I_JSX_PATRY = {
    'me': [],
    'target': []
  };

  let stateList_me = ['none_me','active','soon'];
  let stateList_target = ['none_target','active','soon'];

  //* イベントハンドラ定義
  const ChangeState = (e) => {

    //! 何番目のインデックスかを確認したい
    console.log(e);

    //! ステート更新処理
    // let [isactive , setActive ] = State;
    // let num = stateList.indexOf(isactive);

    // if(stateList.length !== (num + 1)) {
    //   setActive(stateList[num + 1]);
    // }else {
    //   setActive(stateList[0]);
    // }
    
  };

  //* パーティー枠のスタイル定義
  CREATE_PATRY.map((key) => {
    //* state 状態 初期化
    for(let i = 0; i < MAX_PATRY_MEMBERS;++i){
      let initstate: null | string = null;
      if(key === 'me') {
        initstate = stateList_me[0];
      } else {
        initstate = stateList_target[0];
      }
      STATE_PATRYS[key].push(initstate);
    }

    //* スタイル 定義
    for(let i = 0; i < Math.ceil(STATE_PATRYS[key].length / 2); ++i) {
      let generate_div = (
        <div>
          <div id={key + "_" + i} className={STATE_PATRYS[key][i]} onClick={(e) => {
            ChangeState(e);
          }}>
            <img />
          </div>
          <div id={key + "_" + (i + 1)} className={STATE_PATRYS[key][i + 1]} onClick={(e) => {
            ChangeState(e);
          }}>
            <img />
          </div>
        </div>
      );
      
      JSX_PATRYS[key].push(generate_div);
    }
  });

  let [isactive_me,setActive_me] = useState(STATE_PATRYS["me"]);
  let [isactive_target,setActive_target] = useState(STATE_PATRYS["target"]);

  //* タグのスタイル定義
  let lists = Messages.Page.Main.Checkbox.Tags.map((val) => {
    return (
      <label key={val}>
        <input type="checkbox" />
        <img />
        {val}
      </label>
    );
  });

  //配置の拡張性があまりないため for は利用しない

  return (
    <>
      <Canvas>
        <Header />
        <main>
          <div className="main__filter">
            <span className="main__text_filter">{Messages.Page.Main.Text.Filter}</span>
            <div className="main__group_tag">
              <div>
                {lists[0]}
                {lists[7]}
              </div>
              <div>
                {lists[1]}
                {lists[8]}
              </div>
              <div>
                {lists[2]}
                {lists[9]}
              </div>
              <div>
                {lists[3]}
              </div>
              <div>
                {lists[4]}
                {lists[10]}
              </div>
              <div>
                {lists[5]}
                {lists[11]}
              </div>
              <div>
                {lists[6]}
                {lists[12]}
              </div>
            </div>
            <div className="main__group_day">
              <span>{Messages.Page.Main.Text.Register}</span>
              <input type="date"></input>
            </div>
            <div className="main__group_day">
              <span>{Messages.Page.Main.Text.Update}</span>
              <input type="date"></input>
            </div>
          </div>
          <div className="main__group_winlose">
            <span className="winlose__text">{Messages.Page.Main.Text.Winlose}</span>
            <div className="winlose__box">
              <div className="winlose__box_win">
                <span>50%</span>
              </div>
              <div className="winlose__box_lose">
                <span>50%</span>
              </div>
            </div>
            <div className="winlose__buttons">
              <button>
                <span>{Messages.Page.Main.Text.Win}</span>
              </button>
              <button>
                <span>{Messages.Page.Main.Text.Lose}</span>
              </button>
            </div>
            <div className="winlose__reports">
              <img />
              <button>
                <span>{Messages.Page.Main.Text.Report}</span>
              </button>
            </div>
          </div>
          <div className="main__group_battlecanvas">
            <div className="battlecanvas__me">
              <img className="battlecanvas__img_history" />
              <div className="battlecanvas__select">
                <img />
                <div>
                  <span>パーティ名</span>
                </div>
                <img />
              </div>
              <div className="battlecanvas__patry">
                {JSX_PATRYS["me"][0]}
                {JSX_PATRYS["me"][1]}
                {JSX_PATRYS["me"][2]}
              </div>
            </div>
            <div className="battlecanvas__other">
              <button>
                <span>{Messages.Page.Main.Text.Reset}</span>
              </button>
              <div>
                <img />
                <span>{Messages.Page.Main.Text.Vs}</span>
              </div>
            </div>
            <div className="battlecanvas__target">
              <img className="battlecanvas__img_history" />
              <div className="battlecanvas__patry">
                {JSX_PATRYS["target"][0]}
                {JSX_PATRYS["target"][1]}
                {JSX_PATRYS["target"][2]}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </Canvas>
    </>
  )
}

export default Main;