import { useEffect, useState } from "react";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, deleteFromCart } from "../redux/reducers/CartSlice";
import { addToWishlist } from "../redux/reducers/WishlistSlice";

function Product(props) {
  const [addToCartstatus,setAddToCartstatus] = useState(false)
  // const [favClick, setFavClick] = useState(false);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const { image, rating, price, title, id } = props.data;
  function handleClick(e) {
    e.preventDefault();
    navigate("/productDetailPage/" + id);
    
  }
  function handleFavClick() {
    // setFavClick(!favClick)
    dispatch(addToWishlist(props.data));
  }
  
  function handleAddToCart() {
    setAddToCartstatus(!addToCartstatus)
    !addToCartstatus ? dispatch(addToCart(props.data)) : dispatch(deleteFromCart(props.data))
    

    
  }
  return (
    <div class="col-sm-3">
      <div class="card cust-card">
        <div className="heart ">
          <AiFillHeart
          className="favourite"
            // className={favClick ? "favourite color-red" : "favourite"}
            size={25}
            onClick={()=>handleFavClick()}
          />
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
          <div onClick={() => handleAddToCart()} className="btn btn-primary btn-block">
            <div className="add-to-cart">
              <FaShoppingCart />
              <a>{!addToCartstatus ? "Add to Cart" : "Remove from Cart"}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
