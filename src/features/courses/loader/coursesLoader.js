import {httpInterceptedService} from "@core/http-service.js";
import {defer} from "react-router-dom";

export async function coursesLoader() {
    return defer({
        courses: loadCourses(),
    })
}

const loadCourses = async () => {
    const response = await httpInterceptedService.get('/Course/list');
    // console.log(response.data);
    return response.data;
}