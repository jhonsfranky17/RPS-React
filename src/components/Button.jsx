import styles from "./Button.module.css";

const Button = ({ children, variant, onClick }) => {
  if (variant === "contained")
    return (
      <button className={styles.contained} onClick={onClick}>
        {children}
      </button>
    );
  else
    return (
      <button className={styles.outlined} onClick={onClick}>
        {children}
      </button>
    );
};

export default Button;
