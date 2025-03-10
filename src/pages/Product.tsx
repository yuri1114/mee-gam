import ListContainer from "../components/ListContainer";
import Tabbar from "../components/Tabbar";
import styles from "../styles/Product.module.scss";

const Product = () => {
  return (
    <div className={styles.padding}>
      <Tabbar></Tabbar>
      <ListContainer></ListContainer>
    </div>
  );
};

export default Product;
