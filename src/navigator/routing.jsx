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
]

export default routes