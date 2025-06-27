import { createBrowserRouter } from "react-router";
import Errorpage from "../pages/Errorpage";
import layout from "../shared/layout";
import Home from "../pages/homepage/Home";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Errorpage></Errorpage>,
        Component: layout,
        children: [
            {
                index: true,
                path: '/',
                Component: Home
            }
        ]
    },
]);