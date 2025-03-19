import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartTile from "../components/CartTile.jsx";

export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);

  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
      {cart && cart.length ? (
        <>
        <div>
            <div className="flex flex-col justify-center items-end p-5 space-y-4 mt-5 mb-4 bg-rose-50 rounded-lg mx-4">
                <h1 className="font-bold text-xl text-rose-800">Your Cart Summary</h1>
                <p className="flex gap-2">
                    <span className="text-gray-800 font-bold">Total Items</span>
                    <span className="text-rose-700">{cart.length}</span>
                </p>
                <p className="flex gap-2">
                    <span className="text-gray-800 font-bold">Total Amount</span>
                    <span className="text-rose-700">${totalCart.toFixed(2)}</span>
                </p>
            </div>
          </div>
          <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
            <div className="flex flex-col justify-center items-center p-3">
              {cart.map((cartItem) => (
                <CartTile cartItem={cartItem} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="min-h-[80vh] flex flex-col justify-center items-center">
          <h1 className="text-gray-800 font-bold text-2xl mb-4">
            Your Cart is Empty
          </h1>
          <Link to={"/"}>
            <button className="bg-rose-900 text-white px-6 py-3 rounded-lg font-semibold cursor-pointer hover:bg-rose-800 transition-colors">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
