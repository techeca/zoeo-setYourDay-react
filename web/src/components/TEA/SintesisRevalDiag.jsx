import { useState, useEffect } from "react";
import { useDocument } from "../../contexts/DocumentContext";
import { handleUpdateDocument } from "../../utils/requests";
import { useAlert } from "../../contexts/AlertContext";

export default function SintesisRevalDiag() {
    const { document, documentSelected } = useDocument();
    const { showAlert } = useAlert()
    const [formValues, setFormValues] = useState({
        indicacionesModificacionesDiagnostico: "",
        fechaEmision: "",
        proNuevoDiag: "",
        observaciones: "",
        "42": false,
        "43": false,
        "44": false,
        "45": false,
        "46": false,
    });

    useEffect(() => {
        if (document && document.diagnostico) {
            setFormValues({
                ...formValues,
                ...document.diagnostico
            });
        }
    }, [document]);

    const handleCheckboxChange = (e) => {
        setFormValues((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.checked, // actualiza el estado del checkbox
        }));
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [id]: value,
        }));
    };

    async function updateDocument(e, key, values, title) {
        e.preventDefault();
        try {
            const response = await handleUpdateDocument(key, document.nombreDocumento, values, document._id);
            showAlert(response.message, 'success', title)
        } catch (error) {
            
        }
        //console.log(document);
    }

    const handleRadioChange = (key) => {
        setFormValues((prevValues) => ({
            ...prevValues,
            "45": key === "45",
            "46": key === "46"
        }))
    }

    return (
        <div className="">
            <input type="checkbox" id="accordion-2" className="accordion-toggle" />
            {/*<label htmlFor="accordion-2" className="text-xl font-bold cursor-pointer">2 - Sintesis de la revaluación diagnóstica</label>*/}
            <div className="">
                <div className="min-h-0">

                    <label className="text-lg font-bold">Diagnóstico</label>
                    <form onSubmit={(e) => updateDocument(e, 'diagnostico', formValues, 'Síntesis')} className="space-y-4 mt-2 mb-6 px-1">

                        <div className="w-full flex flex-col items-start">
                            <div>
                                <label className="flex items-end cursor-pointer gap-2">
                                    <input type="checkbox" className="checkbox" id="42" checked={formValues[42]} onChange={handleCheckboxChange} />
                                    <span>Trastorno del Espectro Autista</span>
                                </label>
                            </div>
                            <div>
                                <label className="flex items-end cursor-pointer gap-2">
                                    <input type="checkbox" className="checkbox" id="43" checked={formValues[43]} onChange={handleCheckboxChange} />
                                    <span>Trastorno generalizado del desarrollo no especificado</span>
                                </label>
                            </div>
                            <div>
                                <label className="flex items-end cursor-pointer gap-2">
                                    <input type="checkbox" className="checkbox" id="44" checked={formValues[44]} onChange={handleCheckboxChange} />
                                    <span>Trastorno de Asperger</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <div id="group1" className="flex flex-col gap-3 items-center w-full">
                                <label className="self-start">¿Existen cambios en el diagnóstico inicial?</label>
                                <div className='flex gap-3 w-full'>
                                    <label className="flex cursor-pointer gap-2">
                                        <input type="radio" className="radio" name="group1" id="45" checked={formValues[45]} onChange={() => handleRadioChange("45")} />
                                        <span>SI</span>
                                    </label>
                                    <label className="flex cursor-pointer gap-2">
                                        <input type="radio" className="radio" name="group1" id="46" checked={formValues[46]} onChange={() => handleRadioChange("46")} />
                                        <span>NO</span>
                                    </label>
                                </div>
                                <div className='w-full'>
                                    <input id="indicacionesModificacionesDiagnostico" disabled={formValues[46]} value={formValues.indicacionesModificacionesDiagnostico || ""} onChange={handleInputChange} className={`bg-gray-2 w-full rounded-xl p-2 hover:bg-gray-1 focus:bg-gray-1 outline-none placeholder:text-gray-9 max-w-full`} placeholder="Indique modificaciones o un nuevo diagnostico:" maxLength={38} type="text"  />
                                </div>
                            </div>
                        </div>

                        <div className="w-full">
                            <label className="sr-only" htmlFor="fechaEmision">Fecha de emisión</label>
                            <input className="bg-gray-2 w-full rounded-xl p-2 hover:bg-gray-1 focus:bg-gray-1 outline-none placeholder:text-gray-9 max-w-full" placeholder="Fecha de emisión (dd/mm/aaaa)" maxLength={10} type="text" id="fechaEmision" value={formValues.fechaEmision || ""} onChange={handleInputChange} />
                        </div>

                        <div className="w-full">
                            <label className="sr-only" htmlFor="fechaEmision">Profesional(es) que emite(n) el nuevo diagnóstico o sus modificaciones (especificar su(s) especialidad(es))</label>
                            <input className="bg-gray-2 w-full rounded-xl p-2 hover:bg-gray-1 focus:bg-gray-1 outline-none placeholder:text-gray-9 max-w-full placeholder:text-sm" placeholder="Profesional(es) que emite(n) el nuevo diagnóstico o sus modificaciones (especificar su(s) especialidad(es))" maxLength={11} type="text" id="proNuevoDiag" value={formValues.proNuevoDiag || ""} onChange={handleInputChange} />
                        </div>

                        <div className="w-full">
                            <label className="sr-only" htmlFor="observaciones">Observaciones</label>
                            <textarea id="observaciones" className="bg-gray-2 w-full rounded-xl p-2 hover:bg-gray-1 focus:bg-gray-1 outline-none placeholder:text-gray-9 textarea-solid max-w-full" maxLength={580} placeholder="Señale algún aspecto importante de enfatizar respecto de los cambios en el diagnóstico a los progresos, avances y apoyos entregados." rows="8" 
                                value={formValues.observaciones || ""} onChange={handleInputChange} ></textarea>
                        </div>

                        <div className="mt-4">
                            <button className="btn btn-solid-error" disabled={false} type="submit">Guardar</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}