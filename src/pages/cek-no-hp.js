import FrameComponent3 from "../components/frame-component3";
import Confirmation from "../components/confirmation";
import DropOff from "../components/drop-off";
import HeaderSlot from "../components/header-slot";
import BodySlot from "../components/body-slot";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import styles from "./cek-no-hp.module.css";

const CekNoHp = () => {
  return (
    <div className={styles.cekNoHp}>
      <section className={styles.statusBarParent}>
        <header className={styles.statusBar}>
          <div className={styles.time}>9:41</div>
          <div className={styles.deviceInfo}>
            <img
              className={styles.cellularConnectionIcon}
              loading="eager"
              alt=""
              src="/cellular-connection.svg"
            />
            <img
              className={styles.wifiIcon}
              loading="eager"
              alt=""
              src="/wifi.svg"
            />
            <div className={styles.iconBatery}>
              <div className={styles.battery}>
                <div className={styles.capacity} />
                <img
                  className={styles.capIcon}
                  loading="eager"
                  alt=""
                  src="/cap.svg"
                />
              </div>
            </div>
          </div>
        </header>
        <div className={styles.frameParent}>
          <FrameComponent3 />
          <Confirmation />
        </div>
      </section>
      <section className={styles.templateCalendarCardStatus}>
        <DropOff />
        <div className={styles.cardFluent2}>
          <HeaderSlot />
          <BodySlot />
          <div className={styles.footerSlot}>
            <div className={styles.text}>View calendar</div>
          </div>
        </div>
      </section>
      <FrameComponent1 />
      <FrameComponent />
      <div className={styles.myCart}>
        <img
          className={styles.shoppingCartIcon}
          alt=""
          src="/shoppingcart.svg"
        />
        <div className={styles.myCart1}>My Cart</div>
        <div className={styles.myCartChild} />
      </div>
    </div>
  );
};

export default CekNoHp;
