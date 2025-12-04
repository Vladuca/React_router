import { useParams } from "react-router-dom";
import { products } from "../data/data";

export default function ProductDetales() {
  const { productId } = useParams();
  const product = products.find((item) => item.id === parseInt(productId, 10));
  return (
    <div>
      <h1>ProductDetails</h1>
      {product ? (
        <>
          <h2>{product.name}</h2>
          <p>Price:{product.price}$</p>
          <img
            src={product.img}
            alt={product.name}
            style={{ width: "150px" }}
          />
        </>
      ) : (
        <p>Not found</p>
      )}
    </div>
  );
}
