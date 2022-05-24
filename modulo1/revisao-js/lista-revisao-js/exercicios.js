// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
     return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a- b);
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    return array.filter (n => n % 2 === 0 );
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let numerosPares = []
    
    for(let num of array){
        if(num % 2 == 0 ){
           numerosPares.push(num ** 2)
  
        }
    }
    return numerosPares
  }
  
  console.log(retornaNumerosPares([12,14,18,20,22]))


// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let numberMaior = 0

  for (let num of array){
    if (num > numberMaior){
         numberMaior = num
    }
    
  }
  return numberMaior
}

console.log(retornaMaiorNumero([8,4,18]))

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numeros = []
    for (let i = 0; numeros.length < n; i+=2){
    numeros.push(i)
    }
    return numeros
}

// EXERCÍCIO 09 - Tentei, mas não consegui
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if ((ladoA + ladoB > ladoC) && (ladoA + ladoC > ladoB) && (ladoB + ladoC > ladoA));{

        if (ladoA == ladoB && ladoB == ladoC) {
            return("Seu triângulo é equilátero!");

        } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
            return ("Seu triângulo é isósceles!");

        } else{ ((ladoA != ladoB) && (ladoA != LadoC) && (ladoB != ladoC));
            return("Seu triângulo é escaleno!");
        }

    }
    }

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort((a, b) => a - b)
    segundoMaior = array[array.length - 2]
    segundoMenor = array[1]
    newArr = [segundoMaior, segundoMenor]
    return newArr
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(forrestGump) {
    const atores = []
    for (let i = 0; i <= forrestGump.atores.length -1; i++){
    atores.push (`${forrestGump.atores[i]}`)
    }
    return `Venha assistir ao filme ${forrestGump.nome}, de ${forrestGump.ano}, dirigido por ${forrestGump.diretor} e estrelado por ${forrestGump.atores[0]}, ${forrestGump.atores[1]}, ${forrestGump.atores[2]}, ${forrestGump.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let pessoasNaoAutorizadas = pessoas.filter((item) => {
        return item.altura < 1.5 || item.idade <= 14 || item.idade > 60
    })
    return pessoasNaoAutorizadas

const numeros1 = [1, 2, 3, 4, 5, 10, 11, 15, 18, 20]
const pares = numeros1.filter((numero) => {
   return numero % 2 === 0
 })

console.log(pares)
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
        for (i=0 ; i<contas.length ; i++) {
            let somaContas = 0;
            for (j=0 ; j<contas[i].compras.length ; j++) {
                somaContas += contas[i].compras[j];
            }
            contas[i].saldoTotal = contas[i].saldoTotal - somaContas;
            contas[i].compras = [];
        }
        return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
        consultas.map( a => a.dataDaConsulta = a.dataDaConsulta.split('/').reverse().join());
        consultas.sort( (a, b) => {
            if (a.dataDaConsulta < b.dataDaConsulta) {
                return -1
            } else if (a.dataDaConsulta > b.dataDaConsulta) {
                return 1
            } else {
                return 0
            }
        })
        consultas.map( a => a.dataDaConsulta = a.dataDaConsulta.split(',').reverse().join().replaceAll(',','/'));
        return consultas;
    }