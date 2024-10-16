import './main-layout.css';
import {useAppContext} from "../../contexts/app/app-context.jsx";
import ChangeTheme from "../../components/theme/change-theme.jsx";
import ChangeLanguage from "../../components/language/change-language.jsx";
import {FiMenu} from "react-icons/fi";

const Header = () => {
    const {changeSidebar} = useAppContext();
    return (
        <div className="d-flex justify-content-between">
            <div className="navbar shadow-sm d-flex justify-content-start align-items-center gap-3">
                <button className="btn" type="button" onClick={changeSidebar}>
                    <FiMenu size={30} className="icon"/>
                </button>
                <ChangeLanguage/>
                <ChangeTheme/>
            </div>
            <button type="button" className="btn btn-outline-danger mt-3 mb-3 ms-5 me-5">
                خارج شوید
            </button>
        </div>


    );
};
export default Header;
