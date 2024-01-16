import FrameComponent5 from "../components/frame-component5";
import FrameComponent4 from "../components/frame-component4";
import styles from "./i-phone13-mini.module.css";

const IPhone13Mini = () => {
  return (
    <div className={styles.iphone13Mini3}>
      <div className={styles.iphone13Mini3Inner}>
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
      <main className={styles.paymentMethod}>
        <div className={styles.paymentMethodInner}>
          <div className={styles.paymentMethodParent}>
            <b className={styles.paymentMethod1}>Payment Method</b>
            <div className={styles.pleaseEnterYour}>
              Please enter your payment method
            </div>
          </div>
        </div>
        <section className={styles.creditCard}>
          <FrameComponent5 />
          <input
            className={styles.cardNumber}
            placeholder="Card number"
            type="text"
          />
        </section>
        <div className={styles.paypal}>
          <img
            className={styles.paypalIcon}
            loading="eager"
            alt=""
            src="/paypal.svg"
          />
          <div className={styles.danaWrapper}>
            <div className={styles.dana}>Dana</div>
          </div>
          <img
            className={styles.ewalletdanaIcon}
            loading="eager"
            alt=""
            src="/ewalletdana@2x.png"
          />
        </div>
        <div className={styles.bitcoinWrapper}>
          <div className={styles.bitcoin}>
            <div className={styles.paypalParent}>
              <img className={styles.paypalIcon1} alt="" src="/paypal.svg" />
              <input
                className={styles.linkaja}
                placeholder="LinkAja"
                type="text"
              />
            </div>
            <img
              className={styles.ewalletlinkajaIcon}
              alt=""
              src="/ewalletlinkaja@2x.png"
            />
          </div>
        </div>
        <FrameComponent4 />
        <button className={styles.buttonRent}>
          <div className={styles.pay}>PAY</div>
        </button>
      </main>
    </div>
  );
};

export default IPhone13Mini;
