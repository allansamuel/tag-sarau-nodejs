function gerarNumero() {
    return 6
}
// =
const gerarNumero = () => 6



function add(numero, funcaoParaGerarNumero /* = gerarNumero | assume o valor se não for preenchido */ ) {
    return numero + funcaoParaGerarNumero()
}

/* add(1, gerarNumero()) | Errado*/

add(1, gerarNumero) /* correto */