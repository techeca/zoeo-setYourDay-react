import { handleUpdateDocument } from "../../utils/requests";

export default function DatosIdentificacion({ profesional, newPro }) {

    const { value, setValue, setData } = newPro

    function updateNewProfesional(e) {
        e.preventDefault()
        setValue(prevData => ({
            ...prevData,
            [e.target.id]: e.target.value
        }))
    }

    //Las funciones addOtro y removeOtro son para agregar o quitar los profesionales que trabajan en el documento.
    // Agrega un profesional a la lista
    const addOtro = () => {
        setData(prevData => ({
            ...prevData,
            profesional: {
                ...prevData.profesional,
                otros: [...prevData.profesional.otros, value]
            }
        }));
        setValue({
            nombreCompleto: '',
            profesion: '',
            fonoEmail: '',
            registroProfesional: ''
        })
    };

    // Elimina al profesional seleccionado
    const removeOtro = (index) => {
        setData(prevData => ({
            ...prevData,
            profesional: {
                ...prevData.profesional,
                otros: prevData.profesional.otros.filter((_, i) => i !== index)
            }
        }));
    };


    function updateDocument(e, key) {
        e.preventDefault()
        let texto = {}
        //Actualiza el texto creando una key por cada input y le asigna el value del mismo
        //esto es para reutilizar esta funcion con los diferentes formularios
        for (let index = 0; index < e.target.length; index++) {
          texto[e.target[index].id] = e.target[index].value
        }
        handleUpdateDocument(key, documentSelected, texto)
      }

    return (
        <div className="accordion">
            <input type="checkbox" id="accordion-1" className="accordion-toggle" />
            <label htmlFor="accordion-1" className="text-xl font-bold cursor-pointer">1 - Datos de Identificación</label>
            <div className="accordion-content">
                <div className="min-h-0">

                    <label htmlFor="accordion-1" className="text-lg font-bold">Estudiante</label>
                    <form onSubmit={(e) => updateDocument(e, 'datosIdentificacion')} className="space-y-4 mt-2 mb-6 px-1">
                        <div className="w-full">
                            <label className="sr-only" htmlFor="nombreCompleto">Nombre Completo</label>
                            <input className="input input-solid max-w-full uppercase" placeholder="Nombre Completo" maxLength={28} type="text" id="nombreCompleto" />
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label className="sr-only" htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
                                <input className="input input-solid" placeholder="FECHA DE NACIMIENTO (dd/mm/aaaa)" maxLength={10} type="text" id="fechaNacimiento" />
                            </div>

                            <div>
                                <label className="sr-only" htmlFor="edad">Edad</label>
                                <input className="input input-solid uppercase" placeholder="Edad" maxLength={8} type="text" id="edad" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label className="sr-only" htmlFor="RUN">RUN</label>
                                <input className="input input-solid" placeholder="RUN" type="text" maxLength={9} id="RUN" />
                            </div>

                            <div>
                                <label className="sr-only" htmlFor="curso">Curso</label>
                                <input className="input input-solid uppercase" placeholder="CURSO" maxLength={11} type="text" id="curso" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div id="group1" className="flex flex-col gap-3 items-center">
                                <label className="self-start" htmlFor="RUN">Opción Educativa:</label>
                                <div className='flex gap-3 w-full'>
                                    <label className="flex cursor-pointer gap-2">
                                        <input type="radio" className="radio" name="group1" />
                                        <span>Escuela Especial</span>
                                    </label>
                                    <label className="flex cursor-pointer gap-2">
                                        <input type="radio" className="radio" name="group1" />
                                        <span>PIE</span>
                                    </label>
                                </div>
                                <div className='flex items-center gap-3 w-full'>
                                    <label className="flex cursor-pointer items-center gap-2">
                                        <input type="radio" className="radio" name="group1" />
                                        <span>Otra</span>
                                    </label>
                                    <input className="input input-solid uppercase" placeholder="" maxLength={11} type="text" id="curso" />
                                </div>

                            </div>

                            <div id="group2" className="flex flex-col gap-3 items-center">
                                <label className="self-start" htmlFor="RUN">Vía Comunicación:</label>
                                <div className='flex gap-3 w-full'>
                                    <label className="flex cursor-pointer gap-2">
                                        <input type="radio" className="radio" name="group2" />
                                        <span>Oral</span>
                                    </label>
                                    <label className="flex cursor-pointer gap-2">
                                        <input type="radio" className="radio" name="group2" />
                                        <span>Lengua señas</span>
                                    </label>
                                </div>
                                <div className='flex items-center gap-3 w-full'>
                                    <label className="flex cursor-pointer items-center gap-2">
                                        <input type="radio" className="radio" name="group2" />
                                        <span>Otra</span>
                                    </label>
                                    <input className="input input-solid uppercase" placeholder="" maxLength={11} type="text" id="curso" />
                                </div>

                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label className="sr-only" htmlFor="establecimiento">Establecimiento</label>
                                <input className="input input-solid uppercase" placeholder="ESTABLECIMIENTO" maxLength={26} type="text" id="establecimiento" />
                            </div>

                            <div>
                                <label className="sr-only" htmlFor="RBD">RBD</label>
                                <input className="input input-solid capitalize" placeholder="RBD" type="text" id="RBD" maxLength={9} />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label className="sr-only" htmlFor="nombreDirector">Nombre de Director</label>
                                <input className="input input-solid uppercase" placeholder="Nombre de Director/a" type="text" maxLength={23} id="nombreDirector" />
                            </div>
                        </div>

                        <div className="mt-4">
                            <button className="btn btn-solid-error" type='submit' disabled={false}>Guardar</button>
                        </div>
                    </form>

                    <label htmlFor="accordion-1" className="text-lg font-bold">Profesional Responsable</label>
                    <form onSubmit={(e) => updateDocument(e, 'profesional')} className="space-y-4 mt-2">
                        <div className="w-full">
                            <label className="sr-only" htmlFor="nombreProfesional">Nombre Completo</label>
                            <input className="input input-solid max-w-full uppercase" placeholder="Nombre Completo" maxLength={61} type="text" id="nombreProfesional" />
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label className="sr-only" htmlFor="RUT">RUT</label>
                                <input className="input input-solid" placeholder="RUT" maxLength={9} type="text" id="RUT" />
                            </div>

                            <div>
                                <label className="sr-only" htmlFor="profesion">Profesión o Especialidad</label>
                                <input className="input input-solid capitalize" placeholder="Profesión o Especialidad" maxLength={40} type="text" id="profesion" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label className="sr-only" htmlFor="cargo">CARGO</label>
                                <input className="input input-solid capitalize" placeholder="CARGO" type="text" maxLength={30} id="cargo" />
                            </div>

                            <div>
                                <label className="sr-only" htmlFor="fono">Fono de Contacto</label>
                                <input className="input input-solid" placeholder="Fono Contacto" maxLength={11} type="text" id="fono" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label className="sr-only" htmlFor="emailProfesional">Email de Contacto</label>
                                <input className="input input-solid" placeholder="Email de Contacto" maxLength={60} type="text" id="emailProfesional" />
                            </div>

                            <div>
                                <label className="sr-only" htmlFor="fecha">Fecha</label>
                                <input className="input input-solid" placeholder="FECHA" type="text" id="fecha" maxLength={10} />
                            </div>
                        </div>


                        {profesional && profesional.otros.length > 0 ?

                            profesional.otros.map((item, index) =>
                                <div key={index} className='flex items-center gap-3'>
                                    <p>{item.nombreCompleto}</p>
                                    <p>{item.profesion}</p>
                                    <p>{item.fonoEmail}</p>
                                    <p>{item.registroProfesional}</p>
                                    <button type='button' onClick={() => removeOtro(index)} className="w-12 btn btn-solid-error">X</button>
                                </div>
                            )
                            :
                            <p>No hay otros profesionales ingresados.</p>
                        }

                        <div className="mt-4 flex gap-3">
                            <button className="btn btn-solid-error" type='submit' disabled={false}>Guardar</button>
                            <label className="btn btn-solid-secondary" htmlFor="modal-1">Agregar otro Profesional</label>
                            <input className="modal-state" id="modal-1" type="checkbox" />
                            <div className="modal">
                                <label className="modal-overlay" htmlFor="modal-1"></label>
                                <div className="modal-content flex flex-col gap-5">
                                    <label htmlFor="modal-1" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                                    <h2 className="text-xl">Datos de Profesional</h2>
                                    <div className="py-8">
                                        <div className="space-y-4">
                                            <div className="w-full">
                                                <label className="sr-only" htmlFor="nombreCompleto">Nombre Completo</label>
                                                <input className="input input-solid max-w-full" value={value.nombreCompleto} onChange={updateNewProfesional} placeholder="Nombre Completo" type="text" maxLength={30} id="nombreCompleto" />
                                            </div>

                                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                                <div>
                                                    <label className="sr-only" htmlFor="profesion">Profesión</label>
                                                    <input className="input input-solid" value={value.profesion} onChange={updateNewProfesional} placeholder="Profesión" type="text" maxLength={20} id="profesion" />
                                                </div>

                                                <div>
                                                    <label className="sr-only" htmlFor="fonoEmail">Fono / Email</label>
                                                    <input className="input input-solid" value={value.fonoEmail} onChange={updateNewProfesional} placeholder="Fono / Email" type="text" maxLength={25} id="fonoEmail" />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                                <div>
                                                    <label className="sr-only" htmlFor="registroProfesional">Registro Profesional</label>
                                                    <input className="input input-solid" value={value.registroProfesional} onChange={updateNewProfesional} placeholder="Registro Profesional" type="text" maxLength={10} id="registroProfesional" />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <button type='button' onClick={addOtro} className="btn btn-error btn-block">Guardar</button>
                                        <label className="btn btn-block" htmlFor="modal-1">Cerrar</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}