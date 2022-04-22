//Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. Diga se esse numero é par ou ímpar
let resultado = 0

function dividir(num1, num2){
    resultado = num1/num2 
    return resultado
}

function paridade(numero){
    
    if (numero % 2 == 0){
        return "o número " + numero + " é par"
    }
    else {
        return "o número " + numero + " é impar"
    }
}

console.log(dividir(27,3.6))

console.log(paridade(resultado))