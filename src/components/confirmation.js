import styles from "./confirmation.module.css";

const Confirmation = () => {
  return (
    <div className={styles.confirmation}>
      <div className={styles.confirmationInner}>
        <div className={styles.confirmationParent}>
          <b className={styles.confirmation1}>Confirmation</b>
          <div
            className={styles.untukMelihatProgres}
          >{`Untuk Melihat Progres Pencucian Mobil Anda, Isi Dengan Nomor Terdaftar Pada Meja Regis `}</div>
        </div>
      </div>
      <div className={styles.nameParent}>
        <div className={styles.name}>
          <input
            className={styles.nomorHp}
            placeholder="Nomor Hp"
            type="text"
          />
        </div>
        <button className={styles.buttonRent}>
          <div className={styles.periksa}>{`Periksa `}</div>
        </button>
      </div>
      <div className={styles.templateCalendarCardTitle}>
        <div className={styles.icon}>
          <img
            className={styles.icSecuritySafetyIcon}
            loading="eager"
            alt=""
            src="/icsecuritysafety.svg"
          />
          <div className={styles.timeIndicators}>
            <div className={styles.rentalSummary}>
              <b className={styles.allYourData}>All your data are safe</b>
            </div>
            <div className={styles.weAreUsing}>
              We are using the most advanced security to provide you the best
              experience ever.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
