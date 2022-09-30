import { TotalProducts } from "./styles";

const CartTotal = ({ currentSale, setCurrentSale }) => {
  const totalPrice = currentSale
    .reduce((acc, current) => acc + current.price, 0)
    .toLocaleString("pt-br", { style: "currency", currency: "BRL" });

  return (
    <TotalProducts>
      <div className="totalPrice">
        <span>Total</span>
        <span className="textPrice">{totalPrice}</span>
      </div>
      <button
        className="cartButton"
        type="button"
        onClick={() => setCurrentSale([])}
      >
        Remover todos
      </button>
    </TotalProducts>
  );
};

export default CartTotal;
