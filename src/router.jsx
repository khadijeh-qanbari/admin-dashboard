import {createBrowserRouter,} from "react-router-dom";
import Login from "./features/identity/components/login/login.jsx";
import Register from "./features/identity/components/register/register.jsx";
import IdentityLayout from "./layouts/identity-layout.jsx";
import {registerAction} from "./features/identity/components/register/register-action.js";

const router = createBrowserRouter([
    {
        element: <IdentityLayout/>,
        children: [
            {
                path: "login",
                element: <Login/>,

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