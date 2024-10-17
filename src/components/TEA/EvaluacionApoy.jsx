export default function EvaluacionApoyos() {

    return (
        <div className="accordion">
            <input type="checkbox" id="accordion-5" className="accordion-toggle" />
            <label htmlFor="accordion-5" className="text-xl font-bold cursor-pointer">5 - Evaluación de los Apoyos</label>
            <div className="accordion-content">
                <div className="min-h-0">

                    <label className="text-lg font-bold">Efectividad de Apoyos</label>
                    <form className="space-y-4 mt-2 mb-6 px-1">
                        <div className="w-full">
                            <label className="" htmlFor="personales">Personales</label>
                            <textarea id="efectividad" className="textarea textarea-solid max-w-full" maxLength={100} placeholder="Efectividad" rows="2" ></textarea>
                            <textarea id="observaciones" className="textarea textarea-solid max-w-full" maxLength={100} placeholder="Observaciones" rows="2" ></textarea>
                        </div>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div id="group1" className="flex flex-col gap-3 items-center">
                                <label className="self-start" htmlFor="RUN">Continuidad:</label>
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
                            </div>
                        </div>
                        <button className='btn btn-solid-error'>Guardar</button>
                    </form>

                    <form className="space-y-4 mt-2 mb-6 px-1">
                        <div className="w-full">
                            <label className="" htmlFor="curriculares">Curriculares</label>
                            <textarea id="efectividad" className="textarea textarea-solid max-w-full" maxLength={100} placeholder="Efectividad" rows="2" ></textarea>
                            <textarea id="observaciones" className="textarea textarea-solid max-w-full" maxLength={100} placeholder="Observaciones" rows="2" ></textarea>
                        </div>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div id="group1" className="flex flex-col gap-3 items-center">
                                <label className="self-start" htmlFor="RUN">Continuidad:</label>
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
                            </div>
                        </div>
                        <button className='btn btn-solid-error'>Guardar</button>
                    </form>

                    <form className="space-y-4 mt-2 mb-6 px-1">
                        <div className="w-full">
                            <label className="" htmlFor="mediosRecursosMateriales">Medios y Recursos Materiales</label>
                            <textarea id="efectividad" className="textarea textarea-solid max-w-full" maxLength={100} placeholder="Efectividad" rows="2" ></textarea>
                            <textarea id="observaciones" className="textarea textarea-solid max-w-full" maxLength={100} placeholder="Observaciones" rows="2" ></textarea>
                        </div>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div id="group1" className="flex flex-col gap-3 items-center">
                                <label className="self-start" htmlFor="RUN">Continuidad:</label>
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
                            </div>
                        </div>
                        <button className='btn btn-solid-error'>Guardar</button>
                    </form>

                    <form className="space-y-4 mt-2 mb-6 px-1">
                        <div className="w-full">
                            <label className="" htmlFor="organizativos">Organizativos</label>
                            <textarea id="efectividad" className="textarea textarea-solid max-w-full" maxLength={100} placeholder="Efectividad" rows="2" ></textarea>
                            <textarea id="observaciones" className="textarea textarea-solid max-w-full" maxLength={100} placeholder="Observaciones" rows="2" ></textarea>
                        </div>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div id="group1" className="flex flex-col gap-3 items-center">
                                <label className="self-start" htmlFor="RUN">Continuidad:</label>
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
                            </div>
                        </div>
                        <button className='btn btn-solid-error'>Guardar</button>
                    </form>

                    <form className="space-y-4 mt-2 mb-6 px-1">
                        <div className="w-full">
                            <label className="" htmlFor="familiares">Familiares</label>
                            <textarea id="efectividad" className="textarea textarea-solid max-w-full" maxLength={100} placeholder="Efectividad" rows="2" ></textarea>
                            <textarea id="observaciones" className="textarea textarea-solid max-w-full" maxLength={100} placeholder="Observaciones" rows="2" ></textarea>
                        </div>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div id="group1" className="flex flex-col gap-3 items-center">
                                <label className="self-start" htmlFor="RUN">Continuidad:</label>
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
                            </div>
                        </div>
                        <button className='btn btn-solid-error'>Guardar</button>
                    </form>

                    <form className="space-y-4 mt-2 mb-6 px-1">
                        <div className="w-full">
                            <label className="" htmlFor="otrosApoyos">Otros Apoyos</label>
                            <textarea id="efectividad" className="textarea textarea-solid max-w-full" maxLength={100} placeholder="Efectividad" rows="2" ></textarea>
                            <textarea id="observaciones" className="textarea textarea-solid max-w-full" maxLength={100} placeholder="Observaciones" rows="2" ></textarea>
                        </div>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div id="group1" className="flex flex-col gap-3 items-center">
                                <label className="self-start" htmlFor="RUN">Continuidad:</label>
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
                            </div>
                        </div>
                        <button className='btn btn-solid-error'>Guardar</button>
                    </form>

                    <label className="text-lg font-bold">Estrategias</label>
                    <form className="space-y-4 mt-2 mb-6 px-1">

                        <div className="w-full">
                            <label className="sr-only" htmlFor="estrategiasNEE">Estrategias NEE</label>

                            <textarea id="estrategiasNEE" className="textarea textarea-solid max-w-full" maxLength={330} placeholder="Describa las estrategias de trabajo utilizadas entre los profesores y otros profesionales del establecimiento para abordar la respuesta educativa a las NEE de éste estudiante que han resultado ser efectivas." rows="8" ></textarea>
                        </div>

                        <div className="w-full">
                            <label className="sr-only" htmlFor="efectividad">Efectividad</label>

                            <textarea id="efectividad" className="textarea textarea-solid max-w-full" maxLength={250} placeholder="Describa la efectividad de las estrategias de apoyo utilizadas con la familia y las recomendaciones para el período escolar siguiente." rows="8" ></textarea>
                        </div>

                        <div className="mt-4">
                            <button className="btn btn-solid-error" disabled={false}>Guardar</button>
                        </div>
                    </form>

                    <label className="text-lg font-bold">Nuevos Apoyos y Comentarios</label>
                    <form className="space-y-4 mt-2 mb-6 px-1">

                        <div className="w-full">
                            <label className="sr-only" htmlFor="nuevosApoyos">Nuevos Apoyos</label>

                            <textarea id="nuevosApoyos" className="textarea textarea-solid max-w-full" maxLength={250} placeholder="Describa los nuevos apoyos que se deben incorporar, para favorecer el aprendizaje y la participación del estudiante en el contexto escolar." rows="8" ></textarea>
                        </div>

                        <div className="w-full">
                            <label className="sr-only" htmlFor="comentarios">Comentarios</label>

                            <textarea id="comentarios" className="textarea textarea-solid max-w-full" maxLength={250} placeholder="COMENTARIOS, OBSERVACIONES Y SUGERENCIAS PARA EL PRÓXIMO PERÍODO (señalar si el estudiante será o no promovido, indicar el curso y las razones de la permanencia o promoción)" rows="8" ></textarea>
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