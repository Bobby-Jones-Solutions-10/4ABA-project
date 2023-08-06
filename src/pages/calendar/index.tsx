import CardWeekDay from '@/components/CardWeekDay';
import SideBar from '@/components/SideBar';
import '@/app/globals.css'


const Calendar = () => {

  return (
    <div className='flex'>
      <SideBar />
      <CardWeekDay tittle={'Segunda'} tasks={[]} />
      <CardWeekDay tittle={'Terça'} tasks={[]} />
      <CardWeekDay tittle={'Quarta'} tasks={[]} />
      <CardWeekDay tittle={'Quinta'} tasks={[]} />
      <CardWeekDay tittle={'Sexta'} tasks={[]} />
      <CardWeekDay tittle={'Sábado'} tasks={[]} />
      <CardWeekDay tittle={'Domingo'} tasks={[]} />
    </div>
  )
}

export default Calendar;
