import styles from "./template-calendar-card-list-it.module.css";

const TemplateCalendarCardListIt = () => {
  return (
    <div className={styles.templateCalendarCardListIt}>
      <div className={styles.timeLeftIndicatorParent}>
        <div className={styles.timeLeftIndicator}>
          <div className={styles.icon}></div>
          <div className={styles.in33M}>in 33 m</div>
        </div>
        <div className={styles.title}>
          <div className={styles.time}>
            <div className={styles.am}>11:30 AM</div>
            <div className={styles.min}>30 min</div>
          </div>
          <img
            className={styles.templateCalendarCardStatus}
            alt=""
            src="/template-calendar-card-status.svg"
          />
          <div className={styles.basicInfo}>
            <div className={styles.title1}>
              <div className={styles.eventName}>Event name</div>
            </div>
            <div className={styles.organizerAndAttendeeInfo}>
              <div className={styles.organizer}>
                <div className={styles.avatarFluent2}>
                  <img
                    className={styles.subtractIcon}
                    alt=""
                    src="/subtract-4.svg"
                  />
                  <div className={styles.presenceBadgeFluent2}>
                    <img className={styles.shapeIcon} alt="" src="/shape.svg" />
                  </div>
                  <img
                    className={styles.activityRingIcon}
                    alt=""
                    src="/activity-ring.svg"
                  />
                </div>
                <div className={styles.elviaAtkins}>Elvia Atkins</div>
              </div>
              <div className={styles.invitedYou}>invited you + 2 others</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateCalendarCardListIt;
