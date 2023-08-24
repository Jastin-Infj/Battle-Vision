import React, {useContext, useRef, useState} from "react";

// style scss or json
import Messages from '../src/frontend/json/Strings.json';
import '../src/frontend/scss/adjustment.scss';

// style JSX
import Canvas from "../src/frontend/ts/components/Canvas";
import Header from "../src/frontend/ts/components/Header";
import Footer from "../src/frontend/ts/components/Footer";

// import
import Adjustment__Gender from "../src/frontend/ts/contents/adjustment__gender";
import PatryCanvas from "../src/frontend/ts/components/_patrycanvas";


function Adjustment() {

  interface Render_option {
    required: boolean;
    gender: boolean;
    img_search?: boolean,
    img_select?: boolean
  }

  interface JSX_LIST {
    [key:string]: {
      title: string,
      placeholder?: string,
      option: Render_option
    }
  }

  //* render
  const jsx_style = {
    Name: null,
    TeraType: null,
    Ability: null,
    Item: null,
    Nature: null,
    CreateID: null,
    Param: {
      H: null,
      A: null,
      B: null,
      C: null,
      D: null,
      S: null
    },
    Move: {
      1: null,
      2: null,
      3: null,
      4: null
    },
    Tags: {},
    Buttons: {},
    FilterResult: {},
  };

  //* コンテンツごとに異なる場所はここで定義
  let jsx_list:JSX_LIST = {
    Name: {
      title: Messages.Page.Adjustment.Text.Name,
      placeholder: Messages.Page.Adjustment.PlaceHolder.Name,
      option: {
        required: true,
        gender: true
      }
    },
    TeraType: {
      title: Messages.Page.Adjustment.Text.TeraType,
      placeholder: Messages.Page.Adjustment.PlaceHolder.TeraType,
      option: {
        required: true,
        gender: false
      }
    },
    Ability: {
      title: Messages.Page.Adjustment.Text.Ability,
      placeholder: Messages.Page.Adjustment.PlaceHolder.Ability,
      option: {
        required: true,
        gender: false
      }
    },
    Item: {
      title: Messages.Page.Adjustment.Text.Item,
      placeholder: Messages.Page.Adjustment.PlaceHolder.Item,
      option: {
        required: false,
        gender: false
      }
    },
    Nature: {
      title: Messages.Page.Adjustment.Text.Nature,
      placeholder: Messages.Page.Adjustment.PlaceHolder.Nature,
      option: {
        required: false,
        gender: false
      }
    },
    CreateID: {
      title: Messages.Page.Adjustment.Text.CreateID,
      option: {
        required: false,
        gender: false,
        img_search: false,
        img_select: false
      }
    }
  };

  //* スタイル適用
  Object.keys(jsx_style).forEach((key:string) => {

    let g_flag = true;
    //* 関係ない JSXスタイルは 何も処理をしない
    switch (key) {
      case 'Name':
      case 'TeraType':
      case 'Ability':
      case 'Item':
      case 'Nature':
      case 'CreateID':
        break;
      default:
        g_flag = false;
        break;
    }

    // if return にしないと ts 2322が発生する
    if(!g_flag) {
      return;
    }

    //* デフォルト値の設定
    if(jsx_list[key].option.img_search === undefined) {
      jsx_list[key].option.img_search = true;
    }
    if(jsx_list[key].option.img_select === undefined) {
      jsx_list[key].option.img_select = true;
    }

    //* 必須フィールド
    let jsx_option_required = (
      <div className="basic__required">
        <div className="stroke-text">
          <span className="main">{Messages.Page.Adjustment.Text.Required}</span>
          <span className="back">{Messages.Page.Adjustment.Text.Required}</span>
        </div>
      </div>
    );

    //* 検索ボックス
    let jsx_box = (
      <input type="text" />
    );

    if(jsx_list[key].placeholder !== undefined) {
      jsx_box = (
        <input type="text" placeholder={jsx_list[key]["placeholder"]} />
      );
    }

    //* 性別
    let jsx_option_gender = (
      <Adjustment__Gender />
    );

    let jsx_common = (
      <>
        <div className="create__basic_group">
          <div className="create__basic_text">
            <div className="component_text_help">
              <span>{Messages.Page.Adjustment.Text.Help}</span>
            </div>
            <span className="basic__text_name">
              {jsx_list[key].title}
            </span>
            {jsx_list[key].option.required ? jsx_option_required : null}
          </div>
          <div className="create__basic_box">
            {jsx_list[key].option.img_search ? <img /> : null }
            {jsx_box}
            {jsx_list[key].option.img_select ? <img /> : null}
            {jsx_list[key].option.gender ? jsx_option_gender : null}
          </div>
        </div>
      </>
    );

    jsx_style[key] = jsx_common;
  });

  //* パラメータ
  Object.keys(jsx_style["Param"]).forEach((key) => {
    let jsx:React.JSX.Element = null!;
    let jsx_common:React.JSX.Element = (
      <>
        <input type="number" maxLength={3}></input>
        <input type="number" maxLength={3}></input>
        <input type="number" maxLength={3}></input>
      </>
    );
    switch (key) {
      case 'H':
        jsx = (
          <>
            <div className="param__paramator">
              <span>{Messages.Page.Adjustment.Text.Param__H}</span>
              <input type="number" readOnly placeholder="80"></input>
              {jsx_common}
            </div>
          </>
        );
        break;
      case 'A':
        jsx = (
          <>
            <div className="param__paramator">
              <span>{Messages.Page.Adjustment.Text.Param__A}</span>
              <input type="number" readOnly placeholder="40"></input>
              {jsx_common}
            </div>
          </>
        )
        break;
      case 'B':
        jsx = (
          <>
            <div className="param__paramator">
              <span>{Messages.Page.Adjustment.Text.Param__B}</span>
              <input type="number" readOnly placeholder="40"></input>
              {jsx_common}
            </div>
          </>
        )
        break;
      case 'C':
        jsx = (
          <>
            <div className="param__paramator">
              <span>{Messages.Page.Adjustment.Text.Param__C}</span>
              <input type="number" readOnly placeholder="40"></input>
              {jsx_common}
            </div>
          </>
        )
        break;
      case 'D':
        jsx = (
          <>
            <div className="param__paramator">
              <span>{Messages.Page.Adjustment.Text.Param__D}</span>
              <input type="number" readOnly placeholder="40"></input>
              {jsx_common}
            </div>
          </>
        )
        break;
      case 'S':
        jsx = (
          <>
            <div className="param__paramator">
              <span>{Messages.Page.Adjustment.Text.Param__S}</span>
              <input type="number" readOnly placeholder="40"></input>
              {jsx_common}
            </div>
          </>
        )
        break;
    }
    // スタイルを追加
    jsx_style["Param"][key] = jsx;

  });

  //* わざ
  Object.keys(jsx_style["Move"]).forEach((key) => {
    let jsx:React.JSX.Element = null!;

    let jsx_span:React.JSX.Element = null!;

    switch (key) {
      case '1':
        jsx_span = <span>{Messages.Page.Adjustment.Text.Moves.Move1}</span>;
        break;
      case '2':
        jsx_span = <span>{Messages.Page.Adjustment.Text.Moves.Move2}</span>;
        break;
      case '3':
        jsx_span = <span>{Messages.Page.Adjustment.Text.Moves.Move3}</span>;
        break;
      case '4':
        jsx_span = <span>{Messages.Page.Adjustment.Text.Moves.Move4}</span>;
        break;
    }

    jsx = (
      <>
        <div className="move__skill">
          <div className="component_text_help">
            <span>{Messages.Page.Adjustment.Text.Help}</span>
          </div>
          {jsx_span}
          <div className="move__skill_box">
            <img />
            <input placeholder={Messages.Page.Adjustment.PlaceHolder.Move} />
            <img />
          </div>
        </div>
      </>
    );
    // スタイルを適用
    jsx_style["Move"][key] = jsx;

  });

  //* タグ
  Object.keys(Messages.Page.Adjustment.Checkbox).forEach((index) => {
    let jsx:React.JSX.Element = null!;

    jsx = (
      <>
        <label>
          <input type="checkbox" />
          <span />
          {Messages.Page.Adjustment.Checkbox[index]}
        </label>
    </>
    );

    jsx_style["Tags"][index] = jsx;
  });

  //* ボタン
  Object.keys(Messages.Page.Adjustment.Button).forEach((key) => {
    let jsx:React.JSX.Element = null!;

    jsx = (
      <button>
        <div className="stroke-text">
          <span className="main">{Messages.Page.Adjustment.Button[key]}</span>
          <span className="back">{Messages.Page.Adjustment.Button[key]}</span>
        </div>
      </button>
    );

    jsx_style["Buttons"][key] = jsx;
  });

  //* 検索結果の数
  const MAX_RESULT_COL = 12;
  const MAX_RESULT_ROW = 4;

  //* 状態管理
  const State_SelectMode = ['none','selected'];
  const REF_FILTER_RESULT:React.MutableRefObject<HTMLDivElement>[] = [];
  const [,setREF_filter_result] = useState(REF_FILTER_RESULT);

  const ChangeState_Filter_result = (indexs) => {
    let targetNum = (indexs[0] * MAX_RESULT_COL) + indexs[1];
    let target = REF_FILTER_RESULT[targetNum];
    let current_class = target.current.className;
    let next = State_SelectMode.indexOf(current_class) + 1;

    if(next === State_SelectMode.length) {
      next = 0;
    }
    // class 適用
    target.current.className = State_SelectMode[next];
    REF_FILTER_RESULT[targetNum] = target;

    setREF_filter_result(REF_FILTER_RESULT);
  }

  { 
    for(let y = 0; y < MAX_RESULT_ROW;++y) {
      let jsx_row:React.JSX.Element = null!;
      let jsx_render_col:React.JSX.Element[] = [];

      for(let x = 0; x < MAX_RESULT_COL;++x){
        let ref = useRef<HTMLDivElement>(null!);
        let jsx:React.JSX.Element = null!;
        jsx = (
          <>
            <div key={y + " " + x} ref={ref} className={State_SelectMode[0]} onClick={() => {
              ChangeState_Filter_result([y,x]);
            }}>
              <img />
            </div>
          </>
        );
        jsx_render_col.push(jsx);
        REF_FILTER_RESULT.push(ref);
      }
      
      jsx_row = (
        <>
          <div className="col">
            {jsx_render_col["0"]}
            {jsx_render_col["1"]}
            {jsx_render_col["2"]}
            {jsx_render_col["3"]}
            {jsx_render_col["4"]}
            {jsx_render_col["5"]}
            {jsx_render_col["6"]}
            {jsx_render_col["7"]}
            {jsx_render_col["8"]}
            {jsx_render_col["9"]}
            {jsx_render_col["10"]}
            {jsx_render_col["11"]}
          </div>
        </>
      );

      //* 追加
      jsx_style["FilterResult"][y] = jsx_row;
    }
  }

  return (
    <>
      <Canvas>
        <Header />
        <main>
          <div className="main__create">
            <div className="create__basic">
              {jsx_style["Name"]}
              {jsx_style["TeraType"]}
              {jsx_style["Ability"]}
              {jsx_style["Item"]}
              {jsx_style["Nature"]}
              {jsx_style["CreateID"]}
            </div>
            <div className="create__param">
              <div className="param__rows">
                <div className="param__rowText">
                  <span>{Messages.Page.Adjustment.Text.Base}</span>
                </div>
                <div className="param__rowText">
                  <span>{Messages.Page.Adjustment.Text.IV}</span>
                  <div className="component_text_help">
                    <span>{Messages.Page.Adjustment.Text.Help}</span>
                  </div>
                </div>
                <div className="param__rowText">
                  <span>{Messages.Page.Adjustment.Text.EV}</span>
                  <div className="component_text_help">
                    <span>{Messages.Page.Adjustment.Text.Help}</span>
                  </div>
                </div>
                <div className="param__rowText">
                  <span>{Messages.Page.Adjustment.Text.Param}</span>
                </div>
              </div>
              {jsx_style["Param"]["H"]}
              {jsx_style["Param"]["A"]}
              {jsx_style["Param"]["B"]}
              {jsx_style["Param"]["C"]}
              {jsx_style["Param"]["D"]}
              {jsx_style["Param"]["S"]}
              <div className="param__total">
                <span>{Messages.Page.Adjustment.Text.Param__Total}</span>
                <input type="number" readOnly placeholder="40"></input>
                <input type="number"></input>
              </div>
              <div className="param__buttons">
                {jsx_style["Buttons"]["Add"]}
              </div>
              <div className="param__error">
                <span>{Messages.Page.Adjustment.Error["01"]}</span>
              </div>
            </div>
            <div className="create__move">
              <div className="move__days">
                <div className="move__day">
                  <span>{Messages.Page.Adjustment.Text.Days.Start}</span>
                  <input type="date"></input>
                </div>
                <div className="move__day">
                  <span>{Messages.Page.Adjustment.Text.Days.Update}</span>
                  <input type="date"></input>
                </div>
              </div>
              <div className="move__skills">
                {jsx_style["Move"]["1"]}
                {jsx_style["Move"]["2"]}
                {jsx_style["Move"]["3"]}
                {jsx_style["Move"]["4"]}
              </div>
              <div className="move__tags">
                <span>{Messages.Page.Adjustment.Text.Tag}</span>
                <div className="move__tagG">
                  <div>
                    {jsx_style["Tags"]["0"]}
                    {jsx_style["Tags"]["1"]}
                    {jsx_style["Tags"]["2"]}
                  </div>
                  <div>
                    {jsx_style["Tags"]["3"]}
                    {jsx_style["Tags"]["4"]}
                    {jsx_style["Tags"]["5"]}
                  </div>
                </div>
              </div>
              <div className="move__notes">
                <span>{Messages.Page.Adjustment.Text.Notes}</span>
                <textarea />
              </div>
            </div>
          </div>
          <div className="main__detail">
            <div className="detail__patry">
              <PatryCanvas />
            </div>
            <div className="detail__search">
              <div className="search__filter">
                <div>
                  {jsx_style["Tags"]["0"]}
                  {jsx_style["Tags"]["1"]}
                  {jsx_style["Tags"]["2"]}
                  {jsx_style["Tags"]["3"]}
                  {jsx_style["Tags"]["4"]}
                  {jsx_style["Tags"]["5"]}
                </div>
              </div>
              <div className="search__buttons">
                <button>
                  <span>{Messages.Page.Adjustment.Button.Search}</span>
                </button>
                <button>
                  <span>{Messages.Page.Adjustment.Button.Search_Condition}</span>
                </button>
              </div>
              <div className="search__result">
                {jsx_style["FilterResult"]["0"]}
                {jsx_style["FilterResult"]["1"]}
                {jsx_style["FilterResult"]["2"]}
                {jsx_style["FilterResult"]["3"]}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </Canvas>
    </>
  );
}

export default Adjustment;