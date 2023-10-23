import { useEffect, useState } from "react";
import axios from "axios";
import { AiFillStar } from "react-icons/ai";

function ProductDetail(props) {
  const { image, rating, price, title, description } = props.data;

  console.log(rating);
  return (
    <div className="container">

      <div
        className="wrapper"
      >
        <div className="row">
          <div className="col-sm-6 cust-col-sm-6">
            <img
              src={image}
              alt=""
              height="400px"
              width="300px"
              className="img-fluid"
            />
          </div>
          <div className="col-sm-6 gap">
            <h4>{title}</h4>
            <p>{description}</p>
            <h2>${price}</h2>
            <div>
              <AiFillStar className={rating.rate > 0.5 ? "checked" : ""} />
              <AiFillStar className={rating.rate > 1.5 ? "checked" : ""} />
              <AiFillStar className={rating.rate > 2.5 ? "checked" : ""} />
              <AiFillStar className={rating.rate > 3.5 ? "checked" : ""} />
              <AiFillStar className={rating.rate > 4.5 ? "checked" : ""} />(
              {rating.count})
            </div>
            <br></br>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
