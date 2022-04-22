//Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro
function paridade(numero){
    if (numero % 2 == 0){
        return "par"
    }
    else {
        return "impar"
    }
}

console.log(paridade(10))