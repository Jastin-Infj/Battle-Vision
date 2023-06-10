import { AxiosError } from 'axios';

// any型を減らすのが目的
export function OutputLogTypeOf(prop:any,varname?: string): void {
  console.log(`%c${{var:varname,type:typeof prop}}`,'color: green');
}

export function isAxiosError(error:any): boolean {
  return error !== AxiosError && error !== undefined && error !== null;
}