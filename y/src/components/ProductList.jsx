import { addProductToCart, removeProductFromCart } from "../reducers/cart/cartSlice"
import { useDispatch, useSelector } from "react-redux";


export const ProductList = ({products}) => {
    const dispatch = useDispatch();
    
    const {productsList} = useSelector(state => state.cart);

    const handleAddOrRemoveProduct = (productId) => {
        const product = products.find(product => product.idProductos == productId);
        if(productsList.find(pdt => pdt.idProductos == productId)){
            dispatch(removeProductFromCart(productId));
        }else{
            dispatch(addProductToCart(product));
        }
    }

    return (
        <>
        <h2>Listado De Productos</h2>
        <div className="row">
            {
                products.map(product => {
                   return (
                    <div key={product.idProductos} className="col-3 mt-3">
                    <h4>ID: {product.idProductos}</h4>  {/* Asegúrate de que el ID se muestra */}
                    <h4>{product.nombre}</h4>
                    <p><b>Precio</b>{product.precio}</p>
                    <p><b>Categoria</b>{product.categoria}</p>
                    <button 
                        className={`btn ${productsList.find(pdt => pdt.idProductos === product.idProductos) ? "btn-danger" : "btn-success"}`}
                        onClick={() => handleAddOrRemoveProduct(product.idProductos)}
                    >
                        {productsList.find(pdt => pdt.idProductos === product.idProductos) ? "Remove" : "Add"} to Cart
                    </button>
                </div> 
                   )   
                })
            }
        </div>
        </>
    )
}