import { useMemo } from "react";
import styles from "./frame-component2.module.css";

const FrameComponent2 = ({ propColor, propColor1, propColor2, propColor3 }) => {
  const cuciMobilStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const exteriorInteriorStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const machineryPolishingStyle = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const minStyle = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  return (
    <div className={styles.cuciMobilParent}>
      <b className={styles.cuciMobil} style={cuciMobilStyle}>
        Cuci Mobil
      </b>
      <div className={styles.frameParent}>
        <div className={styles.undercarriageParent}>
          <img
            className={styles.undercarriageIcon}
            alt=""
            src="/undercarriage@2x.png"
          />
          <div
            className={styles.exteriorInterior}
            style={exteriorInteriorStyle}
          >{`Exterior & Interior Cleaning`}</div>
        </div>
        <div className={styles.carParent}>
          <img
            className={styles.carIcon}
            loading="eager"
            alt=""
            src="/car.svg"
          />
          <div
            className={styles.machineryPolishing}
            style={machineryPolishingStyle}
          >
            Machinery Polishing
          </div>
        </div>
        <div className={styles.clipboardParent}>
          <img
            className={styles.clipboardIcon}
            alt=""
            src="/clipboard@2x.png"
          />
          <div className={styles.min} style={minStyle}>
            120 Min
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
