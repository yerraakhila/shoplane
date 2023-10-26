
import { AiFillHeart, AiFillStar, AiOutlineClose } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, deleteFromCart } from "../redux/reducers/CartSlice";
import {
  addToWishlist,
  deleteFromWishlist,
} from "../redux/reducers/WishlistSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";

function Product(props) {
  let wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  let cartItemsList = useSelector((state) => state.cart.cartItemsList);

  let dispatch = useDispatch();
  let navigate = useNavigate();
  const { image, rating, price, title, id } = props.data;
  function handleClick(e) {
    e.preventDefault();
    navigate("/productDetailPage/" + id);
  }

  let isInWishlist = wishlistItems.some((each) => each.id === id);
  let isInCart = cartItemsList.some((each) => each.id === id);

  function handleFav() {
    !isInWishlist
      ? dispatch(addToWishlist(props.data))
      : dispatch(deleteFromWishlist(props.data));
  }

  function handleCart() {
    !isInCart
      ? dispatch(addToCart(props.data))
      : dispatch(deleteFromCart(props.data));
  }

  return (
    <div class="col-sm-3">
      <div class="card cust-card">
        <div className="heart">
          {!props.favPage ? (
            <AiFillHeart
              className={isInWishlist ? "favourite color-red" : "favourite"}
              size={25}
              onClick={handleFav}
            />
          ) : (
            <AiOutlineClose
              className="remove"
              size={25}
              onClick={() => handleFav()}
            />
          )}
        </div>

        <img
          src={image}
          alt=""
          width={200}
          height={250}
          onClick={handleClick}
          className="card-top-image pro-img"
        />
        <hr />
        <div class="card-body">
          <h5 class="card-title ellipsis">{title}</h5>
          <p class="card-text">
            <div>
              <AiFillStar className={rating.rate > 0.5 ? "checked" : ""} />
              <AiFillStar className={rating.rate > 1.5 ? "checked" : ""} />
              <AiFillStar className={rating.rate > 2.5 ? "checked" : ""} />
              <AiFillStar className={rating.rate > 3.5 ? "checked" : ""} />
              <AiFillStar className={rating.rate > 4.5 ? "checked" : ""} />(
              {rating.count})
            </div>
          </p>
          <h6>${price}</h6>
          <div
            onClick={() => handleCart()}
            className={!isInCart ? "btn-blue-color" : "btn-red-color"}
          >
            <div className="add-to-cart white-color">
              <FaShoppingCart />
              <a>{!isInCart ? "Add to Cart" : "Remove from Cart"}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
