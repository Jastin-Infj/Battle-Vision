import React from "react";

// style scss or json
import Messages from '../src/frontend/json/Strings.json';
import '../src/frontend/scss/box.scss';

// style JSX
import Canvas from "./Canvas";
import Header from "./Header";
import Footer from "./Footer";
import PatryCanvas from "../src/frontend/ts/components/_patrycanvas";
import CheckBoxItem from "../src/frontend/ts/components/_checkItem";
import Adjustment__Gender from "../src/frontend/ts/contents/adjustment__gender";
import ModeSelect from "../src/frontend/ts/components/_modeSelect";

function Box() {



  //* スタイルの適用
  
  // ポケモン枠
  const Render__PokemonImg = (
    <div className="component__PokemonImg_div2">
      <img></img>
    </div>
  );
  
  // ポケモン * 6
  const Render__PokemonRow = (
    <div className="row">
      {Render__PokemonImg}
      {Render__PokemonImg}
      {Render__PokemonImg}
      {Render__PokemonImg}
      {Render__PokemonImg}
      {Render__PokemonImg}
    </div>
  );
  
  // わざ名
  const Render__Move = (
    <div className="back">
      <div className="moveback">
        <img />
        <span>ああああああああ</span>
      </div>
    </div>
  );

  return(
    <>
      <Canvas id="Box">
        <Header />
        <main>
          <ModeSelect id="mode_MyBox_OR_MyPokemonDetail" classname="phone__mode">
            <img />
          </ModeSelect>
          <div className="main__MyBox">
            <span className="title">{Messages.Page.Box.Text.Title__MyBox}</span>
            <ModeSelect id="mode_Box_OR_Patry" classname="phone__mode">
              <img />
            </ModeSelect>
            <div className="Box">
              <div className="sortArea">
                <span className="title">{Messages.Page.Box.Text.Sort}</span>
                <div className="sort">
                  <div className="row1">
                    <select>
                      {Messages.Page.Box.List_SortOption1.map((item) => {
                        return <option key={item} value={item}>{item}</option>;
                      })}
                    </select>
                    <img />
                  </div>
                  <div className="row2">
                    <select>
                      {Messages.Page.Box.List_SortOption2.map((item) => {
                        return <option key={item} value={item}>{item}</option>;
                      })}
                    </select>
                    <img />
                  </div>
                </div>
              </div>
              <div className="list">
                {Render__PokemonRow}
                {Render__PokemonRow}
                {Render__PokemonRow}
                {Render__PokemonRow}
                {Render__PokemonRow}
                {Render__PokemonRow}
              </div>
            </div>
            <div className="Patry">
              <div className="canvas">
                <PatryCanvas />
                <img className="rename" />
              </div>
            </div>
          </div>
          <div className="main__MyPokemonDetail">
            <ModeSelect id="row1" type="radio" name="reportButton" classname="phone__mode reportButton" defaultChecked={true}>
              <img />
            </ModeSelect>
            <ModeSelect id="row2" type="radio" name="reportButton" classname="phone__mode reportButton">
              <img />
            </ModeSelect>
            <ModeSelect id="row3" type="radio" name="reportButton" classname="phone__mode reportButton">
              <img />
            </ModeSelect>
            <div className="phone__mode titleList">
              <span>戦績データ1</span>
              <span>戦績データ2</span>
              <span>戦績データ3</span>
            </div>
            <div className="row1">
              <img className="arrow" />
              <div className="list">
                {Render__PokemonImg}
                {Render__PokemonImg}
                {Render__PokemonImg}
                {Render__PokemonImg}
                {Render__PokemonImg}
                {Render__PokemonImg}
              </div>
              <img className="arrow" />
            </div>
            <div className="row2">
              <div className="basic">
                <div className="types">
                  <img />
                  <img />
                </div>
                <div className="pokemon">
                  <span className="name">ああああああ</span>
                  <img />
                  <span className="ability">ああああああああ</span>
                </div>
                <div className="other">
                  <div className="col1">
                    <Adjustment__Gender />
                    <img />
                  </div>
                  <div className="col2">
                    <img />
                    <span>ああああああ</span>
                  </div>
                </div>
              </div>
              <div className="move">
                {Render__Move}
                {Render__Move}
                {Render__Move}
                {Render__Move}
              </div>
              <div className="id">
                <span>{Messages.Page.Box.Text.Title__Id}</span>
                <span>99999</span>
              </div>
              <div className="tagG">
                <div>
                  <CheckBoxItem text={Messages.Page.Box.CheckBox[0]} />
                  <CheckBoxItem text={Messages.Page.Box.CheckBox[1]} />
                  <CheckBoxItem text={Messages.Page.Box.CheckBox[2]} />
                </div>
                <div>
                  <CheckBoxItem text={Messages.Page.Box.CheckBox[3]} />
                  <CheckBoxItem text={Messages.Page.Box.CheckBox[4]} />
                  <CheckBoxItem text={Messages.Page.Box.CheckBox[5]} />
                </div>
              </div>
            </div>
            <div className="row3">
              <div className="date">
                <div>
                  <span>{Messages.Page.Box.Text.Register}</span>
                  <input type="date" />
                </div>
                <div>
                  <span>{Messages.Page.Box.Text.Update}</span>
                  <input type="date" />
                </div>
              </div>
              <div className="status">
                <div className="param">
                  <button>
                    <span>{Messages.Page.Box.Button.Basic}</span>
                  </button>
                  <button>
                    <span>{Messages.Page.Box.Button.Param}</span>
                  </button>
                  <button>
                    <span>{Messages.Page.Box.Button.EV}</span>
                  </button>
                  <button>
                    <span>{Messages.Page.Box.Button.IV}</span>
                  </button>
                </div>
                <div className="grach">
                  
                </div>
                <div className="buttons">
                  <button>
                    <span>{Messages.Page.Box.Button.Edit}</span>
                  </button>
                  <button>
                    <span>{Messages.Page.Box.Button.Remove}</span>
                  </button>
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

export default Box;