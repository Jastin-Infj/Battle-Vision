import React from "react";

// style scss or json
import Messages from '../src/frontend/json/Strings.json';
import '../src/frontend/scss/report.scss';

// style JSX
import Canvas from "./Canvas";
import Header from "./Header";
import Footer from "./Footer";
import PatryCanvas from "../src/frontend/ts/components/_patrycanvas";
import CheckBoxItem from "../src/frontend/ts/components/_checkItem";
import TextStroke from "../src/frontend/ts/components/_textStroke";

function Report() {

  return (
    <>
      <Canvas id="Report">
        <Header />
        <main>
          <div className="main__reportButton">
            <button className="component__button1">
              <TextStroke text={Messages.Page.Report.Button.Reset} />
            </button>
            <div className="aggregation">
              <div className="text agg">
                <span>{Messages.Page.Report.Text.Aggregation}</span>
              </div>
              <div className="date start">
                <input type="date" />
              </div>
              <div className="text mark">
                <span>{Messages.Page.Report.Text.AggregationM}</span>
              </div>
              <div className="date end">
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
                    <span className="title">{Messages.Page.Report.Text.Win}</span>
                    <img />
                    <TextStroke text={"(14.5%)"} />
                  </div>
                </div>
                <div className="tagG">
                  <span className="title">{Messages.Page.Report.Text.Tag}</span>
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
                      <div className="stroke-text">
                        <span className="main">{Messages.Page.Report.Button.Report}</span>
                        <span className="back">{Messages.Page.Report.Button.Report}</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="r_selection">
                <div className="selection">
                  <span className="title">{Messages.Page.Report.Text.Selection}</span>
                  <div className="circleGrach">
                  
                  </div>
                </div>
                <div className="list">
                  <div className="ranking">
                    <img />
                    <span className="name">ああああああ</span>
                    <TextStroke text="test" />
                  </div>
                  <div className="ranking">
                    <img />
                    <span className="name">ああああ</span>
                    <TextStroke text="test" />
                  </div>
                  <div className="ranking">
                    <img />
                    <span className="name"></span>
                    <TextStroke text="test" />
                  </div>
                  <div className="ranking">
                    <img />
                    <span className="name"></span>
                    <TextStroke text="test" />
                  </div>
                  <div className="ranking">
                    <img />
                    <span className="name"></span>
                    <TextStroke text="test" />
                  </div>
                  <div className="ranking">
                    <img />
                    <span className="name"></span>
                    <TextStroke text="test" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main__battleReport">
            <div className="row">
              <span className="title">{Messages.Page.Report.Text.First}</span>
              <div className="circleGrach">

              </div>
              <div className="list col1">
                <div className="ranking">
                  <img />
                  <span className="name">ああああああ</span>
                  <TextStroke text="test" />
                </div>
                <div className="ranking">
                  <img />
                  <span className="name">ああああああ</span>
                  <TextStroke text="test" />
                </div>
              </div>
              <div className="list col2">
                <div className="ranking">
                  <img />
                  <span className="name">ああああああ</span>
                  <TextStroke text="test" />
                </div>
                <div className="ranking">
                  <img />
                  <span className="name">ああああああ</span>
                  <TextStroke text="test" />
                </div>
              </div>
              <div className="list col3">
                <div className="ranking">
                  <img />
                  <span className="name">ああああああ</span>
                  <TextStroke text="test" />
                </div>
                <div className="ranking">
                  <img />
                  <span className="name">ああああああ</span>
                  <TextStroke text="test" />
                </div>
              </div>
            </div>
            <div className="row">
              <span className="title">{Messages.Page.Report.Text.Reserve}</span>
              <div className="circleGrach">

              </div>
              <div className="list col1">
                <div className="ranking">
                  <img />
                  <span className="name">ああああああ</span>
                  <TextStroke text="test" />
                </div>
                <div className="ranking">
                  <img />
                  <span className="name">ああああああ</span>
                  <TextStroke text="test" />
                </div>
              </div>
              <div className="list col2">
                <div className="ranking">
                  <img />
                  <span className="name">ああああああ</span>
                  <TextStroke text="test" />
                </div>
                <div className="ranking">
                  <img />
                  <span className="name">ああああああ</span>
                  <TextStroke text="test" />
                </div>
              </div>
              <div className="list col3">
                <div className="ranking">
                  <img />
                  <span className="name">ああああああ</span>
                  <TextStroke text="test" />
                </div>
                <div className="ranking">
                  <img />
                  <span className="name">ああああああ</span>
                  <TextStroke text="test" />
                </div>
              </div>
              
            </div>
          </div>
        </main>
        <Footer />
      </Canvas>
    </>
  );
}

export default Report;