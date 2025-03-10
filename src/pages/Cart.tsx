import styles from "../styles/Cart.module.scss";

const Cart = () => {
  return (
    <div className={styles.inner}>
      {/* <p>담아놓은 상품이 없습니다</p> */}
      <div className={styles.cartItem}>
        <div className={styles.thumbnail}>
          <img src="" alt="" />
        </div>
        <div className={styles.desc}>
          <div>
            <p className={styles.itemName}>아이템 이름</p>
            <p className={styles.itemPrice}>아이템 가격</p>
            <button className={styles.delete}>delete</button>
          </div>

          <div>
            <div className={styles.num}>
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>
          </div>
        </div>
      </div>

      <p className={styles.total}>
        Total : 1 item, <span>$15</span>
      </p>
      <button className={styles.pay}>결제하기</button>
    </div>
  );
};

export default Cart;
