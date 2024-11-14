import { useEffect, useState } from "react"
import { getAllProfesional } from "../../utils/requests"

export default function Team() {
    const [profs, setProfs] = useState(false)

    async function getPros() {
        //getAllProfesional()
        const { pros } = await getAllProfesional()
        setProfs(pros);
    }

    useEffect(() => {
        getPros();
    }, [])

    return (
        <div className="w-full p-6">
            <div className="text-2xl font-semibold">Team</div>
            <div className="flex justify-center flex-wrap gap-6">
                {profs && profs.map((pro) => (
                    <div key={pro._id} className="w-[320px]">
                        <div className="card m-3 p-4 cursor-pointer hover:bg-gray-4 hover:opacity-100 opacity-80">
                            <div className="flex justify-between">
                                <div className={`bg-gray-2 w-20 h-20 rounded-md`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-20 opacity-10" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7.39 16.539a8 8 0 1 1 9.221 0l2.083 4.76a.5.5 0 0 1-.459.701H5.765a.5.5 0 0 1-.459-.7zm6.735-.693l1.332-.941a6 6 0 1 0-6.913 0l1.331.941L8.058 20h7.884zM8.119 10.97l1.94-.485a2 2 0 0 0 3.882 0l1.94.485a4.002 4.002 0 0 1-7.762 0"></path></svg>
                                </div>
                                <div>
                                    <div className="text-xs bg-gray-2 p-1 rounded-full px-2">
                                        {pro._id}
                                    </div>
                                    <p className="text-right font-semibold text-sm mt-1 mr-1">

                                    </p>
                                </div>
                            </div>
                            <div className="bg-gray-2 p-3 rounded-md mt-2 flex flex-col gap-2">
                                <p className=""><span className="font-semibold"></span><span className="w-full badge text-gray-100/70">Nombre: {pro.username}</span></p>
                                <p className=""><span className="font-semibold"></span><span className="w-full badge text-gray-100/70">Correo: {pro.email}</span></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}