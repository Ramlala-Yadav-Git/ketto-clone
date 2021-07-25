import styles from "../Messages/Massages.module.css"



export function Massages(params) {

    return (
        <>
            <div className={styles.Messages}>
                <div className={styles.button}>

                    <button className={styles.fundraiser}>Start a Fundraiser for free</button>
                    <button className={styles.talk}>Talk to us</button>
                </div>
                <div className={styles.chat}>
                    <div>
                        Have any questions for us? Chat with our team on Facebook or WhatsApp now.
                    </div>
                    <div className={styles.site}>
                        <div className={styles.face}>
                            <i className="fab fa-facebook-square"></i>
                            <p>Chat with us</p>

                        </div>
                        <div className={styles.whats}>
                            <i className="fab fa-whatsapp"></i>
                            <p>Chat with us</p>
                        </div>

                    </div>
                </div>
                <div className={styles.causes}>
                    <h2>
                        Causes you can raise funds for
                    </h2>
                    <p>
                        Be it for a personal need, social cause or a creative idea - you can count on us for
                        the project that you want to raise funds for.
                    </p>
                </div>
            </div>

        </>
    )

}