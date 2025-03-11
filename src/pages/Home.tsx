import ImgContainer from "../components/ImgContainer";
import ItemCard from "../components/ItemCard";

import styles from "../styles/Home.module.scss";

const Home = () => {
  const maxItems = 9;

  return (
    <div className={styles.body}>
      <div className={styles.inner}>
        <ImgContainer></ImgContainer>
        <div className={styles.list}>
          <ItemCard maxVisible={maxItems} />
        </div>
      </div>
    </div>
  );
};
export default Home;
