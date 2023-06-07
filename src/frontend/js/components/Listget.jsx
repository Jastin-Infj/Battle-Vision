import { useState , useEffect } from "react";
import axios from 'axios';

import messages from '../../json/Message.json'

const Listget = ({url}) => {
  let fetched = false;
  let [jsonfetchDatas,FetchResponse] = useState([])
  
  useEffect(() => {
    axios.get(url).then((res) => {
      FetchResponse(res.data);
      fetched = true;
    });
  },[]);

  const Success = ({datas}) => {
    return (
      <ul>
        {datas.map((data) => {
          return (
            <li key={data.id}>
              <div>
                <span>id: {data.id}</span>
              </div>
              <div>
                <span>name: {data.name}</span>
              </div>
              <div>
                <span>age: {data.age}</span>
              </div>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <>
      {!fetched  && <div>{messages.Server.BackendFetchError["01"]}</div>}
      { fetched  && <Success datas={jsonfetchDatas}/> }
    </>
  );
};

export default Listget;