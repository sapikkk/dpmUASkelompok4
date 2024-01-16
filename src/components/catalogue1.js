import { useMemo } from "react";
import styles from "./catalogue1.module.css";

const Catalogue1 = ({
  premiumWash,
  sportcarSUVCoupe,
  carWash,
  vuesaxlinearheart,
  vuesaxboldgasStation,
  car,
  vuesaxboldprofile2user,
  propGap,
  propWidth,
  propWidth1,
  propColor,
  propWidth2,
  propHeight,
}) => {
  const catalogue7Style = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDiv1Style = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const premiumWashStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const sportcarSUVCoupeStyle = useMemo(() => {
    return {
      width: propWidth2,
      height: propHeight,
    };
  }, [propWidth2, propHeight]);

  return (
    <div className={styles.catalogue7} style={catalogue7Style}>
      <div className={styles.shadow} />
      <div className={styles.frameParent} style={frameDivStyle}>
        <div className={styles.premiumWashParent} style={frameDiv1Style}>
          <div className={styles.premiumWash} style={premiumWashStyle}>
            {premiumWash}
          </div>
          <div
            className={styles.sportcarSuvCoupe}
            style={sportcarSUVCoupeStyle}
          >
            {sportcarSUVCoupe}
          </div>
        </div>
        <img
          className={styles.carWashIcon}
          loading="eager"
          alt=""
          src={carWash}
        />
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
          src={vuesaxlinearheart}
        />
        <div className={styles.frameGroup}>
          <div className={styles.vuesaxboldgasStationParent}>
            <img
              className={styles.vuesaxboldgasStationIcon}
              alt=""
              src={vuesaxboldgasStation}
            />
            <div className={styles.l}>70L</div>
          </div>
          <div className={styles.carParent}>
            <img className={styles.carIcon} alt="" src={car} />
            <div className={styles.manualWrapper}>
              <div className={styles.manual}>Manual</div>
            </div>
          </div>
          <div className={styles.vuesaxboldprofile2userParent}>
            <img
              className={styles.vuesaxboldprofile2userIcon}
              alt=""
              src={vuesaxboldprofile2user}
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

export default Catalogue1;
