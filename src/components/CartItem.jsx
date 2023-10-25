import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteFromCart,decrementFromCart } from "../redux/reducers/CartSlice";
import { addToCart } from "../redux/reducers/CartSlice";
import { useNavigate } from "react-router-dom";

function CartItem(props) {
  const { image, title, price,quantity,id} = props.data;
  let navigate = useNavigate();
  let dispatch = useDispatch();
  function handleClick(e) {
    e.preventDefault();
    navigate("/productDetailPage/" + id);
    
  }
  function handleDelete(){
    dispatch(deleteFromCart(props.data));
  }
  function handleIncrement(){
    dispatch(addToCart(props.data));
  }
  function handleDecrement(){
    dispatch(decrementFromCart(props.data));
  }
  return (
    <div className="cart-img-details">
      <div className="without-del">
        <div className="cart-img">
          <img src={image} width={200} height={200} onClick={handleClick} />
        </div>
        <div className="details">
          <div className="heading">
            <h5>Brand</h5>
            <p>{title}</p>
          </div>
          <div className="buttons">
            <button className="symbol common" onClick={handleDecrement}>-</button>
            <button className="numberDisplay common">{quantity}</button>
            <button className="symbol common" onClick={handleIncrement}>+</button>
          </div>
          <h4>${price*quantity}</h4>
        </div>
      </div>
      <RiDeleteBin5Line size={20} onClick={handleDelete} />
    </div>
  );
}
export default CartItem;
