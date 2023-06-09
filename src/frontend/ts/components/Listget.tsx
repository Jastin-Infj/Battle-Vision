//@ts-ignore
import React , {useEffect , useState} from "react";
//@ts-ignore
import axios from 'axios';

import messages from '../../json/Message.json';

type Props = {
  url: string
};

function Listget (props:Props) {
  let fetched = false;

  type UserData = {
    id: number,
    name: string,
    age: number
  };

  type fetchUpdate = [
    jsonfetchDatas: UserData[],
    FetchResponse: any
  ];

  let [jsonfetchDatas,FetchResponse]:fetchUpdate = useState<UserData[]>([]);
  
  useEffect(() => {
    axios.get(props.url)
    .then((res:any) => {
      FetchResponse(res.data);
      fetched = true;
    })
    .catch((error:any) => {
      console.log(error);
    });

  },[]);

  const Success = (datas: UserData[]) => {
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
      { fetched  && (() => Success(jsonfetchDatas))}
    </>
  );
};

export default Listget;