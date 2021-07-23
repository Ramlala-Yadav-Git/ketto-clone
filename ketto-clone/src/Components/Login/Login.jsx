import Styles from "./Login.module.css"
import { useState } from "react"
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
import axios from 'axios'
export function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handlePass = (data) => {
        const pass = data.filter((e) => {
            return e.password === password
        })
        if (pass.length !== 0) { return true }
        else { return false }
    }
    const handleEmail = (data) => {
        const e = data.filter((e) => {
            return e.email === email;
        })
        if (e.length !== 0) { return true }
        else { return false }
    }


    const HandleLogin = (data) => {
        if (handleEmail(data) && handlePass(data)) {
            document.location.href = "http://localhost:3000/"
        }
        else {
            alert("Wrong Credentials")
        }

    }
    const submitForm = (e) => {
        e.preventDefault();




        axios.get("http://localhost:3002/login").then(({ data }) => {
            console.log(data);
            HandleLogin(data)
        })


    }

    return <>
        <NavBar />
        <div className={Styles.login}>Log In
            <i class="far fa-times-circle"></i></div>
        <br />
        <div className={Styles.login_form}>
            <div className={Styles.left}>
                <form action="" onSubmit={submitForm}>
                    <div className={Styles.leftdiv}>
                        <input type="text" name="email" id="email" autocomplete="off" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label>Email Address</label>
                    </div>
                    <div className={Styles.leftdiv} >
                        <input type="password" name="password" id="password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <label htmlFor="password">Password</label>
                    </div>
                    <br />
                    <input type="submit" value="Log In" />
                </form>
                <div className={Styles.otp}>Don't have account Sign In </div>
                <div className={Styles.tp}>By continuing you agree to our <span>Terms of Service</span> and <span>Privacy Policy</span></div>
                <div className={Styles.last}>Want to start a fundraiser?<span>Click Here</span></div>
            </div>
            <div className={Styles.center}>
                <div className={Styles.vr}></div>
                <div>OR</div>
                <div className={Styles.vr}></div>
            </div>
            <div className={Styles.right}>

                <button><img src="https://ketto.gumlet.io/assets/images/login/google.png?w=240&dpr=1.0" alt="" />Sign in with Google</button>
                <div className={Styles.g}>
                    <i class="fab fa-facebook-square fa-2x"></i>
                    <button >Continue with Facebook</button>
                </div>

            </div>
        </div>
        <Footer />
    </>
}