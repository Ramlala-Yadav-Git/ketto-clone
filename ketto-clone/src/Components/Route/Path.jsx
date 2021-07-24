import { Route, Switch } from "react-router-dom"

import { Browse } from "../Browse/Brows";
import { Home } from "./Home";
import { Login } from '../Login/Login'
import { SignIn } from "../Login/SignIn"
import { Box1data } from "../Trend/Box1data"
export function Path() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/browse" component={Browse} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signin" component={SignIn} />
                <Route exact path="/fundraiser" component={Box1data} />
            </Switch>
        </div>
    );
}


