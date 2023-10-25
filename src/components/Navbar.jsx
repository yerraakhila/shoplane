import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

function Navbar() {
  const navigate = useNavigate();
  let numitemsInCart = useSelector((state)=>state.cart.cartItemsNum)
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
            Login or Sign up
            
          </button>
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
        </div>
        <div className="cart-and-num"  >
          <AiOutlineShoppingCart size={40} onClick={()=> navigate("/cart")} />
          <button className="small">{numitemsInCart}</button>
        </div>
        
      </div>
    </div>
  );
}
export default Navbar;
