'use client'

import { CalendarDays, HomeIcon, Power, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Photo from '@/common/images/psicologaPhoto.png'
import ActiveLink from '@/components/ActiveLinkProps';

const SideBar = () => {

    return (
        <>
            <div className="h-screen flex flex-col">
                <div className="flex flex-1">
                    <aside className="w-72 bg-secondary-color py-12">
                        <nav className="space-y-8 text-lg">
                            <div className="container flex flex-col items-center">
                                <Image src={Photo} height={80} width={80} alt="Imagem de Perfil" className="border-2 rounded-full border-sky-700"/>
                                <span className="text-t-main font-semibold pt-3">User Name</span>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <ActiveLink href={'/'} ><HomeIcon />Home</ActiveLink>
                                <ActiveLink href={'/Patients'} ><Users />Pacientes</ActiveLink>
                                <ActiveLink href={'/Times'} ><CalendarDays />Calendario</ActiveLink>
                                <div className="flex flex-col absolute bottom-2">
                                    <ActiveLink href={'/Login'}><Power />Desconectar</ActiveLink>
                                </div>
                            </div>
                        </nav>
                    </aside>
                </div>
            </div>
        </>
    )
}

export default SideBar;