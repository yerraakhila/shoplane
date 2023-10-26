import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, deleteFromCart} from "../redux/reducers/CartSlice";
import { AiFillStar } from "react-icons/ai";
import NavAndSub from './../components/NavAndSub';
import { useSelector } from "react-redux/es/hooks/useSelector";



function ProductDetailPage() {

  //const [addToCartstatus,setAddToCartstatus] = useState(false)
  
  const { id } = useParams();
  console.log(id)
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/" + id)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error));
  }, [id]);
  let cartItemsList = useSelector((state) => state.cart.cartItemsList);
  console.log(cartItemsList)
  let isInCart = cartItemsList.some((each) => each.id === product.id);
  console.log(isInCart)
  let dispatch = useDispatch();
  function handleCart() {
    // setAddToCartstatus(!addToCartstatus)
    // !addToCartstatus ? dispatch(addToCart(product)) : dispatch(deleteFromCart(product))
    !isInCart
      ? dispatch(addToCart(product))
      : dispatch(deleteFromCart(product));

    
  }
  
  if (!product) return null;

  if (!product.rating ) return null;

  return (
    <>
    <NavAndSub/>
    
    <div className="container">
      <div className="wrapper">
        <div className="row">
          <div className="col-sm-6 cust-col-sm-6">
            <img
              src={product.image}
              alt=""
              height="400px"
              width="300px"
              className="img-fluid"
            />
          </div>
          <div className="col-sm-6 gap">
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <h2>${product.price}</h2>
            <div>
              <AiFillStar className={product.rating.rate > 0.5 ? "checked" : ""} />
              <AiFillStar className={product.rating.rate > 1.5 ? "checked" : ""} />
              <AiFillStar className={product.rating.rate > 2.5 ? "checked" : ""} />
              <AiFillStar className={product.rating.rate > 3.5 ? "checked" : ""} />
              <AiFillStar className={product.rating.rate > 4.5 ? "checked" : ""} />(
              {product.rating.count})
            </div>
            <br></br>
            <button
              className={!isInCart ? "btn-blue-color white-color for-padding":"btn-red-color white-color for-padding"}
              onClick={handleCart}
            >
              {!isInCart ? "Add to Cart" : "Remove from Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductDetailPage;
