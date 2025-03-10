import ImgContainer from "../components/ImgContainer";
import ListContainer from "../components/ListContainer";

import styles from "../styles/Home.module.scss";

const Home = () => {
  return (
    <div className={styles.body}>
      <div className={styles.inner}>
        <ImgContainer></ImgContainer>
        <ListContainer></ListContainer>
      </div>
    </div>
  );
};
export default Home;
