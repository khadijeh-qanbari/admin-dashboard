import {defer} from "react-router-dom";
import {httpInterceptedService} from "@core/http-service.js";

export async function courseDetailLoader({params}) {
    return defer(
        {
            courseDetail: loadCourseDetail(params)
        }
    )
}

const loadCourseDetail = async (params) => {
    const response = await httpInterceptedService.get(`/Course/by-id/${params.id}`);
    console.log(response.data);
    return response.data;
}