import { AiOutlineHeart, AiFillStar, AiFillHeart, AiOutlineClose } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, deleteFromCart } from "../redux/reducers/CartSlice";
import {
  addToWishlist,
  deleteFromWishlist,
} from "../redux/reducers/WishlistSlice";

function NewProduct(props) {
  let isInWishlist = props.isInWishlist;
  let isInCart = props.isInCart;

  let dispatch = useDispatch();
  let navigate = useNavigate();
  const { image, rating, price, title, id } = props.data;
  function handleClick(e) {
    e.preventDefault();
    navigate("/productDetailPage/" + id);
  }
  function handleDeleteFromWishlist(){
    dispatch(deleteFromWishlist(props.data));
  }
  function handleFav() {
    !isInWishlist
      ? dispatch(addToWishlist(props.data))
      : dispatch(deleteFromWishlist(props.data));
  }

  function handleCart() {
    if (props.favPage) {
      dispatch(addToCart(props.data));
      dispatch(deleteFromWishlist(props.data));
    } else {
      if (!isInCart) {
        dispatch(addToCart(props.data));
      } else {
        dispatch(deleteFromCart(props.data));
      }
    }
  }
  return (
    <div class="five-items">
      
      <div className="card-replace">
        <div className="for-relative">
          <div className="img-background">
            <img src={image} width={180} height={200} onClick={handleClick}/>
          </div>
          {!props.favPage ? (
            <AiFillHeart
              className={isInWishlist ? "color-red heart2" : "heart2"}
              size={25}
              onClick={handleFav}
            />
          ) : (
            <AiOutlineClose
              className="remove heart2"
              size={23}
              onClick={handleDeleteFromWishlist}
            />
          )}
          
        </div>
        <div className="without-product-image">
          <h6 className="ellipsis" style={{padding:"0px",margin:"0px",marginTop:"10px"}}>{title}</h6>
          <div className="p-side-side">
          
          <div className="style-star">
          <p style={{padding:"0px",margin:"0px"}}>{rating.rate}</p>
          <AiFillStar className="checked"/>
          <p style={{padding:"0px",margin:"0px"}}>({rating.count})</p>
          </div>
          <div className="cost">
            <div className="price">
            <p style={{padding:"0px",margin:"0px",fontWeight:"500",fontSize:"17px"}}>${(price*0.9).toFixed(2)}</p>
          <del style={{padding:"0px",margin:"0px",fontSize:"13px",color:"gray"}}>${price}</del>
            </div>
          
          <p style={{padding:"0px",margin:"0px",fontSize:"13px"}}>(30% off)</p>
          </div>
          
          </div>
          
          <div
            onClick={handleCart}
            className={
              props.favPage
                ? "btn-green-color for-radius"
                : !isInCart
                ? "btn-blue-color for-radius"
                : "btn-red-color for-radius"
            }
          >
            <div className="add-to-cart2 white-color">
              <FaShoppingCart />
              <a>
                {props.favPage
                  ? "Move to Cart"
                  : !isInCart
                  ? "Add to Cart"
                  : "Remove from Cart"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NewProduct;
