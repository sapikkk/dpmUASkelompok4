import styles from "./frame-component5.module.css";

const FrameComponent5 = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.markParent}>
          <div className={styles.mark}>
            <div className={styles.markChild} />
          </div>
          <div className={styles.creditCardParent}>
            <div className={styles.creditCard}>Credit Card</div>
            <img
              className={styles.visaIncLogo1Icon}
              alt=""
              src="/visa-inc-logo-1.svg"
            />
          </div>
        </div>
        <div className={styles.cardNumber}>Card Number</div>
      </div>
      <div className={styles.logomcWrapper}>
        <img className={styles.logomcIcon} alt="" src="/logomc.svg" />
      </div>
      <img className={styles.atmBersama1} alt="" src="/atm-bersama-1.svg" />
      <img className={styles.linkIcon} alt="" src="/link.svg" />
    </div>
  );
};

export default FrameComponent5;
