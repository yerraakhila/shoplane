import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import {Link, useLocation} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Subcategories() {
  const [subcategories, setsubcategories] = useState([]);
  let navigate = useNavigate();

  function handleClick(e,subcategory){
    e.preventDefault();
    navigate('/subcategory/'+subcategory)
    console.log(subcategory)
    
  }
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((Response) => setsubcategories(Response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <ul
        class="nav"
        style={{
          display: "flex",
          justifyContent: "space-around",
          fontSize: "30px",
          padding: "0px 200px",
        }}
      >
        <li class="nav-item" style={{color:"blue"}} onClick={()=>navigate('/')}>
          All
        </li>
        {subcategories.map((subcategory) => (
          <li class="nav-item for-color" onClick={(e)=>handleClick(e,subcategory)} key={subcategory} >
              {subcategory}
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}

export default Subcategories;
