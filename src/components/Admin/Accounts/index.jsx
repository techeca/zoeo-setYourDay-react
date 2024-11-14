import { useAlert } from "../../../contexts/AlertContext"
import { getAllProfesional, handleCreateUser } from "../../../utils/requests"
import { useEffect, useState } from "react";

export default function Accounts() {
    const { showAlert } = useAlert();
    const [formValues, setFormValues] = useState({
        nombre: "",
        correo: "",
        contrasena: ""
    })
    const [profs, setProfs] = useState(false)

    async function handleRegisterNewUser(e) {
        e.preventDefault();

        try {
            const response = await handleCreateUser(formValues.correo, formValues.contrasena, formValues.nombre);

            if (response.message === 'Usuario registrado exitosamente') {
                showAlert(response.message, 'success', 'Registrado');
            } else {
                showAlert(response.message, 'error', 'Error');
            }

        } catch (error) {
            //console.error(error);
            showAlert('Error inesperado al registrar usuario', 'error', 'Error');
        }
    }

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [id]: value,
        }));
    };

    async function getPros() {
        const { pros } = await getAllProfesional()
        setProfs(pros);
    }

    useEffect(() => {
        getPros();
    }, [])

    return (
        <div className="flex justify-center p-6 flex-col gap-6 w-full items-center">
            <section className="p-6 bg-gray-2 rounded-xl w-[480px]">
                <label className="text-2xl font-semibold">Nuevo Usuario</label>
                <div className="mt-3 shadow-lg">
                    <form className="space-y-4" onSubmit={(e) => handleRegisterNewUser(e)}>
                        <div className="w-full">
                            <label className="sr-only" htmlFor="name">Nombre</label>
                            <input className="input input-solid max-w-full" placeholder="Nombre completo" type="text" id="nombre" value={formValues.nombre || ""} onChange={handleInputChange} />
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label className="sr-only" htmlFor="email">Correo</label>
                                <input className="input input-solid" placeholder="Correo" type="email" id="correo" value={formValues.correo || ""} onChange={handleInputChange} />
                            </div>

                            <div>
                                <label className="sr-only" htmlFor="password">Contraseña</label>
                                <input className="input input-solid" placeholder="Contraseña" type="password" id="contrasena" value={formValues.contrasena || ""} onChange={handleInputChange} />
                            </div>
                        </div>

                        <div className="mt-4">
                            <button type="submit" className="rounded-lg btn btn-primary btn-block">Registrar</button>
                        </div>
                    </form>
                </div>
            </section>
            <div className="w-full flex justify-center flex-wrap">
                {profs && profs.map((pro) => (
                    <div key={pro._id} className="card m-3 p-4 cursor-pointer hover:bg-gray-4 hover:opacity-100 opacity-80">
                        <div className="flex justify-between">
                            <div className={`bg-gray-2 w-20 h-20 rounded-md`}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-20 opacity-10" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7.39 16.539a8 8 0 1 1 9.221 0l2.083 4.76a.5.5 0 0 1-.459.701H5.765a.5.5 0 0 1-.459-.7zm6.735-.693l1.332-.941a6 6 0 1 0-6.913 0l1.331.941L8.058 20h7.884zM8.119 10.97l1.94-.485a2 2 0 0 0 3.882 0l1.94.485a4.002 4.002 0 0 1-7.762 0"></path></svg>
                            </div>
                            <div>
                                    <div className="text-xs bg-gray-2 p-1 rounded-full px-2">
                                        {pro._id}
                                    </div>
                                    <div className="flex justify-end">
                                        <span className="tooltip tooltip-bottom" data-tooltip="Cambiar contraseña">
                                            <button className="text-right font-semibold text-sm mt-1 mr-1 bg-gray-2 opacity-80 rounded-full p-1 hover:opacity-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-6" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor"><path strokeLinecap="round" d="M8 10V7a4 4 0 1 1 8 0v3"></path><path strokeLinejoin="round" d="M5 10h14v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"></path><path strokeLinejoin="round" strokeWidth={1.5} d="M14.5 15.5h.01v.01h-.01z"></path></g></svg>
                                            </button>
                                        </span>
                                        <span className="tooltip tooltip-bottom" data-tooltip="Eliminar cuenta">
                                            <p className="text-right font-semibold text-sm mt-1 mr-1 bg-gray-2 rounded-full p-1 opacity-80 hover:opacity-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-red-500" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14 11v6m-4-6v6M6 7v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7M4 7h16M7 7l2-4h6l2 4"></path></svg>
                                            </p>
                                        </span>
                                    </div>
                                </div>
                        </div>
                        <div className="bg-gray-2 p-3 rounded-md mt-2 flex flex-col gap-2">
                            <p className=""><span className="font-semibold"></span><span className="w-full badge text-gray-100/70">Nombre: {pro.username}</span></p>
                            <p className=""><span className="font-semibold"></span><span className="w-full badge text-gray-100/70">Correo: {pro.email}</span></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}