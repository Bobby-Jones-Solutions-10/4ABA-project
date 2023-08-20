import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const createUserSchema = z.object({
    name: z.string()
        .nonempty('Preencha este campo')
        .max(40, 'Este campo deve ter no máximo 40 caracteres')
        .min(5, 'Este campo deve ter no mínimo 5 caracteres')
        .trim(),

    email: z.string()
        .nonempty('Preencha este campo')
        .email('Digite um email válido')
        .toLowerCase()
        .trim(),

    password: z.string()
        .nonempty('Preencha este campo')
        .min(6, 'Este campo deve ter no mínimo 6 caracteres')
        .max(20, 'Este campo deve ter no máximo 20 caracteres')
        .trim(),

})


const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(createUserSchema),
        

    })

    return (
        <div>
            <div>
                <form>
                    <input type="text" placeholder="Nome" />
                    
                </form>
            </div>
        </div>
    )

}

export default Register;
