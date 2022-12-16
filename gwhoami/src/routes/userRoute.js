import { Redirect, Route } from "react-router-dom";
import MyLocalStorage from "../util/mylocalStorage";

const UserRoute = ({
    comp:Component, 
    isAuthenticated, 
    ...rest
}) => (
    <Route
        {...rest}
        render={props => !isAuthenticated  ? (<Redirect to="/home/login" /> ) : MyLocalStorage.isAdmin() ? (<Redirect to="/admin" /> ): (<Component {...props} />)}
    />
);

export default UserRoute;