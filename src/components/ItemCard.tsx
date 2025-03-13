import styles from "../styles/ItemCard.module.scss";
import AddBtn from "./AddBtn";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useProductContext, Product } from "../hooks/productContext";

interface ItemCardProps {
  maxVisible?: number;
}

const ItemCard = ({ maxVisible }: ItemCardProps) => {
  const { products } = useProductContext(); // 네이밍 변경
  const [visibleCount, setVisibleCount] = useState<number>(3);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleItems((prev) => [
        ...prev,
        ...products
          .slice(visibleItems.length, visibleCount)
          .map((p: Product) => p.id),
      ]);
    }, 700);

    return () => clearTimeout(timer);
  }, [visibleCount, products]);

  useEffect(() => {
    if (!loaderRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCount((prev) =>
            maxVisible ? Math.min(prev + 3, maxVisible) : prev + 3
          );
        }
      },
      { threshold: 1 }
    );

    observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [visibleCount, products, maxVisible]);

  return (
    <div className={styles.container}>
      {products.slice(0, visibleCount).map((product) => (
        <div
          key={product.id}
          className={`${styles.item} ${
            visibleItems.includes(product.id) ? styles.visible : styles.hidden
          }`}
          onClick={() => navigate(`/detail/${product.id}`)}
        >
          <div className={styles.imgWrap}>
            <img src={product.image} alt={product.name} />
            <div className={styles.fakeBtnBox}>
              <AddBtn />
            </div>
          </div>
          <div className={styles.textWrap}>
            <p className={styles.productText}>{product.name}</p>
            <p className={styles.productText}>${product.price.toFixed(2)}</p>
          </div>
        </div>
      ))}

      {visibleCount < products.length && (
        <div ref={loaderRef} className={styles.loader}></div>
      )}
    </div>
  );
};

export default ItemCard;
