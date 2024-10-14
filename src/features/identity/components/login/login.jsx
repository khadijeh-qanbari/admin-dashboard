import logo from '@assets/images/logo.svg';
import './login.css';
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <>
            <div className="text-center">
                <img src={logo} style={{width: "100px"}} alt="logo"/>
                <h1 className="h3">پلتفرم آموزش آنلاین</h1>
                <p className="lead">جهت ورود لازم است از طریق موبایل و رمز عبور
                    خود
                    اقدام
                    کنید</p>
                <p className="lead">
                    قبلا ثبت نام نکرده اید؟
                    <Link to="/register" className="btn-link me-2 text-decoration-none"> ثبت نام کنید</Link>
                </p>
                <div className="card border-light shadow-sm mt-3">
                    <div className="card-body">
                        <form className="m-sm-4">
                            <div className="mb-3">
                                <label htmlFor="inputMobile" className="form-label">موبایل</label>
                                <input type="password" className="form-control" id="inputMobile"
                                       placeholder="09*********"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputPassword" className="form-label">رمز عبور</label>
                                <input className="form-control" id="inputPassword"></input>
                            </div>
                            <div className="d-flex justify-content-center mt-3">
                                <button type="submit" className="btn btn-primary btn-sm">وارد شوید
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Login;