import ChatListPage from "../pages/ChatListPage"
import Loginpage from "../pages/Loginpage"




const routes = [
    {
        path:"/",
        element:<Loginpage/>
    },
    {
        path: "/chat",
        element: <ChatListPage />
    }
]

export default routes