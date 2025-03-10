import styles from "../styles/Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Mee-gam</h1>
      <div className={styles.menu}>
        <button>PRODUCT</button>
        <button>CART</button>
      </div>
    </div>
  );
};

export default Header;
