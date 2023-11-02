import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import NavbarWithSubcat from "../components/NavbarWithSubcat";
import NewProduct from "../components/NewProduct";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { currUserCartItemsList } from "../redux/reducers/CartSlice";
import { currUserWishlistItemsList } from "../redux/reducers/WishlistSlice";

function ProductsByCategory() {
  const { categoryId } = useParams();
  const [productsCat, setProductsCat] = useState([]);

  let wishlistItems = useSelector(currUserWishlistItemsList);
  let cartItemsList = useSelector(currUserCartItemsList);

  let wishlistIdSet = new Set(wishlistItems.map((item) => item.id));
  let cartItemsIdSet = new Set(cartItemsList.map((item) => item.id));

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/" + categoryId)
      .then((Response) => setProductsCat(Response.data))
      .catch((error) => console.log(error));
  }, [categoryId]);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f7f0f0" }}>
      <NavbarWithSubcat categoryId={categoryId} />
      <div className="prods">
        <div style={{ padding: "50px 25px 5px 25px", margin:"0px"}} className="row cust-row">
          {productsCat.map((product) => (
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
    </div>
  );
}
export default ProductsByCategory;
