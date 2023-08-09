'use client'

import Image from 'next/image';
import { Lock, User } from 'lucide-react'
import FloatInput from '@/components/FloatInput';
import '@/app/globals.css'
import { useState } from 'react'
import { GetServerSideProps } from 'next';
import { PrismaClient } from '@prisma/client';


// export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {

// }

function Main() {

    const [isLoading, setLoading] = useState(false)
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <div className="flex h-screen justify-center items-center" style={{ background: `url("/images/bgLogin.png") no-repeat`, backgroundSize: 'cover' }}>
                <div className='flex flex-col items-center bg-background-color w-4/12 justify-center rounded-xl py-6 space-y-8 shadow-lg shadow-zinc-800 border-3'>
                    <Image src='/images/logo.png' alt='Logo' width={150} height={100} />
                    <form className="w-8/12 items-center flex-col flex">
                        <div className="mt-4 relative w-full flex space-x-2 items-center">
                            <User strokeWidth={2} width={30} height={30} />
                            <FloatInput placeholder={'Email'} id={'Email'} name={'email'} type={'email'} />
                        </div>
                        <div className="mt-10 relative w-full flex space-x-2 items-center">
                            <Lock strokeWidth={2} width={30} height={30} />
                            <FloatInput placeholder={'Senha'} id={'password'} name={'password'} type={'password'} />
                        </div>
                        <button>
                            Logar
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Main;
