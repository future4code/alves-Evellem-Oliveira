/*
Comentários
Interpretacao de codigo
Ex 1.
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)
A variável boleana 1 é verdadeira, e a variável boleana 2 é falsa e a boleana 3 é verdadeira, pois consta "!"
Isso significa que será ao contrário da bool2 que é falsa
resultado da primeira linha será falso, porque && está incluso e bool 1 e bool 2 são diferentes, será falso
resultado da segunda linha falso, pois sao diferentes e não dará true
resultado da terceira linha fiquei confusa pois tem && e || na mesma linha

Ex 2 e 3
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)
Faria o seguinte:
const primeiroNumero = 10
const segundoNumero = 10
const resultado = primeiroNumero + segundoNumero
console.log (resultado)
*/

prompt ("Qual sua idade?")
prompt ("Qual a idade do(a) seu(sua) melhor amigo(a)?")
console.log("Sua idade é maior do que do seu amigo?")

1 > 2
2 > 2
3 > 2

1>= 2
2>= 2
3>= 2

const condicao = 31>29
console.log(condicao) 

const primeiroValor = 31
const segundoValor = 29
const resultado = primeiroValor - segundoValor
console.log(resultado)


prompt ("Insira um número par")
const NumerosPares = 0; 2; 4; 6; 8; 10; 12; 14; 16; 18; 20; 22; 24; 26; 28; 30; 32; 34; 36; 38; 40; 42; 44; 46; 52; 54; 56
const restoDaDivisao = NumerosPares % 4
console.log(resultado)


prompt ("Qual a sua idade em anos?")