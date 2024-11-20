import { useAuth } from "../../contexts/AuthContext"
import { useAlert } from "../../contexts/AlertContext";
import { useState } from "react";

export default function Login() {
    const { login } = useAuth();
    const { showAlert } = useAlert()
    const [formValues, setFormValues] = useState({
        correo: "",
        contrasena: ""
    })

    async function handleLogin(e) {
        e.preventDefault();

        if (formValues.correo.length < 6 || formValues.contrasena.length < 6) {
            if (formValues.contrasena.length < 6) {
                showAlert(`La Contraseña debe tener una longitud de 6 letras y números.`, 'warning', 'Error en la Contraseña')
                throw new Error('El Correo o la Contraseña no cumplen los requisitos.')
            }
            showAlert(`Requisitos incompletos en Correo o Contraseña`, 'warning', 'Requisitos incompletos')
            throw new Error('El Correo o la Contraseña no cumplen los requisitos.')
        }

        try {
            const response = await login(formValues.correo, formValues.contrasena);
            if (response.user) {
                showAlert(response.message, 'success', 'Bienvenido/a');
                // navigate('/panel');
            } else {
                showAlert(response.message, 'error', 'Error');
            }
            //showAlert(response.message, 'success', 'Bienvenido');
            //navigate('/panel');
        } catch (error) {
            //console.log(error);
            showAlert(`Error al iniciar la cuenta`, 'error', 'Error');
        }
    }

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [id]: value,
        }));
    };

    return (
        <div className="mx-auto flex w-full max-w-xl flex-col mt-24">
            <div className="bg-gray-3 p-6 rounded-lg">
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl font-semibold">Ingreso</h1>
                    {/*<p className="text-sm">Escribe tus datos para acceder a tu cuenta</p>*/}
                </div>
                <form onSubmit={(e) => handleLogin(e)} className="form-group mt-6">

                    <div className="form-field">
                        <label className="form-label">Correo</label>

                        <input id='correo' type="email" className="bg-gray-2 w-full rounded-xl p-2 hover:bg-gray-1 focus:bg-gray-1 outline-none pl-3 placeholder:text-gray-10" placeholder="correo@email.com" value={formValues.correo || ""} onChange={handleInputChange} />
                    </div>

                    <div className="form-field">
                        <label className="form-label">Contraseña</label>
                        <div className="form-control">
                            <input placeholder="******" type="password" id='contrasena' value={formValues.contrasena || ""} onChange={handleInputChange} className="bg-gray-2 w-full rounded-xl p-2 hover:bg-gray-1 focus:bg-gray-1 outline-none pl-3 placeholder:text-gray-10" />
                        </div>
                    </div>

                    <div className="form-field pt-5 pb-3">
                        <div className="form-control justify-between">
                            <button type="submit" className="btn btn-primary w-full">Enviar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}