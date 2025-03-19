import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeFromCart } from "../store/Slices/cart-slice.js";

export default function ProductTile({products}){

    const dispatch = useDispatch();
    const {cart} = useSelector(state=> state);

    function handleAddToCart(){
        dispatch(addToCart(products));
    }

    function handleRemoveFromCart(){
        dispatch(removeFromCart(products));
    }

    return <div>
    <div className="group flex flex-col items-center border border-rose-200 gap-3 p-6 h-[360px] mt-10 ml-5 rounded-xl hover:shadow-xl transition-all hover:border-rose-300">
        <div className="h-[180px] w-full">
            <img
            src={products?.image}
            alt={products?.title}
            className="object-contain h-full w-full"
            />
        </div>
        <div className="w-full">
            <h1 className="truncate mt-3 text-gray-700 font-bold text-lg">{products.title}</h1>
        </div>
        <div className="flex items-center justify-center w-full mt-auto">
                <button onClick={cart.some(item => item.id === products.id) ? handleRemoveFromCart : handleAddToCart}
                className="w-full bg-rose-900 text-white px-4 py-2 rounded-lg cursor-pointer font-semibold hover:bg-rose-800 transition-colors">
                    {
                        cart.some(item => item.id === products.id) ? 'Remove from cart' : 'Add to Cart'
                    }
                </button>
        </div>
    </div>
    </div>
}