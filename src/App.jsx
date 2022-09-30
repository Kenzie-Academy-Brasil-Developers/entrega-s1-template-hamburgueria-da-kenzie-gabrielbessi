import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { api } from "./services";

import ProductsList from "./components/ProductsList";
import Header from "./components/Header";
import Cart from "./components/Cart";
import CartTotal from "./components/CartTotal";

import "../src/styles/index.css";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [filteredProducts, setFilteresProducts] = useState([]);

  function handleClick(idItem) {
    const filterProducts = products.find(({ id }) => id === idItem);

    const verificacao = currentSale.some((element) => element.id === idItem);

    verificacao
      ? toast.error("Item existente")
      : (setCurrentSale([...currentSale, filterProducts]),
        toast.success("Item adicionado"));
  }

  useEffect(() => {
    api
      .get("/products")
      .then((response) => {
        setProducts(response.data);
        setFilteresProducts(response.data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="App">
      <Toaster />
      <Header filteredProducts={filteredProducts} setProducts={setProducts} />
      <main className="mainStyled">
        <ProductsList products={products} handleClick={handleClick} />
        <div>
          <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
          {currentSale.length === 0 ? null : (
            <CartTotal
              currentSale={currentSale}
              setCurrentSale={setCurrentSale}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
