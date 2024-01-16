import styles from "./catalogue2.module.css";

const Catalogue2 = () => {
  return (
    <div className={styles.catalogue6}>
      <div className={styles.frameParent}>
        <div className={styles.standardWashParent}>
          <div className={styles.standardWash}>Standard Wash</div>
          <div className={styles.allVehicle}>all vehicle</div>
        </div>
        <img
          className={styles.vuesaxlinearheartIcon}
          alt=""
          src="/vuesaxlinearheart.svg"
        />
      </div>
      <div className={styles.shadow} />
      <div className={styles.frameGroup}>
        <div className={styles.carWash1Wrapper}>
          <img
            className={styles.carWash1Icon}
            loading="eager"
            alt=""
            src="/carwash-1@2x.png"
          />
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.carParent}>
            <img className={styles.carIcon} alt="" src="/car-1.svg" />
            <div className={styles.vuesaxboldgasStationParent}>
              <img
                className={styles.vuesaxboldgasStationIcon}
                alt=""
                src="/vuesaxboldgasstation.svg"
              />
              <img
                className={styles.vuesaxboldprofile2userIcon}
                alt=""
                src="/vuesaxboldprofile2user.svg"
              />
            </div>
          </div>
          <div className={styles.lParent}>
            <div className={styles.l}>70L</div>
            <div className={styles.manual}>Manual</div>
            <div className={styles.people}>6 People</div>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.rp45000WashParent}>
          <div className={styles.rp45000Wash}>
            <span>
              <span className={styles.rp45000}>Rp45.000/</span>
              <span className={styles.span}>{` `}</span>
            </span>
            <span className={styles.wash}>
              <span>wash</span>
            </span>
          </div>
          <div className={styles.rp70000}>Rp70.000</div>
        </div>
        <div className={styles.buttonRent}>
          <div className={styles.rentalNow}>Rental Now</div>
        </div>
      </div>
    </div>
  );
};

export default Catalogue2;
