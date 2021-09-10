import Styles from "./Login.module.css"
import { useState } from "react"
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
export function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(false)





    var st = "";

    const submitForm = (e) => {
        e.preventDefault();


        let signInData = JSON.parse(localStorage.getItem("signin"))
        if (!signInData) {
            alert("Please Register Youself First")
            document.location.href = "https://ketto.herokuapp.com/signin"
            return
        }
        if (signInData.email === email && signInData.password === password) {
            let user = {
                email: email,
                password: password,
                status: true
            }
            localStorage.setItem("user", JSON.stringify(user));
            alert("You have succesfully logged in");
            st = JSON.parse(localStorage.getItem("user"))
            document.location.href = "https://ketto.herokuapp.com"
            return
        }

        else {
            alert("Wrong Credential")
        }

        st = JSON.parse(localStorage.getItem("user"))

        if (st !== "") {
            setUser(st.status)
        }


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