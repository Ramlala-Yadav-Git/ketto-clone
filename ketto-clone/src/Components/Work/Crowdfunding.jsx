import React,{ useState } from 'react'
import styles from "./Crowd.module.css";
import { CrowdVideo } from './CrowdVideo';
import data from "./work.json"
import { Raisefund } from './Raisefund';
import data1 from "./work.json"

export const Crowdfunding = () => {
    const [details, setDetails] = useState(data);
    const [details1, setDetails1] = useState(data1);


    return (
        <>
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
                        {details.map((item1)=>{
                            return <CrowdVideo data={item1}/>
                        })}
                        
                    </div>


        </div>
        <div className={styles.main}>

        
        <div>
                        {details1.map((item)=>{
                            return <Raisefund data1={item}/>
                        })}
                        
                    </div>

                    <div>
                        {details1.map((item)=>{
                            return <Raisefund data1={item}/>
                        })}
                        
                    </div>

                    <div>
                        {details1.map((item)=>{
                            return <Raisefund data1={item}/>
                        })}
                        
                    </div>
                    </div>

        </>
    )
}

