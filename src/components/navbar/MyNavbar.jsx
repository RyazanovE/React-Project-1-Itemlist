import {Link} from 'react-router-dom'
import { AuthContext } from '../context/context'
import { useContext } from 'react'

export const MyNavbar = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light"  style={{padding: "10px 30px"}}>
             {
                 isAuth
                 ? <button type="button" className="btn btn-danger" style={{marginRight: 20}} onClick={() => {logout()}}>Exit</button>
                 : <button type="button" className="btn btn-success" style={{marginRight: 20}}>Sing in</button>
             }
             
            
            
            <Link className="navbar-brand" to="/home">React App</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <Link className="nav-item nav-link" to="/posts">Posts </Link>
                <Link className="nav-item nav-link" to="/about">About</Link>
                </div>
               
            </div>
        </nav>

    )
}