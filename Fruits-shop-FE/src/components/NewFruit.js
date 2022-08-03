import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { fetchFruits } from "../states/productSlice";
function NewFruit({ newFruitForm, handleCloseFruitForm, data }) {
  const [formState, setFormState] = useState({});
  // console.log(formState);
  const dispatch = useDispatch();

  const sc = {};
  const handleNewFruit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/fruits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    }).then((json) => {
      setTimeout(() => {
        dispatch(fetchFruits());
      }, 1000);
    });
  };

  return (
    <div className="create-fruit-form bg-slate-200 w-full mt-8 h-full box-border p-12">
      <div className="fruit-form-text w-full flex  justify-center items-center mb-8 text-lg font-bold   ">
        <h1>Aggiungi un nuovo frutto allo store</h1>
      </div>

      <form
        onSubmit={handleNewFruit}
        className="flex flex-col w-full justify-center items-center gap-2 "
      >
        <label>Nome frutto:</label>
        <input
          onChange={(e) => {
            setFormState({
              ...formState,
              name: e.target.value,
            });
          }}
          name="name"
          id="name"
          className="w-[500px] bg-slate-100"
          type="text"
        ></input>
        <label>Genere:</label>
        <input
          onChange={(e) => {
            setFormState({
              ...formState,
              genus: e.target.value,
            });
          }}
          name="genus"
          id="genus"
          className="w-[500px] bg-slate-100"
          type="text"
        ></input>
        <label>Famiglia:</label>
        <input
          onChange={(e) => {
            setFormState({
              ...formState,
              family: e.target.value,
            });
          }}
          name="family"
          id="family"
          className="w-[500px] bg-slate-100"
          type="text"
        ></input>
        <label>Provenienza:</label>
        <input
          onChange={(e) => {
            setFormState({
              ...formState,
              order: e.target.value,
            });
          }}
          name="order"
          id="order"
          className="w-[500px] bg-slate-100"
          type="text"
        ></input>
        <label>Calorie:</label>
        <input
          onChange={(e) => {
            setFormState({
              ...formState,
              nutrition: {
                ...formState.nutrition,
                calories: Number(e.target.value),
              },
            });
          }}
          name="calories"
          id="calories"
          className="w-[500px] bg-slate-100"
          type="number"
        ></input>
        <label>Carboidrati:</label>
        <input
          onChange={(e) => {
            setFormState({
              ...formState,
              nutrition: {
                ...formState.nutrition,
                carbohydrates: Number(e.target.value),
              },
            });
          }}
          name="carbohydrates"
          id="carbohydrates"
          className="w-[500px] bg-slate-100"
          type="number"
        ></input>
        <label>Zuccheri:</label>
        <input
          onChange={(e) => {
            setFormState({
              ...formState,
              nutrition: {
                ...formState.nutrition,
                sugar: Number(e.target.value),
              },
            });
          }}
          name="sugar"
          id="sugar"
          className="w-[500px] bg-slate-100"
          type="number"
        ></input>
        <label>Grassi:</label>
        <input
          onChange={(e) => {
            setFormState({
              ...formState,
              nutrition: {
                ...formState.nutrition,
                fath: Number(e.target.value),
              },
            });
          }}
          name="fath"
          id="fath"
          className="w-[500px] bg-slate-100"
          type="number"
        ></input>
        <label>Immagine:</label>
        <input
          onChange={(e) => {
            setFormState({
              ...formState,
              image: e.target.value,
            });
          }}
          name="image"
          id="image"
          className="w-[500px] bg-slate-100"
          type="text"
        ></input>
        <label>Proteine:</label>
        <input
          onChange={(e) => {
            setFormState({
              ...formState,
              nutrition: {
                ...formState.nutrition,
                protein: Number(e.target.value),
              },
            });
          }}
          name="protein"
          id="protein"
          className="w-[500px] bg-slate-100"
          type="number"
        ></input>
        <label>Prezzo:</label>
        <input
          onChange={(e) => {
            setFormState({
              ...formState,
              price: Number(e.target.value),
            });
          }}
          name="price"
          id="price"
          className="w-[500px] bg-slate-100"
          type="number"
        ></input>
        <div className="w-full flex justify-evenly items-center mt-8  ">
          <button
            type="submit"
            className="text-lg font-bold border bg-green-500 p-2 rounded text-white	 "
          >
            Aggiungi
          </button>
          <button
            onClick={
              newFruitForm === true ? () => handleCloseFruitForm() : null
            }
            className="text-lg font-bold border bg-red-500 p-2 rounded text-white	"
          >
            Chiudi
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewFruit;
