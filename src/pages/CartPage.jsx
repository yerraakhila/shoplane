import CartItems from "../components/CartItems";
import OrderSummary from "../components/OrderSummary";
import NavAndSub from './../components/NavAndSub';

function CartPage(){

    return(
        <>
        <NavAndSub/>
        <div className="cart-page">
            <div className="col-md-9">
            <CartItems/>
            </div>
            <div className="col-md-3">
                <OrderSummary/>
            </div>
            
        </div>
        </>
        
       
    )
}
export default CartPage;