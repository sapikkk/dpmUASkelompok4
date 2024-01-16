import FrameComponent2 from "./frame-component2";
import styles from "./frame-component1.module.css";

const FrameComponent1 = () => {
  return (
    <section className={styles.cekNoHpInner}>
      <div className={styles.logoParent}>
        <h1 className={styles.logo}>SCHEDULE</h1>
        <div className={styles.frameParent}>
          <div className={styles.parent}>
            <b className={styles.b}>28</b>
            <div className={styles.selParent}>
              <b className={styles.sel}>SEL</b>
              <div className={styles.nov2023Wrapper}>
                <b className={styles.nov2023}>Nov 2023</b>
              </div>
            </div>
            <button className={styles.hariIniWrapper}>
              <b className={styles.hariIni}>Hari Ini</b>
            </button>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.sParent}>
              <div className={styles.s}>S</div>
              <b className={styles.b1}>25</b>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.mParent}>
                <div className={styles.m}>M</div>
                <b className={styles.b2}>26</b>
              </div>
              <div className={styles.sGroup}>
                <div className={styles.s1}>S</div>
                <b className={styles.b3}>27</b>
              </div>
            </div>
            <div className={styles.sContainer}>
              <div className={styles.s2}>S</div>
              <b className={styles.b4}>28</b>
            </div>
            <div className={styles.rParent}>
              <div className={styles.r}>R</div>
              <b className={styles.b5}>29</b>
            </div>
            <div className={styles.kParent}>
              <div className={styles.k}>K</div>
              <b className={styles.b6}>30</b>
            </div>
            <div className={styles.jParent}>
              <div className={styles.j}>J</div>
              <b className={styles.b7}>1</b>
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameDiv}>
              <div className={styles.frameParent1}>
                <div className={styles.frameParent2}>
                  <div className={styles.frameParent3}>
                    <div className={styles.group}>
                      <b className={styles.b8}>11.35</b>
                      <b className={styles.b9}>13.05</b>
                    </div>
                    <div className={styles.container}>
                      <b className={styles.b10}>13.05</b>
                      <b className={styles.b11}>14.45</b>
                    </div>
                    <div className={styles.parent1}>
                      <b className={styles.b12}>15.10</b>
                      <b className={styles.b13}>16.40</b>
                    </div>
                  </div>
                  <img
                    className={styles.frameChild}
                    loading="eager"
                    alt=""
                    src="/group-1000000858.svg"
                  />
                </div>
                <div className={styles.frameParent4}>
                  <div className={styles.frameWrapper1}>
                    <FrameComponent2
                      propColor="#fff"
                      propColor1="#fff"
                      propColor2="#fff"
                      propColor3="#fff"
                    />
                  </div>
                  <button className={styles.frameButton}>
                    <div className={styles.cuciMobilWrapper}>
                      <b className={styles.cuciMobil}>Cuci Mobil</b>
                    </div>
                    <div className={styles.undercarriageWrapper}>
                      <img
                        className={styles.undercarriageIcon}
                        alt=""
                        src="/undercarriage@2x.png"
                      />
                    </div>
                    <div className={styles.carParent}>
                      <img className={styles.carIcon} alt="" src="/car.svg" />
                      <div className={styles.machineryPolishing}>
                        Machinery Polishing
                      </div>
                    </div>
                    <div className={styles.clipboardParent}>
                      <img
                        className={styles.clipboardIcon}
                        alt=""
                        src="/clipboard@2x.png"
                      />
                      <div className={styles.min}>120 Min</div>
                    </div>
                    <div className={styles.ambilAntrian}>AMBIL ANTRIAN</div>
                  </button>
                  <div className={styles.frameParent5}>
                    <FrameComponent2
                      propColor="#000"
                      propColor1="#000"
                      propColor2="#000"
                      propColor3="#000"
                    />
                    <input className={styles.shadow} type="text" />
                  </div>
                </div>
              </div>
              <div className={styles.tampilkanLebihBanyakWrapper}>
                <div className={styles.tampilkanLebihBanyak}>
                  Tampilkan Lebih Banyak
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
