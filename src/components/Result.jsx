import styles from "./Result.module.css";

const Result = ({ children }) => {
  return <p className={styles.result}>{children}</p>;
};

export default Result;
