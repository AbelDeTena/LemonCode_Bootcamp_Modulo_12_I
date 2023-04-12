import { Validators, createFormValidation } from '@lemoncode/fonk';

//En este archivo se utiliza la libreria fonk de lemoncode, para establecer las validaciones de los campos del formulario
const validationSchema = {
  field: {
    type: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    alias: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
  },
};

export const formValidation = createFormValidation(validationSchema);
