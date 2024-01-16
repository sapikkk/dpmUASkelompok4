import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./card-fluent.module.css";

const CardFluent = () => {
  const navigate = useNavigate();

  const onCardFluent2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.cardFluent2} onClick={onCardFluent2Click}>
      <div className={styles.headerSlot}>
        <div className={styles.title}>
          <div className={styles.stack}>
            <div className={styles.calendar1Title}>
              Pantau Kuota Antrian Tersedia
            </div>
            <div className={styles.lastUpdatedThursday}>
              Last updated today, Dec 01 at 11:11 AM
            </div>
          </div>
          <div className={styles.controls}>
            <div className={styles.buttonFluent2}>
              <img className={styles.icon} alt="" src="/icon.svg" />
            </div>
            <div className={styles.buttonFluent21}>
              <img className={styles.icon1} alt="" src="/icon-1.svg" />
            </div>
            <div className={styles.buttonFluent22}>
              <img className={styles.icon2} alt="" src="/icon-2.svg" />
            </div>
            <div className={styles.buttonFluent23}>
              <img className={styles.icon3} alt="" src="/icon-3.svg" />
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <div className={styles.buttonFluent24}>
            <img className={styles.icon4} alt="" src="/icon-4.svg" />
            <div className={styles.textWrapperForOffset}>
              <div className={styles.text}>Today</div>
            </div>
          </div>
          <div className={styles.menuButtonFluent2}>
            <div className={styles.textWrapperForOffset1}>
              <div className={styles.text1}>December 01, 2023</div>
            </div>
            <img className={styles.chevronIcon} alt="" src="/chevron.svg" />
          </div>
        </div>
      </div>
      <div className={styles.bodySlot}>
        <div className={styles.templateCalendarCardListIt}>
          <div className={styles.timeLeftIndicatorParent}>
            <div className={styles.timeLeftIndicator}>
              <div className={styles.icon5}></div>
              <div className={styles.in33M}>in 33 m</div>
            </div>
            <div className={styles.title1}>
              <div className={styles.time}>
                <div className={styles.am}>11:30 AM</div>
                <div className={styles.min}>30 min</div>
              </div>
              <img
                className={styles.templateCalendarCardStatus}
                loading="eager"
                alt=""
                src="/template-calendar-card-status.svg"
              />
              <div className={styles.basicInfo}>
                <div className={styles.title2}>
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
                  <div className={styles.invitedYou}>
                    invited you + 2 others
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.templateCalendarCardListIt1}>
          <div className={styles.timeLeftIndicatorGroup}>
            <div className={styles.timeLeftIndicator1}>
              <div className={styles.icon6}></div>
              <div className={styles.in33M1}>in 33 m</div>
            </div>
            <div className={styles.title3}>
              <div className={styles.time1}>
                <div className={styles.am1}>13:30 PM</div>
                <div className={styles.min1}>30 min</div>
              </div>
              <img
                className={styles.templateCalendarCardStatus1}
                alt=""
                src="/template-calendar-card-status-1.svg"
              />
              <div className={styles.basicInfo1}>
                <div className={styles.title4}>
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
                  <div className={styles.invitedYou1}>
                    invited you + 2 others
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.templateCalendarCardListIt2}>
          <div className={styles.timeLeftIndicatorContainer}>
            <div className={styles.timeLeftIndicator2}>
              <div className={styles.icon7}></div>
              <div className={styles.in33M2}>in 33 m</div>
            </div>
            <div className={styles.title5}>
              <div className={styles.time2}>
                <div className={styles.am2}>15:30 PM</div>
                <div className={styles.min2}>30 min</div>
              </div>
              <img
                className={styles.templateCalendarCardStatus2}
                alt=""
                src="/template-calendar-card-status.svg"
              />
              <div className={styles.basicInfo2}>
                <div className={styles.title6}>
                  <div className={styles.eventName2}>Event name</div>
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
                  <div className={styles.invitedYou2}>
                    invited you + 2 others
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.templateCalendarCardListIt3}>
          <div className={styles.frameDiv}>
            <div className={styles.timeLeftIndicator3}>
              <div className={styles.icon8}></div>
              <div className={styles.in33M3}>in 33 m</div>
            </div>
            <div className={styles.title7}>
              <div className={styles.time3}>
                <div className={styles.am3}>11:30 AM</div>
                <div className={styles.min3}>30 min</div>
              </div>
              <img
                className={styles.templateCalendarCardStatus3}
                alt=""
                src="/template-calendar-card-status.svg"
              />
              <div className={styles.basicInfo3}>
                <div className={styles.title8}>
                  <div className={styles.eventName3}>Event name</div>
                </div>
                <div className={styles.organizerAndAttendeeInfo3}>
                  <div className={styles.organizer3}>
                    <div className={styles.avatarFluent23}>
                      <img
                        className={styles.subtractIcon5}
                        alt=""
                        src="/subtract-4.svg"
                      />
                      <div className={styles.presenceBadgeFluent23}>
                        <img
                          className={styles.shapeIcon3}
                          alt=""
                          src="/shape.svg"
                        />
                      </div>
                      <img
                        className={styles.activityRingIcon3}
                        alt=""
                        src="/activity-ring.svg"
                      />
                    </div>
                    <div className={styles.elviaAtkins3}>Elvia Atkins</div>
                  </div>
                  <div className={styles.invitedYou3}>
                    invited you + 2 others
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.templateCalendarCardListIt4}>
          <div className={styles.timeLeftIndicatorParent1}>
            <div className={styles.timeLeftIndicator4}>
              <div className={styles.icon9}></div>
              <div className={styles.in33M4}>in 33 m</div>
            </div>
            <div className={styles.title9}>
              <div className={styles.time4}>
                <div className={styles.am4}>11:30 AM</div>
                <div className={styles.min4}>30 min</div>
              </div>
              <img
                className={styles.templateCalendarCardStatus4}
                alt=""
                src="/template-calendar-card-status.svg"
              />
              <div className={styles.basicInfo4}>
                <div className={styles.title10}>
                  <div className={styles.eventName4}>Event name</div>
                </div>
                <div className={styles.organizerAndAttendeeInfo4}>
                  <div className={styles.organizer4}>
                    <div className={styles.avatarFluent24}>
                      <img
                        className={styles.subtractIcon6}
                        alt=""
                        src="/subtract-4.svg"
                      />
                      <div className={styles.presenceBadgeFluent24}>
                        <img
                          className={styles.shapeIcon4}
                          alt=""
                          src="/shape.svg"
                        />
                      </div>
                      <img
                        className={styles.activityRingIcon4}
                        alt=""
                        src="/activity-ring.svg"
                      />
                    </div>
                    <div className={styles.elviaAtkins4}>Elvia Atkins</div>
                  </div>
                  <div className={styles.invitedYou4}>
                    invited you + 2 others
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.templateCalendarCardListIt5}>
          <div className={styles.timeLeftIndicatorParent2}>
            <div className={styles.timeLeftIndicator5}>
              <div className={styles.icon10}></div>
              <div className={styles.in33M5}>in 33 m</div>
            </div>
            <div className={styles.title11}>
              <div className={styles.time5}>
                <div className={styles.am5}>11:30 AM</div>
                <div className={styles.min5}>30 min</div>
              </div>
              <img
                className={styles.templateCalendarCardStatus5}
                alt=""
                src="/template-calendar-card-status.svg"
              />
              <div className={styles.basicInfo5}>
                <div className={styles.title12}>
                  <div className={styles.eventName5}>Event name</div>
                </div>
                <div className={styles.organizerAndAttendeeInfo5}>
                  <div className={styles.organizer5}>
                    <div className={styles.avatarFluent25}>
                      <img
                        className={styles.subtractIcon7}
                        alt=""
                        src="/subtract-4.svg"
                      />
                      <div className={styles.presenceBadgeFluent25}>
                        <img
                          className={styles.shapeIcon5}
                          alt=""
                          src="/shape.svg"
                        />
                      </div>
                      <img
                        className={styles.activityRingIcon5}
                        alt=""
                        src="/activity-ring.svg"
                      />
                    </div>
                    <div className={styles.elviaAtkins5}>Elvia Atkins</div>
                  </div>
                  <div className={styles.invitedYou5}>
                    invited you + 2 others
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerSlot}>
        <div className={styles.text2}>View calendar</div>
      </div>
    </div>
  );
};

export default CardFluent;
