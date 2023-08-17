'use client'

import Image from 'next/image';
import { Lock, User } from 'lucide-react'
import FloatInput from '@/components/FloatInput';
import '@/app/globals.css'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

function Main() {

    const styleLabel = 'cursor-text absolute left-2 top-1 bottom-0 font-normal text-gray-600 text-lg transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-7 peer-focus:text-t-main peer-focus:text-lg peer-focus:m-0 peer-focus:font-semibold peer-valid:-top-7 peer-valid:text-t-main peer-valid:font-semibold peer-valid:text-lg peer-valid:m-0 peer-read-only:-top-7 peer-read-only:text-t-main peer-read-only:font-semibold peer-read-only:text-lg peer-read-only:m-0'

    const styleInput = 'pl-4 rounded-xl peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-secondary-color'

    const [output, setOutput] = useState('')

    const [isLoading, setLoading] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { register, handleSubmit } = useForm()


    function createUser(data) {
        setOutput(JSON.stringify(data, null, 2))
        console.log(data)
        setLoading(true)
    }



    return (
        <>
            <div className="flex h-screen justify-center items-center bg-[url('/images/bgLogin.png')] bg-cover bg-no-repeat">
                <div className='flex flex-col items-center bg-background-color w-4/12 justify-center rounded-xl py-6 space-y-8 shadow-lg shadow-zinc-800 border-3'>
                    <Image src='/images/logo.png' alt='Logo' width={150} height={100} />
                    <form onSubmit={handleSubmit(createUser)} className="w-full gap-8 flex-col flex">
                        <div className='flex w-full flex-col px-14 justify-center items-center gap-8'>
                            <div className="relative w-full flex space-x-2 items-center">
                                <User strokeWidth={2} width={30} height={30} />
                                <div className='flex relative w-full'>
                                    <input {...register('email')} value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' id='Email' type='text' className={styleInput} />
                                    <label htmlFor={'email'} className={styleLabel}>Email</label>
                                </div>
                            </div>
                            <div className="relative w-full flex space-x-2 items-center">
                                <Lock strokeWidth={2} width={30} height={30} />
                                <div className='flex relative w-full'>
                                    <input className={styleInput} {...register('password')} value={password} onChange={e => setPassword(e.target.value)} placeholder={'Senha'} id={'password'} type={'password'} />
                                    <label htmlFor={'email'} className={styleLabel}>Password</label>
                                </div>
                            </div>
                        </div>
                        <div className='flex w-full flex-col justify-center items-center'>
                            <button type='submit' className='bg-green-600 flex justify-center font-semibold py-1 border border-zinc-500 text-lg w-6/12 text-center items-center rounded-lg hover:border-black hover:bg-green-700' >
                                Logar
                            </button>
                        </div>
                        <pre>{output}</pre>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Main;
