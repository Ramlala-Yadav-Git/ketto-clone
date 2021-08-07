import React, { useState } from 'react'
import styles from "./Crowd.module.css";
import { CrowdVideo } from './CrowdVideo';
import data from "./work.json"
import { Raisefund } from './Raisefund';
import data1 from "./work.json"
import { NavBar } from '../NavBar/NavBar';
import { Footer } from '../Footer/Footer';
import Carousel from 'react-elastic-carousel';
import { FundRaiserSteps } from '../FundRaiserSteps/FundRaiserSteps';



export const Crowdfunding = () => {
    const [details,] = useState(data);
    const [details1,] = useState(data1);
    const st = JSON.parse(localStorage.getItem("user"))
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 1 },
        { width: 1150, itemsToShow: 2, itemsToScroll: 2 },

    ]
    var user;
    if (st) {
        user = st.status;

    }
    else {
        user = false
    }


    return (
        <>
            <NavBar user={user} />
            <div>
                <div className={styles.headingtext}>

                    <h1>What is Crowdfunding?</h1>
                    <p>
                        In its simplest form, Crowdfunding
                        is a practice of giving monetary funds
                        to overcome specific social, cultural,
                        or economic hurdles individuals face in
                        their daily lives.
                    </p>
                </div>

                <div>
                    {details.map((item1) => {
                        return <CrowdVideo data={item1} />
                    })}

                </div>

                <FundRaiserSteps />
            </div>

            <div className={styles.feature}>
                <Carousel breakPoints={breakPoints} >

                    <div>
                        {details1.map((item) => {
                            return <Raisefund data1={item} />
                        })}

                    </div>
                    <div>
                        {details1.map((item) => {
                            return <Raisefund data1={item} />
                        })}

                    </div>
                    <div>
                        {details1.map((item) => {
                            return <Raisefund data1={item} />
                        })}

                    </div>
                    <div>
                        {details1.map((item) => {
                            return <Raisefund data1={item} />
                        })}

                    </div>

                    <div>
                        {details1.map((item) => {
                            return <Raisefund data1={item} />
                        })}

                    </div>


                    <div>
                        {details1.map((item) => {
                            return <Raisefund data1={item} />
                        })}

                    </div>

                </Carousel>


            </div>
            <div className={styles.main}>



            </div>
            <Footer />

        </>
    )
}

