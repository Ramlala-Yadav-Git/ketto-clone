import Styles from "./Login.module.css"
export function Login(){
    return <>
        <div className={Styles.login}>Login
        <i class="far fa-times-circle"></i></div>
        <br />
        <div className={Styles.login_form}>
            <div className={Styles.left}>
                <form action="">
                    <input type="text" name="email"  id="email" autocomplete="off"/>
                    <label>Email Address</label>
                    <input type="password" name="password" id="password" autoComplete="off" />
                    <label htmlFor="password">Password</label>
                    <br />
                    <input type="submit" value="Sign in" />
                </form>
            </div>
            <div className={Styles.center}></div>
            <div className={Styles.right}></div>
        </div>
        

    </>
}