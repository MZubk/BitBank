import {
    Cliente
} from "./Client.js";

import {
    ContaCorrente
} from "./ContaCorrente.js";

import {
    ContaPoupanca
} from "./ContaPoupanca.js";

const cliente1 = new Cliente("Murillo", 123456789);

const contaCorrenteMurillo = new ContaCorrente(cliente1, 1001);
contaCorrenteMurillo.depositar(500);
contaCorrenteMurillo.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
contaPoupanca.sacar(10);

console.log(contaPoupanca);
console.log(contaCorrenteMurillo);