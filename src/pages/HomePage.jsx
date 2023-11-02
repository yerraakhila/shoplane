import Products from "../components/Products";
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