import * as React from "react";
import { registerUser } from "../states/registerSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

export const SignUp = ({ login }) => {
  const [form, setForm] = useState({
    username: null,
    password: null,
  });
  console.log(form);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(registerUser(form));

    event.target.reset();
    login(false);
  };

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-screen backdrop-brightness-[.2]">
      <section className="p-6 text-black">
        <form
          onSubmit={handleSubmit}
          className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-zinc-300 ng-untouched ng-pristine ng-valid"
        >
          <h2 className="w-full text-3xl font-bold leading-tight">
            Registrati
          </h2>
          <div>
            <label htmlFor="name" className="block mb-1 ml-1">
              Nome
            </label>
            <input
              onChange={(e) =>
                setForm({
                  ...form,
                  username: e.target.value,
                })
              }
              name="userName"
              id="name"
              type="text"
              placeholder="Scrivi il tuo Nome e Cognome"
              required=""
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-green-700  "
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 ml-1">
              Password
            </label>
            <input
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value,
                })
              }
              name="userPassword"
              id="password"
              type="password"
              placeholder="Password"
              required=""
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-green-700  "
            />
          </div>
          <div className="flex justify-around">
            <button
              type="submit"
              className=" mt-5 px-4 py-2 font-bold rounded shadow focus:outline-none hover:ring focus:ring-opacity-50 hover:ring-white bg-green-500"
            >
              Registrati
            </button>
            <button
              onClick={() => login(false)}
              className=" mt-5 px-4 py-2 font-bold rounded shadow focus:outline-none hover:ring focus:ring-opacity-50 hover:ring-white bg-green-500"
            >
              Chiudi
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};
