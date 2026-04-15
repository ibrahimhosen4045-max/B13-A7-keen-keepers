import { createBrowserRouter } from "react-router";
import Root from "./layout/Root";
import Home from "./pages/Home/Home";
import TimeLine from "./pages/Timeline/TimeLine";
import Stats from "./pages/Stats/Stats";
import FriendDetails from "./pages/FriendDetails/FriendDetails";
import Notfound from "./Notfound";

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
                path:"/:id",
                element: <FriendDetails></FriendDetails>
            },
            {
                path: "/timeline",
                element: <TimeLine></TimeLine>
            },
            {
                path: "/stats",
                element: <Stats></Stats>
            }
        ],
        errorElement: <Notfound></Notfound>
    }
])