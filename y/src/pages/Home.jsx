import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { unsetUser } from "../reducers/user/userSlice";
import { useNavigate } from "react-router-dom";
import { ProductList } from "../components/ProductList";
import axios from "axios";
import { useState, useEffect } from "react";
export const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    const user = useSelector(state => state.user);

    useEffect(() => {
        axios.get("https://localhost:7233/api/Producto/GetAllProductos")
        .then(response => {
            setProducts(response.data);
        })
    }, [])
    console.log(products);
    const handleLogout = () => {
        dispatch(unsetUser());
        navigate("/");
    }

    return (
        <>
        <h2>Home</h2>
        <p>Welcome {user.fullName} / {user.email}</p>
        <button className="btn btn-primary" onClick={handleLogout}>Cerrar Sesion</button>
        <hr />
        <ProductList products={products} />
        </>
    )
}