import TemplateCalendarCardListIt from "./template-calendar-card-list-it";
import styles from "./body-slot.module.css";

const BodySlot = () => {
  return (
    <div className={styles.bodySlot}>
      <div className={styles.templateCalendarCardListIt}>
        <div className={styles.timeLeftIndicatorParent}>
          <div className={styles.timeLeftIndicator}>
            <div className={styles.icon}></div>
            <div className={styles.in33M}>in 33 m</div>
          </div>
          <div className={styles.title}>
            <div className={styles.time}>
              <div className={styles.am}>11:35 AM</div>
              <div className={styles.min}>30 min</div>
            </div>
            <img
              className={styles.templateCalendarCardStatus}
              loading="eager"
              alt=""
              src="/template-calendar-card-status.svg"
            />
            <div className={styles.basicInfo}>
              <div className={styles.title1}>
                <div className={styles.eventName}>Standard Wash</div>
              </div>
              <div className={styles.organizerAndAttendeeInfo}>
                <div className={styles.organizer}>
                  <div className={styles.avatarFluent2}>
                    <img
                      className={styles.subtractIcon}
                      alt=""
                      src="/subtract.svg"
                    />
                    <div className={styles.presenceBadgeFluent2}>
                      <img
                        className={styles.shapeIcon}
                        alt=""
                        src="/shape.svg"
                      />
                    </div>
                    <img
                      className={styles.activityRingIcon}
                      alt=""
                      src="/activity-ring.svg"
                    />
                    <img
                      className={styles.subtractIcon1}
                      alt=""
                      src="/subtract-1.svg"
                    />
                  </div>
                  <div className={styles.elviaAtkins}>Ranoppp Ahoy</div>
                </div>
                <div className={styles.invitedYou}>invited you + 2 others</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.templateCalendarCardListIt1}>
        <div className={styles.timeLeftIndicatorGroup}>
          <div className={styles.timeLeftIndicator1}>
            <div className={styles.icon1}></div>
            <div className={styles.in33M1}>in 33 m</div>
          </div>
          <div className={styles.title2}>
            <div className={styles.time1}>
              <div className={styles.am1}>13:05 PM</div>
              <div className={styles.min1}>30 min</div>
            </div>
            <img
              className={styles.templateCalendarCardStatus1}
              alt=""
              src="/template-calendar-card-status-1.svg"
            />
            <div className={styles.basicInfo1}>
              <div className={styles.title3}>
                <div className={styles.eventName1}>{`Premium Wash `}</div>
              </div>
              <div className={styles.organizerAndAttendeeInfo1}>
                <div className={styles.organizer1}>
                  <div className={styles.avatarFluent21}>
                    <img
                      className={styles.subtractIcon2}
                      alt=""
                      src="/subtract.svg"
                    />
                    <div className={styles.presenceBadgeFluent21}>
                      <img
                        className={styles.shapeIcon1}
                        alt=""
                        src="/shape.svg"
                      />
                    </div>
                    <img
                      className={styles.activityRingIcon1}
                      alt=""
                      src="/activity-ring.svg"
                    />
                    <img
                      className={styles.subtractIcon3}
                      alt=""
                      src="/subtract-3.svg"
                    />
                  </div>
                  <div className={styles.elviaAtkins1}>Dapin Pace</div>
                </div>
                <div className={styles.invitedYou1}>invited you + 2 others</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.templateCalendarCardListIt2}>
        <div className={styles.timeLeftIndicatorContainer}>
          <div className={styles.timeLeftIndicator2}>
            <div className={styles.icon2}></div>
            <div className={styles.in33M2}>in 33 m</div>
          </div>
          <div className={styles.title4}>
            <div className={styles.time2}>
              <div className={styles.am2}>15:10 PM</div>
              <div className={styles.min2}>30 min</div>
            </div>
            <img
              className={styles.templateCalendarCardStatus2}
              alt=""
              src="/template-calendar-card-status.svg"
            />
            <div className={styles.basicInfo2}>
              <div className={styles.title5}>
                <div className={styles.eventName2}>SPA Treatment</div>
              </div>
              <div className={styles.organizerAndAttendeeInfo2}>
                <div className={styles.organizer2}>
                  <div className={styles.avatarFluent22}>
                    <img
                      className={styles.subtractIcon4}
                      alt=""
                      src="/subtract-4.svg"
                    />
                    <div className={styles.presenceBadgeFluent22}>
                      <img
                        className={styles.shapeIcon2}
                        alt=""
                        src="/shape.svg"
                      />
                    </div>
                    <img
                      className={styles.activityRingIcon2}
                      alt=""
                      src="/activity-ring.svg"
                    />
                  </div>
                  <div className={styles.elviaAtkins2}>Elvia Atkins</div>
                </div>
                <div className={styles.invitedYou2}>invited you + 2 others</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TemplateCalendarCardListIt />
      <TemplateCalendarCardListIt />
      <TemplateCalendarCardListIt />
    </div>
  );
};

export default BodySlot;
