import Products from "../Products";
import { ListProducts } from "./styles";

const ProductsList = ({ products, handleClick }) => {
  return (
    <ListProducts>
      <ul>
        {products.map(({ id, img, category, name, price }) => (
          <Products
            key={id}
            id={id}
            img={img}
            category={category}
            name={name}
            price={price}
            handleClick={handleClick}
          />
        ))}
      </ul>
    </ListProducts>
  );
};

export default ProductsList;
