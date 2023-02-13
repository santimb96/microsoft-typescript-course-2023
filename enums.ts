enum ContractStatus {
  Permanent,
  Temp,
  Apprentice,
}

const returnContractStatus = (status: number): string => {
  return ContractStatus[status];
};

console.log(returnContractStatus(1));

// Suponiendo que el status del contrato sea un número "x" que nos proporciona la base de datos
// y que necesitamos devolver el string que corresponde a ese número, podemos hacerlo de la manera mostrada arriba

//Si queremos que los valores empiecen por un número en concreto, podemos hacerlo de la siguiente manera:

// enum ContractStatus {
//   Permanent = 1,
//   Temp, //sería 2
//   Apprentice //sería 3
// }
