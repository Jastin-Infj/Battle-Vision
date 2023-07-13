import React from "react";

// style scss or json
import Messages from '../src/frontend/json/Strings.json';
import '../src/frontend/scss/adjustment.scss';

// style JSX
import Canvas from "../src/frontend/ts/components/Canvas";
import Header from "../src/frontend/ts/components/Header";
import Footer from "../src/frontend/ts/components/Footer";

function Adjustment() {
  return (
    <>
      <Canvas>
        <Header />
        <main>
          <div>test</div>
        </main>
        <Footer />
      </Canvas>
    </>
  );
}

export default Adjustment;