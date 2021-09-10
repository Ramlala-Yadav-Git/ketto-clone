import React from 'react'
import styles from "./Crowd.module.css";


export const Raisefund = ({ data1 }) => {
    const {
        src1,
        name,
        work,
        raised,
        test,
        para } = data1

    return (
        <>
            <div className={styles.raisefundparent1}>
                <div className={styles.par2}>


                    <div className={styles.img1}>
                        <img src={src1} alt="" />
                    </div>

                    <div className={styles.imgtext}>
                        <h1>{name}</h1>
                        <p>{work}</p>
                        <h2> Raised{raised}for Constable medical</h2>
                    </div>
                </div>
                <div className={styles.dash}></div>

                <div className={styles.par3}>
                    <p>{test}</p>
                    <p>{para}</p>
                </div>

                <p className={styles.para1}>
                    <a href="https://ketto.herokuapp.com/fundraiser"> Visit Campaign</a></p>

            </div>

        </>
    )
}
