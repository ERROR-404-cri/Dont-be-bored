import styles from "./SuggestionBox.module.css";

const SuggestionBox = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.activity} ${styles.flex}`}>
          <p>activity: </p>
          <p>Visits your past teachers</p>
        </div>
        <div className={`${styles.participants} ${styles.flex}`}>
          <p>participants: </p>
          <p>1</p>
        </div>
        <div className={`${styles.type} ${styles.flex}`}>
          <p>type: </p>
          <p>social</p>
        </div>
        <div className={`${styles.price} ${styles.flex}`}>
          <p>price: </p>
          <p>0</p>
        </div>
        <div className={`${styles.accessibility} ${styles.flex}`}>
          <p>accessibility: </p>
          <p>0.7</p>
        </div>
      </div>
    </>
  );
};

export default SuggestionBox;
