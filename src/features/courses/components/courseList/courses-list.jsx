import './courses-list.css';
import {BsChat, BsClock} from "react-icons/bs";
import {Link} from "react-router-dom";

const CoursesList = ({courses}) => {
    return (
        <div className="d-flex flex-wrap justify-content-start mx-2 my-4 gap-3">
            {
                courses.map((course) => (
                    <div className="col-12 col-md-5 col-lg-4 col-xl-3" key={course.id}>
                        <div className="card">
                            <img src={course.coverImageUrl} alt="logo" className="card-img-top"/>
                            <div className="card-body mt-2 mx-2">
                                <div className="badge bg-primary my-2 fw-bolder">
                                    {course.courseLevel}
                                </div>
                                <h5 className="card-title mb-3 text-primary">
                                    <Link to={`/courses/${course.id}`}
                                          className="">{course.title}</Link>
                                </h5>
                                <p className="card-text line-clamp-3">
                                    {course.description}
                                </p>
                                <div className="mt-4 d-flex justify-content-between align-items-center">
                                    <div className="text-center">
                                        <BsClock size={20}/> {course.duration} ساعت
                                    </div>
                                    <div className="text-center">
                                        <BsChat size={20}/> {course.numOfReviews} نظر
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

    );
};
export default CoursesList;