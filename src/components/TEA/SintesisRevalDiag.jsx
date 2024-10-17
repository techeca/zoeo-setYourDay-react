export default function SintesisRevalDiag() {

    return (
        <div className="accordion">
            <input type="checkbox" id="accordion-2" className="accordion-toggle" />
            <label htmlFor="accordion-2" className="text-xl font-bold cursor-pointer">2 - Sintesis de la revaluación diagnóstica</label>
            <div className="accordion-content">
                <div className="min-h-0">

                    <label className="text-lg font-bold">Diagnóstico</label>
                    <form className="space-y-4 mt-2 mb-6 px-1">

                        <div className="w-full flex flex-col items-start">
                            <div>
                                <label className="flex items-end cursor-pointer gap-2">
                                    <input type="checkbox" className="checkbox" />
                                    <span>Trastorno del Espectro Autista</span>
                                </label>
                            </div>
                            <div>
                                <label className="flex items-end cursor-pointer gap-2">
                                    <input type="checkbox" className="checkbox" />
                                    <span>Trastorno generalizado del desarrollo no especificado</span>
                                </label>
                            </div>
                            <div>
                                <label className="flex items-end cursor-pointer gap-2">
                                    <input type="checkbox" className="checkbox" />
                                    <span>Trastorno de Asperger</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <div id="group1" className="flex flex-col gap-3 items-center w-full">
                                <label className="self-start">¿Existen cambios en el diagnóstico inicial?</label>
                                <div className='flex gap-3 w-full'>
                                    <label className="flex cursor-pointer gap-2">
                                        <input type="radio" className="radio" name="group1" />
                                        <span>SI</span>
                                    </label>
                                    <label className="flex cursor-pointer gap-2">
                                        <input type="radio" className="radio" name="group1" />
                                        <span>NO</span>
                                    </label>
                                </div>
                                <div className='w-full'>
                                    <input className="bg-gray-2 w-full rounded-xl p-2 hover:bg-gray-1 focus:bg-gray-1 outline-none placeholder:text-gray-9 max-w-full" placeholder="Indique modificaciones o un nuevo diagnostico:" maxLength={11} type="text" id="otro" />
                                </div>
                            </div>
                        </div>

                        <div className="w-full">
                            <label className="sr-only" htmlFor="fechaEmision">Fecha de emisión</label>
                            <input className="bg-gray-2 w-full rounded-xl p-2 hover:bg-gray-1 focus:bg-gray-1 outline-none placeholder:text-gray-9 max-w-full" placeholder="Fecha de emisión (dd/mm/aaaa)" maxLength={10} type="text" id="fechaEmision" />
                        </div>

                        <div className="w-full">
                            <label className="sr-only" htmlFor="observaciones">Observaciones</label>
                            <textarea id="observaciones" className="bg-gray-2 w-full rounded-xl p-2 hover:bg-gray-1 focus:bg-gray-1 outline-none placeholder:text-gray-9 textarea-solid max-w-full" maxLength={580} placeholder="Señale algún aspecto importante de enfatizar respecto de los cambios en el diagnóstico a los progresos, avances y apoyos entregados." rows="8" ></textarea>
                        </div>

                        <div className="mt-4">
                            <button className="btn btn-solid-error" disabled={false}>Guardar</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}