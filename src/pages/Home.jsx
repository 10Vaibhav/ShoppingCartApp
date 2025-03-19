import { useEffect, useState } from "react";
import { Circles } from 'react-loader-spinner';
import ProductTile from "../components/ProductTile.jsx";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchListOfProducts() {
    setLoading(true);

    const response = await fetch("https://fakestoreapi.com/products");

    const data = await response.json();

    if (data) {
      setLoading(false);
      setProducts(data);
    }
  }

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  console.log(products);

  return <div className="mt-5">{loading ?
    <div className="min-h-screen w-full flex justify-center items-center">
      <Circles color="#8B0000" height={80} width={80}/>
    </div>
  :
  <div className="min-h-[80vh] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto p-2">
    {
      products && products.length ?
      products.map((productItem)=> <ProductTile products={productItem}/>)
      :null
    }
  </div>
  }
  </div>;
}
