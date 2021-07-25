import React from "react"
import styles from "./Trend.module.css"
// import { Box1data } from "./Box1data"

const Trend = (props) => {



    const handleroute = () => {
        document.location.href = "http://localhost:3000/Box1data"
    }



    return (
        <>
            <div className={styles.Container}>

                <div onClick={() => handleroute()}
                    className={styles.img1}>
                    <img src={props.imgsrc} alt="loading" />
                </div>

                <h4 className={styles.head}>{props.heading}</h4>

                <div className={styles.imgprofile}>
                    <img src={props.img} alt="loading" />
                    <p>{props.paragraph}</p>
                </div>

                <div className={styles.imgprofile1}>
                    <p>
                        <span style={{ fontWeight: "bold", marginRight: "2px" }}>
                            {props.price}
                        </span>
                        raised out of
                        <span style={{ fontWeight: "bold", marginLeft: "5px" }}>

                            {props.reduce}</span>
                    </p>

                </div>
                <div>
                    <progress value="65" max="100" />

                </div>

                <div className={styles.imgprofile2}>

                    <i className="far fa-clock">{props.watch}</i>

                    <span>
                        <i className="far fa-heart">{props.heart}</i>        Supporters

                    </span>


                </div>
                <div className={styles.imgprofile3}>
                    <button className={styles.share}><i className="fab fa-facebook-square">Share</i></button>
                    <button className={styles.delete}>Donate</button>
                </div>
            </div>

        </>
    )
}
export { Trend }
