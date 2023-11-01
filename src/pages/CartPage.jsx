import CartItems from "../components/CartItems";
import OrderSummary from "../components/OrderSummary";
import NavbarWithSubcat from "../components/NavbarWithSubcat";
import { currUserCartItemsList } from "../redux/reducers/CartSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";


function CartPage(){
    let itemsInCart = useSelector(currUserCartItemsList);
    console.log(itemsInCart)
    return(
        <div style={{backgroundColor:"#f7f0f0",minHeight:"100vh"}}>
            <NavbarWithSubcat/>
            <div className="cart-page prods">
                <div className="col-md-8">
                    <CartItems/>
                </div>
                {itemsInCart.length ?
                <div className="col-md-4">
                    <OrderSummary/> 
                </div> : <div></div>
                }
            </div>
        </div>
        
       
    )
}
export default CartPage;