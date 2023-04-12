//En este archivo se crea la función de mapeado, que transforma los datos "en bruto" obtenidos del servidor al formato de trabajo que necesitamos. 

const mapAccountFromApiToVm = (account) => {
  return {
    id: account.id,
    iban: account.iban,
    name: account.name,
    balance: `${account.balance} €`,
    lastTransaction: new Date(account.lastTransaction).toLocaleDateString(),
  };
};

export const mapAccountListFromApiToVm = (accountList) => {
  return accountList.map((account) => mapAccountFromApiToVm(account));
};
