import {
    Cliente
} from "./Client.js";

import {
    ContaCorrente
} from "./ContaCorrente.js";

import {
    ContaPoupanca
} from "./ContaPoupanca.js";

import {
    ContaSalario
} from "./ContaSalario.js";

const cliente1 = new Cliente("Murillo", 123456789);

const contaCorrenteMurillo = new ContaCorrente(cliente1, 1001);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);

console.log(contaSalario);