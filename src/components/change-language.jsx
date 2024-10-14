import usFlag from '@assets/images/us.png';
import faFlag from '@assets/images/fa.png';
import {useAppContext} from "../contexts/app/app-context.jsx";

const ChangeLanguage = () => {
    const {language, changeLanguage} = useAppContext();
    return (
        <div className="dropdown ms-3 me-3 mt-2">
            <a className="" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={language === "fa" ? faFlag : usFlag} className="img-fluid rounded-circle"
                     style={{width: "2rem", height: "2rem"}}
                     alt="Change language"/>
            </a>
            <ul className={`dropdown-menu ${language === "fa" ? "dropdown-menu-end" : "dropdown-menu-start"}`}>
                <li><a className="dropdown-item fw-bolder d-flex align-items-center gap-2"
                       style={{textAlign: language === "fa" ? "right" : "left"}}
                       onClick={() => changeLanguage("en")}>
                    <img src={usFlag} className="ms-2 rounded-circle" width="20" height="20"/>
                    <span className="align-middle">English</span>

                </a></li>
                <li><a className="dropdown-item fw-bolder d-flex align-items-center gap-2"
                       style={{textAlign: language === "fa" ? "right" : "left"}}
                       onClick={() => changeLanguage("fa")}>
                    <img src={faFlag} className="ms-2 rounded-circle" width="20" height="20"/>
                    <span className="align-middle">فارسی</span>
                </a></li>
            </ul>
        </div>


    )
}
export default ChangeLanguage;

