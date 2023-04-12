import { history } from '../../core/router';
import { api } from './movements.api';
import { mappers } from './movements.mappers';
import { addMovementRows } from './movements.helpers';
import { onSetValues } from '../../common/helpers';

//cuenta
let account = {
  iban: '',
  alias: '',
  balance: '',
};

//id
const params = history.getParams();

//datos de la cuenta
const isOnAccount = Boolean(params.id);
if (isOnAccount) {
  api.getAccount(params.id).then((result) => {
    console.log(result);
    onSetValues(mappers.accountFromApiToVm(result));
  });
}

//recuperar mapear y mpstrar movimientos
api.getMovements(params.id).then((result) => {
  addMovementRows(mappers.movementsFromApiToVm(result));
});
