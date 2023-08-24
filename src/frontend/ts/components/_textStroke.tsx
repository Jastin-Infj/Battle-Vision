import React from "react";

interface Props {
  text: string;
}

function TextStroke(props:Props) {
  return (
    <>
      <div className="stroke-text">
        <span className="main">{props.text}</span>
        <span className="back">{props.text}</span>
      </div>
    </>
  )
}

export default TextStroke;