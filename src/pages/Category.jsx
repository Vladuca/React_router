import { useParams } from "react-router-dom";
import { products } from "../data/data";
import { Link, NavLink } from "react-router-dom";

export default function Category() {
  const { categoryId } = useParams();
  const currentCategoryArray = products.filter(
    (products) => products.categoryId === categoryId
  );
  console.log(currentCategoryArray);

  return (
    <div>
      {currentCategoryArray.length > 0 ? (
        <>
          <h1>{categoryId}</h1>
          <ul style={{ display: "flex" }}>
            {currentCategoryArray.map((item) => (
              <li key={item.name}>
                <Link to={`/product/${item.id}`}>
                  {item.name} {item.price}$
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{ width: "150px" }}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Not found</p>
      )}
    </div>
  );
}
