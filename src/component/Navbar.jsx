import React from "react";
import "../../src/app.scss";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = ["조명", "패브릭포스터", "꽃병", "식물"];

  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
    authenticate ? setAuthenticate(false) : setAuthenticate(true);
  };

  const goHome = () => {
    navigate("/");
  };

  const goCart = () => {
    navigate("/cart");
  };

  const search = (event) => {
    if (event.key === "Enter") {
      console.log("event!", event.key);
      //입력한 검색어를 읽어와서
      //url을 바꿔준다.
      let keyword = event.target.value;
      console.log("keyword", keyword);
      navigate(`/?q=${keyword}`);
    }
  };
  return (
    <div className="navbar">
      <div className="mypage">
        <div onClick={goToLogin} className="login-btn">
          <div className="icon"></div>
          <p className="id">{authenticate ? "로그아웃" : "로그인"}</p>
        </div>
        {authenticate ? (
          <div onClick={goCart} className="cart">
            장바구니
          </div>
        ) : null}
      </div>
      <div className="logo" onClick={goHome}>
        <h1>MEE-GAM</h1>
      </div>

      <ul className="gnb">
        {menuList.map((menu) => (
          <li
            key={menu}
            onClick={() => {
              navigate(`/products?category=${menu}`);
            }}
          >
            {menu}
          </li>
        ))}
      </ul>

      <div className="search-area">
        <div className="search-bar">
          <div className="icon"></div>
          <input type="text" onKeyPress={(event) => search(event)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
