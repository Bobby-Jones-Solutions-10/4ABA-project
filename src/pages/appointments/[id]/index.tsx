import Link from 'next/link';
import { useRouter } from 'next/router'


const Appointments = () => {

   const router = useRouter()
   return <Link href={`appointments/${router.query.slug}`}>clique</Link>
}

export default Appointments;
   