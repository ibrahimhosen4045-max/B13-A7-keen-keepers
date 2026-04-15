import { createBrowserRouter } from "react-router";
import Root from "./layout/Root";
import Home from "./pages/Home/Home";
import TimeLine from "./pages/Timeline/TimeLine";
import Stats from "./pages/Stats/Stats";

export const router = createBrowserRouter ([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "/timeline",
                element: <TimeLine></TimeLine>
            },
            {
                path: "/stats",
                element: <Stats></Stats>
            }
        ]
    }
])