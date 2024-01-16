import styles from "./frame-component8.module.css";

const FrameComponent8 = () => {
  return (
    <div className={styles.statusBarParent}>
      <div className={styles.statusBar}>
        <div className={styles.time}>9:41</div>
        <div className={styles.cellularConnectionParent}>
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
          <div className={styles.battery}>
            <img
              className={styles.capIcon}
              loading="eager"
              alt=""
              src="/cap1.svg"
            />
            <div className={styles.capacity} />
          </div>
        </div>
      </div>
      <div className={styles.logoParent}>
        <h1 className={styles.logo}>KENZ</h1>
        <div className={styles.image} />
      </div>
      <div className={styles.frameParent}>
        <header className={styles.searchParent}>
          <button className={styles.search}>
            <img
              className={styles.searchNormalIcon}
              alt=""
              src="/searchnormal.svg"
            />
            <div className={styles.pantauProgresCucian}>
              Pantau Progres Cucian Anda
            </div>
          </button>
          <img
            className={styles.filterIcon}
            loading="eager"
            alt=""
            src="/filter.svg"
          />
        </header>
        <div className={styles.ads}>
          <div className={styles.wrapperBg}>
            <img className={styles.bgIcon} alt="" />
          </div>
          <div className={styles.tittleParent}>
            <div className={styles.tittle}>
              <div className={styles.solusiTerbaikUntuk}>
                Solusi Terbaik Untuk Kendaraan anda!
              </div>
              <div className={styles.nikmatiFasilitasPelayanan}>
                Nikmati Fasilitas Pelayanan Pada Cucian Mobil Ini Untuk
                Mendapatkan Pengalaman Terbaik
              </div>
            </div>
            <button className={styles.buttonRent}>
              <div className={styles.cuciSekarang}>Cuci Sekarang</div>
            </button>
          </div>
          <div className={styles.carWrapper}>
            <img
              className={styles.carIcon}
              loading="eager"
              alt=""
              src="/car2@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent8;
