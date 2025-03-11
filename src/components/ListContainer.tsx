import styles from "../styles/ListContainer.module.scss";
import ItemCard from "../components/ItemCard";

const ListContainer = () => {
  return (
    <div className={styles.list}>
      <ItemCard maxVisible={9} />
    </div>
  );
};

export default ListContainer;
