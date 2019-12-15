/* remove os 2 primeiros indices de process.argv */
const ingredientes = process.argv.slice(2)


/* variaveis de ambiente */
const {
    DEBUG,
    USUARIO
} = process.env

console.log('usuario: ', USUARIO)


if (DEBUG === 'true') {
    console.log('estamos em modo de desenvolvimento')
}


/* for (var ingrediente of ingredientes) {
    console.log(ingrediente.toUpperCase())
} 
igual ao de baixo
*/
const imprimirIngrediente = i => {
    console.log(i.toUpperCase())
}
ingredientes.forEach(imprimirIngrediente)

console.log(ingredientes)
console.log('Hello World')