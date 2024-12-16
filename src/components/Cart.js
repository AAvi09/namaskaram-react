import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="text-center m-10 p-10">
      <h1 className="text-2xl font-bold">
        <div>
          <button
            className="p-2 m-2 bg-black text-white rounded-lg"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          {cartItems.length === 0 && (
            <h1>Please add items to your cart,enjoy your meal</h1>
          )}
          <ItemList items={cartItems} />
        </div>
      </h1>
    </div>
  );
};

export default Cart;
