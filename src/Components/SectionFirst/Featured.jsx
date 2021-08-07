import Styles from "../SectionFirst/SectionFirst.module.css"
import { Link } from "react-router-dom"
export function Featured() {

    return (
        <>
            <div className={Styles.Featured}>
                <div className={Styles.FeaturedImage}>
                    <img src="https://kettocdn.gumlet.io/media/banner/0/92/image/81d7a1a7626397c32f6c1fb83bfdf476ccd734af.png?w=300&dpr=1.0" alt="FeaturedImage" />
                </div>
                <div className={Styles.FeaturedContent}>
                    <div>
                        <p>FEATURED</p>
                    </div>
                    <div>
                        <h3>
                            Start Monthly Donation to Save Lives
                        </h3>
                        <p>
                            With your support, countless children will receive health care and a happy life. Start your monthly donation today.
                        </p>

                        <button >

                            <Link to="/fundraiser" className={Styles.link} >
                                DONATE NOW
                            </Link>

                            <img className={Styles.link} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw-V_iCYG69_2DV65bRvxlL3FgtbqtsW7T_OZBkJtXhMOsR28FBiPuJ3IKaDctkfScfm8uAhlRQYKXgw&usqp=CAU" alt="f" />
                        </button>

                    </div>
                </div>
            </div>
        </>
    )
}