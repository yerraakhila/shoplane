import Product from "./Product";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function ProductsByCategory(){
    const { api } = useParams();
    
    console.log(api)
    const [productsCat, setProductsCat] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/"+api)
      .then((Response) => setProductsCat(Response.data))
      .catch((error) => console.log(error));
  }, [api]);
//   console.log(productsCat)
  return (
    <div>
      <div className="row cust-row">
        {productsCat.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
 export default ProductsByCategory;