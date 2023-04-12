//En este archivo se simulan las tres opciones de conexion con el servidor necesarias
import  Axios  from 'axios';

const url = `${process.env.BASE_API_URL}/account`;

export const api = {
  //En el caso de necesitar recuperar los datos del servidor.
  getAccount: (id) =>
    Axios.get(`${url}/${id}`).then(result => {
      return result.data;
    }),

  //En el caso de actualizar una cuenta que esta siendo editada.
  updateAccount: (account) =>
    Axios.put(`${url}/${account.id}`, account).then(result => {
      return result.data;
    }),

  //En el caso de crear un nueva cuenta, si no estamos en modo edición.
  insertAccount: (account) =>
    Axios.post(`${url}/${account.id}`, account).then(result => {
      return result.data;
    }),
};
