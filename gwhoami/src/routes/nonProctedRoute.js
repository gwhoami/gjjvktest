import { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import DotSpinner from "../DotSpinner";
import OpenRoutes from "./openRoutes";


const NonProtectedRoutes  = () => (
    <Switch>
        <Suspense fallback={<DotSpinner/>}>
            {OpenRoutes.map(({component: Component, path, exact})=>(
                <Route
                    path={`/home${path}`}
                    key={path}
                    exact={exact}
                >
                    <Component/>
                </Route>
            ))}
        </Suspense>
    </Switch>
);

export default NonProtectedRoutes;
