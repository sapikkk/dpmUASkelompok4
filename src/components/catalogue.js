import styles from "./catalogue.module.css";

const Catalogue = () => {
  return (
    <div className={styles.catalogue8}>
      <div className={styles.shadow} />
      <div className={styles.frameParent}>
        <div className={styles.spaTreatmentParent}>
          <div className={styles.spaTreatment}>Spa Treatment</div>
          <div className={styles.oldCar}>Old Car</div>
        </div>
        <div className={styles.gambar}>
          <img
            className={styles.rainRepellentIcon}
            loading="eager"
            alt=""
            src="/rainrepellent@2x.png"
          />
          <img
            className={styles.toolIcon}
            loading="eager"
            alt=""
            src="/tool@2x.png"
          />
        </div>
        <div className={styles.rp45000WashParent}>
          <div className={styles.rp45000Wash}>
            <span>
              <span>
                <span className={styles.rp45000}>Rp45.000/</span>
                <span className={styles.span}>{` `}</span>
              </span>
              <span className={styles.wash}>
                <span>wash</span>
              </span>
            </span>
          </div>
          <div className={styles.div}>$80.00</div>
        </div>
      </div>
      <div className={styles.vuesaxlinearheartParent}>
        <img
          className={styles.vuesaxlinearheartIcon}
          alt=""
          src="/vuesaxlinearheart.svg"
        />
        <div className={styles.frameGroup}>
          <div className={styles.vuesaxboldgasStationParent}>
            <img
              className={styles.vuesaxboldgasStationIcon}
              alt=""
              src="/vuesaxboldgasstation.svg"
            />
            <div className={styles.l}>70L</div>
          </div>
          <div className={styles.carParent}>
            <img className={styles.carIcon} alt="" src="/car-1.svg" />
            <div className={styles.manualWrapper}>
              <div className={styles.manual}>Manual</div>
            </div>
          </div>
          <div className={styles.vuesaxboldprofile2userParent}>
            <img
              className={styles.vuesaxboldprofile2userIcon}
              alt=""
              src="/vuesaxboldprofile2user.svg"
            />
            <div className={styles.people}>6 People</div>
          </div>
        </div>
        <div className={styles.buttonRent}>
          <div className={styles.rentalNow}>Rental Now</div>
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
