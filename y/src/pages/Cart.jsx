import { useSelector, useDispatch } from "react-redux";
import { removeProductFromCart } from "../reducers/cart/cartSlice";

export const Cart = () => {
    const dispatch = useDispatch();
    const { productsList } = useSelector(state => state.cart);

    const handleRemoveProduct = (productId) => dispatch(removeProductFromCart(productId));

    return (
        <>
        <h2>Carrito</h2>
        <table className="table">
            <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Category</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
                {productsList.map(product => {
                    return (
                        <tr key={product.idProductos}>
                            <td scope="row">{product.idProductos}</td>
                            <td scope="row">{product.nombre}</td>
                            <td scope="row">{product.precio}</td>
                            <td scope="row">{product.categoria}</td>
                            <td scope="row"><button className="btn btn-danger" onClick={() => handleRemoveProduct(product.idProductos)}>Delete</button></td>
                        </tr>
                    )
                })
                }
            </tbody>
        </table>
        
        </>
    )
}


