import React from "react";

// style scss or json
import Messages from '../src/frontend/json/Strings.json';
import '../src/frontend/scss/adjustment.scss';

// style JSX
import Canvas from "../src/frontend/ts/components/Canvas";
import Header from "../src/frontend/ts/components/Header";
import Footer from "../src/frontend/ts/components/Footer";

// import
import Adjustment__Gender from "../src/frontend/ts/contents/adjustment__gender";

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
    }
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
  Object.keys(jsx_style).forEach((key) => {

    // 無関係のキーはスキップ
    if(key == "Param") {
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
        <div>
          <div className="create__basic_text">
            <div className="basic__text_help">
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

  });

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
                <span>{Messages.Page.Adjustment.Text.Base}</span>
                <span>{Messages.Page.Adjustment.Text.IV}</span>
                <span>{Messages.Page.Adjustment.Text.EV}</span>
                <span>{Messages.Page.Adjustment.Text.Param}</span>
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
            </div>
            <div className="create__move">
              
            </div>
          </div>
          <div className="main__detail">
            <div className="detail__patry">

            </div>
            <div className="detail__search">

            </div>
          </div>
        </main>
        <Footer />
      </Canvas>
    </>
  );
}

export default Adjustment;