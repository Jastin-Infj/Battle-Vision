import React from "react";

function PatryCanvas() {
  return(
    <>
      <div className="component_patryCanvas_div">
        <div className="text">
          <img />
          <div>
            <span>パーティ名</span>
          </div>
          <img />
        </div>
        <div className="member">
          <div className="col">
            <div className="pokemonImg">
              <img />
            </div>
            <div className="pokemonImg">
              <img />
            </div>
          </div>
          <div className="col">
            <div className="pokemonImg">
              <img />
            </div>
            <div className="pokemonImg">
              <img />
            </div>
          </div>
          <div className="col">
            <div className="pokemonImg">
              <img />
            </div>
            <div className="pokemonImg">
              <img />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PatryCanvas;