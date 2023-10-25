import CartItem from "./CartItem";
import { useSelector } from "react-redux/es/hooks/useSelector";

function CartItems() {
  let itemsInCart = useSelector((state) => state.cart.cartItemsList);
  return (
    
    <div className="outer-row">
      {itemsInCart && <div className="cart-items-gap">
        {itemsInCart.map((product) => (
          <CartItem data={product} key={product.id} />
        ))}
      </div>}

      {!itemsInCart.length && <div className="empty">
        <h2>Your Cart is Empty</h2>
        </div>}
      
    </div>
  );
}

export default CartItems;
