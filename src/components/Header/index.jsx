import { useState } from "react";
import logo from "../../images/logo.svg";
import { StyledHeader } from "./styles";

const Header = ({ filteredProducts, setProducts }) => {
  const [searchInput, setSearchInput] = useState("");

  function handleInput() {
    const filterProducts = filteredProducts?.filter((element) => {
      return (
        element.name.toUpperCase().includes(searchInput.toUpperCase()) ||
        element.category.toUpperCase().includes(searchInput.toUpperCase())
      );
    });
    setSearchInput("");

    return setProducts(filterProducts);
  }

  return (
    <StyledHeader>
      <img src={logo} alt="" />

      <form onSubmit={(event) => handleInput(event.preventDefault())}>
        <div className="btn input">
          <input
            type="text"
            placeholder="Digitar pesquisa"
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <button className="btn text" type="submit">
            Pesquisar
          </button>
        </div>
      </form>
    </StyledHeader>
  );
};

export default Header;
