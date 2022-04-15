//Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor
function idade(numero){
    if (numero <= 2004){
        return "você é maior de idade"
    }
    else{
        return "barrado no baile! vá pra casa"
    }
}

console.log(idade(1990))