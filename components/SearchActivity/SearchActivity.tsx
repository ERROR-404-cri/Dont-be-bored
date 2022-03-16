import styles from "./SearchActivity.module.css";

const SearchActivity = () => {
  return (
    <>
      <div className={styles.flexWrapper}>
        <h1 className={styles.heading}>Dont Be Bored</h1>
      </div>
      <div className={styles.flexWrapper}>
        <button className={styles.srchBtn}>Get yourself a Activity</button>
      </div>
    </>
  );
};

export default SearchActivity;
