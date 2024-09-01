import React from "react";
import Random from "./components/Random";
import Tag from './components/Tag';

function App() {

 

  return (
    <div className="w-full h-screen flex flex-col items-center relative overflow-x-hidden  bg-blue-800">
      <h1 className="bg-white w-11/12 text-center font-bold text-4xl rounded-lg mt-[40px] px-10 py-2  ">RANDOM GIFS</h1>

      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
      <Random/>
      <Tag/>
      </div>
    </div>
  );
}

export default App;
