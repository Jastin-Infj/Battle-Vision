import React, { createContext, useContext, useEffect , useState } from "react";

// import
import { ENV_WINDOW , WINDOW_SCREEN , getCurrentWindowScreenSize , getENV_WINDOW } from "../common";

export const CONTEXT_ENV_WINDOW = createContext({
  ENV_WindowsScreen: ""
});

export function ENV_Window(props) {
  const [CURRENT_WINDOW_SIZE,setCurrentWindow] = useState<WINDOW_SCREEN>({"width":0,"height":0});
  const [ENV_WindowsScreen,setWindowScreen] = useState<ENV_WINDOW>(null!);

  useEffect(() => {
    setCurrentWindow(getCurrentWindowScreenSize(window));

    //* 常にWindowの領域を取得
    window.setInterval(() => {
      setCurrentWindow(getCurrentWindowScreenSize(window));
    },1000);
  },[]);

  useEffect(() => {
    // Window 領域取得後 環境設定を取得
    setWindowScreen(getENV_WINDOW(CURRENT_WINDOW_SIZE));
  },[CURRENT_WINDOW_SIZE]);

  return (
    <>
      <CONTEXT_ENV_WINDOW.Provider value={{ENV_WindowsScreen: ENV_WindowsScreen}}>
        {props.children}
      </CONTEXT_ENV_WINDOW.Provider>
    </>
  );
};