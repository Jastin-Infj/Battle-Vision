import React, { useRef, useState } from "react";

// style scss or json
import Messages from '../src/frontend/json/Strings.json';
import '../src/frontend/scss/main.scss';

// style JSX
import Canvas from "./Canvas";
import Header from "./Header";
import Footer from "./Footer";

// style JSX Main
import Main__Tags from "../src/frontend/ts/contents/main__tags";

// import
import { ENV_Window } from "../src/frontend/ts/components/updateComponent";

function Main() {
  const MAX_PATRY_MEMBERS = 6;
  const CREATE_PATRY = ['me','target'];

  // render
  const JSX_PATRYS:object = {
    'me': [],
    'target': []
  };

  // DOM 操作
  const REFS_PATRYS:object = {
    "me": [],
    "target": []
  };

  //* className ステート状態
  let stateList_me = ['none_me','active','soon'];
  let stateList_target = ['none_target','active','soon'];

  // イベントハンドラにて実際適用
  let [,setActive_me] = useState(REFS_PATRYS["me"]);
  let [,setActive_target] = useState(REFS_PATRYS["target"]);

  //* イベントハンドラ定義
  const ChangeState = (target) => {

    let key = target[0];
    let row = target[1];

    let targets = REFS_PATRYS[key];

    // class 変更
    if(key === 'me') {
      let next = stateList_me.indexOf(targets[row].current.className) + 1;
      if(next === stateList_me.length) {
        next = 0;
      }

      targets[row].current.className = stateList_me[next];
      setActive_me(targets[key]);
    } else {
      let next = stateList_target.indexOf(targets[row].current.className) + 1;
      if(next === stateList_target.length) {
        next = 0;
      }

      targets[row].current.className = stateList_target[next];
      setActive_target(targets[key]);
    }
    
  };

  //* パーティー枠のスタイル定義
  CREATE_PATRY.map((key) => {
    let state_patrys:object = {
      "me": [],
      "target": []
    };
    //* state 状態 初期化
    for(let i = 0; i < MAX_PATRY_MEMBERS;++i){
      let initstate: null | string = null;
      if(key === 'me') {
        initstate = stateList_me[0];
      } else {
        initstate = stateList_target[0];
      }
      state_patrys[key].push(initstate);
    }

    //* スタイル 定義
    for(let i = 0; i < Math.ceil(state_patrys[key].length / 2); ++i) {
      let num_1 = i * 2;
      let ref_1 = useRef<HTMLDivElement>(null!);
      let num_2 = i * 2 + 1;
      let ref_2 = useRef<HTMLDivElement>(null!);

      let generate_div = (
        <div>
          <div ref={ref_1} className={state_patrys[key][num_1]} onClick={() => {
            ChangeState([key , num_1]);
          }}>
            <img />
          </div>
          <div ref={ref_2} className={state_patrys[key][num_2]} onClick={() => {
            ChangeState([key , num_2]);
          }}>
            <img />
          </div>
        </div>
      );

      REFS_PATRYS[key].push(ref_1);
      REFS_PATRYS[key].push(ref_2);
      
      JSX_PATRYS[key].push(generate_div);
    }
  });

  //* 日付データの定義
  let _startday:any = new Date().toLocaleDateString('ja-JP',{
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).split("/").join("-");

  let [startDay,setstartDay]:any = useState(_startday);
  let [updateDay,setupdateDay] = useState();

  //配置の拡張性があまりないため for は利用しない


  return (
    <>
      <Canvas>
        <Header />
        <main>
          <div className="main__filter">
            <span className="main__text_filter">{Messages.Page.Main.Text.Filter}</span>
            <ENV_Window>
              <Main__Tags />
            </ENV_Window>
            <div className="main__group_day">
              <div>
                <span>{Messages.Page.Main.Text.Register}</span>
                <input type="date" defaultValue={startDay}></input>
              </div>
              <div>
                <span>{Messages.Page.Main.Text.Update}</span>
                <input type="date"></input>
              </div>
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
              <span className="battlecanvas__text_patryname">{Messages.Page.Main.Text.VS_Me}</span>
              <img className="battlecanvas__img_history" />
              <div className="component_patry_select_div">
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
              <span className="battlecanvas__text_patryname">{Messages.Page.Main.Text.VS_Target}</span>
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