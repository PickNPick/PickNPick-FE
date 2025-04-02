import ChatListPage from "../pages/ChatListPage"
import Loginpage from "../pages/Loginpage"
import Mainpage from "../pages/Mainpage"



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
    }

]

export default routes