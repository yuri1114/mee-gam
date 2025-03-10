import AddBtn from "../components/AddBtn";
import styles from "../styles/Detail.module.scss";

const Detail = () => {
  return (
    <div className={styles.inner}>
      <p className={styles.title}>상품 제목입니다.</p>

      <div className={styles.productDetail}>
        <div className={styles.textWrap}>
          <p className={styles.desc}>아주아주 긴 설명이 잔뜩 써져 있어요</p>

          <p className={styles.bold}>
            PRICE : $15 <br></br>SIZE : Small
          </p>
          <AddBtn></AddBtn>
        </div>

        <div className={styles.productImg}>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Detail;
