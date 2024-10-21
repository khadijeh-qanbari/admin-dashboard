import {defer} from "react-router-dom";
import {httpInterceptedService} from "@core/http-service.js";

export async function categoriesLoader({request}) {
    return defer({
            categories: loadCategories(request),
        }
    )
}

const loadCategories = async (request) => {
    const page = new URL(request.url).searchParams.get('page') || 1;
    const pageSize = import.meta.env.VITE_PAGE_SIZE;
    let url = '/CourseCategory/sieve';
    url += `?page=${page}&pageSize=${pageSize}`;
    const response = await httpInterceptedService.get(url);
    return response.data;
}