import { useSelector } from "react-redux/es/hooks/useSelector";
import { currUserCartItemsList } from "../redux/reducers/CartSlice";
import { useNavigate } from "react-router-dom";

function OrderSummary() {
  let navigate = useNavigate()
  let itemsInCart = useSelector(currUserCartItemsList);
  function sum(){
    let totalSum = 0;
    for(let i=0;i<itemsInCart.length;i++){
        totalSum+=((itemsInCart[i].quantity)*(itemsInCart[i].price))
    }
    return totalSum;
  }
  function findDiscount(){
    let totalDiscount = 0;
    for(let i=0;i<itemsInCart.length;i++){
      if(itemsInCart[i].category === "jewelery"){
        console.log("hi")
        totalDiscount += ((itemsInCart[i].quantity)*(itemsInCart[i].price)*0.3)
      }
    }
  return totalDiscount;
  }
  let subTotal = sum();
  let shopping = 0;
  let tax = 0;
  let discount = findDiscount()
  let delivery = 0;
  if(subTotal>0){
    shopping = 0.05*subTotal
    tax = 0.1*subTotal
    delivery = 10
  }
  let total=subTotal-discount+shopping+tax;
  let orderTotal = total+delivery;
  return (
    <div className="for-fixed" >
    <div className="order-summary" style={{backgroundColor:"#fff"}}>
      <h3>Order Summary</h3>
      <div className="order-summary-gap">
        <h5 className="htag">Subtotal</h5>
        <h5 className="htag">${subTotal.toFixed(2)}</h5>
      </div>
      <div className="order-summary-gap">
        <h5 className="htag">Discount</h5>
        <h5 className="htag">- ${discount.toFixed(2)}</h5>
      </div>
      <div className="order-summary-gap">
        <h5 className="htag">Shopping Estimate</h5>
        <h5 className="htag">+ ${shopping.toFixed(2)}</h5>
      </div>
      <div className="order-summary-gap">
        <h5 className="htag">Tax Estimate</h5>
        <h5 className="htag">+ ${tax.toFixed(2)}</h5>
      </div>
      <hr style={{marginTop:"0px"}}/>
      <div className="order-summary-gap">
        <h5 className="htag htag-again">Total</h5>
        <h5 className="htag htag-again">${total.toFixed(2)}</h5>
      </div>
      <div className="order-summary-gap">
        <h5 className="htag">Delivery Fee</h5>
        <h5 className="htag">+ ${delivery}</h5>
      </div>
      <hr style={{marginTop:"0px"}}/>
      <div className="order-summary-gap another">
        <h4 className="h4tag">Order total</h4>
        <h4 className="h4tag">${orderTotal.toFixed(2)}</h4>
      </div>
      
    </div>
    <div class="text-center">
    <button className="proceed" onClick={()=>navigate('/orderSuccess')}>Click here to Pay</button>
    </div>
    
    </div>
  );
}

export default OrderSummary;
