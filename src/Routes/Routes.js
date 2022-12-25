import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import About from "../Pages/Others/About/About";
import Blog from "../Pages/Others/Blog/Blog";
import SignUp from "../Pages/Signup/SignUp";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog/>
            },
            {
                path: '/about',
                element: <About />
            },
         
        ]
    },

])

export default router;