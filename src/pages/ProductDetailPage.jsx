import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";

function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/" + id)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error));
  }, []);

//   if (!product) return null;

  if (!product.rating) return null;

  return <ProductDetail data={product} />;
}

export default ProductDetailPage;
