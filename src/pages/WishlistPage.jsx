import { useSelector } from "react-redux/es/hooks/useSelector";
import { currUserWishlistItemsList } from "../redux/reducers/WishlistSlice";
import NavbarWithSubcat from "../components/NavbarWithSubcat";
import NewProduct from "../components/NewProduct";
import { Link } from "react-router-dom";

function WishlistPage() {
  let itemsInWishlist = useSelector(currUserWishlistItemsList);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f7f0f0" }}>
      <NavbarWithSubcat />
      <div className="prods">
        {itemsInWishlist.length ? (
          <div style={{ padding: "50px 25px 5px 25px", margin:"0px"}} className="row cust-row">
            {itemsInWishlist.map((product) => (
              <NewProduct data={product} key={product.id} favPage={true} />
            ))}
          </div>
        ) : (
          <div className="for-center">
            <h2>Your wishlist is Empty.</h2>
            <br />
            <h5 style={{ color: "black" }}>
              Click <Link to="/">here</Link> to shop.
              <h5 style={{ color: "green", marginTop: "15px" }}>
                (30% off on jewelery and express delivery for women's
                clothing!!!)
              </h5>
            </h5>
          </div>
        )}
      </div>
    </div>
  );
}

export default WishlistPage;
