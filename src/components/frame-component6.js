import Catalog from "./catalog";
import styles from "./frame-component6.module.css";

const FrameComponent6 = () => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.sedangPencucianParent}>
          <div className={styles.sedangPencucian}>Sedang Pencucian</div>
          <div className={styles.viewAll}>View All</div>
        </div>
        <div className={styles.catalogPopular}>
          <div className={styles.catalog1}>
            <div className={styles.frameContainer}>
              <div className={styles.koenigseggParent}>
                <div className={styles.koenigsegg}>Koenigsegg</div>
                <div className={styles.sport}>Sport</div>
              </div>
              <img
                className={styles.likeIcon}
                loading="eager"
                alt=""
                src="/like.svg"
              />
            </div>
            <div className={styles.price} />
            <div className={styles.carParent}>
              <img className={styles.carIcon} alt="" src="/car-6@2x.png" />
              <input className={styles.shadow} type="text" />
            </div>
            <img
              className={styles.vuesaxboldprofile2userIcon}
              alt=""
              src="/vuesaxboldprofile2user.svg"
            />
            <div className={styles.frameDiv}>
              <div className={styles.frameWrapper}>
                <div className={styles.frameParent1}>
                  <div className={styles.carGroup}>
                    <img className={styles.carIcon1} alt="" src="/car.svg" />
                    <div className={styles.drying}>Drying</div>
                  </div>
                  <div className={styles.clipboardParent}>
                    <img
                      className={styles.clipboardIcon}
                      loading="eager"
                      alt=""
                      src="/clipboard@2x.png"
                    />
                    <div className={styles.min}>10 Min</div>
                  </div>
                </div>
              </div>
              <button className={styles.buttonRent}>
                <div className={styles.check}>{`Check `}</div>
              </button>
            </div>
          </div>
          <div className={styles.catalog3}>
            <img className={styles.likeIcon1} alt="" src="/like.svg" />
            <div className={styles.buttonRent1}>
              <div className={styles.check1}>{`Check `}</div>
            </div>
            <div className={styles.price1} />
            <div className={styles.carContainer}>
              <img className={styles.carIcon2} alt="" src="/car-6@2x.png" />
              <div className={styles.shadow1} />
            </div>
            <img
              className={styles.vuesaxboldprofile2userIcon1}
              alt=""
              src="/vuesaxboldprofile2user.svg"
            />
            <div className={styles.min1}>10 Min</div>
            <div className={styles.frameParent2}>
              <div className={styles.koenigseggGroup}>
                <div className={styles.koenigsegg1}>Koenigsegg</div>
                <div className={styles.sport1}>Sport</div>
              </div>
              <div className={styles.carParent1}>
                <img className={styles.carIcon3} alt="" src="/car.svg" />
                <div className={styles.drying1}>Drying</div>
              </div>
              <img
                className={styles.clipboardIcon1}
                alt=""
                src="/clipboard@2x.png"
              />
              <div className={styles.shadow2} />
            </div>
          </div>
          <Catalog
            like="/like.svg"
            car="/car-6@2x.png"
            vuesaxboldprofile2user="/vuesaxboldprofile2user.svg"
            car1="/car.svg"
            clipboard="/clipboard@2x.png"
          />
          <Catalog
            like="/like.svg"
            car="/car-6@2x.png"
            vuesaxboldprofile2user="/vuesaxboldprofile2user.svg"
            car1="/car.svg"
            clipboard="/clipboard@2x.png"
          />
        </div>
      </div>
      <footer className={styles.indicator}>
        <div className={styles.line} />
      </footer>
    </section>
  );
};

export default FrameComponent6;
