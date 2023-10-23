import { useEffect, useState } from "react";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Product(props) {
  const [favClick, setFavClick] = useState(false);
  let navigate = useNavigate();
  const { image, rating, price, title, id } = props.data;
  function handleClick(e) {
    e.preventDefault();
    navigate("/productDetailPage/" + id);
  }
  function handleFavClick(e) {
    e.preventDefault();
    setFavClick(!favClick);
  }
  return (
    <div class="col-sm-3">
      <div class="card cust-card">
        <div className="heart ">
          <AiFillHeart
            className={favClick ? "favourite color-red" : "favourite"}
            size={25}
            onClick={handleFavClick}
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
          <a href="#" class="btn btn-primary btn-block add-to-cart">
            <div class="add-to-cart">
              <FaShoppingCart />
              <a>Add to Cart</a>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Product;
