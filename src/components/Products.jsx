import { useState } from "react";
import Product from "./Product";
import axios from "axios";
import { useEffect } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/")
      .then((Response) => setProducts(Response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <div className="row cust-row">
        {products.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Products;