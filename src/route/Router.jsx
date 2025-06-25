import { createBrowserRouter } from "react-router";
import Errorpage from "../pages/Errorpage";
import layout from "../shared/layout";
import HomePage from "../pages/HomePage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Errorpage></Errorpage>,
        Component: layout,
        children: [
            {
                index: true,
                path: '/',
                Component: HomePage
            }
        ]
    },
]);