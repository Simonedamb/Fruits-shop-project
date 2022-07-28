import React from "react";

function NewFruit({ newFruitForm, handleCloseFruitForm }) {
  return (
    <div className="create-fruit-form bg-slate-200 w-full mt-8 h-full box-border p-12">
      <div className="fruit-form-text w-full flex  justify-center items-center mb-8 text-lg font-bold   ">
        <h1>Aggiungi un nuovo frutto allo store</h1>
      </div>

      <form className="flex flex-col w-full justify-center items-center gap-2 ">
        <label>Nome frutto:</label>
        <input className="w-[500px] bg-slate-100" type="text"></input>
        <label>Famiglia:</label>
        <input className="w-[500px] bg-slate-100" type="text"></input>
        <label>Zuccheri:</label>
        <input className="w-[500px] bg-slate-100" type="text"></input>
        <label>Grassi:</label>
        <input className="w-[500px] bg-slate-100" type="text"></input>
        <label>Proteine:</label>
        <input className="w-[500px] bg-slate-100" type="text"></input>
        <label>Prezzo:</label>
        <input className="w-[500px] bg-slate-100" type="text"></input>
      </form>
      <div className="w-full flex justify-evenly items-center mt-8  ">
        <button className="text-lg font-bold border bg-green-500 p-2 rounded text-white	 ">
          Aggiungi
        </button>
        <button
          onClick={newFruitForm === true ? () => handleCloseFruitForm() : null}
          className="text-lg font-bold border bg-red-500 p-2 rounded text-white	"
        >
          Chiudi
        </button>
      </div>
    </div>
  );
}

export default NewFruit;
