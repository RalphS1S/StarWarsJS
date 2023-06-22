console.log('Olá, Javascript!')

var userName = 'Ralph'

document.getElementById('user-name').innerHTML = userName


// VARIÁVEIS //
// var nome = 'Mestre Yoda'
// var idade = 100
// var jedi = true

// console.log(typeof nome)
// console.log(typeof idade)
// console.log(typeof jedi)

// Operadores Matemáticos //

// var n1 = 5
// var n2 = 2.5

// console.log(typeof n1)
// console.log(typeof n2)

// var total = n1/n2
// console.log(total)


// var v1 = 5
// var v2 = '5'

// var resultado = v1 == v2
// console.log(resultado)

// var resultado = v1 === v2
// console.log(resultado)

// var resultado = v1 != v2
// console.log(resultado)

// var resultado = v1 !== v2
// console.log(resultado)

// FUNÇÕES //

// function soma(n1, n2){
//     console.log(n1 + n2)
// }

// soma(5, 5)

// function boasVindas(nome){
//     alert(nome + ', sejam bem-vindo(a)')
// }

// boasVindas('Ralph')

// function soma(n1, n2){
//     return n1 + n2
// }

// var resultado = soma(5,5)
// console.log(resultado)


// BDD VALIDAÇÕES //

// Sendo um cliente correntista do banco
// Posso sacar dinheiro em caixas eletrônicos
// Para poder comprar em lugares que não aceitam o cartão de débito ou crédito

// var saldo = 1000

// function saque(valor){

//     if (valor > saldo){
//         console.log('Valor do saque superior ao saldo')
//     } else if (valor > 700) {
//         console.log('Valor do saque é superior ao máximo permito por operação')
//     } else {    
//         saldo = saldo - valor
//     }
    
// }

// saque(701)
// console.log(saldo)

// Cenário 1: Saque com sucesso
// Dado que meu saldo é de 1000 reais
// Quando faço um saque a 500 reais
// Então o valor do saque deve ser deduzido do meu saldo 


// Cenário 2: Saque com valor superior ao saldo
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 1001 reais
// Então não deve deduzir do meu saldo 
// E deve mostrar uma mensagem de alerta informando que o valor é superio ao saldo

// Cenário 3: Saque com valor máximo
// Dado que meu saldo é de 1000 reais
// E o valor máximo por operação é de 700
// Quando faço o saque no valor de 701 reais
// Então não deve deduzir do meu saldo
// E deve mostra uma mensagem de alerta informando que o valro é superior ao máximo permitido 


// ARRAYS //

// var gaveteiro = ['Meias', 'Gravatas', 'Documentos', 'Salgadinhos']

// console.log(gaveteiro[3])

// var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']

// console.log(typeof personagens)

// personagens.push('C3pO')
// personagens.push('R2D2')

// //personagens.pop()

// personagens = personagens.filter(function(p){
//     return p !== 'Darth Vader' && p !== 'Princesa Leia'
// })

// personagens = personagens.filter(function(p){
//     return p === 'Mestre Yoda'
// })

// console.log(personagens)

// CONTROLES DE REPETIÇÃO (Loops) //

// var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader', 'R2D2']


// personagens.forEach(function(p){
//     console.log(p)
// })

// for (var i in personagens){
//     console.log(personagens[i])
// }

// for(var i = 0; i <= 10; i++){
//     console.log(i)
//     //esse código vai ser executado até a condição retornar false
// }


// OBJETOS //

var yoda = {
    nome: 'Mestre Yoda',
    idade: 100,
    jedi: true,
    mostraIdade: function() {
        console.log(`A idade do ${this.nome} é ${this.idade} anos.`)
    }
}

console.log(yoda)
yoda.mostraIdade()

// CONSTANTES //

// const nome = 'Darth Vader'
// console.log(nome)

// var nome = 'Mestre Yoda'
// console.log(nome)