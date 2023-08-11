'use client'

import Image from 'next/image';
import { Lock, User } from 'lucide-react'
import FloatInput from '@/components/FloatInput';
import '@/app/globals.css'
import { useState } from 'react'
import { prisma } from '../../server/db/client'
import axios from 'axios'


function Main({ posts }) {
    const [isLoading, setLoading] = useState(false)
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.post('/api/posts', { title, content })
        console.log(res.data)
    }


    return (
        <>
            <div className="flex h-screen justify-center items-center" style={{ background: `url("/images/bgLogin.png") no-repeat`, backgroundSize: 'cover' }}>
                <div className='flex flex-col items-center bg-background-color w-4/12 justify-center rounded-xl py-6 space-y-8 shadow-lg shadow-zinc-800 border-3'>
                    <Image src='/images/logo.png' alt='Logo' width={150} height={100} />

                    <form onSubmit={handleSubmit} className="w-8/12 items-center flex-col flex">
                        <div className="mt-4 relative w-full flex space-x-2 items-center">
                            <User strokeWidth={2} width={30} height={30} />
                            <FloatInput value={title} onChange={(e) => setTitle(e.target.value)} placeholder={'Email'} id={'Email'} name={'email'} type={'text'} />
                        </div>
                        <div className="mt-10 relative w-full flex space-x-2 items-center">
                            <Lock strokeWidth={2} width={30} height={30} />
                            <FloatInput value={content} onChange={(e) => setContent(e.target.value)} placeholder={'Senha'} id={'password'} name={'password'} type={'text'} />
                        </div>
                        <button type="submit">
                            Logar
                        </button>
                    </form>

                </div>
            </div>
        </>
    )
}

// export async function getServerSideProps() {
//     // will always run on the server
//     // newest first
//     const posts = await prisma.post.findMany({
//         orderBy: {
//             createdAt: "desc",
//         },
//     })

//     return {
//         props: {
//             posts: JSON.parse(JSON.stringify(posts)),
//         },
//     }
// }

export default Main;
