import { List } from "./styles";

const Products = ({ img, id, category, name, price, handleClick }) => {
  return (
    <List>
      <div className="imageProducts">
        <img src={img} alt="" />
      </div>
      <div className="textProducts">
        <p>{name}</p>
        <span className="span1">{category}</span>
        <span>R$ {price}</span>
        <button type="button" onClick={() => handleClick(id)}>
          Adicionar
        </button>
      </div>
    </List>
  );
};

export default Products;
