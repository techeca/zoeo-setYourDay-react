import { cross } from "../../utils/icons"

export default function DocumentSelector({ inter }) {

    return (
        <div className={`w-full transition-opacity duration-300 delay-300 ease-in-out flex flex-col gap-3 ${inter.state.value ? 'opacity-100 z-20' : 'opacity-0 invisible'}`}>
            {/*header + close btn*/}
            <div className='border-b-[1px] border-gray-50/10 flex justify-between items-center pb-2'>
                <label className='text-slate-12'>Seleccione un documento</label>
                <button className='hover:opacity-80 border-[0px] flex items-center text-sm border-gray-50/10 rounded-full' onClick={inter.state.clean}>
                    {cross}
                </button>
            </div>

            <div className='flex gap-3 mt-1'>
                <select
                    value={inter.document.value}
                    onChange={(e) => inter.document.setValue(e.target.value)}
                    className='scrollbar1 w-full placeholder:text-white/30 placeholder:font-light focus:outline-none focus:ring-0 focus:bg-[#313236] bg-gray-2 border-[0px] text-sm text-white/50 py-2 px-2 border-gray-50/10 rounded-md'>
                    <option value="" hidden disabled >Seleccionar</option>
                    <option value="TEA">Trastorno del Espectro Autista</option>
                </select>
            </div>

            <div className='flex my-auto mx-auto'>
                <button className="btn bg-gray-2 hover:opacity-80 rounded-md" disabled={inter.document.value !== '' ? false : true} onClick={inter.document.newDocument}>Continuar</button>
                {/*<button className={`border-[1px] text-sm py-1 border-gray-50/20 px-2 rounded-md`} disabled={inter.document.value !== '' ? false : true} onClick={inter.document.newDocument}>Continuar</button>*/}
            </div>
        </div>
    )
}