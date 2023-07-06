import React from "react";

// style scss or json
import Messages from '../src/frontend/json/Strings.json';
import '../src/frontend/scss/main.scss';

// style JSX
import Canvas from "../src/frontend/ts/components/Canvas";
import Header from "../src/frontend/ts/components/Header";
import Footer from "../src/frontend/ts/components/Footer";

function Main() {
  return (
    <>
      <Canvas>
        <Header />
        <main>
          <div className="main__filter">
            <span className="main__text_filter">{Messages.Page.Main.Text.Filter}</span>
            <div className="main__group_tag"></div>
            <div className="main__group_day">
              <span>{Messages.Page.Main.Text.Register}</span>
              <div></div>
            </div>
            <div className="main__group_day">
              <span>{Messages.Page.Main.Text.Update}</span>
              <div></div>
            </div>
          </div>
        </main>
        <Footer />
      </Canvas>
    </>
  )
}

export default Main;