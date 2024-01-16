import styles from "./frame-component.module.css";

const FrameComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.profileParent}>
        <img
          className={styles.profileIcon}
          loading="eager"
          alt=""
          src="/profile.svg"
        />
        <div className={styles.frameGroup}>
          <div className={styles.home2Parent}>
            <img
              className={styles.home2Icon}
              loading="eager"
              alt=""
              src="/home2.svg"
            />
            <div className={styles.home}>Home</div>
          </div>
          <div className={styles.addParent}>
            <img
              className={styles.addIcon}
              loading="eager"
              alt=""
              src="/add.svg"
            />
            <div className={styles.tambah}>Tambah</div>
          </div>
          <div className={styles.menuParent}>
            <img
              className={styles.menuIcon}
              loading="eager"
              alt=""
              src="/menu.svg"
            />
            <div className={styles.pantau}>Pantau</div>
          </div>
          <div className={styles.profile}>Profile</div>
        </div>
      </div>
      <footer className={styles.homeIndicator}>
        <div className={styles.homeIndicator1} />
      </footer>
    </div>
  );
};

export default FrameComponent;
