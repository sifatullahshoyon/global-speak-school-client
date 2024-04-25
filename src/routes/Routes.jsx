import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import AccountCreate from "../layout/AccountCreate";
import Registration from "../pages/Registration/Registration";
import Instructors from "../pages/Instructors/Instructors";


const router = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout />,
        errorElement : <ErrorPage />,
        children : [
            {
                path : '/',
                element : <Home />
            },
            {
                path : 'instructors',
                element : <Instructors />
            },
        ]
    },
    {
        path : '/',
        element: <AccountCreate />,
        errorElement : <ErrorPage />,
        children : [
            {
                path : '/login',
                element : <Login />
            },
            {
                path : '/registration',
                element : <Registration />
            },
        ]
    }
]);

export default router;