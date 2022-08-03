import * as React from "react";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export const LoginUp = ({controlsAdmin}) => {
  const [data, setData] = useState({});
  const [user, setUser] = useState({});

  const handleControl = () => {
    if (data === user) {
      controlsAdmin()
    }
  };

  const handleAdmin = async (e) => {
    e.preventDefault();
    try {
      const call = await fetch(`http://localhost:3000/fruits/admin`);
      const response = await call.json();
      setData(response);
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-screen backdrop-brightness-[.2]">
      <div className="font-sans">
        <div className="max-w-sm mx-auto px-6">
          <div className="relative flex flex-wrap">
            <div className="w-full relative">
              <div className="mt-6">
                <div className="mb-5 pb-1border-b-2 text-center font-base text-gray-700"></div>
                <form className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-zinc-300 ng-untouched ng-pristine ng-valid">
                  <div className="mx-auto max-w-lg">
                    <div className="text-end">
                      <button className="text-[15px] hover:text-red-700">
                        <CloseIcon />
                      </button>
                    </div>
                    <h2 className="text-center text-[30px]">Login</h2>
                    <div className="py-9">
                      <span className="px-1 text-sm text-green-600">
                        <PersonIcon className="mb-4 text-green-600" />
                        Username
                      </span>
                      <input
                        onChange={setUser({
                          ...user,
                          name: e.target.value,
                        })}
                        name="name"
                        placeholder="Scrivi il tuo username"
                        type="text"
                        className="text-md block px-3 py-2  rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-green-400 shadow-md focus:placeholder-green-400 focus:bg-white focus:border-green-400 focus:outline-none"
                      />
                    </div>
                    <div className="py-2" x-data="{ show: true }">
                      <span className="px-1 text-sm text-green-600">
                        <LockIcon className="mb-4 text-green-600" />
                        Password
                      </span>
                      <div className="relative">
                        <input
                          onChange={setUser({
                            ...user,
                            password: e.target.value,
                          })}
                          name="password"
                          placeholder="scrivi la tua password"
                          type="password"
                          className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-green-400 shadow-md
                focus:placeholder-green-400
                focus:bg-white
                focus:border-green-400
                focus:outline-none"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="text-start text-[10px]">
                      Hai dimenticato la password ?
                    </span>
                  </div>
                  <div className="text-center pt-4">
                    <button
                      onClick={()=>{(e) => handleAdmin(e);()=>handleControl } }
                      className=" w-[50%] border rounded-[10px] bg-green-600 p-2 hover:bg-white"
                    >
                      ACCEDI
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
