import styles from "./header-slot.module.css";

const HeaderSlot = () => {
  return (
    <div className={styles.headerSlot}>
      <div className={styles.nov}>
        <input className={styles.mark} checked={true} type="radio" />
        <div className={styles.title}>
          <div className={styles.stack}>
            <div className={styles.pantauKuotaAntrian}>
              Pantau Kuota Antrian Tersedia
            </div>
            <div className={styles.lastUpdatedToday}>
              Last updated today, Dec 01 at 11:11 AM
            </div>
          </div>
          <div className={styles.controls}>
            <div className={styles.buttonFluent2}>
              <img className={styles.icon} alt="" src="/icon.svg" />
            </div>
            <div className={styles.buttonFluent21}>
              <img className={styles.icon1} alt="" src="/icon-1.svg" />
            </div>
            <div className={styles.buttonFluent22}>
              <img className={styles.icon2} alt="" src="/icon-2.svg" />
            </div>
            <div className={styles.buttonFluent23}>
              <img className={styles.icon3} alt="" src="/icon-3.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.buttonFluent24}>
          <img className={styles.icon4} alt="" src="/icon-4.svg" />
          <div className={styles.textWrapperForOffset}>
            <div className={styles.text}>Today</div>
          </div>
        </div>
        <div className={styles.menuButtonFluent2}>
          <div className={styles.textWrapperForOffset1}>
            <div className={styles.text1}>December 01, 2023</div>
          </div>
          <img className={styles.chevronIcon} alt="" src="/chevron.svg" />
        </div>
      </div>
    </div>
  );
};

export default HeaderSlot;
