export default function DocumentosProcReval() {

    return (
        <div className="accordion">
            <input type="checkbox" id="accordion-3" className="accordion-toggle" />
            <label htmlFor="accordion-3" className="text-xl font-bold cursor-pointer">3 - Documentos del Proceso de Revaluación</label>
            <div className="accordion-content">
                <div className="min-h-0">

                    <form className="space-y-4 mt-2 mb-6 px-1">

                        <div className="w-full flex flex-col items-start mb-3">
                            <div>
                                <label className="flex items-end cursor-pointer gap-2">
                                    <input type="checkbox" className="checkbox" />
                                    <span>Pauta de observación</span>
                                </label>
                            </div>
                            <div>
                                <label className="flex items-end cursor-pointer gap-2 mt-1">
                                    <input type="checkbox" className="checkbox" />
                                    <span className='text-sm'>Observación en el contexto escolar (aula, patio, otras dependencias del establecimiento)</span>
                                </label>
                            </div>
                            <div>
                                <label className="flex items-end cursor-pointer gap-2">
                                    <input type="checkbox" className="checkbox" />
                                    <span>Trastorno de Asperger</span>
                                </label>
                            </div>
                        </div>

                        <label className="text-lg font-bold">Certificados/Protocolos/Informes:</label>

                        <div className="w-full flex flex-wrap items-start mb-3 gap-1">
                            <div>
                                <label className="flex items-end cursor-pointer gap-2">
                                    <input type="checkbox" className="checkbox" />
                                    <span>Escolar</span>
                                </label>
                            </div>
                            <div>
                                <label className="flex items-end cursor-pointer gap-2">
                                    <input type="checkbox" className="checkbox" />
                                    <span>Social</span>
                                </label>
                            </div>
                            <div>
                                <label className="flex items-end cursor-pointer gap-2">
                                    <input type="checkbox" className="checkbox" />
                                    <span>Neurológico</span>
                                </label>
                            </div>
                            <div>
                                <label className="flex items-end cursor-pointer gap-2">
                                    <input type="checkbox" className="checkbox" />
                                    <span>Psicológico</span>
                                </label>
                            </div>
                            <div>
                                <label className="flex items-end cursor-pointer gap-2">
                                    <input type="checkbox" className="checkbox" />
                                    <span>Fonoaudiológico</span>
                                </label>
                            </div>
                            <div>
                                <label className="flex items-end cursor-pointer gap-2">
                                    <input type="checkbox" className="checkbox" />
                                    <span>Evaluación pedagógica</span>
                                </label>
                            </div>
                            <div>
                                <label className="flex items-end cursor-pointer gap-2">
                                    <input type="checkbox" className="checkbox" />
                                    <span>Psicopedagógica</span>
                                </label>
                            </div>
                            <div>
                                <label className="flex items-end cursor-pointer gap-2">
                                    <input type="checkbox" className="checkbox" />
                                    <span>Valoración de salud</span>
                                </label>
                            </div>
                            <div>
                                <label className="flex items-end cursor-pointer gap-2">
                                    <input type="checkbox" className="checkbox" />
                                    <span>Examen médico especialista (señale cuál)</span>
                                </label>
                            </div>
                            <div className='w-full flex gap-3 items-center'>
                                <label className="flex items-end cursor-pointer gap-2">
                                    <input type="checkbox" className="checkbox" />
                                    <span>Otro(s) (especificar):</span>
                                </label>
                                <input className="input input-solid w-full capitalize" placeholder="" maxLength={16} type="text" id="otro" />
                            </div>
                            <div className='w-full flex gap-3 items-center'>
                                <label className="flex items-center w-full cursor-pointer gap-2">
                                    <span>Señale el número de documentos que se adjuntan:</span>
                                    <input className="input input-solid w-full capitalize" placeholder="" maxLength={16} type="text" id="otro" />
                                </label>
                            </div>
                        </div>

                        <div className="w-full flex flex-col">
                            <label className="sr-only" htmlFor="progresos">Progresos</label>
                            <textarea id="progresos" className="textarea textarea-solid max-w-full" maxLength={330} placeholder="Describa los progresos en el comportamiento del o la estudiante en esta área" rows="8" />
                            <span className='text-end'>0/330</span>
                        </div>

                        <div className="w-full flex flex-col">
                            <label className="sr-only" htmlFor="enfasis">enfasis</label>
                            <textarea id="enfasis" className="textarea textarea-solid max-w-full" maxLength={250} placeholder="Describa aquellos aspectos de esta área a los cuales darle énfasis durante el próximo periodo académico" rows="6" ></textarea>
                            <span className='text-end'>0/250</span>
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