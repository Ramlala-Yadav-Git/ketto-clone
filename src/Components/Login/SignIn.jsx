import Styles from "./Login.module.css"
import { useState } from "react"
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
import axios from "axios";
export function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [allEntry, setAllEntry] = useState([]);

    const HandleSignIn = (a) => {
        alert("You have successfully registred");

        axios.patch("https://ketto-data.herokuapp.com/url/1", {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6HjnpS3HGQonZA7z19MDiAtKiLmnmsGSQGWKo0MSTPy6_L2rQLo_-Wi91M3ZRkNc6-2_qtvzRuBRLLw&usqp=CAU"
        })

        setTimeout(() => {
            document.location.href = "https://ketto.herokuapp.com/login"
        }, 100)

        // console.log(a);
    }

    const submitForm = (e) => {
        e.preventDefault();

        const newEntry = { email: email, password: password, status: false };

        setAllEntry({ ...allEntry, newEntry });
        localStorage.setItem("signin", JSON.stringify(newEntry))

        //console.log(newEntry)
        HandleSignIn()


    }

    return <>
        <NavBar />
        <div className={Styles.login}>Register Here ..
            <i className="far fa-times-circle"></i></div>
        <br />
        <div className={Styles.login_form}>
            <div className={Styles.left}>
                <form action="" onSubmit={submitForm}>
                    <div className={Styles.leftdiv}>
                        <input type="text" name="email" id="email" autocomplete="off" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label>Full Name..</label>
                    </div>
                    <div className={Styles.leftdiv} >
                        <input type="password" name="password" id="password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <label htmlFor="password">Password</label>
                    </div>
                    <br />
                    <input type="submit" value="Register" />
                </form>
                <div className={Styles.otp}>

                    <a href="/login">Already have account Log In </a>
                </div>
                <div className={Styles.tp}>By continuing you agree to our <span>Terms of Service</span> and <span>Privacy Policy</span></div>
                <div className={Styles.last}>Want to start a fundraiser?<a href="fundraiser">Click Here</a></div>
            </div>
            <div className={Styles.center}>
                <div className={Styles.vr}></div>
                <div>OR</div>
                <div className={Styles.vr}></div>
            </div>
            <div className={Styles.right}>

                <button><img src="https://ketto.gumlet.io/assets/images/login/google.png?w=240&dpr=1.0" alt="" />Sign in with Google</button>
                <div className={Styles.g}>
                    <i className="fab fa-facebook-square fa-2x"></i>
                    <button >Continue with Facebook</button>
                </div>

            </div>
        </div>
        <Footer />
    </>
}