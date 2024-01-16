import RentalSummary from "../components/rental-summary";
import styles from "./i-phone13-mini1.module.css";

const IPhone13Mini1 = () => {
  return (
    <div className={styles.iphone13Mini2}>
      <div className={styles.iphone13Mini2Inner}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.vectorWrapper}>
              <img
                className={styles.frameChild}
                loading="eager"
                alt=""
                src="/vector-251.svg"
              />
            </div>
            <h1 className={styles.logo}>KENZ</h1>
          </div>
          <img
            className={styles.imageIcon}
            loading="eager"
            alt=""
            src="/image@2x.png"
          />
        </div>
      </div>
      <div className={styles.estimatedTime24MinWrapper}>
        <b className={styles.estimatedTime}>ESTIMATED TIME ( 24 Min)</b>
      </div>
      <img
        className={styles.dashboardIcon}
        loading="eager"
        alt=""
        src="/dashboard@2x.png"
      />
      <img
        className={styles.iphone13Mini2Child}
        loading="eager"
        alt=""
        src="/group-1000000859@2x.png"
      />
      <div className={styles.penyiramanParent}>
        <b className={styles.penyiraman}>Penyiraman</b>
        <b className={styles.pemberianSabun}>
          <p className={styles.pemberian}>Pemberian</p>
          <p className={styles.sabun}>Sabun</p>
        </b>
        <b className={styles.penyikatan}>Penyikatan</b>
        <b className={styles.penyikatan1}>Penyikatan</b>
        <b className={styles.jobComplete}>
          <p className={styles.job}>{`Job `}</p>
          <p className={styles.complete}>Complete</p>
        </b>
      </div>
      <RentalSummary />
      <button className={styles.buttonRent}>
        <div className={styles.checkout}>Checkout</div>
      </button>
    </div>
  );
};

export default IPhone13Mini1;
