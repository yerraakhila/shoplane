import { Link } from "react-router-dom";

function OrderSuccess(){
    return(
        <div className="order-success">
            <h2 className="green">Congratulations!!! Your Order placed Successfully.</h2>
            <h4 className="continue-shopping">Click <Link to="/">here</Link> to continue shopping</h4>
            
        </div>
    )
}

export default OrderSuccess;