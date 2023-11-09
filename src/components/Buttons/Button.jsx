const Button = ({ children, classname, icon = "" }) => {
    return (
        <button className={ classname }><i className={ icon }></i> { children }</button>
    );
}

export default Button;