import styles from "./frame-component3.module.css";

const FrameComponent3 = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.logoParent}>
        <h1 className={styles.logo}>KENZ</h1>
        <div className={styles.image} />
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.searchParent}>
          <button className={styles.search}>
            <img
              className={styles.searchNormalIcon}
              alt=""
              src="/searchnormal.svg"
            />
            <div className={styles.pantauProgresCucian}>
              Pantau Progres Cucian Anda
            </div>
          </button>
          <img
            className={styles.filterIcon}
            loading="eager"
            alt=""
            src="/filter.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
