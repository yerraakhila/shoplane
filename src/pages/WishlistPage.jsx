import Product from "../components/Product";
import { useSelector } from "react-redux/es/hooks/useSelector";

function WishlistPage() {
  let itemsInWishlist = useSelector((state) => state.wishlist.wishlistItems);
  console.log(itemsInWishlist);

  return (
    <div>
      <div className="row cust-row">
        {itemsInWishlist.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default WishlistPage;
