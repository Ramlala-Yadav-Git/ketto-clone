import Styles from "../SectionFirst/SectionFirst.module.css";
import { Featured } from "./Featured";
export function SectionFirst() {



    return (
        <>
            <div className={Styles.SectionFirst}>
                <div className={Styles.ContentDiv}>
                    <div>
                        <h1>
                            Need Funds to Pay For a Medical Emergency or Social Cause?
                        </h1>
                    </div>
                    <div className={Styles.Details}>
                        <div>
                            <h2>
                                0%
                            </h2>
                            <h3>
                                PLATFORM FEE
                            </h3>
                        </div>
                        <div>
                            <h2>
                                55 Lakh+
                            </h2>
                            <h3>
                                DONORS
                            </h3>
                        </div>
                        <div>
                            <h2>
                                2 Lakh+
                            </h2>
                            <h3>
                                FUNDRAISERS
                            </h3>
                        </div>

                    </div>
                    <div>

                        <button

                        >Start Fundraiser for FREE


                        </button>

                        <p>नि: शुल्क फंडरेजर शुरू करें </p>


                    </div>
                </div>
            </div>
            <Featured />
        </>
    )
}


