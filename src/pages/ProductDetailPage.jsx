import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, deleteFromCart } from "../redux/reducers/CartSlice";
import { AiFillHeart, AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { currUserCartItemsList } from "../redux/reducers/CartSlice";
import { currUserWishlistItemsList } from "../redux/reducers/WishlistSlice";
import NavbarWithSubcat from "../components/NavbarWithSubcat";
import {
  addToWishlist,
  deleteFromWishlist,
} from "../redux/reducers/WishlistSlice";

function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/" + id)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error));
  }, [id]);
  let cartItemsList = useSelector(currUserCartItemsList);
  let isInCart = cartItemsList.find((each) => each.id === product.id);
  let dispatch = useDispatch();
  function handleCart() {
    !isInCart
      ? dispatch(addToCart(product))
      : dispatch(deleteFromCart(product));
  }
  let wishlistItems = useSelector(currUserWishlistItemsList);
  let isInWishlist = wishlistItems.find((item) => item.id === product.id);

  function handleFav() {
    !isInWishlist
      ? dispatch(addToWishlist(product))
      : dispatch(deleteFromWishlist(product));
  }

  if (!product) return null;

  if (!product.rating) return null;

  return (
    <div style={{ backgroundColor: "#f7f0f0", minHeight: "100vh" }}>
      <NavbarWithSubcat />
      <div className="container prods centering">
        <div className="wrapper">
          <div className="row detail-display">
            <div className="half-again cust-col-sm-6">
              <img
                src={product.image}
                alt=""
                height="400px"
                width="300px"
                className="img-fluid"
              />
            </div>
            <div className="half-again gap">
              <div className="spacing">
                <h4>Brand, {product.title}</h4>
                <p>{product.description.slice(0, 300)}</p>
              </div>

              <div className="spacing">
                {product.rating.rate < 2.5 && (
                  <div className="rating">
                    <AiFillStar
                      size={30}
                      className={product.rating.rate > 0 ? "red" : ""}
                    />
                    <AiFillStar
                      size={30}
                      className={
                        product.rating.rate < 2.5 && product.rating.rate >= 1.5
                          ? "red"
                          : ""
                      }
                    />
                    <AiFillStar size={30} className="" />
                    <AiFillStar size={30} className="" />
                    <AiFillStar size={30} className="" />
                    <span style={{ fontSize: "20px" }}>
                      ({product.rating.count})
                    </span>
                  </div>
                )}
                {product.rating.rate > 2.5 && product.rating.rate < 4 && (
                  <div className="rating">
                    <AiFillStar size={30} className="orange" />
                    <AiFillStar size={30} className="orange" />
                    <AiFillStar size={30} className="orange" />
                    <AiFillStar
                      size={30}
                      className={product.rating.rate >= 3.5 ? "orange" : ""}
                    />
                    <AiFillStar size={30} className="" />
                    <span style={{ fontSize: "20px" }}>
                      ({product.rating.count})
                    </span>
                  </div>
                )}
                {product.rating.rate >= 4 && (
                  <div className="rating">
                    <AiFillStar size={30} className="green" />
                    <AiFillStar size={30} className="green" />
                    <AiFillStar size={30} className="green" />
                    <AiFillStar size={30} className="green" />
                    <AiFillStar
                      size={30}
                      className={product.rating.rate >= 4.5 ? "green" : ""}
                    />
                    <span style={{ fontSize: "20px" }}>
                      ({product.rating.count})
                    </span>
                  </div>
                )}
                {/* <div className="rating">
              <AiFillStar  size={30} className={product.rating.rate > 0.5 ? "checked" : ""} />
              <AiFillStar  size={30} className={product.rating.rate > 1.5 ? "checked" : ""} />
              <AiFillStar  size={30} className={product.rating.rate > 2.5 ? "checked" : ""} />
              <AiFillStar  size={30} className={product.rating.rate > 3.5 ? "checked" : ""} />
              <AiFillStar  size={30} className={product.rating.rate > 4.5 ? "grecheckeden" : ""} />
              <span style={{fontSize:"20px"}}>({product.rating.count})</span>
            </div> */}
                {product.category === "electronics" ? (
                  <h5 style={{ color: "brown" }}>Size: Onesize</h5>
                ) : (
                  <h5 style={{ color: "brown" }}>Size: S</h5>
                )}
                {product.category === "jewelery" ? (
                  <div className="discount-again">
                    <h2 style={{ margin: "0px", padding: "0px" }}>
                      ${(product.price * 0.7).toFixed(2)}
                    </h2>
                    <del>
                      <h4 style={{ color: "red", margin: "0px" }}>
                        ${product.price.toFixed(2)}
                      </h4>
                    </del>
                    <h4
                    className="cart-off2"
                      style={{
                        fontWeight: "400",
                        color: "brown",
                        margin: "0px",
                      }}
                    >
                      (30% off)
                    </h4>
                  </div>
                ) : (
                  <h2 style={{ margin: "0px", padding: "0px" }}>
                    ${product.price}
                  </h2>
                )}{" "}
                {product.category === "women's clothing" ? (
                  <p style={{ margin: "0px", color: "green" }}>
                    Express delivery in 3 days
                  </p>
                ) : (
                  <p style={{ margin: "0px", color: "#f5429e" }}>
                    Estimated delivery on 20 Nov 2023
                  </p>
                )}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "30px",
                    width: "100%",
                  }}
                >
                  {!isInWishlist ? (
                    <AiOutlineHeart
                      className="hover"
                      size={60}
                      onClick={handleFav}
                    />
                  ) : (
                    <AiFillHeart
                      className="hover red"
                      size={60}
                      onClick={handleFav}
                    />
                  )}

                  <button
                    style={{ width: "100%", margin: "0px" }}
                    className={
                      !isInCart
                        ? "btn-blue-color white-color for-padding"
                        : "btn-red-color white-color for-padding"
                    }
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
    </div>
  );
}

export default ProductDetailPage;
