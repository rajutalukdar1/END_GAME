import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import LeftSide from "../Pages/LeftSide/LeftSide";
import Login from "../Pages/Login/Login";
import Media from "../Pages/Media/Media";
import About from "../Pages/Others/About/About";
import Message from "../Pages/Others/Message/Message";
import SignUp from "../Pages/Signup/SignUp";


const router = createBrowserRouter([
    {
        path: '/',
        element: <LeftSide />, 
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
                path: '/message',
                element: <Message/>
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/media',
                element: <Media/>
            },
         
        ]
    },

])

export default router;