//`Fatorial` | Crie uma função que irá receber um número e retornar o fatorial dele. por exemplo: 3! = 3 * 2 * 1 // 6 

function fatorial(numero){
    numerosAnteriores = []
    for( let i = numero; i >0; i--){
        numerosAnteriores.push(i) 
    }
    console.log(numerosAnteriores)
}

fatorial(10)