import { CalendarDays, HomeIcon, Power, Users, GanttChartSquareIcon } from "lucide-react";
import Image from "next/image";
import ActiveLink from '@/components/ActiveLinkProps';

const SideBar = () => {

    return (
        <>
            <div className="h-screen w-2/12 flex flex-col">
                <aside className="flex w-full flex-col h-full relative bg-secondary-color py-12">
                    <nav className="space-y-8 text-lg">
                        <div className="container flex flex-col items-center">
                            <Image src='/images/psicologaPhoto.png' height={80} width={80} alt="Imagem de Perfil" className="border-2 rounded-full border-sky-700" />
                            <span className="text-t-main font-semibold pt-3">User Name</span>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <ActiveLink href={'/home'} ><HomeIcon />Home</ActiveLink>
                            <ActiveLink href={'/patients'} ><Users />Pacientes</ActiveLink>
                            <ActiveLink href={'/calendar'} ><CalendarDays />Calendario</ActiveLink>
                            <ActiveLink href={'/services'} ><GanttChartSquareIcon />Consultas</ActiveLink>
                            <div className="flex flex-col absolute bottom-2">
                                <ActiveLink href={'/'}><Power />Desconectar</ActiveLink>
                            </div>
                        </div>
                    </nav>
                </aside>
            </div>
        </>
    )
}

export default SideBar;
