import Axios from 'axios';

const url = `${process.env.BASE_API_URL}`;
const endPoints = {
  list: '/account-list',
  account: '/account',
  transfer: '/transfer',
};

export const api = {
  getAccountsList: () =>
    Axios.get(`${url}${endPoints.list}`).then((result) => {
      return result.data;
    }),
  getAccount: (id) =>
    Axios.get(`${url}${endPoints.account}/${id}`).then((result) => {
      return result.data;
    }),
  sendTransferData: (transferData) =>
    Axios.post(`${url}${endPoints.transfer}`, transferData).then((result) => {
      return result.data;
    }),
};
