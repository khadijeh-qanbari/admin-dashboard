import {createBrowserRouter,} from "react-router-dom";
import Login from "./features/identity/components/login/login.jsx";
import Register from "./features/identity/components/register/register.jsx";
import IdentityLayout from "./layouts/identity-layout.jsx";
import {registerAction} from "./features/identity/components/register/register-action.js";
import {loginAction} from "./features/identity/components/login/login-action.js";
import MainLayout from "./layouts/mainLayout/main-layout.jsx";
import Courses from "./pages/courses/cources.jsx";
import {coursesLoader} from "./features/courses/loader/coursesLoader.js";
import CourseCategories from "./pages/course-categories.jsx";
import {courseDetailLoader} from "./features/courses/loader/course-detail-loader.js";
import CourseDetails from "./features/courses/components/courseDetail/course-detail.jsx";
import {categoriesLoader} from "./features/categories/loader/categories-loader.js";
import NotFound from "./components/not-found.jsx";
import UnhandledException from "./components/unhandled-exception.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <UnhandledException/>,
        children: [
            {
                element: <Courses/>,
                index: true,
                loader: coursesLoader
            },
            {
                path: 'course-categories',
                element: <CourseCategories/>,
                loader: categoriesLoader
            },
            {
                path: 'courses/:id',
                element: <CourseDetails/>,
                loader: courseDetailLoader
            }
        ]
    },
    {
        element: <IdentityLayout/>,
        errorElement: <UnhandledException/>,
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
    },
    {
        path: '*',
        element: <NotFound/>,
    }

]);
export default router;