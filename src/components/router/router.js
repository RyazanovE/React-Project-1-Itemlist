import About from "../../pages/About"
import Posts from "../../pages/Posts"
import {HomePage} from '../../pages/HomePage'
import {NotfoundPage} from "../../pages/NotfoundPage"
import PostIdPage from "../../pages/PostIdPage"
import Login from "../../pages/Login"

export const privateRouter = [
    {path: '/posts', element: <Posts/>},
    {path: '/home', element: <HomePage/>},
    {path: '/about', element: <About/>},
    {path: '/posts/:id', element: <PostIdPage/>},
    {path: "/*", element: <NotfoundPage/>},
]
    
export const publicRouter = [
    {path: "/login", element: <Login/>,
    path: "*", element: <Login/>}
]
    
