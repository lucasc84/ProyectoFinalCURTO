//App es el padre de los demas componentes, se copnfigura y se da acceso a la navegación, no se aplican estilos

import NavBarRB from "./components/NavBarRB";
import ItemListContainer from "./components/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./components/Error404";
import { CartProvider } from "./context/CartContext";
import CartContainer from "./components/CartContainer";

function App() {
  return (
    <BrowserRouter>
    <CartProvider>
    <NavBarRB />
      {/* se deja afuera de las rutas para que se vea en todas las paginas */}

      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer mensaje="Bienvenidos a la Tienda Online de Poseidon" />
          }
        />
        <Route
          path="/category/:type"
          element={<ItemListContainer mensaje="Estas en la sección: " />}
        />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartContainer/>} />
      </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
