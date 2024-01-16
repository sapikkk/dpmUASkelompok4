import styles from "./drop-off.module.css";

const DropOff = () => {
  return (
    <div className={styles.dropOff}>
      <div className={styles.organizerInfo}>
        <input className={styles.mark} checked={true} type="radio" />
        <div className={styles.tersedia}>Tersedia</div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.doorsmeerParent}>
          <b className={styles.doorsmeer}>Doorsmeer</b>
          <div className={styles.slotParent}>
            <div className={styles.slot}>6 Slot</div>
            <img
              className={styles.vuesaxoutlinearrowDownIcon}
              alt=""
              src="/vuesaxoutlinearrowdown.svg"
            />
          </div>
        </div>
        <div className={styles.border} />
        <div className={styles.dateParent}>
          <b className={styles.date}>Date</b>
          <div className={styles.nov2023Parent}>
            <div className={styles.nov2023}>28 Nov 2023</div>
            <img
              className={styles.vuesaxoutlinearrowDownIcon1}
              alt=""
              src="/vuesaxoutlinearrowdown.svg"
            />
          </div>
        </div>
        <div className={styles.border1} />
        <div className={styles.timeParent}>
          <b className={styles.time}>Time</b>
          <div className={styles.parent}>
            <div className={styles.div}>01.00</div>
            <img
              className={styles.vuesaxoutlinearrowDownIcon2}
              alt=""
              src="/vuesaxoutlinearrowdown.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropOff;
