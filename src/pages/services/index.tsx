import Link from 'next/link';
import { useRouter } from 'next/router';
import { Suspense } from 'react'
import dados from '../../../dados.json'
import ServicesPosts from '@/components/ServicesPosts'
import SideBar from '@/components/SideBar';
import '../../app/globals.css'
import IfLoading from '@/components/IfLoaging';

const Services = () => {
    const router = useRouter()

    const services = dados.services


    return (
        <>
            <div className='flex flex-row w-screen h-full'>
                <SideBar />

                <div className='flex flex-wrap w-9/12 items-center justify-start gap-4 mt-12 ml-12 h-full'>

                    <div className='bg-green-500 flex flex-row border-2 rounded-lg p-4 m-1'>
                        <Link href={'services/create'}>
                            Criar consulta
                        </Link>
                    </div>

                    <div className='flex flex-wrap w-full h-full gap-4'>
                        <Suspense fallback={<IfLoading />}>
                            {
                                services.map(({ id, title, content, date, local }) => (
                                    <ServicesPosts key={id} content={content} date={date} title={title} local={local} />
                                ))
                            }
                        </Suspense>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;
