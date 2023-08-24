// any型を減らすのが目的
export function OutputLogTypeOf(prop:any,varname?: string): void {
  console.log(`%c${{var:varname,type:typeof prop}}`,'color: green');
}

export function getBrowserEnv (env:import('browser-dtector').BrowserInfoFull) {
    
  switch(env.name) {
    case 'Google Chrome':
      switch(env.version) {
        // Google Chrome
        case '108.0.0.0':
          return env.name;
        // Cent Browser
        case '102.0.0.0':
          return "Cent Browser";
      }
      break;
  }
  
  return env.name;

}

export interface WINDOW_SCREEN {
  width: number;
  height: number;
}

export function getCurrentWindowScreenSize(window:any): WINDOW_SCREEN {
  let current_h = window.innerHeight;
  let current_w = window.innerWidth;
  
  return {
    "width": current_w,
    "height": current_h
  };
}

export type ENV_WINDOW = 'pc' | 'tablet-lg' | 'ipad' | 'tablet' | 'phone';

export function getENV_WINDOW(currentWindow:WINDOW_SCREEN):ENV_WINDOW {
  let env_window:ENV_WINDOW = null!;
  if(currentWindow.width > 1280) {
    env_window = 'pc';
  } else if(currentWindow.width > 834) {
    env_window = 'tablet-lg';
  } else if(currentWindow.width > 768) {
    env_window = 'ipad';
  } else if(currentWindow.width > 428) {
    env_window = 'tablet';
  } else {
    env_window = 'phone';
  }

  return env_window;
}