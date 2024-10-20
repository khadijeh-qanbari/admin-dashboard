import {Await, useLoaderData} from "react-router-dom";
import {Suspense} from "react";
import './course-detail.css'
import {useAppContext} from "../../../../contexts/app/app-context.jsx";
import {colors} from "@core/colors.js";

const CourseDetails = () => {
    const courseDetail = useLoaderData();
    const {theme} = useAppContext();
    console.log(courseDetail);


    return (
        <Suspense fallback={<p className="text-info">در حال دریافت اطلاعات...</p>}>
            <Await resolve={courseDetail.courseDetail}>
                {
                    (data) => {
                        const dataTag = [
                            {"title": "زمان آموزش", "sub": `${data.duration} ساعت `},
                            {"title": "سطح دوره", "sub": data.courseLevel},
                            {"title": "تعداد فصل ها", "sub": `${data.numOfChapters} فصل `},
                            {"title": "تعداد مباحث", "sub": `${data.numOfLectures} مبحث `},
                            {"title": "تعداد نظرات", "sub": `${data.numOfReviews} نظر`},
                            {"title": "میانگین نظرات", "sub": `${data.averageReviewRating} از 5 `},
                        ];
                        return (

                            <div className="mx-md-4 mx-2 my-2">
                                <div
                                    className={`card border-0 shadow-sm  my-3 d-flex align-items-center  px-2 py-2`}
                                    style={{backgroundColor: theme === "light" ? colors.background : colors.background_dark}}>
                                    <img src={data.coverImageUrl} alt="courseDetail"
                                         className="col-3 rounded-2"/>
                                    <div
                                        className="card-body mt-2 mx-2 d-flex flex-column align-items-center">
                                        <div className="badge bg-primary my-2 fw-bolder">
                                            {data.courseLevel}
                                        </div>
                                        <h5 className="card-title mb-3 text-primary">
                                            {data.title}
                                        </h5>
                                        <p className="card-text text-center">
                                            {data.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="row row-gap-2">
                                    {dataTag.map((item, index) => (
                                        <div className="col-lg-3 col-xl-2 d-flex" key={index}>
                                            <div
                                                className={`card border-0 shadow-sm flex-fill text-center`}
                                                style={{backgroundColor: theme === "light" ? colors.background : colors.background_dark}}>
                                                <div className="card-body">
                                                    <p className="card-title">{item.title}</p>
                                                    <p className="card-text text-info">{item.sub}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>


                            </div>

                        )
                    }
                }
            </Await>
        </Suspense>

    )
};
export default CourseDetails;