import styles from "../Browse/Browse.module.css"
import { BrowseHeader } from '../Browse/BrowseHeader'
import { BrowseSectionLeft } from '../Browse/BrowsSectionLeft'
import { BrowseSearch } from '../Browse/BrowseSearch'
import { BrowseSelection } from '../Browse/BrowseSelection'
import { BrowseShow } from '../Browse/BrowseShow'
import axios from "axios"
import { NavBar } from "../NavBar/NavBar"
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

    const [category, setCategory] = useState("")
    const [type, setType] = useState("")
    const [location, setLocation] = useState("")
    const HandleChange = (e) => {
        if (e.target.name === "category") {
            setCategory(e.target.value)
            console.log(category);
            HandleRender()

        }
        if (e.target.name === "type") {
            setType(e.target.value)
            console.log(type);
            HandleRender()


        }
        if (e.target.name === "location") {
            setLocation(e.target.value)
            console.log(location);
            HandleRender()


        }

        HandleRender()

    }
    const HandleRender = () => {
        if (category !== "" && type !== "" && location !== "") {
            const filterData = showData.filter((e) => {
                return (e.category.toLowerCase() === category.toLowerCase() && e.type.toLowerCase() === type.toLowerCase() && e.location.toLowerCase() === location.toLowerCase())
            })
            setSendData(filterData)
        }
        else if (category !== "" && type !== "") {
            const filterData = showData.filter((e) => {
                return (e.category.toLowerCase() === category.toLowerCase() && e.type.toLowerCase() === type.toLowerCase())
            })
            setSendData(filterData)
        }
        else if (category !== "" && location !== "") {
            const filterData = showData.filter((e) => {
                return (e.category.toLowerCase() === category.toLowerCase() && e.location.toLowerCase() === location.toLowerCase())
            })
            setSendData(filterData)
        }
        else if (type !== "" && location !== "") {
            const filterData = showData.filter((e) => {
                return (e.type.toLowerCase() === type.toLowerCase() && e.location.toLowerCase() === location.toLowerCase())
            })
            setSendData(filterData)
        }
        else if (category !== "") {
            const filterData = showData.filter((e) => {
                return (e.category.toLowerCase() === category.toLowerCase())
            })
            setSendData([...filterData])
        }
        else if (location !== "") {
            const filterData = showData.filter((e) => {
                return (e.location.toLowerCase() === location.toLowerCase())
            })
            setSendData([...filterData])
        }
        else if (type !== "") {
            const filterData = showData.filter((e) => {
                return (e.type.toLowerCase() === type.toLowerCase())
            })
            setSendData([...filterData])
        }

    }
    const HandleReset = () => {
        setCategory("")
        setLocation("")
        setType("")
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
            <NavBar />
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


                                    sendData.length !== 0 ? sendData.map((e) => {
                                        return (
                                            <BrowseShow
                                                key={e.id}
                                                image={e.image} title={e.title} logo={e.logo} by={e.by} amount={e.amount} progress={e.progress} lastDonation={e.lastDonation} daysLeft={e.daysLeft} supporters={e.supporters}
                                            />
                                        )
                                    }) : <div>Not Matching Data</div>

                                }

                            </>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}