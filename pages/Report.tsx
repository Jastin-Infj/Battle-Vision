import React from "react";

// style scss or json
import Messages from '../src/frontend/json/Strings.json';
import '../src/frontend/scss/report.scss';

// style JSX
import Canvas from "../src/frontend/ts/components/Canvas";
import Header from "../src/frontend/ts/components/Header";
import Footer from "../src/frontend/ts/components/Footer";
import PatryCanvas from "../src/frontend/ts/components/_patrycanvas";
import CheckBoxItem from "../src/frontend/ts/components/_checkItem";

function Report() {
  return (
    <>
      <Canvas>
        <Header />
        <main>
          <div className="main__reportButton">
            <button className="component__button1">
              <div className="stroke-text">
                <span className="main">{Messages.Page.Report.Button.Reset}</span>
                <span className="back">{Messages.Page.Report.Button.Reset}</span>
              </div>
            </button>
            <div className="aggregation">
              <div className="text">
                <span>{Messages.Page.Report.Text.Aggregation}</span>
              </div>
              <div className="date">
                <input type="date" />
              </div>
              <div className="text">
                <span>{Messages.Page.Report.Text.AggregationM}</span>
              </div>
              <div className="date">
                <input type="date" />
              </div>
            </div>
          </div>
          <div className="main__patryReport">
            <div className="row">
              <PatryCanvas />
              <img className="rename" />
            </div>
            <div className="row">
              <div className="winG">
                <div className="report">
                  <div className="winBox">
                    <span>{Messages.Page.Report.Text.Win}</span>
                    <img />
                    <div className="stroke-text">
                      <span className="main">(14.5%)</span>
                      <span className="back">(14.5%)</span>
                    </div>
                  </div>
                </div>
                <div className="tagG">
                  <span>{Messages.Page.Report.Text.Tag}</span>
                  <div className="row">
                    <div className="box">
                      <div className="common_checkbox">
                        <CheckBoxItem text={Messages.Page.Report.Checkbox[0]} />
                        <CheckBoxItem text={Messages.Page.Report.Checkbox[1]} />
                        <CheckBoxItem text={Messages.Page.Report.Checkbox[2]} />
                        <CheckBoxItem text={Messages.Page.Report.Checkbox[3]} />
                      </div>
                      <div className="common_checkbox">
                        <CheckBoxItem text={Messages.Page.Report.Checkbox[4]} />
                        <CheckBoxItem text={Messages.Page.Report.Checkbox[5]} />
                        <CheckBoxItem text={Messages.Page.Report.Checkbox[6]} />
                      </div>
                      <div className="common_checkbox">
                        <CheckBoxItem text={Messages.Page.Report.Checkbox[7]} />
                        <CheckBoxItem text={Messages.Page.Report.Checkbox[8]} />
                        <CheckBoxItem text={Messages.Page.Report.Checkbox[9]} />
                      </div>
                      <div className="common_checkbox">
                        <CheckBoxItem text={Messages.Page.Report.Checkbox[10]} />
                        <CheckBoxItem text={Messages.Page.Report.Checkbox[11]} />
                        <CheckBoxItem text={Messages.Page.Report.Checkbox[12]} />
                      </div>
                    </div>
                    <button className="component__button1">
                      <span>{Messages.Page.Report.Button.Report}</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="r_selection">
                
              </div>
            </div>
          </div>
          <div className="main__battleReport">
            <div className="r_first">

            </div>
            <div className="r_reserve">

            </div>
          </div>
        </main>
        <Footer />
      </Canvas>
    </>
  );
}

export default Report;