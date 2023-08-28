import React , { useContext, useEffect , useRef, useState } from "react";

// style json
import Messages from '../../json/Strings.json';

// use Context
import { CONTEXT_ENV_WINDOW } from "../components/updateComponent";

//* Reducer

function Main__Tags() {

  //* 初期化処理
  const ENV_WINDOW = useContext(CONTEXT_ENV_WINDOW);
  const MAX_TAG = 13;

  //! test
  const [text,] = useState('');

  //* タグスタイルの定義
  const render_tagStyles = {
    "pc": [
      [0,7],
      [1,8],
      [2,9],
      [3],
      [4,10],
      [5,11],
      [6,12]
    ],
    "ipad": [
      [0,1,2,3],
      [4,5,6],
      [7,8,9],
      [10,11,12]
    ]
  };

  //* フラグ管理
  const CHECKBOX_STATE:object = {};
  for(let i = 0; i < MAX_TAG;++i) {
    CHECKBOX_STATE[i] = useRef<HTMLInputElement>(null!);
  }
  const [state,] = useState(CHECKBOX_STATE);
  const [CREATE_FLAG,setCREATE_FLAG] = useState(false);
  
  const ENV_ARRAY_NULLS = {
    "pc": [],
    "tablet-lg": [],
    "ipad": [],
    "tablet": [],
    "phone": []
  };

  const generate_div = {...ENV_ARRAY_NULLS};
  const [JSX_TAGS , setJSX_TAGS] = useState({...ENV_ARRAY_NULLS});

  useEffect(() => {

    Object.keys(render_tagStyles).forEach((key) => {
      render_tagStyles[key].forEach((vals , index) => {
        const e_checkbox = vals.map((val) => {
          let e_input:React.JSX.Element = null!;

          if(CREATE_FLAG === false) {
            e_input = <input ref={state[val]} type="checkbox" value={text}/>;
          } else {
            e_input = <input ref={state[val]} type="checkbox" value={text}/>;
          }

          let e_label = (
            <label key={val}>
              {e_input}
              <span />
              {Messages.Page.Main.Checkbox.Tags[val]}
            </label>
          );

          switch(key) {
            case 'ipad':
              // 0番目のみ 4つあり css スタイルを変更するため
              if(index === 0) {
                e_label = (
                  <label key={val} className="other">
                    {e_input}
                    <span />
                    {Messages.Page.Main.Checkbox.Tags[val]}
                  </label>
                );
              }
              break;
          }

          return e_label;
        });

        const e_div = (
          <div key={index}>
            {e_checkbox}
          </div>
        );

        generate_div[key].push(e_div);
      });
    });

    // 同じ形式はここに記述
    Object.keys(generate_div).forEach((key) => {
      switch(key) {
        case 'tablet-lg':
          generate_div[key] = generate_div['pc'];
          break;
        case 'tablet':
        case 'phone':
          generate_div[key] = generate_div['ipad'];
          break;
      }
    });

    //* 更新
    setJSX_TAGS(generate_div);
    setCREATE_FLAG(true);

  },[ENV_WINDOW]);

  return (
    <>
      <div className="main__group_tag">
        {JSX_TAGS[ENV_WINDOW.ENV_WindowsScreen]}
      </div>
    </>
  );
}

export default Main__Tags;