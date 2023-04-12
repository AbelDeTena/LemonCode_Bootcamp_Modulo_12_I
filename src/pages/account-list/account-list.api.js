//En este archivo se simula la conexión con el servidor mediante Axios para obtener los datos de la cuenta del usuario logeado 
import Axios from "axios";

const url = `${process.env.BASE_API_URL}/account-list`;

export const getAccountList = () => Axios.get(url).then(result=>{return result.data});