import React from "react";

// style scss or json
import Messages from '../src/frontend/json/Strings.json';
import '../src/frontend/scss/analysis.scss';

// style JSX
import Canvas from "../src/frontend/ts/components/Canvas";
import Header from "../src/frontend/ts/components/Header";
import Footer from "../src/frontend/ts/components/Footer";

// style import
import PatryMembers from "../src/frontend/ts/components/_patrymembers";

function Analysis() {
  //* render
  const RENDER_JSX = {
    
  };

  return (
    <>
      <Canvas>
        <Header />
        <main>
          <div className="main__selectArrow">
            <img />
            <img /> 
          </div>
          <div className="main__sortButton">
            <button>
              <span></span>
            </button>
          </div>
          <div className="main__party">
            <div>
              <PatryMembers />
              <PatryMembers />
              <PatryMembers />
              <PatryMembers />
              <PatryMembers />
              <PatryMembers />
            </div>
            <div>
              <PatryMembers />
              <PatryMembers />
              <PatryMembers />
              <PatryMembers />
              <PatryMembers />
              <PatryMembers />
            </div>
          </div>
        </main>
        <Footer />
      </Canvas>
    </>
  );
}

export default Analysis;