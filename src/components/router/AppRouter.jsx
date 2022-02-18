import React, { useContext } from "react";

import {Route, Routes } from "react-router-dom";
import { privateRouter, publicRouter } from "./router";
import { AuthContext } from "../context/context";
import Loader from "../Loader/Loader";


export const AppRouter = () => {
    const {isAuth, setIsAuth, isLoading} = useContext(AuthContext)

    if (isLoading) {
        return <Loader></Loader>
    }
 
    return (
                (isAuth)

                ? 
                <Routes>
                {privateRouter.map((route) => {
                    return <Route key={route.element} element={route.element} path={route.path}/>
                })  }
                </Routes>
                :  

                <Routes>
                {publicRouter.map((route) => {
                    return <Route key={route.element} element={route.element} path={route.path}/>  
                
                })}
                </Routes>
                
            
    )
}