import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { unsetUser } from "../reducers/user/userSlice";
import { useNavigate } from "react-router-dom";
export const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(state => state.user);
    
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
        {/* <ProducList products={products} /> */}
        </>
    )
}