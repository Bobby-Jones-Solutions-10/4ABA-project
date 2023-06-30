import Image from "next/image"
import Photo from '@/common/images/psicologaPhoto.png'

export const Perfil = () => {
    return <>
        <div className="container flex flex-col items-center">
            <Image src={Photo} height={80} width={80} alt="Imagem de Perfil" />
            <span className="text-t-main font-semibold pt-3">User Name</span>
        </div>
    </>
}