//* next JS
import { NextRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import { NextLinkRouter } from './jsxform';

//* json
import Links from '../json/link.json';
import Messages from '../json/Strings.json';

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
export const QUERY_PATTREN = {
  "Demo&Tutorial": [
    Links.Query.mode.Demo,
    Links.Query.mode.Tutorial
  ]
};

export function onClickEvents(router: NextRouter,action: NextLinkRouter): void {
  // クエリなし
  if(!action.query) {
    router.push(action.next);
  }

  let initQuery = QUERY_INIT;

  // object
  if(action.query) {

    let querys = '';

    if(action.query.mode && typeof(action.query.mode) === 'object') {
      // 複数
      querys = action.query.mode.join('+');
    } else if(action.query.mode) {
      // 1つのみ
      querys = action.query.mode;
    }

    // クエリ指定なし
    if(action.query.mode) {
      action.next += initQuery + querys;
    }

    router.push(action.next);
  }
};

// @return demo
export function getQueryURL(search: string): string | null {
  const searchParams = useSearchParams();
  let query = searchParams.get(search);
  return query;
}

// @return mode?=XXX
export function getQueryURLParams(search: string): string {
  let query = getQueryURL(search);

  const QUERY_PARAMS = QUERY_INIT + query;
  return QUERY_PARAMS;
}

export function getQueryRequest(key:string,param: string | string[]) {
  if(typeof(param) === 'object') {
    // 複数
    let querys:string[] = [];
    querys = param;

    return {
      [key]: querys
    };

  } else {
    // 単体
    let query = '';
    query = param;

    return {
      [key]: query
    };
  }
}

export function getQueryRequestHref(next: string, query: string | string[]) {
  let newQuery:string = '';

  newQuery += QUERY_INIT;

  if(typeof(query) === 'object') {
    // 複数
    newQuery += query.join("+");
  } else {
    // 単体
    newQuery += query;
  }

  return next + newQuery;
}

export type CurrentModeState= 'None' | 'demo' | 'tutorial' | 'demo & tutorial';

export function getCurrentQueryMode(current:string | string[] | null,key: string) {
  let mode:CurrentModeState = null!;

  // demo & tutorial
  let Demo_Tutorial = [
    Links.Query.mode.Demo,
    Links.Query.mode.Tutorial
  ];

  if(key === Links.Query["mode"].title) {
    if(!current) {
      mode = 'None';
    } else if(current === Links.Query.mode.Demo) {
      mode = 'demo';
    } else if(current === Links.Query.mode.Tutorial) {
      mode = 'tutorial';
    } else if(typeof(current) === 'object') {
      if(JSON.stringify(current) && JSON.stringify(Demo_Tutorial)) {
        mode = 'demo & tutorial';
      } else {
        return Error(Messages.FrontEnd.LinksQuerySortError["01"]);
      }
    }

    return mode;
  } else {
    return Error(Messages.FrontEnd.DevelopError["01"]);
  }
}