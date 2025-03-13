import AddBtn from "../components/AddBtn";
import styles from "../styles/Detail.module.scss";
import { useParams } from "react-router-dom";
import { useProductContext, Product } from "../hooks/productContext";

const Detail = () => {
  const { products } = useProductContext();
  const { id } = useParams<{ id: string }>();

  const product = products.find((p: Product) => p.id === Number(id));

  if (!product) {
    return <p>상품을 찾을 수 없습니다.</p>;
  }

  return (
    <div className={styles.inner}>
      <p className={styles.title}>{product.name}</p>

      <div className={styles.productDetail}>
        <div className={styles.textWrap}>
          <p className={styles.desc}>{product.description}</p>

          <p className={styles.bold}>
            PRICE : ${product.price.toFixed(2)} <br></br>SIZE : {product.size}
          </p>
          <AddBtn></AddBtn>
        </div>

        <div className={styles.productImg}>
          <img src={product.image} alt={product.name} />
        </div>
      </div>
    </div>
  );
};

export default Detail;
