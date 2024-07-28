import api from "../api/api"
import AddressType from "../types/addressType";

const getCep = (cep: string): Promise<AddressType> => {
    return api.get<AddressType>(`/${cep}/json`).then((response) => {
        return response.data;
    })
}

export default getCep;