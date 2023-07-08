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
            <div className="main__group_tag">

            </div>
            <div className="main__group_day">
              <span>{Messages.Page.Main.Text.Register}</span>
              <input type="date"></input>
            </div>
            <div className="main__group_day">
              <span>{Messages.Page.Main.Text.Update}</span>
              <input type="date"></input>
            </div>
          </div>
          <div className="main__group_winlose">
            <span className="winlose__text">{Messages.Page.Main.Text.Winlose}</span>
            <div className="winlose__box">
              <div className="winlose__box_win">
                <span>50%</span>
              </div>
              <div className="winlose__box_lose">
                <span>50%</span>
              </div>
            </div>
            <div className="winlose__buttons">
              <button>
                <span>{Messages.Page.Main.Text.Win}</span>
              </button>
              <button>
                <span>{Messages.Page.Main.Text.Lose}</span>
              </button>
            </div>
            <div className="winlose__reports">
              <img />
              <button>
                <span>{Messages.Page.Main.Text.Report}</span>
              </button>
            </div>
          </div>
          <div className="main__group_battlecanvas">
            
          </div>
        </main>
        <Footer />
      </Canvas>
    </>
  )
}

export default Main;