import styles from "./Emoji.module.css";

const Emoji = ({ children }) => {
  return <p className={styles.emoji}>{children}</p>;
};

export default Emoji;
