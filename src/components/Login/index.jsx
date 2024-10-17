import { useNavigate } from "react-router-dom"

export default function Login() {
    const navigate = useNavigate()

    function handleLogin(e){
        e.preventDefault()
        const email = e.target.email
        const contrasena = e.target.contrasena
        if(email.value === 'email@email.com' && contrasena.value.length >= 6){
            console.log('noice');
            navigate('/panel')
        }
    }

    return (
        <div className="mx-auto flex w-full max-w-xl flex-col gap-6 mt-24">
            <div className="flex flex-col items-center">
                <h1 className="text-3xl font-semibold">Ingreso</h1>
                <p className="text-sm">Escribe tus datos para acceder a tu cuenta</p>
            </div>
            <form onSubmit={handleLogin} className="form-group">
                <div className="form-field">
                    <label className="form-label">Correo</label>

                    <input placeholder="correo@email.com" type="email" id='email' className="input max-w-full" />
                    <label className="form-label">
                        <span className="form-label-alt">Ingresa un email válido.</span>
                    </label>
                </div>
                <div className="form-field">
                    <label className="form-label">Contraseña</label>
                    <div className="form-control">
                        <input placeholder="******" type="password" id='contrasena' className="input max-w-full" />
                    </div>
                </div>
                <div className="form-field pt-5">
                    <div className="form-control justify-between">
                        <button type="submit" className="btn btn-primary w-full">Enviar</button>
                    </div>
                </div>

            </form>
        </div>
    )
}