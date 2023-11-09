const WrapperForm = ({ classname, title, children}) => {
    return (
        <div className={ classname }>
            <h4 className='me-2'>{ title }</h4>
            <div className="d-flex">
                { children }
            </div>
        </div>
    );
}

export default WrapperForm;