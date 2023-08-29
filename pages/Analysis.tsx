import React from "react";

// style scss or json
import Messages from '../src/frontend/json/Strings.json';
import '../src/frontend/scss/analysis.scss';

// style JSX
import Canvas from "./Canvas";
import Header from "./Header";
import Footer from "./Footer";
import PatryCanvas from "../src/frontend/ts/components/_patrycanvas";

// style import


function Analysis() {
  //* render

  return (
    <>
      <Canvas id="Analysis">
        <Header />
        <main>
          <div className="main__selectArrow">
            <div className="back">
              <div className="borderBg">
                <img />
              </div>
              <div className="borderBg">
                <img />
              </div>
            </div>
          </div>
          <div className="main__sortButton">
            <button className="component__button1">
              <div className="stroke-text">
                <span className="main">{Messages.Page.Analysis.Button.Sort}</span>
                <span className="back">{Messages.Page.Analysis.Button.Sort}</span>
              </div>
            </button>
          </div>
          <div className="main__party">
            <div className="patry__row">
              <PatryCanvas />
              <PatryCanvas />
              <PatryCanvas />
              <PatryCanvas />
              <PatryCanvas />
            </div>
            <div className="patry__row">
              <PatryCanvas />
              <PatryCanvas />
              <PatryCanvas />
              <PatryCanvas />
              <PatryCanvas />
            </div>
          </div>
        </main>
        <Footer />
      </Canvas>
    </>
  );
}

export default Analysis;