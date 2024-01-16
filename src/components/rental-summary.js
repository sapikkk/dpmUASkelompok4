import styles from "./rental-summary.module.css";

const RentalSummary = () => {
  return (
    <section className={styles.rentalSummary}>
      <div className={styles.carwashSummaryParent}>
        <b className={styles.carwashSummary}>Carwash Summary</b>
        <div className={styles.pricesMayChange}>
          Prices may change depending on the length of the Washing service and
          the price of your car.
        </div>
      </div>
      <div className={styles.rentalSummaryInner}>
        <div className={styles.carParent}>
          <img
            className={styles.carIcon}
            loading="eager"
            alt=""
            src="/car1.svg"
          />
          <div className={styles.frameWrapper}>
            <div className={styles.koenigseggAgeraParent}>
              <div className={styles.koenigseggAgera}>Koenigsegg Agera</div>
              <div className={styles.wilkenzzz}>Wilkenzzz</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.border} />
      <div className={styles.frameParent}>
        <div className={styles.subtotalParent}>
          <div className={styles.subtotal}>Subtotal</div>
          <div className={styles.admin}>Admin</div>
        </div>
        <div className={styles.rp250000Parent}>
          <div className={styles.rp250000}>Rp.250.000</div>
          <div className={styles.rp5000}>Rp.5000</div>
        </div>
      </div>
      <div className={styles.promoWrapper}>
        <div className={styles.promo}>
          <div className={styles.applyPromoCode}>Apply promo code</div>
          <div className={styles.applyNow}>Apply now</div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.totalPriceParent}>
          <b className={styles.totalPrice}>Total Price</b>
          <div className={styles.rp255000}>Rp.255.000</div>
        </div>
        <div className={styles.overallPriceCare}>Overall price Care</div>
      </div>
    </section>
  );
};

export default RentalSummary;
