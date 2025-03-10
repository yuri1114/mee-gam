import styles from "../styles/ImgContainer.module.scss";
import { useState, useEffect } from "react";

const ImgContainer = () => {
  const [isVisible, SetIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      SetIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <img src="./imgs/main01.png" alt="" />
      </div>
      <p
        className={`${styles.text} ${
          isVisible ? styles.visible : styles.hidden
        }`}
      >
        <span>미감 (美感)</span>
        <br></br> 아름다움에 대한 느낌
      </p>
    </div>
  );
};

export default ImgContainer;
