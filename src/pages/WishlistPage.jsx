import Product from "../components/Product";
import { useSelector } from "react-redux/es/hooks/useSelector";
import NavAndSub from './../components/NavAndSub';

function WishlistPage() {
  let itemsInWishlist = useSelector((state) => state.wishlist.wishlistItems);
  console.log(itemsInWishlist);

  return (
    <>
    <NavAndSub/>
    <div>
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
