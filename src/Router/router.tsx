import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../views/MainLayout";
import GuetsLayout from "../views/GuestLayout";
import Dasboard from "../pages/Dashboard";
import Customer from '../pages/Customer';
import Feedback from "../pages/Feedback";
import Category from "../pages/Category";
import Order from "../pages/Order";
import Product from "../pages/Product";
import SaleReport from "../pages/SaleReport";
import Ticket from "../pages/Ticket";
import NotFound from "../components/layout/NotFound";
import Login from "../components/layout/Login";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/dashboard',
                element: <Dasboard />
            },
            {
                path: '/',
                element: <Navigate to='/dashboard' />
            },
            {
                path: '/customer',
                element: <Customer />
            },
            {
                path: '/feedback',
                element: <Feedback />
            },
            {
                path: '/category',
                element: <Category />
            },
            {
                path: '/order',
                element: <Order />
            },
            {
                path: '/product',
                element: <Product />
            },
            {
                path: '/sale-report',
                element: <SaleReport />
            },
            {
                path: '/ticket',
                element: <Ticket />
            },
        ]
    },
    {
        path: '*',
        element: <NotFound/>
    },
    {
        path: '/',
        element: <GuetsLayout />,
        children: [
            {
                path: '/login',
                element: <Login/>
            }
        ]
    },
])