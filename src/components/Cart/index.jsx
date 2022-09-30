import CardProduct from "../CartProduct";
import { MdAddShoppingCart } from "react-icons/md";
import { CartStyle } from "./stles";

const Cart = ({ currentSale, setCurrentSale }) => {
  return (
    <CartStyle>
      <div className="headerCarrinho">Carrinho de compras</div>
      <ul>
        {currentSale.length === 0 ? (
          <p className="iconCarrinho">
            <MdAddShoppingCart />
          </p>
        ) : (
          currentSale.map(({ id, img, name, category }) => (
            <CardProduct
              key={id}
              id={id}
              img={img}
              name={name}
              category={category}
              setCurrentSale={setCurrentSale}
              currentSale={currentSale}
            />
          ))
        )}
      </ul>
    </CartStyle>
  );
};

export default Cart;
