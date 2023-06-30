'use client'

import Home from "@/pages/Main";
import Patients from "@/pages/Patients";
import Times from "@/pages/Times";
import { CalendarDays, HomeIcon, Power, Users } from "lucide-react";
import Link from "next/link";
import { Perfil } from "../Perfil";


const SideBar = () => {

    return (
        <>
            <div className="h-screen flex flex-col">
                <div className="flex flex-1">
                    <aside className="w-72 bg-secondary-color border-r-2 p-12">
                        <nav className="space-y-8 text-lg">
                            <Perfil />
                            <Link href={'/'} className="flex items-center gap-7 font-semibold"><HomeIcon size={'30px'} /><span className="text-gray-200">Home</span></Link>
                            <Link href={'/horarios'} className="flex items-center gap-7 font-semibold"><CalendarDays size={'30px'} />Horário</Link>
                            <Link href={'/pacientes'} className="flex items-center gap-7 font-semibold"><Users size={'30px'} />Pacientes</Link>
                            <Link href={'/login'} className="items-center gap-7 font-semibold absolute bottom-5 flex"><Power />Desconectar</Link>
                        </nav>
                    </aside>
                </div>
            </div>
        </>
    )
}

export default SideBar;