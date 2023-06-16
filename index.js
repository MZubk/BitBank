import {
    Cliente
} from "./Cliente.js";

import {
    Gerente
} from "./Funcionarios/Gerente.js";

import {
    Diretor
} from "./Funcionarios/Diretor.js";

import {
    SistemaAutenticacao
} from "./SitemaAutenticacao.js";

const diretor = new Diretor("Murillo", 10000, 123456789);
diretor.cadastrarSenha("1234")
const gerente = new Gerente("Ariane", 5000, 123456781);
gerente.cadastrarSenha("123")

const cliente = new Cliente("Claudete", 789456123, "456");

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "1234");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "1234");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);