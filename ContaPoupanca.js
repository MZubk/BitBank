import {
    Conta
} from "./Conta.js";
import {
    ContaCorrente
} from "./ContaCorrente.js";

export class ContaPoupanca extends Conta {
    constructor(saldoInicial, cliente, agencia) {
        super(saldoInicial, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }
}