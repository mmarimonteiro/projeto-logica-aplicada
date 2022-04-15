//Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente
function devolverDiaSemana(numero) {
    if(numero == 1){
        return "domingo"
    }
    if(numero == 2){
        return "segunda-feira"
    }
    if(numero == 3){
        return "terça-feira"
    }
    if(numero == 4){
        return "quarta-feira"
    }
    if(numero == 5){
        return "quinta-feira"
    }
    if(numero == 6){
        return "sexta-feira"
    }
    if(numero == 7){
        return "sábado"
    }
    else{
        return "número inválido"
    }
}

console.log(devolverDiaSemana(2))