import { lazy } from "react";

const OpenRoutes = [
    {
        path: '',
        component: lazy(()=> import('../pages/home/homePage')),
        exact: true
    },
    {
        path: '/about',
        component: lazy(()=> import('../pages/home/aboutus')),
        exact: true
    },
    {
        path: '/login',
        component: lazy(()=> import('../pages/home/login')),
        exact: true
    },
    {
        path: '/register',
        component: lazy(()=> import('../pages/home/register')),
        exact: true
    }
];

export default OpenRoutes;