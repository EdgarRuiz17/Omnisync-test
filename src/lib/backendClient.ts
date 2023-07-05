import axios from "axios";

const baseUrl = "https://api.openalex.org/"

export const getInstitutions = async (institutionId:string) => {
    return await axios.post(`${baseUrl}institutions/${institutionId}`);
 };