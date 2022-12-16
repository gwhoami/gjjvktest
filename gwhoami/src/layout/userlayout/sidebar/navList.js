import React from "react";

const NavList = {
    user: [{
        menu: 'Home',
        icon: <i className="bx bx-grid-alt"></i>,
        sub: [
            { name: 'Home', path: "/user" },
        ]
    }, {
        menu: 'Profile',
        icon: <i className="bx bxs-graduation"></i>,
        sub: [
            { name: 'Profile' },
            { name: 'General', path: "/user/profile/general" },
            { name: 'Job', path: "/user/profile/job" },
            { name: 'Business', path: "/user/profile/business" }
        ]
    }, {
        menu: 'Education',
        icon: <i className="bx bxs-book-reader"></i>,// bx bxs-institution
        sub: [
            { name: 'Education' },
            { name: 'School', path: "/user/education/school" },
            { name: 'College', path: "/user/education/college" },
            { name: 'Others', path: "/user/education/other" }
        ]
    }, {
        menu: 'Medical',
        icon: <i className="bx bx-plus-medical"></i>,
        sub: [
            { name: 'Medical' },
            { icon: <i className="bx bx-health"></i>, name: 'General', path: "/user/medical/general" },
            { icon: <i className=" bx bxs-injection"></i>, name: 'Immunization', path: "/user/medical/immune" },
            { icon: <i className="bx bxs-virus"></i>, name: 'Allergies', path: "/user/medical/allergi" },
            { icon: <i className="bx bxs-first-aid"></i>, name: 'Health-Info', path: "/user/medical/healthinfo" },
            { icon: <i className="bx bxs-hotel"></i>, name: 'Surgery', path: "/user/medical/surgery" },
            { icon: <i className="bx bx-capsule"></i>, name: 'Medication', path: "/user/medical/medication" }
        ]
    }, {
        menu: 'Insurance',
        icon: <i className="bx bxs-check-shield"></i>,
        sub: [
            { name: 'Insurance' },
            { icon: <i className="bx bx-body"></i>, name: 'Health', path: "/user/insurance/healthinsurance" },
            { icon: <i className="bx bx-calendar"></i>, name: 'Monthlypay', path: "/user/insurance/monthlypay" },
            { icon: <i className="bx bx-building-house"></i>, name: 'Propertypay', path: "/user/insurance/propertypay" },
            { icon: <i className=" bx bx-car"></i>, name: 'Vehiclespay', path: "/user/insurance/vehiclespay" },
            { icon: <i className="bx bx-run"></i>, name: 'Result', path: "/user/insurance/result" }
        ]
    }, {
        menu: 'Properties',
        icon: <i className="bx bx-landscape"></i>,
        sub: [
            { name: 'Properties' },
            { icon: <i className="bx bx-briefcase-alt"></i>, name: 'General', path: "/user/properties/general" },
            { icon: <i className="bx bx-home"></i>, name: 'Property-House', path: "/user/properties/house" },
            { icon: <i className="bx bx-store-alt"></i>, name: 'HouseHold-Items', path: "/user/properties/houseitems" },
            { icon: <i className="bx bx-car"></i>, name: 'Property-Vehicle', path: "/user/properties/vehicles" }
        ]
    }, {
        menu: 'Settings',
        icon: <i className="bx bx-cog"></i>,
        sub: [
            { name: 'Settings' },
        ]
    }]
}
export default NavList;