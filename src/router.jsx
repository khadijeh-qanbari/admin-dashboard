import {createBrowserRouter,} from "react-router-dom";
import Login from "./features/identity/components/login/login.jsx";
import Register from "./features/identity/components/register/register.jsx";
import IdentityLayout from "./layouts/identity-layout.jsx";
import {registerAction} from "./features/identity/components/register/register-action.js";
import {loginAction} from "./features/identity/components/login/login-action.js";
import MainLayout from "./layouts/mainLayout/main-layout.jsx";
import Courses from "./pages/cources.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                element: <Courses/>,
                index: true
            }
        ]
    },
    {
        element: <IdentityLayout/>,
        children: [
            {
                path: "login",
                element: <Login/>,
                action: loginAction,
                errorElement: <Login/>
            },
            {
                path: "register",
                element: <Register/>,
                action: registerAction,
                errorElement: <Register/>

            },
        ]
    }

]);
export default router;