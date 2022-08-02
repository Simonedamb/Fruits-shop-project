import { allProducts } from "../states/productSlice";
import { useState } from "react";

export default function ModifyUp({ fruit, handleClose }) {
  const [userId, setUserId] = useState([]);
  const [name, setName] = useState("");
  const [family, setFamily] = useState("");
  const [price, setPrice] = useState("");

  const handlePatchFruit = (e, fruitId) => {
    e.preventDefault();
    // const fruit = { userId, name, family, price };
    fetch(`http://localhost:3002/fruits/${fruitId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fruit),
    })
      .then((data) => {
        data.json();
      })
      .then(setUserId(userId));
  };

  // const handleDeleteFruit = async (e, id) => {
  //   event.preventDefault();
  //   await fetch(`http://localhost:3002/fruits/${id}`, {
  //     method: "PATCH",
  //   });
  //   console.log(fruit.id);
  //   allProducts();
  // };

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-screen backdrop-brightness-[.2]">
      <section className="p-6 text-black">
        <form
          //   onSubmit={handleSubmit}
          className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-zinc-300 ng-untouched ng-pristine ng-valid"
        >
          <h2 className="w-full text-3xl font-bold leading-tight">Modifica</h2>
          <div>
            <label className="block mb-1 ml-1">Nome</label>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              name="name"
              id="name"
              type="text"
              placeholder={fruit.name}
              required=""
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-green-700  "
            />
          </div>{" "}
          <div>
            <label className="block mb-1 ml-1">Famiglia</label>
            <input
              value={family}
              onChange={(e) => {
                setFamily(e.target.value);
              }}
              name="family"
              id="family"
              type="text"
              placeholder={fruit.family}
              required=""
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-green-700  "
            />
          </div>
          <div>
            <label className="block mb-1 ml-1">Prezzo</label>
            <input
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              name="price"
              id="price"
              type="text"
              placeholder={fruit.price}
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-green-700 "
            ></input>
          </div>
          <div className="flex justify-around">
            <button
              onClick={(e) => handlePatchFruit(e, fruit.id)}
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
