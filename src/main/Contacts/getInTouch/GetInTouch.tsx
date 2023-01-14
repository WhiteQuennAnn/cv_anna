import React from "react";
import { Socials } from "../../../Socials/Socials";
import styles from "./getInTouch.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";

export const GetInTouch = () => {
  return (
    <div className={styles.getInTouchWrapper}>
      <ul className={styles.getInTouch__List}>
        <li className={styles.getInTouch__List__item}>
          <span className={styles.getInTouch__span}>Phone</span>
          <h6 className={styles.getInTouch__info}>
            <FontAwesomeIcon color="#FF00FF" icon={faPhone} /> +375 29 8462300
          </h6>
        </li>
        <li className={styles.getInTouch__List__item}>
          <span className={styles.getInTouch__span}>Email</span>
          <h6 className={styles.getInTouch__info}>
            <FontAwesomeIcon color="#FF00FF" icon={faEnvelope} />{" "}
            vronskaya.anyuta@yandex.ru
          </h6>
        </li>
        <li className={styles.getInTouch__List__item}>
          <span className={styles.getInTouch__span}>Facebook</span>
          <h6 className={styles.getInTouch__info}>
            <FontAwesomeIcon color="#FF00FF" icon={faFacebook} />{" "}
              AnnaFomina
          </h6>
        </li>
        <li className={styles.getInTouch__List__item}>
          <span className={styles.getInTouch__span}>Telegram</span>
          <h6 className={styles.getInTouch__info}>
            <FontAwesomeIcon color="#FF00FF" icon={faTelegram} />{" "}
            @AnnaFomina555
          </h6>
        </li>
      </ul>
      <Socials />
    </div>
  );
};
