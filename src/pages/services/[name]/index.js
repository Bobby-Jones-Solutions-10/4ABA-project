
import { useRouter } from 'next/router'
import dados from '../../../../dados.json'
import { useState } from 'react';
import '../../../app/globals.css'
import FloatInput from '@/components/FloatInput';


export async function getStaticPaths() {

    const paths = dados.services.map((postAtual) => {
        return { params: { name: `${postAtual.title}` } };
    })

    return {
        paths: paths,
        fallback: false // false or 'blocking'
    };
}

export const getStaticProps = async (context) => {

    const name = context.params.name;
    const post = dados.services.find((currentPost) => {
        if (currentPost.title === name) {
            return true;
        }
        return false;
    })

    return {
        props: {
            id: post.id,
            title: post.title,
            date: post.date,
            content: post.content,
            local: post.local
        },
    }
}

const ServicesByName = (props) => {
    const router = useRouter()

    const services = {
        title: props.title,
        date: props.date,
        content: props.content,
        id: props.id,
        local: props.local
    };

    const [id, setId] = useState(services.id)
    const [nomePaciente, setNomePaciente] = useState(services.title)
    const [date, setDate] = useState(services.date)
    const [content, setContent] = useState(services.content)
    const [local, setLocal] = useState(services.local)

    return (
        <>
            <div className='h-screen w-screen flex flex-row items-center justify-center'>
                <div className='flex flex-row gap-2 rounded-lg bg-secondary-color justify-center p-16 w-10/12'>
                    <FloatInput type='number' name='id' id={'id'} placeholder='ID' onChange={(e) => setId(e.target.value)} value={id} readOnly />

                    <FloatInput type='text' name='local' id={'local'} placeholder='Local' onChange={(e) => setLocal(e.target.value)} value={local} />

                    <FloatInput type='nomePaciente' name='nomePaciente' id={'nomePaciente'} placeholder='Nome do Paciente' onChange={(e) => setNomePaciente(e.target.value)} value={nomePaciente} />

                    <FloatInput type='text' name='content' id={'content'} placeholder='Conteudo' onChange={(e) => setContent(e.target.value)} value={content} />
                </div>
            </div>
        </>
    )
}

export default ServicesByName;
