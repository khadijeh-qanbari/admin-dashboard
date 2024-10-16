import logo from '@assets/images/logo.svg';
import {Link, useNavigation, useRouteError, useSubmit} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useForm} from "react-hook-form";

const Login = () => {
    const {t} = useTranslation();
    const {register, formState: {errors}, handleSubmit, watch} = useForm();
    const submitForm = useSubmit();
    const onSubmit = data => {
        submitForm(data, {method: 'post'});
    }
    const navigation = useNavigation();
    const isSubmitting = navigation.state !== 'idle';
    const routeErrors = useRouteError();
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
                        <form className="m-sm-4" onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label htmlFor="inputMobile"
                                       className="form-label">موبایل</label>
                                <input {...register('mobile', {
                                    required: "موبایل الزامی است",
                                    minLength: 11, maxLength: 11
                                })} className={`form-control form-control-lg ${errors.mobile && "is-invalid"}`}
                                       id="inputMobile"
                                       placeholder="09*********"/>
                                {errors.mobile && errors.mobile?.type === "required" && (
                                    <div
                                        className="text-end text-danger small fw-bolder mt-1">{errors.mobile?.message}</div>
                                )}
                                {errors.mobile && (errors.mobile?.type === "minLength" || errors.mobile.type === "maxLength") && (
                                    <div
                                        className="text-end text-danger small fw-bolder mt-1">موبایل باید 11 رقم
                                        باشد</div>
                                )}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputPassword" className="form-label">رمز عبور</label>
                                <input {...register("password", {required: "رمز عبور الزامی است",})} type="password"
                                       className={`form-control form-control-lg ${errors.password && "is-invalid"}`}
                                       id="inputPassword"></input>
                                {errors.password && errors.password?.type === "required" && (
                                    <div
                                        className="text-end text-danger small fw-bolder mt-1">{errors.password?.message}</div>
                                )}
                            </div>
                            <div className="d-flex justify-content-center mt-3">
                                <button type="submit" disabled={isSubmitting}
                                        className="btn btn-primary btn-sm">
                                    {isSubmitting ? t('login.signingin') : t('login.signin')}
                                </button>
                            </div>
                            {routeErrors && <div className="alert alert-danger text-danger p-2 mt-3">
                                {
                                    routeErrors.response?.data.map((error, index) => <p key={index}
                                                                                        className="mb-0">{error.description}</p>)
                                }
                            </div>}
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Login;