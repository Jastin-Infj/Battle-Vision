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
  const genderFlow: Array<Gender> = ['Man','Woman','None'];

  const next = genderFlow.indexOf(action.payload.current) + 1;
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
        <div className="component__gender_div man" onClick={() => {
          const sendData = {
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
        <div className="component__gender_div woman" onClick={() => {
          const sendData = {
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
        <div className="component__gender_div none" onClick={() => {
          const sendData = {
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
  );
}

export default Adjustment__Gender;