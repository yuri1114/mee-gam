import styles from "../styles/ItemCard.module.scss";

import AddBtn from "./AddBtn";
import axios from "axios";

import { useEffect, useState, useRef } from "react";

interface Product {
  id: number;
  name: string;
  size: string;
  price: number;
  image: string;
  description: string;
}

interface ItemCardProps {
  maxVisible?: number;
}

const ItemCard: React.FC<ItemCardProps> = ({ maxVisible }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [visibleCount, setVisibleCount] = useState<number>(3);
  const loaderRef = useRef<HTMLDivElement | null>(null); // 스크롤 감지.
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  //json가져오기
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/yuri1114/mee-gam-data/refs/heads/main/products.json"
      )
      .then((response) => {
        console.log(response.data.products);
        setProducts(response.data.products);
      })
      .catch(() => {
        console.log("실패함");
      });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleItems((prev: number[]) => [
        ...prev,
        ...products
          .slice(visibleItems.length, visibleCount)
          .map((p: Product) => p.id),
      ]);
    }, 700);

    return () => clearTimeout(timer);
  }, [visibleCount, products]);

  //스크롤감지, 아이템 3개씩 추가 생성
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => {
            const newCount = prev + 3;
            return maxVisible !== undefined
              ? Math.min(newCount, maxVisible) // maxVisible이 있으면 제한.
              : newCount; //없으면 무제한
          });
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

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
        <div ref={loaderRef} className={styles.loader}>
          로딩중
        </div>
      )}
    </div>
  );
};

export default ItemCard;
