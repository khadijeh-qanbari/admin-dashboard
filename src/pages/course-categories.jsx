import {Await, useLoaderData} from "react-router-dom";
import {BsPlus} from "react-icons/bs";
import {Suspense} from "react";
import CategoryList from "../features/categories/components/catrgoryList.jsx";

const CourseCategories = () => {
    const data = useLoaderData();

    return (
        <div>
            <div className="d-flex justify-content-between container-fluid mt-5 align-items-center">
                <div>
                    دسته بندی دوره ها
                </div>
                <button className="btn btn-sm btn-primary ms-0 fw-bolder">افزودن دسته جدید<BsPlus/></button>
            </div>
            <Suspense fallback={<p className="text-info">در حال دریافت اطلاعات...</p>}>
                <Await resolve={data.categories}>
                    {
                        (loadedCategories) => <CategoryList categories={loadedCategories}/>
                    }
                </Await>
            </Suspense>
        </div>

    )
};
export default CourseCategories;