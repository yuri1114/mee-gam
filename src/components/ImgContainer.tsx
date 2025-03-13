import styles from "../styles/ImgContainer.module.scss";
import { useState, useEffect } from "react";

const ImgContainer = () => {
  // TODO 배포 후, 다른 메뉴 갔다가 홈으로 다시 돌아오면 이미지 깨지는 문제 있음
  const [isVisible, SetIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      SetIsVisible(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.main}>
      <div
        className={`${styles.container} ${
          isVisible ? styles.visible : styles.hidden
        }`}
      >
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
