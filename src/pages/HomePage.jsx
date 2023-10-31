import Navbar from "../components/Navbar";
import Subcategories from "../components/Subcategories";
import Products from "../components/Products";
import NavAndSub from './../components/NavAndSub';
import NavbarWithSubcat from "../components/NavbarWithSubcat";

function HomePage(){
    return (
        <div style={{backgroundColor:"#f7f0f0"}} >
            <NavbarWithSubcat/>
            {/* <NavAndSub/> */}
            <Products/>
        </div>
    )
}
 export default HomePage;