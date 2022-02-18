import React, {useContext} from "react";
import { AuthContext } from "../components/context/context";
import {useNavigate } from "react-router-dom";

const Login = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext)
    const navigate = useNavigate()

    const login = (event) => {
        event.preventDefault()
        setIsAuth(true)
        navigate("/posts")
        localStorage.setItem("auth", "true")
    }

    return (
        <div className="container">
                <form onSubmit={(event) => {login(event)}}>
                    
                <div className="form-group " >
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
        </div>
    )
}


export default Login