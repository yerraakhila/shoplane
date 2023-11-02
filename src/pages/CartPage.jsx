import CartItems from "../components/CartItems";
import OrderSummary from "../components/OrderSummary";
import NavbarWithSubcat from "../components/NavbarWithSubcat";
import { currUserCartItemsList } from "../redux/reducers/CartSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";

function CartPage() {
  let itemsInCart = useSelector(currUserCartItemsList);
  return (
    <div style={{ backgroundColor: "#f7f0f0", minHeight: "100vh" }}>
      <NavbarWithSubcat />
      <div className="cart-page prods">
        <div className="two-third">
          <CartItems />
        </div>
        {itemsInCart.length ? (
          <div className="one-third">
            <OrderSummary />
          </div>
        ) : (
          <div></div>
        )}
      </div>
      {!itemsInCart.length && (
        <div className="empty">
          <h2>Your Cart is Empty.</h2>
          <br />
          <h5 style={{ color: "black" }}>
            (Add items from <Link to="/wishlist">Wishlist</Link>)
          </h5>
        </div>
      )}
    </div>
  );
}
export default CartPage;
