import { useState } from 'react';
import { handleGenerateDocument } from './utils/requests';
import TEA from './components/TEA';

const documentos = {
  TEA: {
    nombreDocumento: 'Trastorno del Espectro Autista',
    datosIdentificacion: {
      nombreCompleto: '',
      fechaNacimiento: '',
      edad: '',
      RUN: '',
      //opcionEducativa
      curso: '',
      //viaComunicacion
      establecimiento: '',
      RBD: '',
      nombreDirector: ''
    },
    profesional: {
      nombreCompleto: '',
      RUT: '',
      profesion: '',
      cargo: '',
      fono: '',
      emailProfesional: '',
      fecha: '',
      otros: []
    },
    diagnostico: {
      fechaEmision: '',
      observaciones: '',
    },
    documentos: {
      numeroDocumento: ''
    },
    revaluacion: {
      interaccionSocial: {
        progresos: '',
        aspectosEnfasis: '',
      },
      lenguajeComunicacion: {
        progresos: '',
        aspectosEnfasis: ''
      },
      cognitiva: {
        progresos: '',
        aspectosEnfasis: ''
      },
      procesamientoSensorial: {
        progresos: '',
        aspectosEnfasis: ''
      },
      motora: {
        progresos: '',
        aspectosEnfasis: ''
      },
      academicaFuncional: {
        aprendizajeLogrado: '',
        aprendizajeNoLogrado: '',
        logrosRelevantes: ''
      },
      desempenoPersonalSocial: {
        progresos: '',
        aspectosEnfasis: ''
      },
      contextFamiliarSocial: {
        progresos: '',
        aspectosEnfasis: ''
      },

    },
    evaluacionApoyos: {
      personales: {
        efectividad: '',
        observaciones: ''
      },
      curriculares: {
        efectividad: '',
        observaciones: ''
      },
      mediosRecursosMateriales: {
        efectividad: '',
        observaciones: ''
      },
      organizativos: {
        efectividad: '',
        observaciones: ''
      },
      familiares: {
        efectividad: '',
        observaciones: ''
      },
      otrosApoyos: {
        efectividad: '',
        observaciones: ''
      },
      estrategias: {
        estrategiasNEE: '',
        efectividad: ''
      },
      nuevosApoyos: '',
      comentarios: ''
    }
  }
}

