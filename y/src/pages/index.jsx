import { useRef } from "react";
import Axios from  "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../reducers/user/userSlice";
import {BrowserRouter} from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const Index = () => {
    const emailField = useRef(null);
    const passwordField = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        Axios.get("https://localhost:7233/api/Usuario/GetAllUsuarios")
            .then(response => {
                const users = response.data;
                const userToLog = users.find(user => user.email == emailField.current.value);

                console.log(users);
                console.log("el usuario que se registro",userToLog)

                if(userToLog){
                    if(userToLog.contraseña == passwordField.current.value){
                        console.log("Credenciales Validas");
                        dispatch(setUser({
                            email: userToLog.email,
                            fullName: `${userToLog.nombre} ${userToLog.contraseña}`,
                            token: Date.now(),
                        }))
                        navigate("/home");
                    }
                }
            })
    }

    return (
        <div className="row justity-content-center">
            <div className="col-6">
                <h2 className="mb-4">LOGIN FORM</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" ref={emailField} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" ref={passwordField} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}