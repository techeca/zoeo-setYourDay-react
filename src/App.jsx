import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    const user = localStorage.getItem('user')
    if(!user){
      navigate('/login')
    }else{
      navigate('/panel')
    }

  }, [])

  return (
    <div className='w-full h-screen items-center flex flex-col'>
      <div className="navbar">
        <div className="navbar-start">
          <a className="navbar-item">Zoeo</a>
        </div>
      </div>

      <div className='fixed -z-10 min-h-screen left-0 right-0 bottom-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#121212] to-[#1d1e20]'></div>

      <Outlet />  
    </div>
  )
}

export default App