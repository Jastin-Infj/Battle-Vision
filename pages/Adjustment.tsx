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
    CreateID: null
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