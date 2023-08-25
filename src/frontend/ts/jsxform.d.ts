import { ParsedUrlQuery } from "querystring";

export namespace CustomJSX {

  export interface cssStyle {
    [key: string]: boolean;
  }

}

export interface NextRouter {
  next: string;
  query?: ParsedUrlQuery
}

export interface LinkTextObject {
  link: URL;
  num: number;
  addclass?: string;
}