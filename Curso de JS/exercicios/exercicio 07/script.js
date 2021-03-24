let numeros = document.getElementById('num')
let res = document.querySelector('div#res')
let valores = []

function enviar(){
   if(numeros.value == 0){
      alert('Digite 5 numeros para continuar')
   }else if(valores.length > 4){
      alert('Você não pode digitar mais que 5 numeros')
      numeros.value = ''
   }else{
      valores.push(Number(numeros.value))
      res.innerHTML = `Seus numeros: ${valores}`
      numeros.value = ''
      numeros.focus()
   }
}
function calcular(){
   if(valores.length != 5){
      alert('Você não enviou 5 numeros!')
   }else{//pegando o MAIOR valor dentro da nossa array
      Array.max = function(valor){
         return Math.max.apply(Math, valor)
      }
      //pegando o MENOR valor dentro da nossa array
      Array.min = function(menor){
         return Math.min.apply(Math, menor)
      }
      res.innerHTML = `O maior numero destes 5 números é: ${Array.max(valores)} <hr> O menor numero deste 5 números é: ${Array.min(valores)}`
   }
}