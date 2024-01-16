import styles from "./drop-off1.module.css";

const DropOff1 = () => {
  return (
    <section className={styles.dropOff}>
      <div className={styles.markParent}>
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
    </section>
  );
};

export default DropOff1;
