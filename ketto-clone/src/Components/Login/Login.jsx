import Styles from "./Login.module.css"
import {useState} from "react"
export function Login(){

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const[allEntry,setAllEntry]=useState([]);

    const submitForm=(e)=>{
        e.preventDefault();

        const newEntry={email:email,password:password};

        setAllEntry([...allEntry,newEntry]);
        console.log(allEntry)


    }

    return <>
        <div className={Styles.login}>Login
        <i class="far fa-times-circle"></i></div>
        <br />
        <div className={Styles.login_form}>
            <div className={Styles.left}>
                <form action="" onSubmit={submitForm}>
                    <div className={Styles.leftdiv}>
                    <input type="text" name="email"  id="email" autocomplete="off" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <label>Email Address</label>
                    </div>
                    <div className={Styles.leftdiv} >
                    <input type="password" name="password" id="password" autoComplete="off" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <label htmlFor="password">Password</label>
                    </div>
                    <br />
                    <input type="submit" value="Sign in" />
                </form>
                <div className={Styles.otp}>Login via OTP</div>
                <div className={Styles.tp}>By continuing you agree to our <span>Terms of Service</span> and <span>Privacy Policy</span></div>
                <div className={Styles.last}>Want to start a fundraiser?<span>Click Here</span></div>
            </div>
            <div className={Styles.center}>
                <div className={Styles.vr}></div>
                <div>OR</div>
                <div className={Styles.vr}></div>
            </div>
            <div className={Styles.right}>
                <button><img src="https://ketto.gumlet.io/assets/images/login/google.png?w=240&dpr=1.0"/>Sign in with Google</button>
                <button><i class="fab fa-facebook-square fa-2x"></i>Continue with Facebook</button>
            </div>
        </div>
        

    </>
}