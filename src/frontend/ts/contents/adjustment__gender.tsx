import React, { useReducer } from "react";

// style json
import Messages from '../../json/Strings.json';

//* Reducer

type Gender = 'Man' | 'Woman' | 'None';

type Action = {
  payload: {
    current: Gender
  }
};

function reducer(state: Gender , action: Action): Gender {
  let genderFlow: Array<Gender> = ['Man','Woman','None'];

  let next = genderFlow.indexOf(action.payload.current) + 1;
  if(next === genderFlow.length) {
    state = genderFlow[0];
  } else {
    state = genderFlow[next];
  }

  return state;
}

function Adjustment__Gender() {
  const [state,dispatch] = useReducer(reducer,'None');

  let g_element:React.JSX.Element = null!;

  //* スタイル 定義
  switch(state) {
    case 'Man':
      g_element = (
        <div className="basic__gender_man" onClick={() => {
          let sendData = {
            payload: {
              current: state
            }
          };
  
          dispatch(sendData);
        }}>
          <span>{Messages.Page.Adjustment.Text.Gender.Man}</span>
        </div>
      );
      break;
    case 'Woman':
      g_element = (
        <div className="basic__gender_woman" onClick={() => {
          let sendData = {
            payload: {
              current: state
            }
          };
  
          dispatch(sendData);
        }}>
          <span>{Messages.Page.Adjustment.Text.Gender.Woman}</span>
        </div>
      );
      break;
    case 'None':
      g_element = (
        <div className="basic__gender_none" onClick={() => {
          let sendData = {
            payload: {
              current: state
            }
          };
  
          dispatch(sendData);
        }}>
          <span>{Messages.Page.Adjustment.Text.Gender.None}</span>
        </div>
      );
      break;
  }

  return (
    <>
      {g_element}
    </>
  )
}

export default Adjustment__Gender;