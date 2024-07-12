import { useEffect, useState, useRef } from 'react';
import WordUploader from './components/WordUploader';
import DocumentEditor from './components/DocumentEditor';
import { handleUpdateDocument, handleGenerateDocument } from './utils/requests';

const allColors = {
  green: 'border-[#6ec17f] bg-gradient-line-green',
  red: 'border-[#c16e6e] bg-gradient-line-red',
  blue: 'border-[#6e93c1] bg-gradient-line-blue',
  yellow: 'border-[#adc16e] bg-gradient-line-yellow',
  purple: 'border-[#866ec1] bg-gradient-line-purple',
  gray: 'border-[#3a3a3a] bg-gradient-line-gray',
}

function Block({ color, children, text, className, ...props }) {


  return (
    <div {...props} className={`${className} ${allColors[color]} flex opacity-60 hover:opacity-80 transition-opacity duration-300 border-[2px] p-3 rounded-md w-[300px] justify-center cursor-pointer`}>
      {text ?
        <p className='bg-[#1a1a1a] bg-opacity-80 border-[#1a1a1a] px-2 py-1 border-0 rounded-md'>
          {text}
        </p>
        :
        children
      }
    </div>
  )
}

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

const newUser = {
  nombreCompleto: '',
  profesion: '',
  fonoEmail: '',
  registroProfesional: ''
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

  function UpdateDocument(e, key) {
    e.preventDefault()
    let texto = {}
    //actualiza texto creando una key por cada input y le asigna el value del mismo
    //esto es para reutilizar esta funcion con los diferentes formularios
    for (let index = 0; index < e.target.length; index++) {
      texto[e.target[index].id] = e.target[index].value
    }
    handleUpdateDocument(key, documentSelected, texto)
  }

  function UpdateNewProfesional(e) {
    e.preventDefault()
    setNewUser(prevData => ({
      ...prevData,
      [e.target.id]: e.target.value
    }))
  }

  // Función para agregar un elemento al array 'otros'
  const addOtro = () => {
    setData(prevData => ({
      ...prevData,
      profesional: {
        ...prevData.profesional,
        otros: [...prevData.profesional.otros, newUser]
      }
    }));
    setNewUser({
      nombreCompleto: '',
      profesion: '',
      fonoEmail: '',
      registroProfesional: ''
    })
  };

  // Función para eliminar un elemento del array 'otros' por índice
  const removeOtro = (index) => {
    setData(prevData => ({
      ...prevData,
      profesional: {
        ...prevData.profesional,
        otros: prevData.profesional.otros.filter((_, i) => i !== index)
      }
    }));
  };

  return (
    <div className='w-full h-screen items-center flex flex-col'>
      <div className='fixed -z-10 min-h-screen left-0 right-0 bottom-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2a2b2e] to-[#1d1e20]'></div>

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

      {/*tabla de horas*/}
      <div className={`transition-opacity duration-300 delay-300 ease-in-out ${state === 'p2' ? 'opacity-100 z-20' : 'opacity-0 invisible'} absolute mt-24 flex flex-col border-0 border-white p-6 gap-3`}>
        <div className='flex gap-3 items-center'>
          <span className="badge badge-outline-primary">{data.nombreDocumento}</span>
          <button className="btn btn-solid-error" onClick={() => cleanApp()}>Cerrar</button>
          <button className="btn btn-solid-success" onClick={() => handleGenerateDocument(documentSelected)}>Descargar Documento</button>
        </div>

        <div className="card max-w-[720px] w-[720px] bg-[#252628] border-[1px] border-gray-50/10">
          <div className="card-body">
            <div className="accordion-group">
              <div className="accordion">
                <input type="checkbox" id="accordion-1" className="accordion-toggle" />
                <label htmlFor="accordion-1" className="text-xl font-bold cursor-pointer">1 - Datos de Identificación</label>
                <div className="accordion-content">
                  <div className="min-h-0">

                    <label htmlFor="accordion-1" className="text-lg font-bold">Estudiante</label>
                    <form onSubmit={(e) => UpdateDocument(e, 'datosIdentificacion')} className="space-y-4 mt-2 mb-6 px-1">
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
                    <form onSubmit={(e) => UpdateDocument(e, 'profesional')} className="space-y-4 mt-2">
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


                      {data && data?.profesional?.otros.length > 0 ?
                        <>
                          {data.profesional.otros.map((item, index) =>
                            <div key={index} className='flex items-center gap-3'>
                              <p>{item.nombreCompleto}</p>
                              <p>{item.profesion}</p>
                              <p>{item.fonoEmail}</p>
                              <p>{item.registroProfesional}</p>
                              <button type='button' onClick={() => removeOtro(index)} className="w-12 btn btn-solid-error">X</button>
                            </div>
                          )}
                        </>
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
                                  <input className="input input-solid max-w-full" value={newUser.nombreCompleto} onChange={UpdateNewProfesional} placeholder="Nombre Completo" type="text" maxLength={30} id="nombreCompleto" />
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                  <div>
                                    <label className="sr-only" htmlFor="profesion">Profesión</label>
                                    <input className="input input-solid" value={newUser.profesion} onChange={UpdateNewProfesional} placeholder="Profesión" type="text" maxLength={20} id="profesion" />
                                  </div>

                                  <div>
                                    <label className="sr-only" htmlFor="fonoEmail">Fono / Email</label>
                                    <input className="input input-solid" value={newUser.fonoEmail} onChange={UpdateNewProfesional} placeholder="Fono / Email" type="text" maxLength={25} id="fonoEmail" />
                                  </div>
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                  <div>
                                    <label className="sr-only" htmlFor="registroProfesional">Registro Profesional</label>
                                    <input className="input input-solid" value={newUser.registroProfesional} onChange={UpdateNewProfesional} placeholder="Registro Profesional" type="text" maxLength={10} id="registroProfesional" />
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
              <div className="accordion">
                <input type="checkbox" id="accordion-2" className="accordion-toggle" />
                <label htmlFor="accordion-2" className="text-xl font-bold cursor-pointer">2 - Sintesis de la revaluación diagnóstica</label>
                <div className="accordion-content">
                  <div className="min-h-0">

                    <label className="text-lg font-bold">Área Interacción Social</label>
                    <form className="space-y-4 mt-2 mb-6 px-1">

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

                    <label className="text-lg font-bold">Área Interacción Social</label>
                    <form className="space-y-4 mt-2 mb-6 px-1">

                      <div className="w-full">
                        <label className="sr-only" htmlFor="progresos">Progresos</label>

                        <textarea id="progresos" className="textarea textarea-solid max-w-full" maxLength={330} placeholder="Describa los progresos en el comportamiento del o la estudiante en esta área" rows="8" ></textarea>
                      </div>

                      <div className="w-full">
                        <label className="sr-only" htmlFor="progresos">Progresos</label>

                        <textarea id="progresos" className="textarea textarea-solid max-w-full" maxLength={250} placeholder="Describa aquellos aspectos de esta área a los cuales darle énfasis durante el próximo periodo académico" rows="8" ></textarea>
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

                      <div className="w-full">
                        <label className="sr-only" htmlFor="progresos">Progresos</label>

                        <textarea id="progresos" className="textarea textarea-solid max-w-full" maxLength={330} placeholder="Describa los progresos en el comportamiento del o la estudiante en esta área" rows="8" ></textarea>
                      </div>

                      <div className="w-full">
                        <label className="sr-only" htmlFor="progresos">Progresos</label>

                        <textarea id="progresos" className="textarea textarea-solid max-w-full" maxLength={250} placeholder="Describa aquellos aspectos de esta área a los cuales darle énfasis durante el próximo periodo académico" rows="8" ></textarea>
                      </div>

                      <div className="mt-4">
                        <button className="btn btn-solid-error" disabled={false}>Guardar</button>
                      </div>
                    </form>

                    <label className="text-lg font-bold">Área Lenguaje y Comunicación</label>
                    <form className="space-y-4 mt-2 mb-6 px-1">

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
                      <button className='btn btn-solid-error'>Guardar</button>
                    </form>

                    <form className="space-y-4 mt-2 mb-6 px-1">
                      <div className="w-full">
                        <label className="" htmlFor="curriculares">Curriculares</label>
                        <textarea id="efectividad" className="textarea textarea-solid max-w-full" maxLength={100} placeholder="Efectividad" rows="2" ></textarea>
                        <textarea id="observaciones" className="textarea textarea-solid max-w-full" maxLength={100} placeholder="Observaciones" rows="2" ></textarea>
                      </div>
                      <button className='btn btn-solid-error'>Guardar</button>
                    </form>

                    <form className="space-y-4 mt-2 mb-6 px-1">
                      <div className="w-full">
                        <label className="" htmlFor="mediosRecursosMateriales">Medios y Recursos Materiales</label>
                        <textarea id="efectividad" className="textarea textarea-solid max-w-full" maxLength={100} placeholder="Efectividad" rows="2" ></textarea>
                        <textarea id="observaciones" className="textarea textarea-solid max-w-full" maxLength={100} placeholder="Observaciones" rows="2" ></textarea>
                      </div>
                      <button className='btn btn-solid-error'>Guardar</button>
                    </form>

                    <form className="space-y-4 mt-2 mb-6 px-1">
                      <div className="w-full">
                        <label className="" htmlFor="organizativos">Organizativos</label>
                        <textarea id="efectividad" className="textarea textarea-solid max-w-full" maxLength={100} placeholder="Efectividad" rows="2" ></textarea>
                        <textarea id="observaciones" className="textarea textarea-solid max-w-full" maxLength={100} placeholder="Observaciones" rows="2" ></textarea>
                      </div>
                      <button className='btn btn-solid-error'>Guardar</button>
                    </form>

                    <form className="space-y-4 mt-2 mb-6 px-1">
                      <div className="w-full">
                        <label className="" htmlFor="familiares">Familiares</label>
                        <textarea id="efectividad" className="textarea textarea-solid max-w-full" maxLength={100} placeholder="Efectividad" rows="2" ></textarea>
                        <textarea id="observaciones" className="textarea textarea-solid max-w-full" maxLength={100} placeholder="Observaciones" rows="2" ></textarea>
                      </div>
                      <button className='btn btn-solid-error'>Guardar</button>
                    </form>

                    <form className="space-y-4 mt-2 mb-6 px-1">
                      <div className="w-full">
                        <label className="" htmlFor="otrosApoyos">Otros Apoyos</label>
                        <textarea id="efectividad" className="textarea textarea-solid max-w-full" maxLength={100} placeholder="Efectividad" rows="2" ></textarea>
                        <textarea id="observaciones" className="textarea textarea-solid max-w-full" maxLength={100} placeholder="Observaciones" rows="2" ></textarea>
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

