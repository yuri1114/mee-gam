import styles from "../styles/ListContainer.module.scss";
import ItemCard from "../components/ItemCard";

const ListContainer = () => {
  return (
    <div className={styles.list}>
      <ItemCard></ItemCard>
      <ItemCard></ItemCard>
      <ItemCard></ItemCard>
      <ItemCard></ItemCard>
    </div>
  );
};

export default ListContainer;
