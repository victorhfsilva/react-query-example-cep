import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import InputMask from 'react-input-mask';
import './styles.css'

const CepSchema = z.object({
    cep: z.string().min(9, "Cep must contain 8 numbers.").max(9, "Cep must contain 8 numbers.").regex(/^\d{5}-\d{3}$/, "Formato inválido.")
})

type CepFormData = z.infer<typeof CepSchema>;

const Home = () => {

    const navigateTo = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<CepFormData>({
        resolver: zodResolver(CepSchema),
    });

    const onSubmit = (data: CepFormData) => {
        const formattedCep = data.cep.replace("-", "");
        navigateTo(`/cep/${formattedCep}`);
    }

    return (
        <div className='body-div'>
            <h1>Busca Cep</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='cep-div'>
                    <label htmlFor="cep">CEP:</label>
                    <InputMask mask="99999-999" id="cep" type="text" {...register('cep')} />
                    {errors.cep && <span>{errors.cep.message}</span>}
                </div>
                <div className='submit-div'>
                    <button type="submit">Search</button>
                </div>
            </form>
        </div>
    )

}

export default Home;