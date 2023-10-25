import { useSelector } from "react-redux/es/hooks/useSelector";

function OrderSummary() {
  let itemsInCart = useSelector((state)=>state.cart.cartItemsList)
  function sum(){
    let totalSum = 0;
    for(let i=0;i<itemsInCart.length;i++){
        totalSum+=((itemsInCart[i].quantity)*(itemsInCart[i].price))
    }
    return totalSum;
  }
  let subTotal = sum();
  let shopping = 0;
  let tax = 0;
  if(subTotal>0){
    shopping = 0.05*subTotal
    tax = 0.1*subTotal
  }
  let total=subTotal+shopping+tax;
  return (
    <div className="order-summary">
      <h3>Order Summary</h3>
      <div className="order-summary-gap">
        <h5 className="htag">Subtotal</h5>
        <h5 className="htag">${subTotal.toFixed(2)}</h5>
      </div>
      <div className="order-summary-gap">
        <h5 className="htag">Shopping Estimate</h5>
        <h5 className="htag">${shopping.toFixed(2)}</h5>
      </div>
      <div className="order-summary-gap">
        <h5 className="htag">Tax Estimate</h5>
        <h5 className="htag">${tax.toFixed(2)}</h5>
      </div>
      <div className="order-summary-gap another">
        <h4 className="h4tag">Order total</h4>
        <h4 className="h4tag">${total.toFixed(2)}</h4>
      </div>
    </div>
  );
}

export default OrderSummary;
