import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { currUserCartItemsNum } from "../redux/reducers/CartSlice";
import { getUser, clearUser } from "../helper/user";

function NavbarWithSubcat({ categoryId }) {
  const navigate = useNavigate();
  const [subcategories, setsubcategories] = useState([]);
  let numitemsInCart = useSelector(currUserCartItemsNum);
  function handleClick(e, subcategory) {
    e.preventDefault();
    navigate("/subcategory/" + subcategory);
  }
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((Response) => setsubcategories(Response.data))
      .catch((error) => console.log(error));
  }, []);
  let loginStatus = getUser() ? true : false;
  function handleLogout() {
    clearUser();
  }

  return (
    <div className="navbarWithSubcat">
      <div className="spans" onClick={() => navigate("/")}>
        <span className="blue">SHOP</span>
        <span className="pink">LANE</span>
      </div>

      <ul className="nav subs">
        {subcategories.map((subcategory) => (
          <li
            className={
              subcategory === categoryId
                ? "nav-item for-hover selected"
                : "nav-item for-hover"
            }
            onClick={(e) => handleClick(e, subcategory)}
            key={subcategory}
            id={subcategory.length}
          >
            {subcategory.toUpperCase()}
          </li>
        ))}
      </ul>

      <div className="nav-3icons">
        <div class=" icon"></div>
        <div className="icon">
          <button
            class=""
            type="button"
            data-toggle="dropdown"
            aria-expanded="false"
            style={{
              backgroundColor: "rgb(249, 242, 235)",
              color: "black",
              border: "0px",
            }}
          >
            {loginStatus ? (
              <span className="profile-deco">
                {getUser().charAt(0).toUpperCase()}
              </span>
            ) : (
              <CgProfile size={40} />
            )}
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
          {/* <CgProfile size={30} /> */}
          <p style={{ margin: "0px", fontWeight: "600" }}>Profile</p>
        </div>
        <div className="icon hover">
          <AiOutlineHeart size={30} onClick={() => navigate("/wishlist")} />
          <p style={{ margin: "0px", fontWeight: "600" }}>Wishlist</p>
        </div>
        <div className="icon hover" onClick={() => navigate("/cart")}>
          <div style={{ position:"relative" }}>
            <AiOutlineShoppingCart size={30} />
            <button className="small2">{numitemsInCart}</button>
          </div>
          <p style={{ margin: "0px", fontWeight: "600" }}>Cart</p>
        </div>
      </div>
    </div>
  );
}

export default NavbarWithSubcat;
