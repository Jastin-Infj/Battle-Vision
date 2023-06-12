// @ts-ignore IDE側がエラーとして認識するため
import React from 'react';
// @ts-ignore IDE側がエラーとして認識するため
import image from '../../img/topimage.jpg';

import Messages from '../../json/Strings.json';

// <img src={image} alt="image" className="absolute left-0 top-0 w-full h-full bg-fixed bg-left-top overflow-hidden object-cover"/>

function Page_Top() {
  return (
    <>
      <div className="absolute left-0 top-0 h-screen w-screen bg-gray-800">
        <div className="absolute left-0 top-0 w-full h-full">
          
          <div className="absolute left-0 top-0 w-full h-full">
            <div className="m-9">
              <p className="text-9xl text-white text-stroke-titlelogo text-stroke-4 font-style: italic whitespace-nowrap">{Messages.Title}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page_Top;