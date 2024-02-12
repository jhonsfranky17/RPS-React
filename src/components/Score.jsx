import styles from "./Score.module.css";

const Score = ({ children }) => {
  return <h3 className={styles.result}>{children}</h3>;
};

export default Score;
