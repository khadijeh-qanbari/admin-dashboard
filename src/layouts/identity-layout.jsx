import {Outlet} from "react-router-dom";

const IdentityLayout = () => {
    return (
        <main className="min-vh-100 w-100 d-flex">
            <div className="container align-content-center">
                <div className="col-sm-10 col-md-8 col-lg-6 mx-auto">
                    <Outlet/>
                </div>
            </div>
        </main>

    )
};
export default IdentityLayout;