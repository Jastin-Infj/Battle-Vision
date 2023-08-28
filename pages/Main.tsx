import React, { useState , useRef } from "react";

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
import ModeSelect from "../src/frontend/ts/components/_modeSelect";

function Main() {

  const MAX_PATRY_MEMBERS = 6;
  const CREATE_PATRY = ['me','target'];

  // DOM 操作
  const REFS_PATRYS:object = {
    "me": [],
    "target": []
  };

  for(let i = 0; i < MAX_PATRY_MEMBERS;++i) {
    REFS_PATRYS["me"].push(useRef<HTMLDivElement>(null!));
    REFS_PATRYS["target"].push(useRef<HTMLDivElement>(null!));
  }

  //* className ステート状態
  const stateList_me = ['none_me','active','soon'];
  const stateList_target = ['none_target','active','soon'];

  // イベントハンドラにて実際適用
  const [,setActive_me] = useState(REFS_PATRYS["me"]);
  const [,setActive_target] = useState(REFS_PATRYS["target"]);

  //* イベントハンドラ定義
  const ChangeState = (target) => {
    debugger;
    const key = target[0];
    const row = target[1];

    const targets = REFS_PATRYS[key];
    
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

  //* 日付データの定義
  const _startday:any = new Date().toLocaleDateString('ja-JP',{
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).split("/").join("-");

  const [startDay,]:any = useState(_startday);
  // todo
  // const [updateDa,setupdateDay] = useState();

  //配置の拡張性があまりないため for は利用しない

  return (
    <>
      <Canvas id="Main">
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
            <ModeSelect id="mode_battleCanvas" classname="ipad__mode">
              <img />
            </ModeSelect>
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
                <div className="col">
                  <div ref={REFS_PATRYS["me"][0]} className={stateList_me[0]} onClick={() => {
                    ChangeState([CREATE_PATRY[0] , 0]);
                  }}>
                    <img />
                  </div>
                <div ref={REFS_PATRYS["me"][1]} className={stateList_me[0]} onClick={() => {
                    ChangeState([CREATE_PATRY[0] , 1]);
                  }}>
                    <img />
                  </div>
                </div>
                <div className="col">
                  <div ref={REFS_PATRYS["me"][2]} className={stateList_me[0]} onClick={() => {
                    ChangeState([CREATE_PATRY[0] , 2]);
                  }}>
                    <img />
                  </div>
                <div ref={REFS_PATRYS["me"][3]} className={stateList_me[0]} onClick={() => {
                    ChangeState([CREATE_PATRY[0] , 3]);
                  }}>
                    <img />
                  </div>
                </div>
                <div className="col">
                  <div ref={REFS_PATRYS["me"][4]} className={stateList_me[0]} onClick={() => {
                    ChangeState([CREATE_PATRY[0] , 4]);
                  }}>
                    <img />
                  </div>
                <div ref={REFS_PATRYS["me"][5]} className={stateList_me[0]} onClick={() => {
                    ChangeState([CREATE_PATRY[0] , 5]);
                  }}>
                    <img />
                  </div>
                </div>
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
                <div className="col">
                  <div ref={REFS_PATRYS["target"][0]} className={stateList_me[0]} onClick={() => {
                      ChangeState([CREATE_PATRY[1] , 0]);
                    }}>
                      <img />
                  </div>
                  <div ref={REFS_PATRYS["target"][1]} className={stateList_target[0]} onClick={() => {
                      ChangeState([CREATE_PATRY[1] , 1]);
                    }}>
                      <img />
                  </div>
                </div>
                <div className="col">
                  <div ref={REFS_PATRYS["target"][2]} className={stateList_target[0]} onClick={() => {
                    ChangeState([CREATE_PATRY[1] , 2]);
                  }}>
                    <img />
                  </div>
                  <div ref={REFS_PATRYS["target"][3]} className={stateList_target[0]} onClick={() => {
                    ChangeState([CREATE_PATRY[1] , 3]);
                  }}>
                    <img />
                  </div>
                </div>
                <div className="col">
                  <div ref={REFS_PATRYS["target"][4]} className={stateList_target[0]} onClick={() => {
                    ChangeState([CREATE_PATRY[1] , 4]);
                  }}>
                    <img />
                  </div>
                  <div ref={REFS_PATRYS["target"][5]} className={stateList_target[0]} onClick={() => {
                    ChangeState([CREATE_PATRY[1] , 5]);
                  }}>
                    <img />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </Canvas>
    </>
  );
}

export default Main;