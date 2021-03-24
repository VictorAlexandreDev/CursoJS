function contar() {
   let ini = document.getElementById('txt1')
   let fim = document.getElementById('txtf')
   let pas = document.getElementById('txtp')
   let res = document.getElementById('res')
   if( ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0 ) {
      //se algum campo estiver em branco rode o erro abaixo
      res.innerHTML = '[ERRO] Preencha todos os campos!'
   } else { // se estiver tudo ok transforme os dados em numbers
      let i = Number(ini.value)
      let f = Number(fim.value)
      let p = Number(pas.value)
      if( p <= 0 ) { //se o passo for menor ou igual a 0 sera considerado = 1
         alert('Este valor de passo é invalido! Considerando passo = 1')
         p = 1
      }
      if( i <= f ) { // se o valor do inicio for menor que o valor do final
         res.innerHTML = `Sua contagem: <br>`
         for( let c = i; c <= f; c += p ) {
            /*let c é igual o valor do  inicio se o valor de inicio for menor ou igual ao valor do fim
             adicione o valor do passo até que inicio seja maior que o valor do fim*/ 
            res.innerHTML += `${c} \u{1F449}`
         }                       //codigo de emoji em JS só pode ser usado em crazy
      }
      if( i >= f ) {//se o valor do inicio for maior que o valor do final
         res.innerHTML = `Sua contagem: <br>`
         for( let c = i; c >= f; c -= p ) {
         // remova o valor do passo a cada volta do laço até que o valor do inicio seja menor que o valor do fim
            res.innerHTML += `${c} \u{1F449}`
         }                       //codigo de emoji em JS só pode ser usado em crazy
      }
      res.innerHTML += `\u{1F3C1}`
      //depois que estiver tudo calculado adicione o emoji de bandeirada!
   }

}