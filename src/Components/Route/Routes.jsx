import { Route, Switch } from "react-router-dom"
import { Box1data } from "../Trend/Box1data"
import { Browse } from "../Browse/Brows";
import { Home } from "./Home";
import { Login } from '../Login/Login'
import { SignIn } from "../Login/SignIn"
import { Crowdfunding } from "../Work/Crowdfunding"
export function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route >
                <Route exact path="/browse">
                    <Browse />
                </Route >
                <Route exact path="/login">
                    <Login />
                </Route >
                <Route exact path="/signin">
                    <SignIn />
                </Route >
                <Route exact path="/fundraiser">
                    <Box1data />
                </Route >
                <Route exact path="/howitworks">
                    <Crowdfunding />
                </Route >
            </Switch>
        </div>
    );
}


