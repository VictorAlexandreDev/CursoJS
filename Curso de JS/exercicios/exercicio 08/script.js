let num = document.getElementById('num')
let res = document.querySelector('div#res')
let valores = []

function adicionar(){
   if(num.value == 0){// se o usuario não digitar um valor
      alert('Digite um numero para adicionar!')
   }else if(valores.length > 4){// se ele digitar menos que 5 valores
      alert('Voce pode ter apenas 5 numeros!')
   }else{
      valores.push(Number(num.value))//adicionado os valores digitados a um array
      res.innerHTML = `Seus números : ${valores} `
   }
   num.value = ''//limpando o campo de numeros 
   num.focus()// dando foco ao campo de numeros
}
function conta(){
   if(valores.length != 5){// se ele tiver menos ou mais valores digitados
      alert('Você precisa de 5 números para verificar!')
      num.focus()
   }else{
      let raiz1 = Math.sqrt(valores[0])//pegando a raiz quadrada do primeiro numero digitado 
      res.innerHTML += `<hr>A raiz quadrada de ${valores[0]} é : ${raiz1} <hr>`
      let raiz2 = Math.sqrt(valores[1])
      res.innerHTML += `A raiz quadrada de ${valores[1]} é : ${raiz2} <hr>`
      let raiz3 = Math.sqrt(valores[2])
      res.innerHTML += `A raiz quadrada de ${valores[2]} é : ${raiz3} <hr>`
      let raiz4 = Math.sqrt(valores[3])
      res.innerHTML += `A raiz quadrada de ${valores[3]} é : ${raiz4} <hr>`
      let raiz5 = Math.sqrt(valores[4])
      res.innerHTML += `A raiz quadrada de ${valores[4]} é : ${raiz5} <hr>`
   }
}
function apagar(){
   valores.pop()//apaga o ultimo valor da array valores
   res.innerHTML = `Seus números : ${valores} `
   num.focus()
}
function limpar(){
   res.innerHTML = ''
   valores.length = 0//apagando tudo que tem no array
   num.value = ''
   num.focus()
}