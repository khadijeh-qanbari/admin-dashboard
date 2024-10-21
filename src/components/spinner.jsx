const Spinner = ({theme = 'info'}) => {
    return (
        <div className='row justify-content-center align-items-center'>
            <div className={`spinner-border text-${theme} me-2`}></div>
        </div>
    )
}
export default Spinner;