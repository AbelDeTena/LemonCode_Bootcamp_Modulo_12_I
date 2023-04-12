//En este archivo se mapean los datos para hacerlos compatibles entre el formato del servidor y los de nuestro js

export const mappers = {
  fromApiToVm: (account) => {
    return {
      ...account,
      alias: account.name,
    };
  },

  fromVmToApi: (account) => {
    return {
      ...account,
      name: account.alias,
    };
  },
};
