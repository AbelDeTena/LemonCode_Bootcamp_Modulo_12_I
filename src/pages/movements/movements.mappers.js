export const mappers = {
  accountFromApiToVm: (account) => {
    return (account = {
      ...account,
      alias: account.name,
      balance: `${account.balance} €`,
    });
  },

  movementsFromApiToVm: (movementList) => {
    return movementList.map((movement) => ({
      ...movement,
      amount: `${movement.amount} €`,
      balance: `${movement.balance} €`,
      transaction: new Date(movement.transaction).toLocaleDateString(),
      realTransaction: new Date(movement.realTransaction).toLocaleDateString(),
    }));
  },
};
