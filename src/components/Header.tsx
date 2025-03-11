import styles from "../styles/Header.module.scss";

import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();
  return (
    <div className={styles.header}>
      <h1
        onClick={() => {
          navigate("/");
        }}
      >
        Mee-gam
      </h1>
      <div className={styles.menu}>
        <button
          onClick={() => {
            navigate("/product");
          }}
        >
          PRODUCT
        </button>
        <button
          onClick={() => {
            navigate("/cart");
          }}
        >
          CART
        </button>
      </div>
    </div>
  );
};

export default Header;
