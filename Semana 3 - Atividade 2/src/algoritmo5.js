const a = [1, 2, 3, 4, 5];
const b = [6, 7, 8, 9, 10];

const somatorio = (acumulador, item) => {
    acumulador += item
    return acumulador;
};

let somaTotal = a.reduce(somatorio, b.reduce(somatorio, 0));
console.log(somaTotal);