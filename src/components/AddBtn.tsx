import styles from "../styles/AddBtn.module.scss";

interface AddBtnProps {
  hoverEffect?: boolean; // ✅ hover 효과를 적용할지 여부를 결정하는 prop 추가
}

const AddBtn: React.FC<AddBtnProps> = ({ hoverEffect = false }) => {
  return (
    <button
      className={`${styles.addToCart} ${
        hoverEffect ? styles.visible : styles.hidden
      }`}
    >
      Add To Cart
    </button>
  );
};

export default AddBtn;
