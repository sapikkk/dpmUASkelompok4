import styles from "./catalog.module.css";

const Catalog = ({ like, car, vuesaxboldprofile2user, car1, clipboard }) => {
  return (
    <div className={styles.catalog4}>
      <div className={styles.koenigsegg}>Koenigsegg</div>
      <div className={styles.sport}>Sport</div>
      <img className={styles.likeIcon} alt="" src={like} />
      <div className={styles.buttonRent}>
        <div className={styles.check}>{`Check `}</div>
      </div>
      <div className={styles.price} />
      <div className={styles.carParent}>
        <img className={styles.carIcon} alt="" src={car} />
        <div className={styles.shadow} />
      </div>
      <img
        className={styles.vuesaxboldprofile2userIcon}
        alt=""
        src={vuesaxboldprofile2user}
      />
      <div className={styles.min}>10 Min</div>
      <div className={styles.carGroup}>
        <img className={styles.carIcon1} alt="" src={car1} />
        <div className={styles.drying}>Drying</div>
        <img className={styles.clipboardIcon} alt="" src={clipboard} />
        <div className={styles.shadow1} />
      </div>
    </div>
  );
};

export default Catalog;
