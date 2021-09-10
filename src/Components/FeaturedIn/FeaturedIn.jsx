import Carousel from 'react-elastic-carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../FeaturedIn/FeaturedIn.module.css"
import { useEffect, useState } from 'react';
import { BrowseShow } from '../Browse/BrowseShow';
import axios from 'axios';
export function FeaturedIn(params) {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },



    ]
    const [showData, setShowData] = useState([])
    const [sendData, setSendData] = useState(showData)

    useEffect(() => {
        getData();

    }, [])


    const getData = () => {
        axios.get("https://ketto-data.herokuapp.com/fundraiser").then(({ data }) => {

            setShowData([...data])
            setSendData([...data])
        })
    }
    const HandleFundraiser = () => {
        document.location.href = "/fundraiser"
    }
    return (<>
        <div className={styles.trendingMassage}>
            <h2>Trending Fundraisers</h2>
            <p>
                View the fundraisers that are most active right now


            </p>
        </div>
        <div className={styles.feature}>
            <Carousel breakPoints={breakPoints} >

                {
                    sendData.map((e) => {
                        return <div className={styles.trending} onClick={() => HandleFundraiser()}>
                            <BrowseShow key={e.id}
                                image={e.image} title={e.title} logo={e.image} by={e.by} amount={e.amount} progress={e.progress} lastDonation={e.lastDonation} daysLeft={e.daysLeft} supporters={e.supporters} />
                        </div>
                    })
                }


            </Carousel>


        </div>
    </>)
}