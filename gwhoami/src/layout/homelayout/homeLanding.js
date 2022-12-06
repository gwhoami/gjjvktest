import React, { useRef } from "react";
import Scrollbars from "react-custom-scrollbars";
import NonProtectedRoutes from "../../routes/nonProctedRoute";
import { HomeContext } from "../../util/maincontext";
import HomeHeaders from "./homeHeaders";

const HomeLanding = React.memo(() => {
    const menuRef = useRef();
    return (
        <HomeContext.Provider value={{menuRef}}>
            <div className="bg-gray-200 h-full">
                <HomeHeaders ref={menuRef}/>
                <Scrollbars autoHide className="px-4 overflow-auto" style={{height: "calc(100% - 54px)"}}>
                    <NonProtectedRoutes/>
                </Scrollbars>
            </div>
        </HomeContext.Provider>
    );
});

export default HomeLanding;