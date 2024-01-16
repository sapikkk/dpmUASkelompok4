import styles from "./frame-component7.module.css";

const FrameComponent7 = () => {
  return (
    <div className={styles.bgParent}>
      <div className={styles.bg} />
      <div className={styles.markParent}>
        <input className={styles.mark} checked={true} type="radio" />
        <div className={styles.lihatDaftarAntrian}>
          Lihat Daftar Antrian Kosong
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.hariParent}>
            <b className={styles.hari}>{`Hari `}</b>
            <div className={styles.july2022Parent}>
              <div className={styles.july2022}>20 July 2022</div>
              <img
                className={styles.vuesaxoutlinearrowDownIcon}
                alt=""
                src="/vuesaxoutlinearrowdown.svg"
              />
            </div>
          </div>
          <div className={styles.border} />
          <div className={styles.jamParent}>
            <b className={styles.jam}>Jam</b>
            <div className={styles.parent}>
              <div className={styles.div}>07.00</div>
              <img
                className={styles.vuesaxoutlinearrowDownIcon1}
                alt=""
                src="/vuesaxoutlinearrowdown.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent7;
