import CartItem from "./CartItem";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { currUserCartItemsList } from "../redux/reducers/CartSlice";
import { Link } from "react-router-dom";

function CartItems() {
  let itemsInCart = useSelector(currUserCartItemsList);
  return (
    <div className="outer-row">
      {itemsInCart && (
        <div className="cart-items-gap">
          {itemsInCart.map((product) => (
            <CartItem data={product} key={product.id} />
          ))}
        </div>
      )}

      
    </div>
  );
}

export default CartItems;
