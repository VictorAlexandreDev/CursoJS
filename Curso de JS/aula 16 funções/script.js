function parimp(n) {
      if( n % 2 == 0) { // se o resto de n for divisivel por 2 vai dar zero e se for true é par
            return"par"
      }else{ // se for false é impar
            return "impar"
      }
}
let res = parimp(11) // variavel que contem a chamada e o parametro da function
console.log(res)
console.log("----------------")

function soma(n1=0, n2=0) { // parametros pré definidos
      let r = n1+n2//somando os parametros 
      if (r % 2 == 0) { // se a soma dos parametros tiver um resto divisivel por 2 é PAR
            return `A soma entre ${n1} e ${n2} é igual a ${r} e esse numero é par`;
      } else {
            return `A soma entre ${n1} e ${n2} é igual a ${r} e esse numero é impar`;
      }
}
console.log(soma(2,3))