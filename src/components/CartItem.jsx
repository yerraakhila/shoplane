import { RiDeleteBin5Line } from "react-icons/ri";

function CartItem(props) {
  const { image, title, price } = props.data;

  return (
    <div className="cart-img-details">
      <div className="without-del">
        <div className="cart-img">
          <img src={image} width={150} />
        </div>
        <div className="details">
          <div className="heading">
            <h5>Brand</h5>
            <p>{title}</p>
          </div>
          <h4>${price}</h4>
        </div>
      </div>
      <RiDeleteBin5Line size={20} />
    </div>
  );
}
export default CartItem;
