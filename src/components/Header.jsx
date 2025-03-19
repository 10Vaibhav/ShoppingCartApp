import { Link } from "react-router-dom";

export default function Header(){

    return <div>
        <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto px-4 border-b border-rose-100">
            <Link to={"/"}>
                <div>
                    <h1 className="text-rose-800 font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide hover:text-rose-700 transition-colors">
                        SHOPPING CART
                    </h1>
                </div>
            </Link>
            <ul className="flex list-none items-center space-x-8 text-gray-800 font-semibold">
                <Link to={"/"}>
                    <li className="cursor-pointer hover:text-rose-700 transition-colors">Home</li>
                </Link>
                <Link to={"/cart"}>
                    <li className="cursor-pointer hover:text-rose-700 transition-colors">Cart</li>
                </Link>
            </ul>
        </nav>
    </div>
}

