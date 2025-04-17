import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductAllPage from "./page/ProductAllPage";
import LoginPage from "./page/LoginPage";
import Navbar from "./component/Navbar";
import PrivateRoute from "./route/PrivateRoute";
import CartPage from "./page/CartPage";

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  //1. 전체상품 페이지, 로그인, 상품 상세페이지
  //1-1. 네비게이션 바 만들기.
  //2. 전체 상품- 전체상품
  //3. 로그인 버튼 - 로그인페이지
  //4. 상품 디테일을 클릭 - 로그인 안되었을 경우 로그인
  //5. 로그인이 되어있을 경우 상품 디테일 페이지.
  //6. 로그아웃 버튼을 누르면 로그아웃.
  //7. 로그인 - 로그아웃
  //8. 상품 검색.
  return (
    <div className="App">
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAllPage />}></Route>
        <Route path="/products" element={<ProductAllPage />}></Route>

        <Route
          path="/login"
          element={<LoginPage setAuthenticate={setAuthenticate} />}
        ></Route>
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        ></Route>
        <Route path="/cart" element={<CartPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
