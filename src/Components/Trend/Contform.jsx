import React from 'react';
import styles from "./Trend.module.css";

const Contactform=({data1})=>{
    // console.log(data)
    return(
    <>
    <div className={styles.showcontact}>
        <p> <img src={data1.img} alt="" /> </p>
        <div className={styles.contactmsg}>
        <p>{data1.message}</p>
        <p>{data1.title1}</p>
        </div>
    </div>
    </>
    )
    
}
export {Contactform}