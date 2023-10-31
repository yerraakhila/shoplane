import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { clearUser, getUser } from "../helper/user";
import { CgProfile } from "react-icons/cg";
import { currUserCartItemsNum } from "../redux/reducers/CartSlice";

function Navbar() {
  const navigate = useNavigate();
  let numitemsInCart = useSelector(currUserCartItemsNum);
  let loginStatus = getUser() ? true : false;
  function handleLogout() {
    clearUser();
  }
  return (
    <div className="header">
      <div className="spans" onClick={() => navigate("/")}>
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
        <div>
          <AiOutlineHeart size={40} />
        </div>
        <div className="cart-and-num" onClick={() => navigate("/cart")}>
          <AiOutlineShoppingCart size={40} />
          <button className="small">{numitemsInCart}</button>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
