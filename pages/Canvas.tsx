import React from "react";

// css
import '../src/frontend/scss/_layerbase.scss';

interface Props {
  id: string;
  children: JSX.Element | JSX.Element[] | string;
}

function Canvas(props:Props) {
  return (
    <>
      <div className="layer-canvas" id={props.id}>
        {props.children}
      </div>
    </>
  );
}

export default Canvas;