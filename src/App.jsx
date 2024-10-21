import {RouterProvider} from "react-router-dom";
import router from './router.jsx';
import './core/i18n.js';
import {useAppContext} from "./contexts/app/app-context.jsx";
import {useEffect} from "react";
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {


    const {theme} = useAppContext();
    useEffect(() => {
        if (theme === 'auto') {
            document.documentElement.setAttribute('data-bs-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
        } else {
            document.documentElement.setAttribute('data-bs-theme', theme)
        }
    }, [theme]);
    ///دسترسی به index

    // useEffect(() => {

    // const head = document.head;
    // const link = document.createElement('link');
    // link.rel = 'stylesheet';
    // link.href = `/css/${theme}.css`;
    // head.appendChild(link);

    // return () => {
    // head.removeChild(link);
    // };
    // })
    return (
        <>
            <RouterProvider router={router}/>

            <ToastContainer rtl/>
        </>
    )
}

export default App
