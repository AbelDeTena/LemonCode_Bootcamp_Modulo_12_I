import Axios from 'axios';

const url = `${process.env.BASE_API_URL}`;

const endPoint = {
    movements: "/movements",
    account: "/account"
};


export const api = {
    getMovements: (accountId) =>
    Axios.get(`${url}${endPoint.movements}`).then((result) => {
        return result.data.filter((movement) => movement.accountId === accountId);
    }),

    getAccount: (id) =>
    Axios.get(`${url}${endPoint.account}/${id}`).then(result => {
      return result.data;
    }),
  };