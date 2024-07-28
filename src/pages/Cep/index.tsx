import { useQuery } from "@tanstack/react-query";
import getCep from "../../services/getCep";
import './styles.css'
import { useParams } from "react-router-dom";
import AddressType from "../../types/addressType";
import { AxiosError } from "axios";
import { ThreeDot } from "react-loading-indicators";

const Cep = () => {
    const { cep } = useParams<string>()

    const { data, error, isLoading } = useQuery<AddressType, AxiosError>({
        queryKey: ['cep', cep],
        queryFn: () => getCep(cep || "")
    })

    if (isLoading) return (
        <div className="address-div">
            <ThreeDot color="#888" size="medium" text="" textColor="" />
        </div>
    )

    if (error) return <div className="address-div">Error: {error.message}</div>;

    if (data?.cep === undefined) {
        return <div className="address-div">Cep not found.</div>
    }

    return (
        <div className="address-div">
            <h3>CEP</h3>
            <div className="address-data-div">
                <p>CEP: {data?.cep}</p>
                <p>Address: {data?.logradouro}</p>
                <p>Complemento: {data?.complemento}</p>
                <p>Bairro: {data?.bairro}</p>
                <p>Localidade: {data?.localidade}</p>
                <p>UF: {data?.uf}</p>
            </div>
        </div>
    )

}

export default Cep;