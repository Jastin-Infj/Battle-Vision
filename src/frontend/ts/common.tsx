//* next JS
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import { NextLinkRouter } from './jsxform';

// any型を減らすのが目的
export function OutputLogTypeOf(prop:any,varname?: string): void {
  console.log(`%c${{var:varname,type:typeof prop}}`,'color: green');
}

//----------------------------------------------------------------
//----------------------------------------------------------------
//                        ブラウザチェック
//----------------------------------------------------------------
//----------------------------------------------------------------

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

//----------------------------------------------------------------
//----------------------------------------------------------------
//                        URLパラメータ
//----------------------------------------------------------------
//----------------------------------------------------------------

export const QUERY_INIT = '?mode=';

export function onClickEvents(action: NextLinkRouter): void {
  const router = useRouter();
  if(action.query) {
    router.query = action.query;
    action.next += QUERY_INIT + router.query.mode;
  }
  router.push(action.next);
};

export function getQueryURL(search: string): string | null {
  const searchParams = useSearchParams();
  let query = searchParams.get(search);
  return query;
}

export function getQueryURLParams(search: string): string {
  let query = getQueryURL(search);

  const QUERY_PARAMS = QUERY_INIT + query;
  return QUERY_PARAMS;
}