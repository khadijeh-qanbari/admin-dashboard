import {createPortal} from "react-dom";

const Modal = ({isOpen, open, title, body, children}) => {
    return (
        <>
            {
                isOpen &&
                createPortal(<div className="modal d-block" onClick={() => open(false)}>
                    <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-content">
                            <div className="modal-header d-flex align-items-center justify-content-between">
                                <h5 className="modal-title fw-bolder">{title}</h5>
                                <button className="btn-close m-0" type="button" onClick={() => open(false)}></button>
                            </div>
                            <div className="modal-body m-3">
                                <p className="mb-0">{body}</p>
                            </div>
                            <div className="modal-footer">{children}</div>
                        </div>
                    </div>

                </div>, document.getElementById('modal'))
            }
        </>
    )
}
export default Modal;