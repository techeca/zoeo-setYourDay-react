
import Panel from "./components/Panel"
import Login from "./components/Login"
import App from "./App"

const router = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: 'panel',
                element: <Panel />
            },
            {
                path: 'login',
                element: <Login />
            }
        ]
    }
]

export default router