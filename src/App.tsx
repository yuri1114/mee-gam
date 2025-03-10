import { Routes, Route } from "react-router-dom";
//scss
import "./styles/global.scss";
import Header from "./components/Header.tsx";

//page
import Home from "./pages/Home.tsx";
import Detail from "./pages/Details.tsx";
import Product from "./pages/Product.tsx";
import Cart from "./pages/Cart.tsx";
import Footer from "./components/Footer.tsx";

// useNavigate, Outlet
function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="body-container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="detail" element={<Detail />}></Route>
          <Route path="Product" element={<Product />}></Route>
          <Route path="cart" element={<Cart />}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
