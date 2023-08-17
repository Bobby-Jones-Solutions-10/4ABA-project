'use client'

import Image from 'next/image';
import { Lock, User } from 'lucide-react'
import FloatInput from '@/components/FloatInput';
import '@/app/globals.css'
import { useState } from 'react'

function Main() {

    const [isLoading, setLoading] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function login(e: any) {
        e.preventDefault()
        setLoading(true)

    }

    return (
        <>
            <div className="flex h-screen justify-center items-center bg-[url('/images/bgLogin.png')] bg-cover bg-no-repeat">
                <div className='flex flex-col items-center bg-background-color w-4/12 justify-center rounded-xl py-6 space-y-8 shadow-lg shadow-zinc-800 border-3'>
                    <Image src='/images/logo.png' alt='Logo' width={150} height={100} />
                    <form onSubmit={login} className="w-full gap-8 flex-col flex">
                        <div className='flex w-full flex-col px-14 justify-center items-center gap-8'>
                            <div className="relative w-full flex space-x-2 items-center">
                                <User strokeWidth={2} width={30} height={30} />
                                <FloatInput value={email} onChange={e => setEmail(e.target.value)} placeholder={'Email'} id={'Email'} name={'email'} type={'text'} />
                            </div>
                            <div className="relative w-full flex space-x-2 items-center">
                                <Lock strokeWidth={2} width={30} height={30} />
                                <FloatInput value={password} onChange={e => setPassword(e.target.value)} placeholder={'Senha'} id={'password'} name={'password'} type={'password'} />
                            </div>
                        </div>
                        <div className='flex w-full flex-col justify-center items-center'>
                            <button type='submit' className='bg-green-600 flex justify-center font-semibold py-1 border border-zinc-500 text-lg w-6/12 text-center items-center rounded-lg hover:border-black hover:bg-green-700' >
                                Logar
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Main;
