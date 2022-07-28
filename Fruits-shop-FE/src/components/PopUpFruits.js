import React, { useEffect, useState } from "react";
import pen from "../assets/pen-to-square-regular.svg";
import trash from "../assets/trash-alt-regular.png";
import ModifyUp from "./ModifyUp";
import DeleteFruit from "./DeleteFruit";

const PopUpFruits = ({ fruit, state }) => {
  const [modifyUp, setModifyUp] = useState(false);
  const [deleteFruit, setDeleteFruit] = useState(false);

  useEffect(() => {
    state(true);
  }, [fruit, state]);

  const handleClosePopUp = () => {
    state(false);
  };

  return (
    <div>
      {!modifyUp && !deleteFruit && (
        <div className="z-10 backdrop-blur-md w-screen h-screen fixed top-1/2 left-1/2 flex items-center justify-center -translate-y-1/2 -translate-x-1/2">
          <div className="shadow-xl rounded-lg flex flex-col justify-center items-center inset-x-0 bg-gradient-to-t from-green-400 to-green-600 w-[500px] h-[600px] ">
            <div className="w-[100%] flex justify-end">
              <button
                className="bg-orange-500 rounded-lg p-3 mb-5 mr-5 text-white font-bold text-xl"
                onClick={() => setModifyUp(true)}
              >
                <img className=" w-6" src={pen}></img>
              </button>
              <button
                className="bg-orange-500 rounded-lg p-3 mb-5 mr-5 text-white font-bold text-xl"
                onClick={() => setDeleteFruit(true)}
              >
                <img className=" w-6" src={trash}></img>
              </button>
            </div>
            <h1 className="text-white font-bold text-4xl mb-4">{fruit.name}</h1>
            <img
              src={fruit.image}
              alt={fruit.name}
              className="w-[200px] rounded-[100%] mb-4"
            />
            <h2 className="text-white">
              Alcune informazioni su questo frutto:
            </h2>
            <p className="text-white">
              Appartiene alla famiglia {fruit.family}, gene {fruit.genus}.
            </p>
            <p className="text-white">
              Contiene i seguenti valori nutrizionali:
            </p>
            <ul className="text-white">
              <li>Zuccheri: {fruit.nutritions.sugar}</li>
              <li>Grassi: {fruit.nutritions.fat}</li>
              <li>Proteine: {fruit.nutritions.protein}</li>
            </ul>
            <button
              className="bg-orange-500 rounded-lg p-3 mt-4 text-white font-bold text-xl"
              onClick={handleClosePopUp}
            >
              Chiudi
            </button>
          </div>
        </div>
      )}
      {modifyUp && (
        <ModifyUp
          name={fruit.name}
          image={fruit.image}
          price={fruit.price}
          family={fruit.family}
          handleClose={handleClosePopUp}
        />
      )}
      {deleteFruit && (
        <DeleteFruit
          handleClose={handleClosePopUp}
        />
      )}
    </div>
  );
};

export default PopUpFruits;
