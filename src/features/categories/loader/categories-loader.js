import {defer} from "react-router-dom";
import {httpInterceptedService} from "@core/http-service.js";

export async function categoriesLoader() {
    return defer({
            categories: loadCategories()
        }
    );
}

const loadCategories = async () => {
    const response = await httpInterceptedService.get(`/course-categories`);
    return response.data;
}