import ChatListPage from "../pages/ChatListPage"
import Loginpage from "../pages/Loginpage"
import Mainpage from "../pages/Mainpage"
import ProfilePage from "../pages/ProfilePage";
import Worldcuppage from "../pages/Worldcuppage"
import Randomfriendpage from "../pages/Randomfriendpage"



const routes = [
    {
        path:"/",
        element:<Loginpage/>
    },
    {
        path:"/mainpage",
        element:<Mainpage/>,
        children:[

        ]
    },
    {
        path: "/chat",
        element: <ChatListPage />
    },
    {
        path: "/profile",
        element: <ProfilePage />
    },
    {
        path:"/worldcup",
        element : <Worldcuppage/>
    },
    {
        path:"/randomfriend",
        element : <Randomfriendpage/>
    }
]

export default routes