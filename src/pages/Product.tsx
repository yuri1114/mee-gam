import Tabbar from "../components/Tabbar";
import styles from "../styles/Product.module.scss";
import ItemCard from "../components/ItemCard";
const Product = () => {
  return (
    <div className={styles.padding}>
      <Tabbar></Tabbar>

      <div className={styles.list}>
        <ItemCard />
      </div>
    </div>
  );
};

export default Product;
