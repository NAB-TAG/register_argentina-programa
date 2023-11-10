import useStorage from "../../hook/useStorage"

const QuantityForm = () => {

    // hook personalizado para guardar datos en el localstorage
    const [ quantity, setQuantity ] = useStorage('product-quantity-storage', 1)
    
    // funcion para incrementar la cantidad de productos
    const quantityIncrement = (e) => {
        e.preventDefault()
        setQuantity( quantity + 1 )
    }
    // funcion para decrementar la cantidad de productos, evita llegar a 0 o a un numero negativo
    const quantityDecrement = (e) => {
        e.preventDefault()
        if(quantity == 1){
            return setQuantity(1)
        }else if(quantity > 13){
            return setQuantity(13)
        }
        setQuantity( quantity - 1 )
    }

    return (
        <div className="product-detail__more--quantity">
            <button onClick={ (e) => quantityDecrement(e) }><i className="fa-solid fa-minus"></i></button>
                <input type="text" value={ quantity } onChange={() => {}}/>
            <button onClick={ (e) => quantityIncrement(e) }><i className="fa-solid fa-plus"></i></button>
        </div>
    );
}

export default QuantityForm