import styles from "../styles/ItemCard.module.scss";
import AddBtn from "./AddBtn";

const ItemCard = () => {
  return (
    <div className={styles.item}>
      <div className={styles.imgWrap}></div>
      <div className={styles.textWrap}>
        <p className={styles.productText}>제목</p>
        <p className={styles.productText}>가격</p>
      </div>
      <AddBtn></AddBtn>
    </div>
  );
};

export default ItemCard;
