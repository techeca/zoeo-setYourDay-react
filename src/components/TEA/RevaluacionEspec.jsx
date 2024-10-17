export default function RevaluacionEspec() {

    return (
        <div className="accordion">
            <input type="checkbox" id="accordion-4" className="accordion-toggle" />
            <label htmlFor="accordion-4" className="text-xl font-bold cursor-pointer">4 - Revaluación específica o especializada</label>
            <div className="accordion-content">
                <div className="min-h-0">
                    <label className="text-lg font-bold">Área Interacción Social</label>
                    <form className="space-y-4 mt-2 mb-6 px-1">
                        <label className="text-lg font-bold">Señale fuentes de información e instrumentos de evaluación utilizados:</label>

                        <div className="w-full flex flex-wrap items-start mb-3 gap-1">
                            <div>
                                <label className="flex items-end cursor-pointer gap-2">
                                    <input type="checkbox" className="checkbox" />
                                    <span>Entrevista a la familia</span>
                                </label>
                            </div>
                            <div className='w-full flex flex-col gap-3 items-start'>
                                <label className="flex items-end cursor-pointer gap-2">
                                    <input type="checkbox" className="checkbox" />
                                    <span>Observación en el contexto escolar (especificar):</span>
                                </label>
                                <input className="input input-solid w-full capitalize" placeholder="" maxLength={16} type="text" id="otro" />
                            </div>
                            <div className='w-full flex flex-col gap-3 items-start'>
                                <label className="flex items-end cursor-pointer gap-2">
                                    <input type="checkbox" className="checkbox" />
                                    <span>Aplicación de instrumento (cuáles):</span>
                                </label>
                                <input className="input input-solid w-full capitalize" placeholder="" maxLength={16} type="text" id="otro" />
                            </div>
                        </div>
                        <div className="w-full">
                            <label className="sr-only" htmlFor="progresos">Progresos</label>

                            <textarea id="progresos" className="textarea textarea-solid max-w-full" maxLength={330} placeholder="Describa los progresos en el comportamiento del o la estudiante en esta área" rows="8" ></textarea>
                        </div>

                        <div className="w-full">
                            <label className="sr-only" htmlFor="enfasis">Énfasis</label>

                            <textarea id="enfasis" className="textarea textarea-solid max-w-full" maxLength={250} placeholder="Describa aquellos aspectos de esta área a los cuales darle énfasis durante el próximo periodo académico" rows="8" ></textarea>
                        </div>

                        <div className="mt-4">
                            <button className="btn btn-solid-error" disabled={false}>Guardar</button>
                        </div>
                    </form>

                    <label className="text-lg font-bold">Área Lenguaje y Comunicación</label>
                    <form className="space-y-4 mt-2 mb-6 px-1">

                        <label className="text-lg font-bold">Señale fuentes de información e instrumentos de evaluación utilizados:</label>

                        <div className="w-full flex flex-wrap items-start mb-3 gap-1">
                            <div>
                                <label className="flex items-end cursor-pointer gap-2">
                                    <input type="checkbox" className="checkbox" />
                                    <span>Entrevista a la familia</span>
                                </label>
                            </div>
                            <div className='w-full flex flex-col gap-3 items-start'>
                                <label className="flex items-end cursor-pointer gap-2">
                                    <input type="checkbox" className="checkbox" />
                                    <span>Observación en el contexto escolar (indicar):</span>
                                </label>
                                <input className="input input-solid w-full capitalize" placeholder="" maxLength={16} type="text" id="otro" />
                            </div>
                            <div className='w-full flex flex-col gap-3 items-start'>
                                <label className="flex items-end cursor-pointer gap-2">
                                    <input type="checkbox" className="checkbox" />
                                    <span>Aplicación de instrumento (cuáles):</span>
                                </label>
                                <input className="input input-solid w-full capitalize" placeholder="" maxLength={16} type="text" id="otro" />
                            </div>
                        </div>

                        <div className="w-full">
                            <label className="sr-only" htmlFor="progresos">Progresos</label>

                            <textarea id="progresos" className="textarea textarea-solid max-w-full" maxLength={330} placeholder="Describa los progresos del o la estudiante en esta área (ej: comunicación verbal y no verbal, nivel semántico y pragmático, desempeño comunicativo, entre otros)" rows="8" ></textarea>
                        </div>

                        <div className="w-full">
                            <label className="sr-only" htmlFor="progresos">Progresos</label>

                            <textarea id="progresos" className="textarea textarea-solid max-w-full" maxLength={250} placeholder="Describa aquellos aspectos de esta área a los cuales darle énfasis durante el próximo periodo académico" rows="8" ></textarea>
                        </div>

                        <div className="mt-4">
                            <button className="btn btn-solid-error" disabled={false}>Guardar</button>
                        </div>
                    </form>

                    <label className="text-lg font-bold">Área Cognitiva</label>
                    <form className="space-y-4 mt-2 mb-6 px-1">

                        <label className="text-lg font-bold">Señale fuentes de información e instrumentos de evaluación utilizados:</label>

                        <div className="w-full flex flex-wrap items-start mb-3 gap-1">
                            <div>
                                <label className="flex items-end cursor-pointer gap-2">
                                    <input type="checkbox" className="checkbox" />
                                    <span>Entrevista a la familia</span>
                                </label>
                            </div>
                            <div className='w-full flex flex-col gap-3 items-start'>
                                <label className="flex items-end cursor-pointer gap-2">
                                    <input type="checkbox" className="checkbox" />
                                    <span>Observación en el contexto escolar (especificar):</span>
                                </label>
                                <input className="input input-solid w-full capitalize" placeholder="" maxLength={16} type="text" id="otro" />
                            </div>
                            <div className='w-full flex flex-col gap-3 items-start'>
                                <label className="flex items-end cursor-pointer gap-2">
                                    <input type="checkbox" className="checkbox" />
                                    <span>Aplicación de instrumento (cuáles):</span>
                                </label>
                                <input className="input input-solid w-full capitalize" placeholder="" maxLength={16} type="text" id="otro" />
                            </div>
                        </div>

                        <div className="w-full">
                            <label className="sr-only" htmlFor="progresos">Progresos</label>

                            <textarea id="progresos" className="textarea textarea-solid max-w-full" maxLength={330} placeholder="Describa los progresos del o la estudiante en esta área (ej: estilo de aprendizaje, habilidades cognitivasm entre otros)" rows="8" ></textarea>
                        </div>

                        <div className="w-full">
                            <label className="sr-only" htmlFor="aspectosEnfasis">enfasis</label>

                            <textarea id="aspectosEnfasis" className="textarea textarea-solid max-w-full" maxLength={250} placeholder="Describa aquellos aspectos de esta área a los cuales darle énfasis durante el próximo periodo académico" rows="8" ></textarea>
                        </div>

                        <div className="mt-4">
                            <button className="btn btn-solid-error" disabled={false}>Guardar</button>
                        </div>
                    </form>

                    <label className="text-lg font-bold">Procesamiento Sensorial</label>
                    <form className="space-y-4 mt-2 mb-6 px-1">

                        <label className="text-lg font-bold">Señale fuentes de información e instrumentos de evaluación utilizados:</label>

                        <div className="w-full flex flex-wrap items-start mb-3 gap-1">
                            <div>
                                <label className="flex items-end cursor-pointer gap-2">
                                    <input type="checkbox" className="checkbox" />
                                    <span>Entrevista a la familia</span>
                                </label>
                            </div>
                            <div className='w-full flex flex-col gap-3 items-start'>
                                <label className="flex items-end cursor-pointer gap-2">
                                    <input type="checkbox" className="checkbox" />
                                    <span>Observación en el contexto escolar (especificar):</span>
                                </label>
                                <input className="input input-solid w-full capitalize" placeholder="" maxLength={16} type="text" id="otro" />
                            </div>
                            <div className='w-full flex flex-col gap-3 items-start'>
                                <label className="flex items-end cursor-pointer gap-2">
                                    <input type="checkbox" className="checkbox" />
                                    <span>Aplicación de instrumento (cuáles):</span>
                                </label>
                                <input className="input input-solid w-full capitalize" placeholder="" maxLength={16} type="text" id="otro" />
                            </div>
                        </div>

                        <div className="w-full">
                            <label className="sr-only" htmlFor="progresos">Progresos</label>

                            <textarea id="progresos" className="textarea textarea-solid max-w-full" maxLength={330} placeholder="Describa los progresos del o la estudiante en esta área (ej: táctil, auditiva, visual, vestibular, entre otros)" rows="8" ></textarea>
                        </div>

                        <div className="w-full">
                            <label className="sr-only" htmlFor="aspectosEnfasis">enfasis</label>

                            <textarea id="aspectosEnfasis" className="textarea textarea-solid max-w-full" maxLength={250} placeholder="Describa aquellos aspectos de esta área a los cuales darle énfasis durante el próximo periodo académico" rows="8" ></textarea>
                        </div>

                        <div className="mt-4">
                            <button className="btn btn-solid-error" disabled={false}>Guardar</button>
                        </div>
                    </form>

                    <label className="text-lg font-bold">Área Motora</label>
                    <form className="space-y-4 mt-2 mb-6 px-1">

                        <label className="text-lg font-bold">Señale fuentes de información e instrumentos de evaluación utilizados:</label>

                        <div className="w-full flex flex-wrap items-start mb-3 gap-1">
                            <div>
                                <label className="flex items-end cursor-pointer gap-2">
                                    <input type="checkbox" className="checkbox" />
                                    <span>Entrevista a la familia</span>
                                </label>
                            </div>
                            <div className='w-full flex flex-col gap-3 items-start'>
                                <label className="flex items-end cursor-pointer gap-2">
                                    <input type="checkbox" className="checkbox" />
                                    <span>Observación en el contexto escolar (especificar):</span>
                                </label>
                                <input className="input input-solid w-full capitalize" placeholder="" maxLength={16} type="text" id="otro" />
                            </div>
                            <div className='w-full flex flex-col gap-3 items-start'>
                                <label className="flex items-end cursor-pointer gap-2">
                                    <input type="checkbox" className="checkbox" />
                                    <span>Aplicación de instrumento (cuáles):</span>
                                </label>
                                <input className="input input-solid w-full capitalize" placeholder="" maxLength={16} type="text" id="otro" />
                            </div>
                        </div>

                        <div className="w-full">
                            <label className="sr-only" htmlFor="progresos">Progresos</label>

                            <textarea id="progresos" className="textarea textarea-solid max-w-full" maxLength={330} placeholder="Describa los progresos del o la estudiante en esta área" rows="8" ></textarea>
                        </div>

                        <div className="w-full">
                            <label className="sr-only" htmlFor="aspectosEnfasis">enfasis</label>

                            <textarea id="aspectosEnfasis" className="textarea textarea-solid max-w-full" maxLength={250} placeholder="Describa aquellos aspectos de esta área a los cuales darle énfasis durante el próximo periodo académico" rows="8" ></textarea>
                        </div>

                        <div className="mt-4">
                            <button className="btn btn-solid-error" disabled={false}>Guardar</button>
                        </div>
                    </form>

                    <label className="text-lg font-bold">Área Académica Funcional</label>
                    <form className="space-y-4 mt-2 mb-6 px-1">

                        <label className="text-lg font-bold">Señale fuentes de información e instrumentos de evaluación utilizados:</label>

                        <div className="w-full flex flex-wrap items-start mb-3 gap-1">
                            <div>
                                <label className="flex items-end cursor-pointer gap-2">
                                    <input type="checkbox" className="checkbox" />
                                    <span>Entrevista a la familia</span>
                                </label>
                            </div>
                            <div className='w-full flex flex-col gap-3 items-start'>
                                <label className="flex items-end cursor-pointer gap-2">
                                    <input type="checkbox" className="checkbox" />
                                    <span>Observación en el contexto escolar (especificar):</span>
                                </label>
                                <input className="input input-solid w-full capitalize" placeholder="" maxLength={16} type="text" id="otro" />
                            </div>
                            <div className='w-full flex flex-col gap-3 items-start'>
                                <label className="flex items-end cursor-pointer gap-2">
                                    <input type="checkbox" className="checkbox" />
                                    <span>Aplicación de instrumento (cuáles):</span>
                                </label>
                                <input className="input input-solid w-full capitalize" placeholder="" maxLength={16} type="text" id="otro" />
                            </div>
                        </div>

                        <div className="w-full">
                            <label className="sr-only" htmlFor="aprendizajeLogrado">Aprendizajes Logrados</label>

                            <textarea id="aprendizajeLogrado" className="textarea textarea-solid max-w-full" maxLength={250} placeholder="Refiérase a los principales aprendizajes (curriculares y/o de desarrollo) logrados por el/la estudiante (lenguaje y comunicación, matemáticas, ciencias)" rows="8" ></textarea>
                        </div>

                        <div className="w-full">
                            <label className="sr-only" htmlFor="aprendizajeNoLogrado">Aprendizajes No Logrados</label>

                            <textarea id="aprendizajeNoLogrado" className="textarea textarea-solid max-w-full" maxLength={250} placeholder="Señale aprendizajes (curriculares y/o de desarrollo) no logrados y principales asignaturas en las que el estudiante mantiene dificultades." rows="8" ></textarea>
                        </div>

                        <div className="w-full">
                            <label className="sr-only" htmlFor="logrosRelevantes">Logros Relevantes</label>

                            <textarea id="logrosRelevantes" className="textarea textarea-solid max-w-full" maxLength={250} placeholder="Señale logros relevantes o destacados que presenta para paarticipar en el contexto escolar y familiar." rows="8" ></textarea>
                        </div>

                        <div className="mt-4">
                            <button className="btn btn-solid-error" disabled={false}>Guardar</button>
                        </div>
                    </form>

                    <label className="text-lg font-bold">Área de Desempeño Personal y Social</label>
                    <form className="space-y-4 mt-2 mb-6 px-1">

                        <label className="text-lg font-bold">Señale fuentes de información e instrumentos de evaluación utilizados:</label>

                        <div className="w-full flex flex-wrap items-start mb-3 gap-1">
                            <div>
                                <label className="flex items-end cursor-pointer gap-2">
                                    <input type="checkbox" className="checkbox" />
                                    <span>Entrevista a la familia</span>
                                </label>
                            </div>
                            <div className='w-full flex flex-col gap-3 items-start'>
                                <label className="flex items-end cursor-pointer gap-2">
                                    <input type="checkbox" className="checkbox" />
                                    <span>Observación en el contexto escolar (especificar):</span>
                                </label>
                                <input className="input input-solid w-full capitalize" placeholder="" maxLength={16} type="text" id="otro" />
                            </div>
                            <div className='w-full flex flex-col gap-3 items-start'>
                                <label className="flex items-end cursor-pointer gap-2">
                                    <input type="checkbox" className="checkbox" />
                                    <span>Aplicación de instrumento (cuáles):</span>
                                </label>
                                <input className="input input-solid w-full capitalize" placeholder="" maxLength={16} type="text" id="otro" />
                            </div>
                        </div>

                        <div className="w-full">
                            <label className="sr-only" htmlFor="progresos">Progresos</label>

                            <textarea id="progresos" className="textarea textarea-solid max-w-full" maxLength={330} placeholder="Describa los progresos del o la estudiante en esta área" rows="8" ></textarea>
                        </div>

                        <div className="w-full">
                            <label className="sr-only" htmlFor="aspectosEnfasis">enfasis</label>

                            <textarea id="aspectosEnfasis" className="textarea textarea-solid max-w-full" maxLength={250} placeholder="Describa aquellos aspectos de esta área a los cuales darle énfasis durante el próximo periodo académico" rows="8" ></textarea>
                        </div>

                        <div className="mt-4">
                            <button className="btn btn-solid-error" disabled={false}>Guardar</button>
                        </div>
                    </form>

                    <label className="text-lg font-bold">Contexto Familiar y Social del Estudiante</label>
                    <form className="space-y-4 mt-2 mb-6 px-1">

                        <label className="text-lg font-bold">Señale fuentes de información e instrumentos de evaluación utilizados:</label>

                        <div className="w-full flex flex-wrap items-start mb-3 gap-1">
                            <div>
                                <label className="flex items-end cursor-pointer gap-2">
                                    <input type="checkbox" className="checkbox" />
                                    <span>Entrevista a la familia</span>
                                </label>
                            </div>
                            <div className='w-full flex flex-col gap-3 items-start'>
                                <label className="flex items-end cursor-pointer gap-2">
                                    <input type="checkbox" className="checkbox" />
                                    <span>Observación en el contexto escolar (especificar):</span>
                                </label>
                                <input className="input input-solid w-full capitalize" placeholder="" maxLength={16} type="text" id="otro" />
                            </div>
                            <div className='w-full flex flex-col gap-3 items-start'>
                                <label className="flex items-end cursor-pointer gap-2">
                                    <input type="checkbox" className="checkbox" />
                                    <span>Aplicación de instrumento (cuáles):</span>
                                </label>
                                <input className="input input-solid w-full capitalize" placeholder="" maxLength={16} type="text" id="otro" />
                            </div>
                        </div>

                        <div className="w-full">
                            <label className="sr-only" htmlFor="progresos">Progresos</label>

                            <textarea id="progresos" className="textarea textarea-solid max-w-full" maxLength={330} placeholder="Describa aquellos aspectos destacados respecto a la participación de la familia en los progresos del o la estudiante." rows="8" ></textarea>
                        </div>

                        <div className="w-full">
                            <label className="sr-only" htmlFor="aspectosEnfasis">enfasis</label>

                            <textarea id="aspectosEnfasis" className="textarea textarea-solid max-w-full" maxLength={250} placeholder="Describa aquellos aspectos de esta área a los cuales darle énfasis durante el próximo periodo académico" rows="8" ></textarea>
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