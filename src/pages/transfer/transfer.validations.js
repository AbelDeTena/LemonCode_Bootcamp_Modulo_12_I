import { Validators, createFormValidation } from '@lemoncode/fonk';
import { iban } from '@lemoncode/fonk-iban-validator';
import { laterDate } from '@lemoncode/fonk-later-date-validator';
import { myValidator } from './custom-validations';

const validationSchema = {
  field: {
    account: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    iban: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: iban.validator,
        message: 'No se corresponde con un IBAN válido',
      },
    ],
    name: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    amount: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: Validators.pattern,
        customArgs: { pattern: '^[0-9]*[.,]?[0-9]+$' },
        message: 'Introduzca un valor positivo',
      },
    ],
    concept: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: Validators.minLength,
        customArgs: { length: 10 },
        message: 'Longitud mínima de 10 caracteres',
      },
    ],
    notes: [],
    day: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: Validators.pattern,
        customArgs: { pattern: /^([1-9]|[1-2]\d|3[01])$/ },
        message: 'Fecha no válida',
      },
    ],
    month: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: Validators.pattern,
        customArgs: { pattern: /^([1-9]|1[012])$/ },
        message: 'Fecha no válida',
      },
    ],
    year: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: Validators.pattern,
        customArgs: { pattern: /^2[0-9][2-9][3-9]$/ },
        message: 'Fecha no válida',
      },
    ],
    date: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: laterDate.validator,
        customArgs: {
          parseStringToDateFn: (value) => new Date(value),
          date: new Date(),
        },
        message: 'Fecha no válida',
      },
    ],
    email: [
      {
        validator: Validators.email,
        message: 'Email no válido',
      },
    ],
  },
};

export const formValidation = createFormValidation(validationSchema);
