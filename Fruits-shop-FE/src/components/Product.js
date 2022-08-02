import React, { useEffect, useState } from "react";
import PopUpFruits from "../components/PopUpFruits";
import plus from "../assets/plus.svg";
import closeRed from "../assets/close-red.svg";
import NewFruit from "./NewFruit";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../states/cartSlice";
import { nanoid } from "nanoid";
import {
  allProducts,
  productStatus,
  errorProduct,
  loadingProduct,
  fetchFruits,
} from "../states/productSlice";

const Product = () => {
  const allFruits = useSelector(allProducts);
  console.log(allFruits);
  const statusFruits = useSelector(productStatus);
  const errorFruits = useSelector(errorProduct);
  const loadingFruits = useSelector(loadingProduct);
  const [search, setSearch] = useState("");
  const [popUp, setPopUp] = useState(false);
  const [popUpData, setPopUpData] = useState(null);
  const handlePopUp = () => setPopUp(!popUp);
  const [newFruitForm, SetNewFruitForm] = useState(false);
  const handleOpenFruitForm = () => {
    SetNewFruitForm(true);
  };
  const handleCloseFruitForm = () => {
    SetNewFruitForm(false);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (statusFruits !== "ok") {
      dispatch(fetchFruits());
    }
  }, [dispatch, statusFruits]);
  return (
    <>
      <div className="mt-[150px] flex justify-center items-center">
        <input
          className=" rounded-lg p-3 w-[90%] border-0 mt-2 mb-4 outline-0 text-lg bg-slate-100"
          onChange={(event) => setSearch(event.target.value)}
          type="search"
          id="search"
          placeholder="Cerca il tuo frutto..."
        ></input>
      </div>
      <div className=" bg-slate-200 w-full h-16 flex justify-start pl-6 pt-2">
        <button
          onClick={
            newFruitForm === false
              ? () => handleOpenFruitForm()
              : () => handleCloseFruitForm()
          }
          className="w-[45px] h-[45px]"
        >
          <img
            className="w-[50px] h-[50px]"
            src={newFruitForm ? closeRed : plus}
          />
        </button>
      </div>
      {newFruitForm ? (
        <NewFruit
          newFruitForm={newFruitForm}
          handleCloseFruitForm={handleCloseFruitForm}
        />
      ) : null}
      <div className="flex justify-center items-center flex-wrap gap-4 mx-auto p-20 font-sans">
        {!errorFruits && loadingFruits && (
          <div className="text-3xl font-bold text-white">
            Caricamento dati in corso...
          </div>
        )}

        {allFruits &&
          allFruits

            .filter((fruit) => {
              if (search === "") {
                return fruit;
              } else if (
                fruit.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return fruit;
              }
            })

            .map((fruit, index) => (
              <div
                key={index}
                className="flex flex-col mx-auto justify-center items-center w-[250px] "
              >
                <div>
                  <h1 className="font-bold text-2xl">{fruit.name}</h1>
                </div>
                <div
                  className="w-full h-[150px] bg-contain bg-center bg-no-repeat overflow-hidden"
                  style={{ backgroundImage: "url(" + fruit.image + ")" }}
                ></div>
                <div className="mt-4 flex items-center justify-center flex-wrap">
                  <p className="text-sm mb-3 mx-2 bg-slate-300 p-1 rounded-md mr-2">
                    Carboidrati: {fruit.nutrition.carbohydrates}
                  </p>
                  <p className="text-sm mb-3 mx-2 bg-slate-300 p-1 rounded-md mr-2">
                    Calorie: {fruit.nutrition.calories}
                  </p>
                  <p className=" text-sm mb-3 mx-2 bg-slate-300 p-1 rounded-md mr-2">
                    Grassi: {fruit.nutrition.fath}%
                  </p>
                  <p className="text-sm mb-3 mx-2 bg-slate-300 p-1 rounded-md mr-2">
                    Prezzo:{fruit.price}
                  </p>
                </div>
                <div className=" flex items-center justify-between   flex-wrap mt-5">
                  <button
                    onClick={() =>
                      dispatch(
                        addItem({
                          ...fruit,
                          cartId: nanoid(),
                        })
                      )
                    }
                    className=" bg-lime-500 rounded-lg p-2 m-3 text-white"
                  >
                    Acquista
                  </button>
                  <button
                    onClick={() => {
                      setPopUpData(fruit);
                      handlePopUp();
                    }}
                    className="bg-orange-400 rounded-lg p-2 m-3 text-white"
                  >
                    Dettagli
                  </button>
                </div>
              </div>
            ))}
        {popUp && <PopUpFruits fruit={popUpData} state={setPopUp} />}
      </div>
    </>
  );
};

export default Product;
