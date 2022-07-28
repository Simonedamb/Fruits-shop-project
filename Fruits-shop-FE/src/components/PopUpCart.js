import { useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeItem, totalPrice } from "../states/cartSlice";
import { useDispatch } from "react-redux";
import { amountState } from "../states/cartSlice";

const PopUpCart = ({ cart }) => {
  const modalCart = useSelector((state) => state.cart);
  const amountFruits = useSelector(amountState);
  const total = useSelector(totalPrice);
  const dispatch = useDispatch();

  return (
    <div className=" fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-screen backdrop-brightness-[.2]">
      <div className="max-h-[90%] overflow-y-scroll scrollbar fixed p-4 max-w-md rounded-lg border shadow-md sm:p-8 bg-green-500 bg-border-white w-screen h-scrren top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <div className="flex justify-between items-center mb-4">
          <h5 className="text-xl font-bold leading-none text-white pb-3">
            {amountFruits <= 0
              ? "Il carrello è vuoto"
              : "Prodotti nel carrello"}
          </h5>
          <div
            onClick={() => cart(false)}
            className="text-red-600 text-2xl items-center absolute right-4 top-0 cursor-pointer"
          >
            &times;
          </div>
        </div>
        {modalCart.fruits.map((fruit, index) => {
          return (
            <div
              key={index}
              className=" flex justify-around items-center text-center text-white text-lg"
            >
              <div className="w-[33%]">
                <img
                  className="rounded-[100%] h-[50px] w-[50px] text-center mt-2"
                  src={fruit.image}
                  alt={fruit.name}
                />
              </div>
              <div className="w-[33%]">{fruit.name}</div>
              <div className="w-[33%]">{fruit.price}€</div>
              <div>
                <DeleteIcon
                  className="text-red-600"
                  onClick={() => dispatch(removeItem(fruit))}
                />
              </div>
            </div>
          );
        })}
        <div className="flex justify-start">
          <div className="text-green-600 bg-white p-2 mt-5 rounded-lg">
            Totale:{total}€
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpCart;
