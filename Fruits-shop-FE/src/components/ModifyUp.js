import React, { useEffect } from "react";

export default function ModifyUp(fruit) {
  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     const name = event.target.name;
  //     const image = event.target.image;
  //     const price = event.target.price;
  //   };
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-screen backdrop-brightness-[.2]">
      <section className="p-6 text-black">
        <form
          //   onSubmit={handleSubmit}
          className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-zinc-300 ng-untouched ng-pristine ng-valid"
        >
          <h2 className="w-full text-3xl font-bold leading-tight">Modifica</h2>
          <div>
            <label for="name" className="block mb-1 ml-1">
              Nome
            </label>
            <input
              //   onChange={() => "BENVENUTI"}
              name="name"
              id="name"
              type="text"
              placeholder={fruit.name}
              required=""
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-green-700  "
            />
          </div>{" "}
          <div>
            <label for="family" className="block mb-1 ml-1">
              Famiglia
            </label>
            <input
              //   onChange={() => "BENVENUTI"}
              name="family"
              id="family"
              type="text"
              placeholder={fruit.family}
              required=""
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-green-700  "
            />
          </div>
          <div>
            <label for="image" className="block mb-1 ml-1">
              Immagine
            </label>
            <input
              name="image"
              id="image"
              type="text"
              placeholder={fruit.image}
              required=""
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-green-700  "
            />
          </div>
          <div>
            <label for="price" className="block mb-1 ml-1">
              Prezzo
            </label>
            <input
              name="price"
              id="price"
              type="text"
              placeholder={fruit.price}
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-green-700 "
            ></input>
          </div>
          <div className="flex justify-around">
            <button
              type="submit"
              className=" mt-5 px-4 py-2 font-bold rounded shadow focus:outline-none hover:ring focus:ring-opacity-50 hover:ring-white bg-green-500"
            >
              Salva
            </button>
            <button
              onClick={fruit.handleClose}
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
