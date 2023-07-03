import React from "react";

import '../../scss/_layerbase.scss';

function Canvas(props) {
  return (
    <>
      <div className="layer-canvas">
        {props.children}
      </div>
    </>
  );
}

export default Canvas;