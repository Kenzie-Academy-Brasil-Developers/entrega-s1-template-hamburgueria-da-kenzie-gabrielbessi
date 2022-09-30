import { ListCart } from "./styles";
import { BsFillTrashFill } from "react-icons/bs";
import toast from "react-hot-toast";

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
    toast("Item removido do carrinho", {
      icon: <BsFillTrashFill />,
    });
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
      <div>
        <button
          className="buttonCart"
          type="button"
          onClick={() => handleRemove(id)}
        >
          <BsFillTrashFill />
        </button>
        {/* <p>1</p> */}
      </div>
    </ListCart>
  );
};

export default CardProduct;
