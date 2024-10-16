import Header from "./header.jsx";
import Sidebar from "./sidebar.jsx";
import './main-layout.css'
import Footer from "./footer.jsx";
import Main from "./main.jsx";

const MainLayout = () => {
    return (
        <div className="wrapper d-flex">
            <Sidebar/>
            <div className="w-100 d-flex flex-column ">
                <Header/>
                <div className="d-flex flex-column flex-grow-1 overflow-auto ">
                    <Main/>
                </div>
                <Footer/>

            </div>

        </div>
    );
};

export default MainLayout;