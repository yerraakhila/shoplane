import Navbar from "../components/Navbar";
import Subcategories from "../components/Subcategories";
import Products from "../components/Products";
import NavAndSub from './../components/NavAndSub';

function HomePage(){
    return (
        <div >
            <NavAndSub/>
            <Products/>
        </div>
    )
}
 export default HomePage;