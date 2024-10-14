import logo from '@assets/images/logo.svg';
import '../login/login.css';
import {Link, useActionData, useNavigate, useNavigation, useRouteError, useSubmit} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {useTranslation} from "react-i18next";


const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm();

    const {t} = useTranslation();
    const submitForm = useSubmit();
    const onSubmit = (data) => {
        const {confirmPassword, ...userData} = data;
        submitForm(userData, {method: 'post'});

    }
    const navigation = useNavigation();
    const isSubmitting = navigation.state !== 'idle';
    const isSuccessOperation = useActionData();
    const navigate = useNavigate();
    useEffect(() => {
        if (isSuccessOperation) {
            setTimeout(() => {
                navigate('/login');
            }, 2000)
        }
    }, [isSuccessOperation]);

    const routeErrors = useRouteError();
    return (
        <>
            <div className="text-center">
                <img src={logo} style={{width: "100px"}} alt="logo"/>
                <h1 className="h3">{t('register.title')}</h1>
                <p className="text-black-50 pt-2 fw-bold">
                    {t('register.introMessage')}
                </p>
                <p className="text-black-50 fw-bold">
                    قبلا ثبت نام کرده اید؟
                    <Link to="/login" className="btn-link me-2 text-decoration-none"> وارد شوید</Link>
                </p>
                <div className="card border-light shadow-sm mt-3">
                    <div className="card-body">
                        <form className="m-sm-4" onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label htmlFor="inputMobile"
                                       className="form-label text-black-50 ">موبایل</label>
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
                                <label htmlFor="inputPassword" className="form-label text-black-50">رمز عبور</label>
                                <input {...register("password", {required: "رمز عبور الزامی است",})} type="password"
                                       className={`form-control form-control-lg ${errors.password && "is-invalid"}`}
                                       id="inputPassword"></input>
                                {errors.password && errors.password?.type === "required" && (
                                    <div
                                        className="text-end text-danger small fw-bolder mt-1">{errors.password?.message}</div>
                                )}
                            </div>
                            <div className="">
                                <label htmlFor="confirmPassword" className="form-label text-black-50">تکرار رمز
                                    عبور</label>
                                <input {...register("confirmPassword", {
                                    required: "تکرار رمز عبور الزامی است", validate: value => {
                                        if (watch('password') !== value) {
                                            return "عدم تطابق رمز عبور"
                                        }
                                    }
                                })} type="password"
                                       className={`form-control form-control-lg ${errors.confirmPassword && "is-invalid"}`}
                                       id="confirmPassword"></input>
                                {errors.confirmPassword && errors.confirmPassword?.type === "required" && (
                                    <div
                                        className="text-end text-danger small fw-bolder mt-1">{errors.confirmPassword?.message}</div>
                                )}
                                {errors.confirmPassword && errors.confirmPassword?.type === "validate" && (
                                    <div
                                        className="text-end text-danger small fw-bolder mt-1">{errors.confirmPassword?.message}</div>
                                )}
                            </div>
                            <div className="d-flex justify-content-center mt-3">
                                <button type="submit" disabled={isSubmitting}
                                        className="btn btn-primary btn-sm">
                                    {t('register.register')}
                                    {/*{isSubmitting ? "در حال انجام عملیات" : "ثبت نام کنید"}*/}
                                </button>
                            </div>
                            {isSuccessOperation && <div className="alert alert-success text-success p-2 mt-3">
                                ثبت نام با موفقیت انجام شد و به صفحه ورود منتقل می شوید
                            </div>}
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
export default Register;

