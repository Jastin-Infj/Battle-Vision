import React from "react";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

interface PropBase {
  text: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

interface Span_TAG extends PropBase {
  type?: 'span';
}

interface A_TAG extends PropBase {
  type: 'a';
  href: Url;
}

type Props = Span_TAG | A_TAG;

function TextStroke(props:Props) {

  let render: JSX.Element = null!;

  switch(props.type) {
    case 'a':
      render = (
        <>
          <Link className="main" href={props.href} >{props.text}</Link>
          <Link className="back" href={""}>{props.text}</Link>
        </>
      );
      break;
    case 'span':
    default:
      render = (
        <>
          <span className="main">{props.text}</span>
          <span className="back">{props.text}</span>
        </>
      );
      break;
  }

  return (
    <>
      <div className="stroke-text" onClick={props.onClick}>
        {render}
      </div>
    </>
  );
}

export default TextStroke;