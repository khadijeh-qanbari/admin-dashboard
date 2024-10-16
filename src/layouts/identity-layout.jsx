import {Outlet} from "react-router-dom";
import ChangeLanguage from "../components/language/change-language.jsx";
import ChangeTheme from "../components/theme/change-theme.jsx";

const IdentityLayout = () => {
    return (
        <div className="d-flex w-100 min-vh-100 flex-column">
            <nav className="navbar shadow-sm justify-content-start gap-3">
                <ChangeTheme/>
                <ChangeLanguage/>
            </nav>
            <main className="d-flex flex-grow-1 align-items-center justify-content-center">
                <div className="container">
                    <div className="col-sm-10 col-md-8 col-lg-6 mx-auto">
                        <Outlet/>
                    </div>
                </div>
            </main>
        </div>


    )
};
export default IdentityLayout;