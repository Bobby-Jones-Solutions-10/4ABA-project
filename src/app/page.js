'use client'

//imports icones 
import { Lock, User } from 'lucide-react'

//imports locais
import FloatInput from '@/components/FloatInput';
import '@/app/globals.css'

//imports react/next
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Image from 'next/image';
import Link from 'next/link';

//imports zod
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'



const LoginFormSchema = z.object({
    // criação do schema de validação, mapea os campos do formulário
    email: z.string()
    .nonempty('Preencha este campo')
    .email('Digite um E-mail válido')
    .toLowerCase(),
    
    password: z.string()
    .min(6, 'A senha precisa de no mínimo 6 caracteres')
    .max(30, 'A senha não pode contém mais que 30 caracteres')
    .nonempty('Preencha este campo'),
})

function Main() {
    // estilos do campos para o código ficar mais clean
    const styleLabel = 'cursor-text absolute left-10 top-1 bottom-0 font-normal text-gray-600 text-lg transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-7 peer-focus:text-t-main peer-focus:text-lg peer-focus:m-0 peer-focus:font-semibold peer-valid:-top-7 peer-valid:text-t-main peer-valid:font-semibold peer-valid:text-lg peer-valid:m-0 peer-read-only:-top-7 peer-read-only:text-t-main peer-read-only:font-semibold peer-read-only:text-lg peer-read-only:m-0'
    const styleInput = 'pl-4 rounded-xl peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-secondary-color'


    const [output, setOutput] = useState('') // mostra o console.log do formulário

    const [isLoading, setLoading] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    //validação de formulário
    const { register, handleSubmit, formState: { errors } } = useForm({
        //register: registra os campos do formulário
        //handleSubmit: acionada quando aperto o botão de login
        //formState: retorna o estado do formulário
        //touched: retorna se o campo foi tocado
        //mode: definição de quando a validação ira ocorrer
        resolver: zodResolver(LoginFormSchema),
        touched: true,
        mode: 'all',  
    })


    function SignInUser(data) {
        // acionada quando aperto o botão de login
        setLoading(true)
        setOutput(JSON.stringify(data, null, 2)) // mostra o console.log do formulário
        
    }



    return (
        <>
            <div className="flex h-screen justify-center items-center bg-[url('/images/bgLogin.png')] bg-cover bg-no-repeat">
                <div className='flex flex-col items-center bg-background-color w    -4/12 justify-center rounded-xl py-6 space-y-8 shadow-lg shadow-zinc-800 border-3'>
                    <Image src='/images/logo.png' alt='Logo' width={150} height={100} />
                    <form onSubmit={handleSubmit(SignInUser)} className="w-full gap-8 flex-col flex">
                        <div className='flex w-full flex-col px-14 justify-center items-center gap-8'>
                            <div className='flex flex-col w-full'>
                                <div className='flex relative w-full space-x-2 items-center justify-center'>
                                    <User strokeWidth={2} width={30} height={30} />
                                    <input {...register('email')} onChange={e => setEmail(e.target.value)} value={email} id={'email'} className={styleInput} type='text' />
                                    <label htmlFor='email' className={styleLabel}>Email
                                    </label>
                                </div>
                                {errors.email && <span>{errors.email.message}</span>}
                            </div>
                            <div className='flex flex-col w-full'>
                                <div className='flex relative w-full space-x-2 items-center justify-center'>
                                    <Lock strokeWidth={2} width={30} height={30} />
                                    <input {...register('password')} onChange={e => setPassword(e.target.value)} value={password} id='password' className={styleInput} type='password' />
                                    <label htmlFor='password' className={styleLabel}>Senha</label>
                                </div>
                                {errors.password && <span>{errors.password.message}</span>}
                            </div>
                        </div>
                        <div className='flex w-full flex-col justify-center items-center'>
                            <button type='submit' className='bg-green-600 flex justify-center font-semibold py-1 border border-zinc-500 text-lg w-6/12 text-center items-center rounded-lg hover:border-black hover:bg-green-700' >
                                Logar
                            </button>
                        </div>
                        <div className="flex w-full flex-row px-4">
                            <div className="justify-start flex items-left w-6/12">
                                <Link href='/register' className='text-green-700 font-semibold hover:underline'>Cadastre-se</Link>
                            </div>
                            <div className="justify-end flex w-6/12">
                                <Link href='#' className='text-green-700 font-semibold hover:underline'>Esqueci a senha</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Main;
