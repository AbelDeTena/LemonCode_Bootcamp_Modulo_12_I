//Funciones importadas
import { getAccountList } from './account-list.api';
import { addAccountRows } from './account-list.helpers';
import { mapAccountListFromApiToVm } from './account.list.mappers';
import { onUpdateField } from '../../common/helpers/element.helpers';
import { history } from '../../core/router/history';
//Obtención de los datos del servidor, mapeado de los mismos y creación dinamica del DOM.
getAccountList().then((result) => {
  const viewModelAccountList = mapAccountListFromApiToVm(result);
  addAccountRows(viewModelAccountList);
//Navegación a partir del valor de la ID de los Selects
  viewModelAccountList.forEach((account) => {
    onUpdateField(`select-${account.id}`, (event) => {
      const route = event.target.value;
      history.push(route);
    });
  });
});
