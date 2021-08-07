import styles from "../Browse/Browse.module.css"
import { Link } from "react-router-dom"


export function BrowseShow({ image, title, logo, by, amount, progress, lastDonation, daysLeft, supporters }) {


    return (
        <>
            <div className={styles.showData}>
                <div className={styles.showDataImage}>
                    <img src={image} alt="loading.." />
                </div>
                <div className={styles.showDataContent}>
                    <div className={styles.showDataTitle}>
                        <h3>{title}</h3>

                    </div>
                    <div className={styles.showDataLogo}>
                        <img src={logo} alt="loading..." />
                        <p>{by}</p>
                    </div>
                    <div className={styles.displayFlex}>
                        <h2>₹ {amount}</h2>
                        <span className={styles.raised}>raised</span>
                    </div>

                    <div className={styles.progressBar}>
                        <progress value={progress} max="100" />
                    </div>
                    <p>Last donation {lastDonation} ago</p>
                    <div className={styles.bottom}>
                        <div className={styles.displayFlex} >
                            <i className="far fa-clock" id={styles.clock} ></i>

                            <h3>{daysLeft}</h3>
                            <span>Days Left</span>
                        </div>
                        <div className={styles.displayFlex}>

                            <i className="fas fa-heart" id={styles.heart} ></i>
                            <h3>{supporters}</h3>

                            <span>Supporters</span>
                        </div>

                    </div>
                    <div className={styles.fbwt}>
                        <div className={styles.facebook}>
                            <i className="fab fa-facebook-square" id={styles.fb}></i>
                            <p>Share</p>
                        </div>
                        <div className={styles.donateButton}>
                            <Link to="/fundraiser">
                                <button >Donate</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}