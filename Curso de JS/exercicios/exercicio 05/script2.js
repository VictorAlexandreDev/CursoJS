
let num = document.getElementById('num')
let sel = document.getElementById('sel')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
   if(Number(n) >= 1 && Number(n) <= 100){
      return true
   }else{
      return false
   }
}
function inList(n,l){
   if(l.indexOf(Number(n)) != -1){
      return true
   }else{
      return false
   }
}
function adicionar(){
   if(isNumero(num.value) && !inList(num.value, valores)){
      valores.push(Number(num.value))
      let item = document.createElement('option')
      item.text = `Valor ${num.value} adicionado!`
      sel.appendChild(item)
      res.innerHTML = ''
   }else{
        alert('Este valor é invalido ou ja foi adicionado!')
   }
   num.value = ''//para limpar o input a cada vez que executarmos a function
   num.focus()//para dar foco no input
}
function finalizar(){
     if(valores.length == ''){
          alert('Adicione valores para continuar!')
     }else{
          let total = valores.length
          let maior = valores[0]
          let menor = valores[0]
          let soma = 0
          let media = 0
          for(let pos in valores){
               soma += valores[pos]
               if(valores[pos] > valores)
               maior = valores[pos]
               if(valores[pos] < valores)
               menor = valores[pos]
          }
          media = soma/total
          res.innerHTML = ''
            res.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>`
            res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
            res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
            res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
            res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
     }
}
