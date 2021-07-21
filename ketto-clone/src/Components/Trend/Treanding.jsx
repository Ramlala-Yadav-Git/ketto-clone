import React from "react"
import styles from "./Trend.module.css"
 
const Trend =(props)=>{

    const handleclick=()=>{
        console.log("handleclick")

        document.location.href= "./Box1.jsx"
    }
    return(
    <>
    <div className={styles.Container}>
        <div  className="img1">
        <img src={props.imgsrc} alt="loading" />
        </div>

       
        <h4 className={styles.head}>{props.heading}</h4>
       
        <div className={styles.imgprofile}>
            <img src={props.img} alt="loading" />
            <p>{props.paragraph}</p>


        </div>
        

    <div className={styles.imgprofile1}>
        <p>
            <span style={{fontWeight:"bold" ,marginRight:"2px"}}>
            {props.price}
            </span>
           raised out of
           <span style={{fontWeight:"bold" ,marginLeft:"5px"}}>

           {props.reduce}</span>
        </p>
        
        </div>
        <div style={{marginLeft:"20px"}}>
        <progress className={styles.progress}value = "70" max = "100"/>

        </div>

<div className={styles.imgprofile2}>
        
        <i className="far fa-clock">{props.watch}</i>
        
        <span>
        <i className="far fa-heart">{props.heart}</i>    Supporters

         </span>
        
       
 </div>
        <div className={styles.imgprofile3}>
            <button className={styles.share}><i class="fab fa-facebook-square">Share</i></button>
            <button className={styles.delete}>Donate</button>
        </div>
      
    </div>

    </>
)
 }
export{Trend}

const Trend = (props) => {
    return (
        <>
            <div className={styles.Container}>
                <div className={styles.img1}>
                    <img src={props.imgsrc} alt="loading" />
                </div>
                <div className={styles.header}>
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
                    <div className={styles.progressBar}>
                        <progress value={props.progress} max="100" />

                    </div>

                    <div className={styles.imgprofile2}>

                        <i className="far fa-clock"></i>
                        <i className={`${styles.bold} ${styles.margin}`}>{props.watch}</i>

                        <span>
                            <i className={` fas fa-heart ${styles.font}`}  ></i>
                            <i className={styles.bold}>{props.heart}</i>
                            <i> Supporters</i>
                        </span>


                    </div>
                    <div className={styles.imgprofile3}>
                        <button className={styles.share}><i class="fab fa-facebook-square">Share</i></button>
                        <button className={styles.delete}>Donate</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export { Trend }
