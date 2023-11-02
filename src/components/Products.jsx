import { useState } from "react";
import NewProduct from "./NewProduct";
import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { currUserCartItemsList } from "../redux/reducers/CartSlice";
import { currUserWishlistItemsList } from "../redux/reducers/WishlistSlice";

function Products() {
  const [products, setProducts] = useState([]);
  let wishlistItems = useSelector(currUserWishlistItemsList);
  let cartItemsList = useSelector(currUserCartItemsList);

  let wishlistIdSet = new Set(wishlistItems.map((item) => item.id));
  let cartItemsIdSet = new Set(cartItemsList.map((item) => item.id));

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/")
      .then((Response) => setProducts(Response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="prods" >
      <div  style={{ padding: "50px 25px 5px 25px", margin:"0px"}}  className="row cust-row">
        {products.map((product) => (
          <NewProduct
            data={product}
            isInWishlist={wishlistIdSet.has(product.id)}
            isInCart={cartItemsIdSet.has(product.id)}
            key={product.id}
            favPage={false}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
