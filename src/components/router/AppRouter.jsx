import React from "react";
import About from "../../pages/About";
import Posts from "../../pages/Posts";
import { NotfoundPage } from "../../pages/NotfoundPage";
import { HomePage } from "../../pages/HomePage";
import {Route, Routes } from "react-router-dom";
import PostIdPage from "../../pages/PostIdPage";


export const AppRouter = () => {

    return (
            <Routes>
                <Route path="/home" element={ <HomePage />} />
                <Route path="/about" element={ <About />} />
                <Route path="/posts" element={ <Posts />} />
                <Route path="/posts/:id" element={ <PostIdPage />} />
                <Route path="/*" element={ <NotfoundPage />} />
            </Routes>
    )
}