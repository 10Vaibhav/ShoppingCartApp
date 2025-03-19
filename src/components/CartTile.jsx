import { useDispatch } from "react-redux"
import { removeFromCart } from "../store/Slices/cart-slice.js";


export default function CartTile({cartItem}){

    const dispatch = useDispatch();

    function handleRemoveFromCart(){
        dispatch(removeFromCart(cartItem));
    }

    return <>
    <div className="flex items-center p-4 justify-between bg-rose-600 mt-2 mb-2 rounded-xl shadow-lg hover:shadow-xl transition-shadow w-full">
        <div className="flex p-3 flex-grow">
            <img src={cartItem?.image} className="h-28 w-28 object-contain rounded-lg bg-white p-2" alt={cartItem?.title}/>
            <div className="ml-6 self-start space-y-3 flex-grow">
                <h1 className="text-xl text-white font-bold line-clamp-2">{cartItem?.title}</h1>
                <p className="text-white font-extrabold">${cartItem?.price}</p>
            </div>
        </div>
        <div className="pl-4 flex-shrink-0">
            <button onClick={handleRemoveFromCart}
                    className="bg-rose-950 text-white px-4 py-2 cursor-pointer rounded-lg font-semibold hover:bg-rose-900 transition-colors whitespace-nowrap">
                    Remove From Cart
            </button>
        </div>
    </div>
    </>
}