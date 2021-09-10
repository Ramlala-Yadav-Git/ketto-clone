import styles from "../Browse/Browse.module.css"
import { BrowseHeader } from '../Browse/BrowseHeader'
import { BrowseSectionLeft } from '../Browse/BrowsSectionLeft'
import { BrowseSearch } from '../Browse/BrowseSearch'
import { BrowseSelection } from '../Browse/BrowseSelection'
import { BrowseShow } from '../Browse/BrowseShow'
import axios from "axios"
import { NavBar } from "../NavBar/NavBar"
import { useState, useEffect } from "react"
import { InputForm } from "../InputForm"
import { Footer } from "../Footer/Footer"
import { ChatBotHelper } from "../ChatBot/ChatBot"

export function Browse(params) {
    const [ShowForm, setShowForm] = useState(false)
    const [close, setClose] = useState(false)
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
            HandleRender()
            HandleRender()

        }
        else if (e.target.name === "type") {
            setType(e.target.value)
            HandleRender()


        }
        else if (e.target.name === "location") {
            setLocation(e.target.value)
            HandleRender()


        }

        HandleRender()

    }
    const HandleRender = () => {
        if (category !== "" && type !== "" && location !== "") {
            axios.get(`https://ketto-data.herokuapp.com/fundraiser?category=${category}&type=${type}&location=${location}`).then(({ data }) => {
                setSendData([...data])


            })
        }
        else if (category !== "" && type !== "") {
            axios.get(`https://ketto-data.herokuapp.com/fundraiser?category=${category}&type=${type}`).then(({ data }) => {
                setSendData([...data])

            })
        }
        else if (category !== "" && location !== "") {
            axios.get(`https://ketto-data.herokuapp.com/fundraiser?category=${category}$location=${location}`).then(({ data }) => {
                setSendData([...data])

            })
        }
        else if (type !== "" && location !== "") {
            axios.get(`https://ketto-data.herokuapp.com/fundraiser?type=${type}&location=${location}`).then(({ data }) => {
                setSendData([...data])

            })
        }
        else if (category !== "") {
            axios.get(`https://ketto-data.herokuapp.com/fundraiser?category=${category}`).then(({ data }) => {
                setSendData([...data])

            })
        }
        else if (location !== "") {
            axios.get(`https://ketto-data.herokuapp.com/fundraiser?location=${location}`).then(({ data }) => {
                setSendData([...data])

            })
        }
        else if (type !== "") {
            axios.get(`https://ketto-data.herokuapp.com/fundraiser?type=${type}`).then(({ data }) => {
                setSendData([...data])
            })
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

            axios.get(`https://ketto-data.herokuapp.com/fundraiser?q=${e.target.value}`).then(({ data }) => {
                setSendData([...data])
            })
        }

    }
    const HandleShowForm = () => {
        setShowForm(!ShowForm)
        setClose(!close)

        getData()

    }
    const HandleClose = () => {
        setShowForm(!ShowForm)
        setClose(!close)
        getData()

    }
    const st = JSON.parse(localStorage.getItem("user"))
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
                        <button onClick={() => HandleShowForm()}>Start a Fundraiser</button>
                    </div>
                    <div >
                        {
                            close && <p onClick={() => HandleClose()} className={styles.close}>close</p>

                        }
                        {
                            ShowForm && <InputForm status={ShowForm} />
                        }

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
                                                image={e.image} title={e.title} logo={e.image} by={e.by} amount={e.amount} progress={e.progress} lastDonation={e.lastDonation} daysLeft={e.daysLeft} supporters={e.supporters}
                                            />
                                        )
                                    }) : <div>Not Matching Data</div>

                                }

                            </>

                        </div>

                    </div>
                </div>
            </div>
            <ChatBotHelper />
            <Footer />
        </>
    )
}