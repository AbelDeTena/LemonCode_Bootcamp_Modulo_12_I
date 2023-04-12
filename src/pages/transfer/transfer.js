console.log('hola');
import { history, routes } from '../../core/router';
import { api } from './trasnsfer.api';
import { setAccountOptions } from './transfer.helpers';
import { onUpdateField, onSetError, onSubmitForm, onSetFormErrors } from '../../common/helpers';
import { formValidation } from './transfer.validations';

//id
const params = history.getParams();

//menu select - recuperando las cuentas de la api
api.getAccountsList().then((result) => {
  setAccountOptions(result, params.id);
});

//formulario
let transferData = {
  account: '',
  iban: '',
  name: '',
  amount: '',
  concept: '',
  notes: '',
  date: '',
  email: '',
};

// cuenta al iniciar
if (params.id) {
  transferData.account = params.id;
} else {
  transferData.account = 1;
}
//actualizar cuenta
const selectAccount = document.getElementById('select-account');
selectAccount.addEventListener('change', () => {
  transferData.account = selectAccount.value;
  console.log(transferData);
});

//datos a rellenar del formulario
const form = [
  'iban',
  'name',
  'amount',
  'concept',
  'notes',
  'day',
  'month',
  'year',
  'email',
];
//capturar y actulizar datos
form.forEach((element) => {
  onUpdateField(element, (event) => {
    const value = event.target.value;
    transferData = {
      ...transferData,
      [element]: value,
    };
    // actualizar el campo fecha
    if (element === "day" |element === "month" | element === "year"){
      transferData = {
        ...transferData,        
        date: `${transferData.year}-${transferData.month}-${transferData.day}`,
    }
    formValidation.validateField("date", transferData.date)
    .then((result) => onSetError("date", result));
  }
    //validar datos
    formValidation
      .validateField(element, value)
      .then((result) => onSetError(element, result));

    console.log(transferData);
  });
});

onSubmitForm('transfer-button', () => {
  formValidation.validateForm(transferData).then(result => {
      onSetFormErrors(result);

      if (result.succeeded) {
          api.sendTransferData(transferData).then(() => {
              { history.push(routes.accountList) };
              alert('Transferencia realizada con éxito');
          });
      };
  });    
})
