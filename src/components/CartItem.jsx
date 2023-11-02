import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteFromCart, decrementFromCart } from "../redux/reducers/CartSlice";
import { addToCart } from "../redux/reducers/CartSlice";
import { useNavigate } from "react-router-dom";

function CartItem(props) {
  const { image, title, price, quantity, id, category } = props.data;
  let navigate = useNavigate();
  let dispatch = useDispatch();
  function handleClick(e) {
    e.preventDefault();
    navigate("/productDetailPage/" + id);
  }
  function handleDelete() {
    dispatch(deleteFromCart(props.data));
  }
  function handleIncrement() {
    dispatch(addToCart(props.data));
  }
  function handleDecrement() {
    dispatch(decrementFromCart(props.data));
  }
  return (
    <div className="cart-img-details" style={{ backgroundColor: "#fff" }}>
      <div className="without-del">
        <div className="cart-img hover">
          <img src={image} width={200} height={200} onClick={handleClick} />
        </div>
      
        <div className="details">
          <div className="heading">
            <h5>Brand</h5>
            <p>{title}</p>
          </div>
          <div>
            <div className="buttons">
              <button className="symbol common" onClick={handleDecrement}>
                -
              </button>
              <button className="numberDisplay common">{quantity}</button>
              <button className="symbol common" onClick={handleIncrement}>
                +
              </button>
            </div>
            {category === "jewelery" ? (
              <div className="discount">
                <h4 style={{ margin: "0px" }}>
                  ${(price * quantity * 0.7).toFixed(2)}
                </h4>
                <del>
                  <h6 style={{ margin: "0px" }} className="original-price">
                    ${(price * quantity).toFixed(2)}
                  </h6>
                </del>
                <h6
                  className="cart-off"
                >
                  (30% off)
                </h6>
              </div>
            ) : (
              <h4 style={{ margin: "0px", marginTop: "5px" }}>
                ${price * quantity}
              </h4>
            )}

            {category === "women's clothing" ? (
              <p style={{ margin: "0px", color: "green" }}>
                Express delivery in 3 days
              </p>
            ) : (
              <p style={{ margin: "0px", color: "#f5429e" }}>
                Estimated delivery on 20 Nov 2023
              </p>
            )}
          </div>
        </div>
      </div>
      <div>
        <RiDeleteBin5Line
          size={30}
          className="for-delete"
          onClick={handleDelete}
        />
      </div>
    </div>
  );
}
export default CartItem;
