export class SistemaAutenticacao {
    static login(autenticavel, senha) {
        if (SistemaAutenticacao.EhAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha);
        }
        return false;
    }
    static EhAutenticavel(autenticavel) {
        return "autenticar" in autenticavel &&
            autenticavel.autenticar instanceof Function;
    }
}