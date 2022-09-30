import { ListCart } from "./styles";
import { BsFillTrashFill } from "react-icons/bs";

const CardProduct = ({
  id,
  img,
  name,
  category,
  setCurrentSale,
  currentSale,
}) => {
  function handleRemove(idRemove) {
    const filterCurrentSale = currentSale.filter(({ id }) => id !== idRemove);

    setCurrentSale(filterCurrentSale);
  }

  return (
    <ListCart>
      <div className="cartList">
        <img src={img} alt="" />
        <div>
          <p className="textName">{name}</p>
          <span>{category}</span>
        </div>
      </div>
      <button
        className="buttonCart"
        type="button"
        onClick={() => handleRemove(id)}
      >
        <BsFillTrashFill />
      </button>
    </ListCart>
  );
};

export default CardProduct;
