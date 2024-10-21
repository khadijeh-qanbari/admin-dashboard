import {useAppContext} from "../../../contexts/app/app-context.jsx";
import Spinner from "../../../components/spinner.jsx";
import Pagination from "../../../components/pagination.jsx";
import {useNavigation} from "react-router-dom";
import {colors} from "@core/colors.js";
import './categories-list.css';
import {BsPencil, BsTrash} from "react-icons/bs";

const CategoryList = ({categories}) => {
    console.log(categories);
    const navigation = useNavigation();
    const {theme} = useAppContext();
    return (
        <div className="row my-5 mx-1">
            <div className="col-12">
                <div className="card border-0 py-1"
                     style={{backgroundColor: theme === "light" ? colors.background : colors.background_dark}}>
                    {navigation.state !== 'idle' && <Spinner/>}
                    <table className='table table-striped table-borderless'>
                        <thead>
                        <tr>

                            <th className={`${theme === "light" ? "table-light" : "table-dark"}`}>نام</th>
                            <th className={`${theme === "light" ? "table-light" : "table-dark"}`}>عملیات</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            categories.data.map((category) => {
                                return (
                                    <tr key={category.id}>
                                        <td className={`${theme === "light" ? "td-body" : "td-body-dark"}`}>{category.name}</td>
                                        <td className={`${theme === "light" ? "td-body" : "td-body-dark"} table-action`}>
                                            <a className='ms-3' onClick={() => {
                                            }}>
                                                <BsPencil fontSize={20} color={colors.secondary}/>
                                            </a>
                                            <a className='ms-3' onClick={() => {
                                            }}>
                                                <BsTrash fontSize={20} color={colors.secondary}/>
                                            </a>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                    <Pagination totalRecords={categories.totalRecords}/>
                </div>
            </div>
        </div>

    )
};
export default CategoryList;