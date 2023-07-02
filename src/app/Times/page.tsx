import ContainerWeekDay from '@/components/ContainerWeekDay';
import SideBar from '@/components/SideBar';

export default function App() {

  const appointments1 = <div className='container flex flex-col bg-sky-200'>Consulta</div>
  const appointments2 = <div className='container flex flex-col bg-sky-200'>Dentista</div>
  const appointments3 = <div className='container flex flex-col bg-sky-200'>Academia</div>
  
  return (
    <div className='flex'>
      <SideBar />
      <ContainerWeekDay tittle={'Segunda'} tasks={[appointments1, appointments2, appointments3]} />
      <ContainerWeekDay tittle={'Terça'} tasks={[appointments1, appointments2, appointments3]} />
      <ContainerWeekDay tittle={'Quarta'} tasks={[appointments1, appointments2, appointments3]} />
      <ContainerWeekDay tittle={'Quinta'} tasks={[appointments1, appointments2, appointments3]} />
      <ContainerWeekDay tittle={'Sexta'} tasks={[appointments1, appointments2, appointments3]} />
      <ContainerWeekDay tittle={'Sábado'} tasks={[appointments1, appointments2, appointments3]} />
      <ContainerWeekDay tittle={'Domingo'} tasks={[appointments1, appointments2, appointments3]} />
    </div>
  )
}
