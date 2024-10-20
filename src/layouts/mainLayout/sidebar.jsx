import './main-layout.css';
import {useAppContext} from "../../contexts/app/app-context.jsx";
import logo from '@assets/images/logo.svg';
import {Link} from "react-router-dom";
import {useState} from "react";
import {BsCameraVideo, BsCardText, BsPeople, BsPercent, BsPerson, BsTag} from "react-icons/bs";
import {colors} from "@core/colors.js";

const Sidebar = () => {
    const {showSidebar} = useAppContext();
    const [active, setActive] = useState(0)
    return (
        <div className={`sidebar ${showSidebar ? 'open' : ''}`}>
            <div className="">
                <div className="d-flex flex-column align-items-center">
                    <img className="img-fluid" width={100} height={100} src={logo} alt="logo"/>
                    <h5>پلتفرم آموزش آنلاین</h5>
                </div>
                <div className="mt-5 pe-3 ps-3">
                    <p>مدیریت دوره ها</p>
                </div>
                <div className="list-group">
                    <Link to={'/'} onClick={() => setActive(0)}
                          className="list-group-item list-group-item-action border-0 rounded-0 fw-bolder px-4"
                          style={{
                              backgroundColor: active === 0 ? colors.secondary : 'transparent',
                              color: active === 0 ? colors.textPrimary : colors.secondary
                          }}
                          aria-current="true">
                        <BsCameraVideo size={20}/> همه دوره ها
                    </Link>
                    <Link to={'/course-categories'} onClick={() => setActive(1)}
                          className="list-group-item list-group-item-action border-0 fw-bolder px-4"
                          style={{
                              backgroundColor: active === 1 ? colors.secondary : 'transparent',
                              color: active === 1 ? colors.textPrimary : colors.secondary
                          }}>
                        <BsCameraVideo size={20}/> دسته بندی دوره ها</Link>
                    <Link to="#" onClick={() => setActive(2)}
                          className="list-group-item list-group-item-action border-0 fw-bolder px-4"
                          style={{
                              backgroundColor: active === 2 ? colors.secondary : 'transparent',
                              color: active === 2 ? colors.textPrimary : colors.secondary
                          }}><BsPercent
                        size={20}/> تخفیف دوره ها</Link>
                </div>
                <div className="mt-5 px-3">
                    <p>مدیریت کاربرها </p>
                </div>
                <div className="list-group">
                    <Link to="#" onClick={() => setActive(3)}
                          className="list-group-item list-group-item-action border-0 rounded-0 fw-bolder px-4"
                          style={{
                              backgroundColor: active === 3 ? colors.secondary : 'transparent',
                              color: active === 3 ? colors.textPrimary : colors.secondary
                          }}
                          aria-current="true">
                        <BsPerson size={20}/> مدیریت مدرس ها
                    </Link>
                    <Link to="#" onClick={() => setActive(4)}
                          className="list-group-item list-group-item-action border-0 fw-bolder px-4"
                          style={{
                              backgroundColor: active === 4 ? colors.secondary : 'transparent',
                              color: active === 4 ? colors.textPrimary : colors.secondary
                          }}>
                        <BsPeople size={20}/> مدیریت دانشجوها </Link>
                </div>
                <div className="mt-5  pe-3 ps-3">
                    <p>مدیریت بلاگ </p>
                </div>
                <div className="list-group">
                    <Link to="#" onClick={() => setActive(5)}
                          className="list-group-item list-group-item-action border-0 rounded-0 fw-bolder px-4"
                          style={{
                              backgroundColor: active === 5 ? colors.secondary : 'transparent',
                              color: active === 5 ? colors.textPrimary : colors.secondary
                          }}
                          aria-current="true">
                        <BsTag size={20}/> مدیریت تگ ها
                    </Link>
                    <Link to="#" onClick={() => setActive(6)}
                          className="list-group-item list-group-item-action border-0 fw-bolder px-4"
                          style={{
                              backgroundColor: active === 6 ? colors.secondary : 'transparent',
                              color: active === 6 ? colors.textPrimary : colors.secondary
                          }}>
                        <BsCardText size={20}/> مدیریت پست ها </Link>
                </div>
            </div>

        </div>
    );
};

export default Sidebar;
