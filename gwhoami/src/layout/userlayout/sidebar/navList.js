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
            { name: 'General', path: "/user/medical/general" },
            { name: 'Immunization', path: "/user/medical/immune" },
            { name: 'Allergies', path: "/user/medical/allergi" },
            { name: 'Health-Info', path: "/user/medical/healthinfo" },
            { name: 'Surgery', path: "/user/medical/surgery" },
            { name: 'Medication', path: "/user/medical/medication" }
        ]
    }, {
        menu: 'Insurance',
        icon: <i className="bx bxs-check-shield"></i>,
        sub: [
            { name: 'Insurance' },
            { name: 'Health', path: "/user/insurance/healthinsurance" },
            { name: 'Result', path: "/user/insurance/result" },
            { name: 'Monthlypay', path: "/user/insurance/monthlypay" },
            { name: 'Propertypay', path: "/user/insurance/propertypay" },
            { name: 'Vehiclespay', path: "/user/insurance/vehiclespay" }
        ]
    }, {
        menu: 'Properties',
        icon: <i className="bx bx-landscape"></i>,
        sub: [
            { name: 'Properties' },
            { name: 'General', path: "/user/properties/general" },
            { name: 'Property-House', path: "/user/properties/house" },
            { name: 'HouseHold-Items', path: "/user/properties/houseitems" },
            { name: 'Property-Vehicle', path: "/user/properties/vehicles" }
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