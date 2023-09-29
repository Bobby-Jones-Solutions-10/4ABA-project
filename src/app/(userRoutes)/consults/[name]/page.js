'use client'
import FloatInput from '@/components/FloatInput';
import { useState } from 'react';
import dados from '../../../../../dados.json';
import '../../../../app/globals.css';


export async function getStaticPaths() {
  const paths = dados.consults.map((postAtual) => {
    console.log(paths)
    return { params: { name: `${postAtual.tittle}` } };
  })

  return {
    paths: paths,
    fallback: false // false or 'blocking'
  };
}

export const getStaticProps = async (context) => {
  
  const name = context.params.name; //nome do arquivo na url
  const post = dados.consults.find((currentPost) => {
    if (currentPost.tittle === name) {
      console.log('currentPost = ' + currentPost)
      return true;
    }
    return false;
  })
  console.log('post = ' + post)

  return {
    props: {
      id: post.id,
      tittle: post.tittle,
      date: post.date,
      content: post.content,
      local: post.local
    },
  }
}

const ConsultsByName = (props) => {

  const consults = {
    tittle: props.tittle,
    date: props.date,
    content: props.content,
    id: props.id,
    local: props.local
  };

  const [id, setId] = useState(consults.id)
  const [nomePaciente, setNomePaciente] = useState(consults.tittle)
  const [date, setDate] = useState(consults.date)
  const [content, setContent] = useState(consults.content)
  const [local, setLocal] = useState(consults.local)

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

export default ConsultsByName;
