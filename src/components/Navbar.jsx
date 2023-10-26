import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect, useState } from "react";
import { clearUser, getUser } from "../helper/user";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  const navigate = useNavigate();
  let numitemsInCart = useSelector((state) => state.cart.cartItemsNum);
  let loginStatus = getUser() ? true : false;
  function handleLogout() {
    clearUser();
  }
  // let userLetter = getUser().charAt(0);
  return (
    <div className="header">
      <div className="spans">
        <span className="blue">SHOP</span>
        <span>LANE</span>
      </div>
      <div className="login-cart-div cart-adj">
        <div class="dropdown new-class">
          {loginStatus ? (
            <span className="profile-deco">
              {getUser().charAt(0).toUpperCase()}
            </span>
          ) : (
            <CgProfile size={40} />
          )}

          <button
            class="btn btn-secondary dropdown-toggle additional"
            type="button"
            data-toggle="dropdown"
            aria-expanded="false"
            style={{
              backgroundColor: "white",
              color: "black",
              border: "none",
              fontSize: "20px",
            }}
          >
            {!loginStatus ? <span>Login or Sign up</span> : "Logout"}
          </button>
          {!loginStatus ? (
            <div class="dropdown-menu">
              <Link class="dropdown-item" to="/login">
                Login
              </Link>
              <Link class="dropdown-item" to="/signup">
                Sign Up
              </Link>
              <Link class="dropdown-item" to="/wishlist">
                Wishlist
              </Link>
              <Link class="dropdown-item" to="/cart">
                Cart
              </Link>
            </div>
          ) : (
            <div class="dropdown-menu">
              <Link class="dropdown-item" to="/" onClick={handleLogout}>
                Logout
              </Link>
              <Link class="dropdown-item" to="/wishlist">
                Wishlist
              </Link>
              <Link class="dropdown-item" to="/cart">
                Cart
              </Link>
            </div>
          )}
        </div>
        <div className="cart-and-num">
          <AiOutlineShoppingCart size={40} onClick={() => navigate("/cart")} />
          <button className="small">{numitemsInCart}</button>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
