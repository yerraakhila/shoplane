import Product from "../components/Product";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import NavAndSub from "../components/NavAndSub";
import NavbarWithSubcat from "../components/NavbarWithSubcat";
import NewProduct from "../components/NewProduct";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { currUserCartItemsList } from "../redux/reducers/CartSlice";
import { currUserWishlistItemsList } from "../redux/reducers/WishlistSlice";

function ProductsByCategory() {
  const { api } = useParams();
  const [productsCat, setProductsCat] = useState([]);
  let wishlistItems = useSelector(currUserWishlistItemsList);
  let cartItemsList = useSelector(currUserCartItemsList);

  let wishlistIdSet = new Set(wishlistItems.map((item) => item.id));
  let cartItemsIdSet = new Set(cartItemsList.map((item) => item.id));

  
  //   let location = useLocation();
  // let arrayOfSubs = [
  //   "/subcategory/electronics",
  //   "/subcategory/jewelery",
  //   "/subcategory/men's%20clothing",
  //   "/subcategory/women's%20clothing",
  // ];

  // if (arrayOfSubs.includes(location.pathname)) {
  //   console.log(document.querySelector(".for-color"))
  //   document.querySelector(".for-color").style.color = "pink";
  // }
  
  

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/" + api)
      .then((Response) => setProductsCat(Response.data))
      .catch((error) => console.log(error));
      
  }, [api]);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f7f0f0" }}>
      <NavbarWithSubcat />
      <div className="prods">
        <div className="row cust-row">
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
