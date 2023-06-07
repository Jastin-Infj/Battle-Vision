import Listget from "./Listget";

import { ENDPOINT_URL } from "../index";

const App = () => {
  return (
    <>
      <Listget url={ENDPOINT_URL}/>
    </>
  );
};

export default App;