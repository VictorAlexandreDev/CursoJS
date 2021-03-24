let a = [4,2,7,5,1]
a.push(9)//adiciona um item a o final do vetor
a[1] = 8//adiciona um item ao vetor que eu escolher
/*a.sort()faz com que os itens se organizem de forma crescente
a.length conta o numero de indices no nosso vetor */
console.log(`O vetor tem ${a.length} posições, os seus valores são ${a} e na ordem crescente são ${a.sort()} o nosso primeiro valor é ${a[0]} e o nosso ultimo valor é ${a[6-1]}`)
console.log("-----------------------------")
for(let pos = 0 ; pos <= a.length ; pos++){// enquanto pos for menor ou igual o tanto de indices da nossa let a adicione +1 ao pos
      console.log(`A posição ${pos} tem o valor ${a[pos]}`)//execute isso a cada volta do laço
}
console.log("---------------------------------------------------")
for(let pos in a){ // para cada pos em a execute o codigo abaixo 
      console.log(`A posição ${pos} tem o valor ${a[pos]}`)
}
console.log("-----------------------------")
let valores = [1, 0, 2, 9, 4, 8, 5]

for (let posicao in valores){ // for = para ... in = em 
//para cada posicao em valores execute o codigo abaixo
      console.log(`A posição ${posicao} tem o valor ${valores[posicao]}`)
}
console.log("---------------------------------")
console.log(valores.sort())//organiza em ordem crescente 
console.log(` o meu valor 9 esta no indice ${valores.indexOf(9)}`)// o valor 9 esta na posiçaõ de indice ou chave 3
//indexOf( valor ) me mostra a posiçao de indice que esta este valor entre parentes
console.log("---------------------------------")

let numeros = [9, 3, 7, 1, 4, 8]

let position = numeros.indexOf(3)
console.log(numeros)
if( position == -1) { // quando um valor não existe no indexOf() ele retorna o valor -1 
//se position for igual a -1 ou seja se o valor não existir execute o codigo abaixo 
      console.log("Este valor não existe!")
}else{//se ele existir me mostre executando o codigo abaixo
      console.log(`Este valor esta no indice ou chave ${position}`)
}