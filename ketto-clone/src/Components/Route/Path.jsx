import { Route, Switch } from "react-router-dom"

import { Browse } from "../Browse/Brows";
import { Home } from "./Home";
export function Path() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Browse" component={Browse} />
            </Switch>
        </div>
    );
}


