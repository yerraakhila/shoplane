import CartItem from "./CartItem";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { currUserCartItemsList } from "../redux/reducers/CartSlice";
import { Link } from "react-router-dom";
function CartItems() {
  let itemsInCart = useSelector(currUserCartItemsList);
  return (
    
    <div className="outer-row">
      {itemsInCart && <div className="cart-items-gap">
        {itemsInCart.map((product) => (
          <CartItem data={product} key={product.id} />
        ))}
      </div>}

      {!itemsInCart.length && <div className="empty">
        <h2>Your Cart is Empty</h2>
        <br />
        <h5 style={{color:"black"}}>(Add items from <Link to="/wishlist">Wishlist</Link>)</h5>
        </div>}
      
    </div>
  );
}

export default CartItems;
