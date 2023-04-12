//funciones importadas
import {
  onUpdateField,
  onSubmitForm,
  onSetError,
  onSetFormErrors,
  onSetValues,
} from '../../common/helpers/element.helpers';
import { formValidation } from './account.validations';
import { history } from '../../core/router';
import { api } from './account.api';
import { mappers } from './account.mappers';

//datos de la cuenta
let account = {
  id: '',
  type: '',
  alias: '',
};

//Estado de la pagina (Booleano, modo edición o recuperar la id)
const params = history.getParams();
const isEditMode = Boolean(params.id);

if (isEditMode) {
    api.getAccount(params.id).then(result => {
    account = mappers.fromApiToVm(result);
    onSetValues(account);
  });
}

//captura y validacion de los datos de la cuenta del campo "type"
onUpdateField('type', (event) => {
  const value = event.target.value;
  account = {
    ...account,
    type: value,
  };
  formValidation.validateField('type', account.type).then((result) => {
    onSetError('type', result);
  });
});

//captura y validacion de los datos de la cuenta del campo "alias"
onUpdateField('alias', (event) => {
  const value = event.target.value;
  account = {
    ...account,
    alias: value,
  };
  formValidation.validateField('alias', account.alias).then((result) => {
    onSetError('alias', result);
  });
});

//captura de los datos y validacion del formulario al pulsar guardar
onSubmitForm('save-button', () => {
  formValidation.validateForm(account).then((result) => {
    onSetFormErrors(result);
    if (result.succeeded){        
onSave().then(result =>{history.back()})
    } 
  });
});

const onSave = () => {
    const apiAccount = mappers.fromVmToApi(account);
    return isEditMode ? api.updateAccount(apiAccount) : api.insertAccount(apiAccount);
}
