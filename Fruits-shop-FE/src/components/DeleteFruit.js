import { allProducts, fetchFruits } from "../states/productSlice";
import { useDispatch } from "react-redux";

export default function DeleteFruit({ fruit, handleClose }) {
  const dispatch = useDispatch();
  const { id } = fruit;
  console.log(id);

  const handleDeleteFruit = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:3000/fruits/${id}`, {
      method: "DELETE",
    }).then((res) => dispatch(fetchFruits()));
  };

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-screen backdrop-brightness-[.2]">
      <section className="p-6 text-black">
        <form
          onSubmit={handleDeleteFruit}
          className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-zinc-300 ng-untouched ng-pristine ng-valid"
        >
          <h2 className="w-full text-3xl font-bold leading-tight">
            Sei sicuro di voler eliminare il frutto?
          </h2>

          <button
            onClick={handleClose}
            type="submit"
            className=" mt-5 px-4 py-2 font-bold rounded shadow focus:outline-none hover:ring focus:ring-opacity-50 hover:ring-white bg-orange-500 mr-3"
          >
            Sì
          </button>

          <button
            onClick={handleClose}
            className=" mt-5 px-4 py-2 font-bold rounded shadow focus:outline-none hover:ring focus:ring-opacity-50 hover:ring-white bg-green-500"
          >
            No
          </button>
        </form>
      </section>
    </div>
  );
}
