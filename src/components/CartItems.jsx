import CartItem from "./CartItem";
import { useEffect, useState } from "react";
import axios from "axios";

function CartItems() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/")
      .then((Response) => setProducts(Response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="outer-row">
      <div className="cart-items-gap">

        {products.map((product) => (
          <CartItem data={product} key={product.id} />
          
        ))}
        
      </div>
    </div>
  );
}

export default CartItems;
