import React from 'react';
import styles from "./Trend.module.css";

const Formdata=({data})=>{
    // console.log(data)
    return(
    <>
    <div className={styles.showdonar}>
        <p> <img src={data.img} alt="" /> </p>
        <p>{data.title}</p>
        <p>{data.phone}</p>
    </div>
    </>
    )
    
}
export {Formdata}