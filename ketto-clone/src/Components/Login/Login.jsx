import Styles from "./Login.module.css"
import { useState } from "react"
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
import axios from 'axios'
export function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(false)



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
        if (e.length !== 0) { handlePatch(e[0].id); return true }
        else { return false }
    }

    const handlePatch = (id) => {
        const newEntry = { email: email, password: password, status: true };

        axios.patch("http://localhost:3002/login/" + id, { ...newEntry }

        )
        axios.get("http://localhost:3002/login/" + id).then(({ data }) => {
            setUser(data.status)
            localStorage.setItem("user", JSON.stringify(data))
        })
        let st = JSON.parse(localStorage.getItem("user"));
        var u;
        if (st) {
            u = st.status;

        }
        else {
            u = false
        }
        setUser(u);
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
            /// console.log(data);
            HandleLogin(data)
        })


    }

    return <>
        <NavBar user={user} />
        <div className={Styles.login}>Log In
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
                    <input type="submit" value="Log In" />
                </form>
                <div className={Styles.otp}>
                    <a href="signin">Don't have account Register</a>
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