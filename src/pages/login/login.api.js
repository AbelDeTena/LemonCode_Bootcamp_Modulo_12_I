//En este archivo se simula la conexión mediante Axios con el servidor para validar los datos del formulario. 
import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/login`;

export const isValidLogin = login =>
 Axios.post(url, login).then(({ data }) => data)