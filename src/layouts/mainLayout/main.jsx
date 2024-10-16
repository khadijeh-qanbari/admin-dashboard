import {Outlet} from "react-router-dom";

const Main = () => {
    return (<main className="d-flex flex-column">
        <Outlet/>
    </main>);
};
export default Main;