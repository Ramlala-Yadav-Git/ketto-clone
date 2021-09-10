import { useState, useEffect } from "react";
import stylesp from "../NavBar/Profile.module.css"
import axios from "axios";
import { PersonalDetails } from "../PersonalDetails/PersonalDetails";

export function Profile({ name }) {
    const [profile, setProfile] = useState(false)
    const [details, setDetails] = useState(false)
    useEffect(() => {
        profileUrl();
    }, [])
    const HandleLogOut = () => {
        let u = JSON.parse(localStorage.getItem("user"))
        let data = {
            email: u.email,
            password: u.password,
            status: false
        }
        localStorage.setItem("user", JSON.stringify(data))


        alert("You have succesfully logged out")
        document.location.href = "https://ketto.herokuapp.com"
    }
    const [image, setImage] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6HjnpS3HGQonZA7z19MDiAtKiLmnmsGSQGWKo0MSTPy6_L2rQLo_-Wi91M3ZRkNc6-2_qtvzRuBRLLw&usqp=CAU")

    const profileUrl = () => {
        axios.get("https://ketto-data.herokuapp.com/url").then(({ data }) => {
            if (data.length !== 0) {
                setImage(data[0].url)
            }
        })
    }
    const HandleProfileChange = () => {
        setProfile(!profile)
    }
    const HandleShowOption = () => {
        setDetails(!details)
    }

    const CloseForm = () => {
        setProfile(!profile)
    }
    const CloseProfile = () => {
        setDetails(!details)

    }

    return (
        <>

            <div className={stylesp.header} onClick={() => HandleShowOption()}>
                <img src={image} alt="profile" />
                <i className="fas fa-sort-down"></i>
            </div>
            {
                details &&

                <div className={stylesp.des}>
                    <i className="far fa-times-circle" id={stylesp.profileClose} onClick={() => CloseProfile()}></i>

                    <h5>{name}</h5>
                    <p onClick={() => HandleProfileChange()}>Change Profile</p>
                    <hr />

                    <p>My Fundraisers</p>
                    <hr />
                    <p>My Donations</p>
                    <hr />
                    <p>View My Impact</p>
                    <hr />
                    <p onClick={() => HandleLogOut()}> Logout</p>
                </div>
            }
            {profile && <div>
                <i className="far fa-times-circle" id={stylesp.details} onClick={() => CloseForm()}></i>

                <PersonalDetails getProfile={() => profileUrl()} />
            </div>}

        </>
    )

}