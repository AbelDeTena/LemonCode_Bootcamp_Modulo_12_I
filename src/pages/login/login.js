//Funciones importadas
import {
  onUpdateField,
  onSubmitForm,
  onSetError,
  onSetFormErrors,
} from '../../common/helpers';
import { isValidLogin } from './login.api';
import { formValidation } from './login.validations';
import { history, routes } from '../../core/router';

//Formulario
let login = {
  user: '',
  password: '',
};

//Navegacion
const onNavigate = (isValid) => {
  if (isValid) {
    history.push(routes.accountList);
  } else {
    alert('Login no válido');
  }
};

//Usuario
//Captura de los datos de entrada
onUpdateField('user', (event) => {
  const value = event.target.value;
  login = {
    ...login,
    user: value,
  };
  // Validación de los datos de entrada
  formValidation
    .validateField('user', login.user)
    .then((result) => onSetError('user', result));
});

//Contraseña
//Captura de los datos de entrada
onUpdateField('password', (event) => {
  const value = event.target.value;
  login = {
    ...login,
    password: value,
  };
  // Validación de los datos de entrada
  formValidation
    .validateField('password', login.password)
    .then((result) => onSetError('password', result));
});

//Envio
//Captura y validación de datos del formulario
onSubmitForm('login-button', () => {
  formValidation.validateForm(login).then((result) => {
    onSetFormErrors(result);
    //Envio de datos al servidor y navegación
    if (result.succeeded) {
      isValidLogin(login).then((isValid) => {
        console.log(isValid);
        onNavigate(isValid);
      });
    }
  });
});
