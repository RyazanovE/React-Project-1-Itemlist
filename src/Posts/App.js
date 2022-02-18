import React, {useEffect, useState} from "react";
import {BrowserRouter} from 'react-router-dom'
import { AuthContext } from "../components/context/context";
import { MyNavbar } from "../components/navbar/MyNavbar";
import { AppRouter } from "../components/router/AppRouter";




function App() {
    const [isAuth, setIsAuth] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (localStorage.getItem("auth")) {
            setIsAuth(true)
        }   
        setIsLoading(false)
    }, [])

    return(
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
        }}>
            <BrowserRouter>
                <MyNavbar/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

  export default App    