import styles from "../PersonalDetails/PersonalDetails.module.css"
import { useState } from "react";
import axios from "axios";



export function PersonalDetails({ getProfile }) {
    const [filePath, setFilePath] = useState("");
    const [url, setUrl] = useState("");
    const handleSubmit = (e) => {

        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setUrl(reader.result);
            }
        };
        reader.onload = () => {
            if (reader.readyState === 2) {
                setUrl(reader.result);
            }
        };
        reader.readAsDataURL(filePath);

        axios.patch("https://ketto-data.herokuapp.com/url/1", { url })
        setTimeout(() => {
            getProfile()
        }, 1000)

    };
    const handleSubmit2 = (e) => {
        handleSubmit(e)

    }


    const handleChange = (e) => {
        setFilePath(e.target.files[0])
    }


    return (
        <>
            <div className={styles.personalMain}>
                <div className={styles.details}>
                    <input type="file" onChange={(e) => handleChange(e)} />
                    <button onClick={() => handleSubmit2()}>Submit</button>
                </div>

            </div >
        </>
    )
}