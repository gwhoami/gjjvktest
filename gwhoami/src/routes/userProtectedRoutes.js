import { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import DotSpinner from "../DotSpinner";
import userPagePath from "./userPagePath";

const UserProctedRoutes  = () => (
    <Switch>
        <Suspense fallback={<DotSpinner/>}>
            {userPagePath.map(({component: Component, path, exact})=>(
                <Route
                    path={`/user${path}`}
                    key={path}
                    exact={exact}
                >
                    <Component/>
                </Route>
            ))}
        </Suspense>
    </Switch>
);

export default UserProctedRoutes;
