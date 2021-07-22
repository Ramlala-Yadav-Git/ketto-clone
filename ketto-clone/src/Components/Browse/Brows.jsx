import styles from "../Browse/Browse.module.css"
import { BrowseHeader } from '../Browse/BrowseHeader'
import { BrowseSectionLeft } from '../Browse/BrowsSectionLeft'
import { BrowseSearch } from '../Browse/BrowseSearch'
import { BrowseSelection } from '../Browse/BrowseSelection'
import { BrowseShow } from '../Browse/BrowseShow'
import axios from "axios"
import { useState, useEffect } from "react"
export function Browse(params) {

    const [showData, setShowData] = useState([])
    const [sendData, setSendData] = useState(showData)

    useEffect(() => {
        getData();

    }, [])


    const getData = () => {
        axios.get("http://localhost:3004/fundraiser").then(({ data }) => {

            setShowData([...data])
            setSendData([...data])
        })
    }
    const HandleCategory = (e) => {
        if ((e.target.innerText).toLowerCase() === "all categories") {
            setSendData(showData)
            return;
        }
        const filterData = showData.filter((data) => {


            return (data.category).toLowerCase() === (e.target.innerText).toLowerCase();
        })
        setSendData([...filterData])
    }

    const [pay, setPay] = useState({})
    const HandleChange = (e) => {
        const payLoad = {
            ...pay,
            [e.target.name]: e.target.value
        }
        setPay(payLoad)

        HandleRender()

    }
    const HandleRender = () => {
        if (pay.category && pay.type && pay.location) {
            const filterData = showData.filter((e) => {
                return (e.category.toLowerCase() === pay.category.toLowerCase() && e.type.toLowerCase() === pay.type.toLowerCase() && e.location.toLowerCase() === pay.location.toLowerCase())
            })
            setSendData(filterData)
        }
        else if (pay.category && pay.type) {
            const filterData = showData.filter((e) => {
                return (e.category.toLowerCase() === pay.category.toLowerCase() && e.type.toLowerCase() === pay.type.toLowerCase())
            })
            setSendData(filterData)
        }
        else if (pay.category) {
            const filterData = showData.filter((e) => {
                return (e.category.toLowerCase() === pay.category.toLowerCase())
            })
            setSendData([...filterData])
        }

    }
    const HandleReset = () => {
        setPay({})
        setSendData(showData)
    }
    const HandleSearchChange = (e) => {
        if (e.keyCode === 13) {

            const filterData = showData.filter((el) => {
                return (el.category.toLowerCase() === e.target.value.toLowerCase() || el.type.toLowerCase() === e.target.value.toLowerCase() || el.location.toLowerCase() === e.target.value.toLowerCase())
            })
            setSendData(filterData)
        }

    }

    return (
        <>
            <div className={styles.Browse}>


                <div className={styles.BrowseHeader}>
                    <BrowseHeader />
                </div>
                <div className={styles.BrowseSection}>

                    <div className={styles.BrowseSectionLeft}>
                        <div>
                            <h4>CATEGORIES</h4>
                        </div>
                        <hr />
                        <BrowseSectionLeft CategoryName={"All Categories"} HandleCategory={(e) => HandleCategory(e)} />
                        <BrowseSectionLeft CategoryName={"Education"} HandleCategory={(e) => HandleCategory(e)} />
                        <BrowseSectionLeft CategoryName={"Medical"} HandleCategory={(e) => HandleCategory(e)} />
                        <BrowseSectionLeft CategoryName={"Women & Girls"} HandleCategory={(e) => HandleCategory(e)} />
                        <BrowseSectionLeft CategoryName={"Animals"} HandleCategory={(e) => HandleCategory(e)} />
                        <hr />
                        <button>Start a Fundraiser</button>
                    </div>
                    <div className={styles.BrowseSectionRight}>
                        <div className={styles.BrowseSearch}>
                            <BrowseSearch HandleSearchChange={(event) => HandleSearchChange(event)} />
                        </div>
                        <div className={styles.BrowseSelection}>
                            <BrowseSelection HandleChange={(e) => HandleChange(e)} />

                        </div>

                        <div className={styles.resetButton}>
                            <button onClick={() => HandleReset()}>Reset Filters</button>

                        </div>

                        <div className={styles.BrowseShowItems}>
                            <>
                                {
                                    sendData.map((e) => {
                                        return (
                                            <BrowseShow
                                                key={e.id}
                                                image={e.image} title={e.title} logo={e.logo} by={e.by} amount={e.amount} progress={e.progress} lastDonation={e.lastDonation} daysLeft={e.daysLeft} supporters={e.supporters}
                                            />
                                        )
                                    })
                                }
                            </>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}