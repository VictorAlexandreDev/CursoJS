let notas = document.getElementById('notas')
let res = document.querySelector('div#res')
let valores = []
function media(){
   if(notas.value == 0){
      alert('Digite suas notas para continuar!')
   }else{
      valores.push(Number(notas.value))
      let total = valores.length
      let media = 0
      let soma = 0
      for(let i=0 ; i < valores.length; i++){
         soma += valores[i]
      }
      media = soma/total
      res.innerHTML = `Suas notas são: ${valores} <hr> Sua média é ${media}`
      notas.value = ''
      notas.focus()
   }
}