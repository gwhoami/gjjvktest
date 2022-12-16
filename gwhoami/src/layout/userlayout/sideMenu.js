import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useParams } from "react-router-dom";

const SideMenu = React.memo(() => {
    const {pageId} = useParams();
    
    return (
        <aside id="sidenav-open" className="h-screen">
            <nav className="flex flex-col justify-between h-full p-5 border-r bg-gray-50">
                <div>
                    <Link to={`/admin/users`} className={`flex items-center p-3 mb-2 rounded-xl hover:bg-gray-200${pageId === 'home' ? ' bg-gray-200 text-dodge-b': ''}`}>
                        <FontAwesomeIcon icon={faHome} className="text-3xl mr-2"/>
                        <span className="text-gray-900">Home</span>
                    </Link>
                </div>
                <div className="px-32">&nbsp;</div>
            </nav>
            <a href="#/abc" id="sidenav-close" title="Close Menu" aria-label="Close Menu"><span></span></a>
        </aside>
    );
});

export default SideMenu;