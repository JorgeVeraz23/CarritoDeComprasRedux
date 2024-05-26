import { addProductToCart } from "../reducers/cart/cartSlice"
import { useDispatch } from "react-redux";


export const ProductList = ({products}) => {
    const dispatch = useDispatch();
    

    const handleAddOrRemoveProduct = (productId) => {
        const product = products.find(product => product.id == productId);
        dispatch(addProductToCart(product))
        if(pdtsInCart.find(pdt => pdt.idProductos == productId)){
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
                    <h4>{product.nombre}</h4>
                    <p><b>Precio</b>{product.precio}</p>
                    <p><b>Categoria</b>{product.categoria}</p>
                    <button 
                        className={`btn btn-success`}
                        onClick={() => handleAddOrRemoveProduct(product.idProductos)}
                    >
                        Add to Cart
                    </button>
                </div> 
                   )   
                })
            }
        </div>
        </>
    )
}