import Button from '../../components/Buttons/Button';
import InputColorForm from '../../components/Forms/InputColorForm';
import QuantityForm from '../../components/Forms/QuantityForm';
import WrapperForm from '../../components/Forms/WrapperForm';
import { PRODUCT_DETAILS_COLORS, PRODUCT_DETAILS_SIZES } from './product.data';

import './productDetail.css'


const ProductDetail = () => {
    
    return(
        <div className="container">
            <div className="product-detail row">
                {/* product-detail-media start */}
                <div className=" product-detail__media p-2 col-md-5">
                    <div className="product-detail__media--image">
                        <img src={ `/media/images/products/3.jpg` } alt="" />
                    </div>
                </div>
                {/* product-detail-media end */}

                {/* product-detail__content start */}
                <div className="product-detail__content p-2 col-md-7">

                    {/* product-detail__content--title start */}
                    <div className="product-detail__content--title">
                        <h2>White traditional long shirt</h2>
                        <div className="d-flex align-items-center">
                            <span className='me-2'>20/10/2022</span>
                            <span>SKU: CAM-001</span>
                            

                            <div className="in-stock d-flex align-items-center">
                                <span>En stock</span>
                            </div>
                            <i className="fa-solid fa-star ">4.2</i>
                        </div>
                        <p className='mt-2'>Vendedor: <a href="#">Administrador</a></p>
                    </div>
                    {/* product-detail__content--title end */}

                    {/* product-detail__content--price start */}
                    <div className="product-detail__content--price">
                        <h3 className='price'>$180,99</h3>
                        <h5 className='oldprice'>$219,99</h5>
                    </div>
                    {/* product-detail__content--price end */}
                    
                    {/* form start */}
                    <form action="" className='product-detail__content--options'>
                        
                       
                        <WrapperForm classname="product-detail__colors" title="Color:">
                            {PRODUCT_DETAILS_COLORS.map((color) => {
                                return <InputColorForm key={ color.id } theme={ color.theme } name={ color.name } id={ color.id } title={ color.title }/>
                            })}
                        </WrapperForm>

                        <div className="product-detail__sizes mt-3">
                            <WrapperForm classname="product-detail__sizes--numerics" title="Talle:">
                                {PRODUCT_DETAILS_SIZES[0].map((color) => {
                                    return <InputColorForm key={ color.id } theme={ color.theme } name={ color.name } id={ color.id } title={ color.title }/>
                                })}
                            </WrapperForm>
                            
                            <WrapperForm classname="product-detail__sizes--alphabetical" title="">
                                {PRODUCT_DETAILS_SIZES[1].map((color) => {
                                    return <InputColorForm key={ color.id } theme={ color.theme } name={ color.name } id={ color.id } title={ color.title }/>
                                })}
                            </WrapperForm>
                        </div>

                        <div className="product-detail__more">
                            <p>Cantidad maxima: 13</p>
                            <div className='d-flex'>
                                <QuantityForm />
                                <Button classname="product-detail__more--buy" icon='fas fa-dollar'>Comprar</Button>
                            </div>
                            <div className="product-detail__more--actions">
                                <Button classname="btn" icon='fas fa-heart'>Agregar a Favoritos</Button>
                                <Button classname="btn" icon='fas fa-share'>Compartir</Button>
                                <Button classname="btn" icon='fas fa-shopping-cart'>Agregar al carrito</Button>
                            </div>
                        </div>

                    </form>
                    {/* form end */}

                    {/* product-detail__content--description start */}
                    <WrapperForm classname="product-detail__content--description" title="Descripcion">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi iste id enim voluptatum explicabo quia fuga, quae placeat incidunt repellat alias soluta eaque ducimus, itaque ab labore omnis illum doloremque!
                            <br /> 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi iste id enim voluptatum explicabo quia fuga, quaeplaceat incidunt repellat alias soluta eaque ducimus,itaque ab labore omnis illum doloremque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi iste id enim voluptatum explicabo quia fuga, quaeplaceat incidunt repellat alias soluta eaque ducimus,itaque ab labore omnis illum doloremque!
                        </p>
                    </WrapperForm>
                    {/* product-detail__content--description end */}
                    
                </div>
                {/* product-detail__content end */}
            </div>

        </div>
    );
}

export default ProductDetail