function App() {
  const [state, setState] = useState('p1')
  const [youDay, setYouDay] = useState(false)
  const [documentSelected, setDocumentSelected] = useState('')
  const [data, setData] = useState('')
  const [newUser, setNewUser] = useState({
    nombreCompleto: '',
    profesion: '',
    fonoEmail: '',
    registroProfesional: ''
  })

  const newPro = {
    value: newUser,
    setValue: setNewUser,
    update: setData
  }

  function handleGenerateDay() {
    //e.preventDefault();
    if (documentSelected === '') {
      console.log("Debe seleccionar un documento");
    } else {
      setState('p2');
    }
  }

  function cleanApp() {
    setYouDay(false)
    setState('p1')
  }

  function activeTask(value) {
    console.log('active task')
    setDocumentSelected(value)
    setData(documentos[value])
  }

  return (
    <div className='w-full h-screen items-center flex flex-col'>
      <div className='fixed -z-10 min-h-screen left-0 right-0 bottom-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#121212] to-[#1d1e20]'></div>

      {/*<div className="absolute mt-24 text-5xl font-extrabold">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Web  App
        </span>
      </div>*/}

      {/*crear documento*/}
      <div className={`absolute mt-48 transition-all duration-300 ease-in-out ${youDay ? 'w-64 h-40' : 'h-32 w-32'} ${state === 'p1' ? 'opacity-100 z-20' : 'opacity-0 invisible'} flex justify-center border-[1px] rounded-md p-3 border-gray-50/10 backdrop-blur-sm bg-[#252628] text-gray-50/30`}>

        {/*btn add (+) element */}
        <div className='absolute pt-[24px]'>
          <button className={`transition-opacity duration-300 delay-300 ease-in-out ${youDay ? 'opacity-0 invisible' : 'opacity-100 z-20'}`} onClick={() => setYouDay(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/*Details new card*/}
        <div className={`w-full transition-opacity duration-300 delay-300 ease-in-out flex flex-col gap-3 ${youDay ? 'opacity-100 z-20' : 'opacity-0 invisible'}`}>
          {/*header + close btn*/}
          <div className='border-b-[1px] border-gray-50/10 flex justify-between items-center pb-2'>
            <label className='text-white/50'>Seleccione un documento</label>
            <button className='hover:opacity-80 border-[0px] flex items-center text-sm border-gray-50/10 rounded-full' onClick={() => setYouDay(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/*form*/}

          {/*<input type='text' className='placeholder:text-white/30 placeholder:font-light focus:outline-none focus:ring-0 focus:bg-[#313236] bg-transparent border-[1px] text-sm text-white/50 py-1 px-2 border-gray-50/10 rounded-sm' placeholder='Normal Day' />*/}

          {/*<label className='text-white/50'>Hours</label>*/}
          <div className='flex gap-3 mt-1'>
            <select value={documentSelected} onChange={(e) => activeTask(e.target.value)} className='scrollbar1 w-full placeholder:text-white/30 placeholder:font-light focus:outline-none focus:ring-0 focus:bg-[#313236] bg-transparent border-[1px] text-sm text-white/50 py-1 px-2 border-gray-50/10 rounded-sm'>
              <option value="" hidden disabled >Seleccionar</option>
              <option value="TEA">Trastorno del Espectro Autista</option>
            </select>
            {/*<select value={endTime} onChange={(e) => setEndTime(e.target.value)} className='scrollbar1 w-full placeholder:text-white/30 placeholder:font-light focus:outline-none focus:ring-0 focus:bg-[#313236] bg-transparent border-[1px] text-sm text-white/50 py-1 px-2 border-gray-50/10 rounded-sm'>
              {Array.from({ length: 24 }, (v, i) => (
                <option className='hover:bg-[#2a2b2e]' key={i} value={i}>
                  {i}:00
                </option>
              ))}
            </select>*/}
          </div>

          <div className='flex my-auto mx-auto'>
            <button className={`border-[1px] text-sm py-1 border-gray-50/10 px-2 rounded-md`} disabled={documentSelected !== '' ? false : true} onClick={() => handleGenerateDay()}>Continuar</button>
          </div>
        </div>

      </div>

      {/*documentos*/}
      <div className={`transition-opacity duration-300 delay-300 ease-in-out ${state === 'p2' ? 'opacity-100 z-20' : 'opacity-0 invisible'} absolute mt-24 flex flex-col border-0 border-white p-6 gap-3`}>
        <div className='flex gap-3 items-center'>
          <span className="badge badge-outline-primary">{data.nombreDocumento}</span>
          <button className="btn btn-solid-error" onClick={() => cleanApp()}>Cerrar</button>
          <button className="btn btn-solid-success" onClick={() => handleGenerateDocument(documentSelected)}>Descargar Documento</button>
        </div>

        <div className="card max-w-[720px] w-[720px] bg-[#252628] border-[1px] border-gray-50/10">
          <div className="card-body overflow-hidden">
            <div className="accordion-group">

              <TEA profesionales={data?.profesional} newPro={newPro} />

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
                            <input className="input input-solid max-w-full" placeholder="Indique modificaciones o un nuevo diagnostico:" maxLength={11} type="text" id="otro" />
                          </div>
                        </div>
                      </div>

                      <div className="w-full">
                        <label className="sr-only" htmlFor="fechaEmision">Fecha de emisión</label>
                        <input className="input input-solid max-w-full" placeholder="Fecha de emisión (dd/mm/aaaa)" maxLength={10} type="text" id="fechaEmision" />
                      </div>

                      <div className="w-full">
                        <label className="sr-only" htmlFor="observaciones">Observaciones</label>
                        <textarea id="observaciones" className="textarea textarea-solid max-w-full" maxLength={580} placeholder="Señale algún aspecto importante de enfatizar respecto de los cambios en el diagnóstico a los progresos, avances y apoyos entregados." rows="8" ></textarea>
                      </div>

                      <div className="mt-4">
                        <button className="btn btn-solid-error" disabled={false}>Guardar</button>
                      </div>
                    </form>

                  </div>
                </div>
              </div>

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

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App