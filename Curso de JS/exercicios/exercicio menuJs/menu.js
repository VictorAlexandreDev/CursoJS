let button = document.querySelector('h3>i.fa')
let menu = document.querySelector('ul.mobile')
button.addEventListener('click',function () {
   if(menu.classList.contains('esconder')&&button.classList.contains('fa-bars')){
      menu.classList.remove('esconder')
      menu.classList.add('mostrar')
      button.classList.remove('fa-bars')
      button.setAttribute('class','fa fa-times')
   }else{
      menu.classList.remove('mostrar')
      menu.classList.add('esconder')
      button.classList.remove('fa-times')
      button.setAttribute('class','fa fa-bars')
   }

})