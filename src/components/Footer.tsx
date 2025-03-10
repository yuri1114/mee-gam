import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.bottom}>
      <p>이 페이지는 상업용 용도가 아닌, 포트폴리오 용으로 제작되었습니다.</p>
      <p>SINCE 2025.03</p>
    </div>
  );
};

export default Footer;
