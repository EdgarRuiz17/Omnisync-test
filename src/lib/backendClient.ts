import axios from "axios";

const baseUrl = "https://api.openalex.org"

export const getInstitutions = async () => {
    return await axios.get<institutionResponse>(`${baseUrl}/institutions`);
 };