//@ts-ignore
import React from 'react';
import Listget from "./Listget";
import { END_POINT } from "..";

function App() {
  return (
    <>
      <Listget url={END_POINT} />
    </>
  );
}

export default App;