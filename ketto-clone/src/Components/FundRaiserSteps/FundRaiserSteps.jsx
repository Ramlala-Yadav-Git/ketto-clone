import styles from "../FundRaiserSteps/FundRaiserSteps.module.css"
export function FundRaiserSteps() {

    return (

        <>
            <h1>Start a Fundraiser in three simple steps</h1>

            <div className={styles.FundRaiserSteps}>
                <div>
                    <img src="/sac-separator.png" alt="Fundraisers" />
                </div>
                <div>
                    <div>
                        <h2>Start your fundraiser</h2>
                        <p>
                            It’ll take only 2 minutes. Just tell us a few details about you and the ones you are raising funds for.
                        </p>
                    </div>
                    <div>
                        <h2>
                            Share your fundraiser
                        </h2>
                        <p>
                            All you need to do is share the fundraiser with your friends and family. In no time, support will start pouring in.
                        </p>
                        <p>Share your fundraiser directly from dashboard on social media.</p>
                    </div>
                    <div>
                        <h2>
                            Withdraw Funds
                        </h2>
                        <p>
                            The funds raised can be withdrawn without any hassle directly to your bank account.

                        </p>
                        <p>
                            It takes only 5 minutes to withdraw funds on ketto.
                        </p>
                    </div>
                </div>

            </div>
            <div className={styles.FundRaiserVideo}>
                <video src="/screen_recording.webm" autoPlay></video>
            </div>

        </>
    )

}