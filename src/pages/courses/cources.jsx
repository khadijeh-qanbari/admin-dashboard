import {BsPlus} from "react-icons/bs";
import CoursesList from "../../features/courses/components/courseList/courses-list.jsx";
import {Await, useLoaderData} from "react-router-dom";
import {Suspense} from "react";

const Courses = () => {
    const data = useLoaderData();

    return (
        <div>
            <div className="d-flex justify-content-between container-fluid mt-5 align-items-center">
                <div>
                    همه دوره ها
                </div>
                <button className="btn btn-sm btn-primary ms-0 fw-bolder">افزودن دوره جدید<BsPlus/></button>
            </div>
            <Suspense fallback={<p className="text-info">در حال دریافت اطلاعات...</p>}>
                <Await resolve={data.courses}>
                    {
                        (loadedCourses) => <CoursesList courses={loadedCourses}/>
                    }
                </Await>
            </Suspense>
        </div>

    )
}


export default Courses;