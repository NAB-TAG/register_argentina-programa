const InputColorForm = ( {name, id, title, theme} ) => {
    return(
        <>
            { theme == 'color' ? 
                <div className="product-detail__colors--color">
                    <input type="radio" name={ name } id={ id } className='color' value={ id }/>
                    <label htmlFor={ id } className={ `circle ${id}` } title={ title }></label>
                </div>
                :
                <div className="product-detail__sizes--numeric">
                    <input type="radio" name={ name } id={ id } className={ name }/>
                    <label htmlFor={ id } className="circle" title={ title }>{ title }</label>
                </div>
            }
        </>
        
    );
}

export default InputColorForm