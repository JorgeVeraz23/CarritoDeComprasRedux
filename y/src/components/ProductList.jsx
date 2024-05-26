export const ProductList = ({products}) => {
    

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
                    {/* <button 
                        className={`btn ${pdtsInCart.find(pdt => pdt.id == product.id) ? "btn-danger" :
                            "btn-success"
                        }`}
                        onClick={() => handleAddOrRemoveProduct(product.id)}
                    >
                        {pdtsInCart.find(pdt => pdt.id == product.id) ? "Remove" : "Add"} to Cart
                    </button> */}
                </div> 
                   )   
                })
            }
        </div>
        </>
    )
}