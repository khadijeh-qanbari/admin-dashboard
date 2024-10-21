import {Await, useLoaderData, useNavigate} from "react-router-dom";
import {BsPlus} from "react-icons/bs";
import {Suspense, useState} from "react";
import CategoryList from "../features/categories/components/catrgoryList.jsx";
import Modal from "../components/modal.jsx";
import {httpInterceptedService} from "@core/http-service.js";
import {toast} from "react-toastify";
import {useTranslation} from "react-i18next";

const CourseCategories = () => {
    const data = useLoaderData();
    const {t} = useTranslation();

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState();
    const navigate = useNavigate();
    const deleteCategory = categoryId => {
        setSelectedCategory(categoryId);
        setShowDeleteModal(true);
    }
    const handleDeleteCategory = async () => {
        setShowDeleteModal(false);
        const response = httpInterceptedService.delete(`/CourseCategory/${selectedCategory}`);
        toast.promise(
            response, {
                pending: t('toastNotification.deletePending'),
                success: {
                    render() {
                        const url = new URL(window.location.href);
                        navigate(url.pathname + url.search);
                        return t('toastNotification.success')
                    }
                },
                error: {
                    render({data}) {
                        return t('categoryList.' + data.response.data.code)
                    }
                }
            }, {
                position: "bottom-left"
            }
        )
    }
    return (
        <>
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
                            (loadedCategories) => <CategoryList deleteCategory={deleteCategory}
                                                                categories={loadedCategories}/>
                        }
                    </Await>
                </Suspense>
            </div>
            <Modal isOpen={showDeleteModal} open={setShowDeleteModal} title="حذف"
                   body="آیا از حذف این دسته اطمینان دارید؟">
                <button className="btn btn-secondary fw-bolder" onClick={() => setShowDeleteModal(false)}>انصراف
                </button>

                <button className="btn btn-primary fw-bolder" onClick={handleDeleteCategory}>حذف</button>
            </Modal>

        </>


    )
};
export default CourseCategories;