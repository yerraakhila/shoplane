import { Link } from "react-router-dom";
import { clearCart } from "../redux/reducers/CartSlice";
import { useDispatch } from "react-redux";

function OrderSuccess() {
  let dispatch = useDispatch()
  dispatch(clearCart());
  return (
    <div className="order-success">
      <h2 className="green">
        Congratulations!!! Your Order has been placed successfully.
      </h2>
      <h4 className="continue-shopping">
        Click <Link to="/">here</Link> to continue shopping
      </h4>
    </div>
  );
}

export default OrderSuccess;
