// @ts-ignore IDE側がエラーとして認識するため
import React , {useEffect , useState} from "react";
import axios , { AxiosError } from 'axios';
import { OutputLogTypeOf } from "../common";

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

  const [jsonfetchDatas,FetchResponse]:fetchUpdate = useState<UserData[]>([]);
  
  useEffect(() => {
    axios.get(props.url)
    .then((res:any) => {
      OutputLogTypeOf(res,"axiosres");
      FetchResponse(res.data);
      OutputLogTypeOf(FetchResponse,"FetchResFunc");
      fetched = true;
    })
    .catch((error:object) => {
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
}

export default Listget;