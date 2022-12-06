import { Redirect, Route } from "react-router-dom";
import MyLocalStorage from "../util/mylocalStorage";

const PublicRoute = ({
    comp:Component, 
    isAuthenticated, 
    ...rest
}) => (
    <Route
        {...rest}
        render={props => isAuthenticated  ? (MyLocalStorage.isAdmin()  ? <Redirect to="/admin" /> : <Redirect to="/user" />) : (<Component {...props} />)}
    />
);
export default PublicRoute;