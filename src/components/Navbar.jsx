import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect, useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  let numitemsInCart = useSelector((state) => state.cart.cartItemsNum);
  const [loginStatus, setLoginStatus] = useState(false);
  useEffect(() => {
    let token = localStorage.getItem('token');
    console.log(token)
    if(token) {
      setLoginStatus(true);
      console.log("hi")
    } else {
      setLoginStatus(false);
    }
  }, []);
  function handleLogout() {
    localStorage.clear();
    setLoginStatus(false);
  }
  return (
    <div className="header">
      <div className="spans">
        <span className="blue">SHOP</span>
        <span>LANE</span>
      </div>
      <div className="login-cart-div">
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            {!loginStatus ? "Login or Sign up" : "Logout"}
          </button>
          {!loginStatus ?
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
          </div> : 
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
          }
          
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
