import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <main className="container d-flex justify-content-center align-items-center vh-100">
            <div className="col-sm-10 col-md-8 col-lg-6 text-center">
                <h1 className="display-1 fw-bold text-info">404</h1>
                <p className="h2">صفحه مورد نظر یافت نشد</p>
                <p className="h4 fw-normal mt-3 mb-4">
                    صفحه‌ای که در جستجوی آن هستید وجود ندارد.
                </p>
                <Link to="/" className="btn btn-primary btn-lg">
                    بازگشت به صفحه اصلی
                </Link>
            </div>
        </main>

    )
}
export default NotFound;