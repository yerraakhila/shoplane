import CartItems from "../components/CartItems";
import OrderSummary from "../components/OrderSummary";
import NavAndSub from './../components/NavAndSub';
import NavbarWithSubcat from "../components/NavbarWithSubcat";

function CartPage(){

    return(
        <div style={{backgroundColor:"#f7f0f0",minHeight:"100vh"}}>
            <NavbarWithSubcat/>
            <div className="cart-page prods">
                <div className="col-md-8">
                    <CartItems/>
                </div>
                <div className="col-md-4 middle">
                    <OrderSummary/>
                </div>
                
            </div>
        </div>
        
       
    )
}
export default CartPage;