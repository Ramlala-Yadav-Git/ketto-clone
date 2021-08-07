import React from "react";
import styles from "./Crowd.module.css";

export const CrowdVideo = ({ data }) => {
  const { src, message1, message2 } = data;
  return (
    <>
      <div className={styles.head}>
        <div className={styles.videodiv}>
          <iframe src={src} frameborder="0" title={"Video"}></iframe>
        </div>
        <div className={styles.rightarea}>
          <p>{message1}</p>
          <p>{message2}</p>
        </div>
      </div>
    </>
  );
};
