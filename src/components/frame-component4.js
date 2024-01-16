import styles from "./frame-component4.module.css";

const FrameComponent4 = () => {
  return (
    <section className={styles.allYourDataAreSafeParent}>
      <b className={styles.allYourData}>All your data are safe</b>
      <div className={styles.weAreUsing}>
        We are using the most advanced security to provide you the best
        experience ever.
      </div>
      <div className={styles.icSecuritySafetyParent}>
        <img
          className={styles.icSecuritySafetyIcon}
          loading="eager"
          alt=""
          src="/icsecuritysafety1.svg"
        />
        <img
          className={styles.bankIndonesiaIcon}
          loading="eager"
          alt=""
          src="/bank-indonesia@2x.png"
        />
        <img
          className={styles.bappebtiIcon}
          loading="eager"
          alt=""
          src="/bappebti.svg"
        />
        <img
          className={styles.kominfoIcon}
          loading="eager"
          alt=""
          src="/kominfo.svg"
        />
        <img
          className={styles.ojk1Icon}
          loading="eager"
          alt=""
          src="/ojk-1.svg"
        />
      </div>
    </section>
  );
};

export default FrameComponent4;
