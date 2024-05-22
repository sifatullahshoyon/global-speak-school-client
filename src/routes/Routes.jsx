import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import AccountCreate from "../layout/AccountCreate";
import Registration from "../pages/Registration/Registration";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../layout/Dashboard";
import SelectedClasses from "../pages/Dashboard/Students/SelectedClasses";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./PrivateRoute/AdminRoute";
import Contact from "../pages/Contact/Contact";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import UserHome from "../pages/Dashboard/Students/UserHome";
import Payment from "../pages/Dashboard/Students/Payment/Payment";
import InstructorsDashboard from "../layout/InstructorsDashboard";
import InstructorHome from "../pages/Dashboard/Instructors/InstructorHome/InstructorHome";
import AddAClass from "../pages/Dashboard/Instructors/AddAClass/AddAClass";
import MyClasss from "../pages/Dashboard/Instructors/MyClasss/MyClasss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "instructors",
        element: <Instructors />,
      },
      {
        path: "classes",
        element: <Classes />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "selectedClasses",
        element: <SelectedClasses />,
      },
      {
        path: "userHome",
        element: <UserHome />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      // admin route
      {
        path: "allUsers",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome />
          </AdminRoute>
        ),
      },
    ],
  },
  // Instructor Route:-
  {
    path: "instructors-dashboard",
    element: (
      <PrivateRoute>
        <InstructorsDashboard />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "instructor-home",
        element: <InstructorHome />,
      },
      {
        path: "add-a-classes",
        element: <AddAClass />,
      },
      {
        path: "my-classes",
        element: <MyClasss />,
      },
      // admin route
      {
        path: "allUsers",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome />
          </AdminRoute>
        ),
      },
    ],
  },
  {
    path: "/",
    element: <AccountCreate />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
    ],
  },
]);

export default router;
