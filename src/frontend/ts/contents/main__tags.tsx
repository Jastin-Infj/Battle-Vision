import React , { useContext, useEffect, useReducer, useState } from "react";

// style json
import Messages from '../../json/Strings.json';

// use Context
import { CONTEXT_ENV_WINDOW } from "../components/updateComponent";

//* Reducer

type State_Checkbox = {
  list: Array<boolean>;
};

type Action = {
  payload: {
    target: EventTarget
    index: number;
  }
};

function reducer(state: State_Checkbox , action: Action): State_Checkbox {
  let isHasKey = 'checked';

  // input 属性
  if(action.payload.target[isHasKey] !== undefined) {
    state.list[action.payload.index] = action.payload.target[isHasKey];
  }

  return state;
}

function Main__Tags() {

  //* 初期化処理
  const ENV_WINDOW = useContext(CONTEXT_ENV_WINDOW);
  const MAX_TAG = 13;
  const CHECKED_INIT = false;

  let init_state:State_Checkbox = {
    list: []
  };
  for(let i = 0; i < MAX_TAG;++i) {
    init_state.list.push(CHECKED_INIT);
  }
  const [state,dispatch] = useReducer(reducer,init_state);

  //* タグスタイルの定義
  let render_tagStyles = {
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
  
  const ENV_ARRAY_NULLS = {
    "pc": [],
    "tablet-lg": [],
    "ipad": [],
    "tablet": [],
    "phone": []
  };

  let generate_div = {...ENV_ARRAY_NULLS};
  const [JSX_TAGS , setJSX_TAGS] = useState({...ENV_ARRAY_NULLS});

  useEffect(() => {
    Object.keys(render_tagStyles).forEach((key) => {
      render_tagStyles[key].forEach((vals , index) => {
        let e_checkbox = vals.map((val) => {

          let e_input = state.list[val] ? <input type="checkbox" checked/>  : <input type="checkbox"/>; 

          let e_label = (
            <label key={val} onClick={(e) => {
              let sendData:Action = {
                payload: {
                  target: e.target,
                  index: val
                }
              };

              dispatch(sendData);
            }}>
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
                    <input type="checkbox" />
                    <span />
                    {Messages.Page.Main.Checkbox.Tags[val]}
                  </label>
                )
              }
              break;
          }

          return e_label;
        });

        let e_div = (
          <div key={index}>
            {e_checkbox}
          </div>
        );

        generate_div[key].push(e_div);
      })
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

    setJSX_TAGS(generate_div);

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