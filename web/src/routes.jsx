
import Panel from "./components/Panel"
import Login from "./components/Login"
import Profile from "./components/Profile"
import Team from "./components/Team"
import App from "./App"
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary"
import Admin from "./components/Admin"
import Accounts from "./components/Admin/Accounts"

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
                element: <Login />,
                errorElement: <ErrorBoundary />
            },
            {
                path: 'profile',
                element: <Profile />
            },
            {
                path: 'team',
                element: <Team />
            },
            {
                path: 'Admin',
                element: <Admin />,
                children: [
                    {
                        path: 'accounts',
                        element: <Accounts />
                    }
                ]
            }
        ]
    }
]

export default router