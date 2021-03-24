let num = document.querySelector('input#num')
let res = document.querySelector('div#res')
let maiores = document.querySelector('div#maiores')
let menores = document.querySelector('div#menores')
let maioresD18 = []
let menoresD18 = []

function idades(){
     if(num.value == 0){
          alert('Digite uma idade!')
     }else if(num.value > 18){
          maioresD18.push(Number(num.value))
             for(let i = 0; i < maioresD18.length; i++){
               maiores.innerHTML = `${maioresD18[i]} anos! <hr>maiores de idade: ${maioresD18.length}`
             }
     }else{
          menoresD18.push(Number(num.value))
          for(let i = 0; i < menoresD18.length; i++){
               menores.innerHTML = `${menoresD18[i]} anos! <hr>menores de idade: ${menoresD18.length}`
          }
     }
     num.focus()
     num.value = ''   
}