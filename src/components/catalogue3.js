import styles from "./catalogue3.module.css";

const Catalogue3 = () => {
  return (
    <div className={styles.catalogue1}>
      <div className={styles.frameParent}>
        <div className={styles.quickWashParent}>
          <div className={styles.quickWash}>{`Quick Wash     `}</div>
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
        <div className={styles.hoursWrapper}>
          <img
            className={styles.hoursIcon}
            loading="eager"
            alt=""
            src="/24hours@2x.png"
          />
        </div>
        <div className={styles.frameContainer}>
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
            <div className={styles.manual}>Manual</div>
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
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.rp65000WashParent}>
          <div className={styles.rp65000Wash}>
            <span>
              <span className={styles.rp65000}>Rp65.000/</span>
              <span className={styles.span}>{` `}</span>
            </span>
            <span className={styles.wash}>
              <span>wash</span>
            </span>
          </div>
          <div className={styles.rp70000}>Rp70.000</div>
        </div>
        <button className={styles.buttonRent}>
          <div className={styles.rentalNow}>Rental Now</div>
        </button>
      </div>
    </div>
  );
};

export default Catalogue3;
