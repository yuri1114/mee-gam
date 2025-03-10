import styles from "../styles/Tabbar.module.scss";

const Tabbar = () => {
  return (
    <div className={styles.tabbar}>
      <button>Low price</button>
      <button>Color</button>
      <button>Size</button>
    </div>
  );
};

export default Tabbar;
