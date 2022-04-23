//`Tabuada` Faça um programa que dado um número, imprime no (console.log) a tabuada do mesmo de 1 a 10

function tabuada(numero){
    for( let i = 1; i <=10; i++){
        console.log(numero + "*" + i + "=" + numero*i); 
    }
    
}

tabuada(6);