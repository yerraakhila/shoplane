import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, deleteFromCart} from "../redux/reducers/CartSlice";
import { AiFillStar } from "react-icons/ai";
import NavAndSub from './../components/NavAndSub';
import { useSelector } from "react-redux/es/hooks/useSelector";
import { currUserCartItemsList } from "../redux/reducers/CartSlice";
import NavbarWithSubcat from "../components/NavbarWithSubcat";



function ProductDetailPage() {
  const { id } = useParams();
  console.log(id)
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/" + id)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error));
  }, [id]);
  let cartItemsList = useSelector(currUserCartItemsList);
  console.log(cartItemsList)
  let isInCart = cartItemsList.some((each) => each.id === product.id);
  console.log(isInCart)
  let dispatch = useDispatch();
  function handleCart() {
    !isInCart
      ? dispatch(addToCart(product))
      : dispatch(deleteFromCart(product));
    }
  
  if (!product) return null;

  if (!product.rating ) return null;

  return (
    <div style={{backgroundColor:"#f7f0f0",minHeight:"100vh"}}>
    <NavbarWithSubcat/>
    <div className="container prods centering" >
      <div className="wrapper">
        <div className="row">
          <div className="col-sm-5 cust-col-sm-6">
            <img
              src={product.image}
              alt=""
              height="400px"
              width="300px"
              className="img-fluid"
            />
          </div>
          <div className="col-sm-7 gap">
            <div className="spacing">
            <h4>{product.title}</h4>
            <p>{product.description.slice(0,500)}</p>
            </div>
            
            <div className="spacing">
            <div className="rating">
              <AiFillStar  size={30} className={product.rating.rate > 0.5 ? "checked" : ""} />
              <AiFillStar  size={30} className={product.rating.rate > 1.5 ? "checked" : ""} />
              <AiFillStar  size={30} className={product.rating.rate > 2.5 ? "checked" : ""} />
              <AiFillStar  size={30} className={product.rating.rate > 3.5 ? "checked" : ""} />
              <AiFillStar  size={30} className={product.rating.rate > 4.5 ? "checked" : ""} />
              <span style={{fontSize:"20px"}}>({product.rating.count})</span>
            </div>
            <h5>size:s</h5>
            <div className="discount-again">
              <h2 style={{margin:"0px",padding:"0px"}}>${(product.price*0.7).toFixed(2)}</h2>
              <del ><h4 style={{color:"red",margin:"0px"}}>${(product.price).toFixed(2)}</h4></del>
              <h4 style={{fontWeight:"400",color:"brown",margin:"0px"}}>(30% off)</h4>

            </div>
            
            
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
    </div>
    
    </div>
  )
}

export default ProductDetailPage;
