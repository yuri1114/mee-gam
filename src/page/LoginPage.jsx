import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setAuthenticate }) => {
  const navigator = useNavigate();
  const loginUser = (event) => {
    event.preventDefault();
    console.log("??");
    setAuthenticate(true);
    navigator("/");
  };
  return (
    <div className="container">
      <div className="login">
        <form onSubmit={(event) => loginUser(event)}>
          <p>아이디</p>
          <input type="text" placeholder="아이디를 입력하세요" />
          <p>비밀번호</p>
          <input type="password" placeholder="비밀번호를 입력하세요" />
          <button className="btn-login" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
