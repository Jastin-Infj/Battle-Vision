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