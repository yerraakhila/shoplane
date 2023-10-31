import Product from "../components/Product";
import { useSelector } from "react-redux/es/hooks/useSelector";
import NavAndSub from "./../components/NavAndSub";
import { wishlistSelector } from "../redux/reducers/WishlistSlice";
import { currUserWishlistItemsList, currUserWishlistItemsNum } from "../redux/reducers/WishlistSlice";
import { UseSelector } from "react-redux/es/hooks/useSelector";
import NavbarWithSubcat from "../components/NavbarWithSubcat";
import NewProduct from "../components/NewProduct";
import { Link } from "react-router-dom";

function WishlistPage() {
  let itemsInWishlist = useSelector(currUserWishlistItemsList);
  let itemsInCart = useSelector(currUserWishlistItemsNum)

  return (
    < div style={{ minHeight:"100vh",backgroundColor:"#f7f0f0"}}>
      <NavbarWithSubcat/>
        
        <div className="row cust-row prods">
          
          {itemsInWishlist.map((product) => (
            <NewProduct data={product} key={product.id} favPage={true} />
          ))}
          
        </div>
        {!itemsInCart && <div className="for-center">
        <h2>Your wishlist is Empty</h2>
        <br />
        <h5 style={{color:"black"}}>(30% off on all Products. click <Link to="/">here</Link> to shop)</h5>
        </div>}
      
    </div>
  );
}

export default WishlistPage;
