import Product from "../components/Product";
import { useSelector } from "react-redux/es/hooks/useSelector";
import NavAndSub from "./../components/NavAndSub";
import { wishlistSelector } from "../redux/reducers/WishlistSlice";
import { currUserWishlistItemsList } from "../redux/reducers/WishlistSlice";
import { UseSelector } from "react-redux/es/hooks/useSelector";

function WishlistPage() {
  let itemsInWishlist = useSelector(currUserWishlistItemsList);

  return (
    <>
      <NavAndSub />
      <div>
      <p></p>
        <div className="row cust-row">
          
          {itemsInWishlist.map((product) => (
            <Product data={product} key={product.id} favPage={true} />
          ))}
        </div>
      </div>
    </>
  );
}

export default WishlistPage;
