import React, { useEffect } from "react";

const DeveloperPopUp = ({ dev, state }) => {
  // console.log(dev, state);
  useEffect(() => {
    state(true);
  }, [state, dev]);
  return (
    <div className=" backdrop-blur-md h-screen w-screen fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
      <div className="bg-zinc-200 p-8 flex flex-col relative  justify-center text-green-900 rounded-lg text-xl ">
        <div className="absolute right-2 top-1 text-right flex justify-end items-end ">
          <button className="text-4xl mb-8 " onClick={() => state(false)}>
            &times;
          </button>
        </div>
        <img
          src={dev.image}
          alt={dev.name}
          className="w-[150px] rounded-[100%]"
        />
        <div className="mt-4">
          <h2>{dev.name}</h2>
          <p>Età: {dev.age}</p>
          <p>Città: {dev.location}</p>
          <p className=" bg-[#0e76a8] p-1 text-white rounded-md w-fit mt-2">
            <a href={dev.link} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeveloperPopUp;
