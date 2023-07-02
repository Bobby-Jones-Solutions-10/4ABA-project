'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Lock, User } from 'lucide-react'
import FloatiInput from '@/components/FloatiInput/index';


function Login() {
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        function simulateNetworkRequest() {
            return new Promise((resolve) => setTimeout(resolve, 2000));
        }

        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading]);

    const handleClick = () => setLoading(true);



    return <>
        <div className="flex h-screen justify-center items-center" style={{ background: `url("/images/bgLogin.png") no-repeat`, backgroundSize: 'cover'}}>
            <div className='flex flex-col items-center bg-background-color w-4/12 justify-center rounded-xl py-6 space-y-8 shadow-lg shadow-zinc-800 border-3'>
                <Image src='/images/logo.png' alt='Logo' width={150} height={100} />
                <form className="w-8/12 items-center flex-col flex" action="" method="POST">
                    <div className="mt-4 relative w-full flex space-x-2 items-center">
                        <User strokeWidth={2} width={30} height={30} />
                        <FloatiInput placeHolder={'Email'} id={'Email'} name={'email'} typeInput={'email'} />
                    </div>
                    <div className="mt-10 relative w-full flex space-x-2 items-center">
                        <Lock strokeWidth={2} width={30} height={30} />
                        <FloatiInput placeHolder={'Senha'} id={'password'} name={'password'} typeInput={'password'} />
                    </div>
                    <Link href={'/home'} className="mt-8 w-8/12 py-2 rounded-xl bg-success hover:bg-green-600 text-white font-semibold text-center block focus:outline-none focus:ring focus:ring-offset-2 focus:bg-green focus:ring-opacity-80 cursor-pointer">Logar</Link>
                </form>
            </div>
        </div>
    </>
}


export default Login;