import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchFruits } from "../states/productSlice";

export default function ModifyUp({ data, handleClose }) {
  console.log(data);
  const [formState, setFormState] = useState({});
  const dispatch = useDispatch();

  const handlePatchFruit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/fruits/${data.id}`, {
      method: "PATCH",
      body: JSON.stringify(formState),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => dispatch(fetchFruits()));
  };

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-screen backdrop-brightness-[.2]">
      <section className="p-6 text-black">
        <form
          onSubmit={handlePatchFruit}
          className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-zinc-300 ng-untouched ng-pristine ng-valid"
        >
          <h2 className="w-full text-3xl font-bold leading-tight">Modifica</h2>
          <div>
            <label className="block mb-1 ml-1">Nome</label>
            <input
              onChange={(e) => {
                setFormState({
                  ...formState,
                  name: e.target.value,
                });
              }}
              name="name"
              id="name"
              type="text"
              placeholder={data.name}
              required=""
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-green-700  "
            />
          </div>{" "}
          <div>
            <label className="block mb-1 ml-1">Famiglia</label>
            <input
              onChange={(e) => {
                setFormState({
                  ...formState,
                  family: e.target.value,
                });
              }}
              name="family"
              id="family"
              type="text"
              placeholder={data.family}
              required=""
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-green-700  "
            />
          </div>
          <div>
            <label className="block mb-1 ml-1">Prezzo</label>
            <input
              onChange={(e) => {
                setFormState({
                  ...formState,
                  price: Number(e.target.value),
                });
              }}
              name="price"
              id="price"
              type="number"
              placeholder={data.price}
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-green-700 "
            ></input>
          </div>
          <div className="flex justify-around">
            <button
              onClick={() => handleClose}
              type="submit"
              className=" mt-5 px-4 py-2 font-bold rounded shadow focus:outline-none hover:ring focus:ring-opacity-50 hover:ring-white bg-green-500"
            >
              Salva
            </button>
            <button
              onClick={handleClose}
              className=" mt-5 px-4 py-2 font-bold rounded shadow focus:outline-none hover:ring focus:ring-opacity-50 hover:ring-white bg-green-500"
            >
              Chiudi
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
