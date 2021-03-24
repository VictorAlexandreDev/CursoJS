function contar(){
      var ini = document.getElementById('txt1')
      var fim = document.getElementById('txtf')
      var pas = document.getElementById('txtp')
      var res = document.getElementById('res')

      if(ini.value.length == 0||fim.value.length == 0||pas.value.length == 0){
            res.innerHTML = '[ERRO] Preencha todos os dados!'
      }else{
            var i = Number(ini.value)
            var f = Number(fim.value)
            var p = Number(pas.value)
            if( p <= 0 ){
                  alert('Passo 0 é invalido! Considerando passo = 1')
                  p = 1
            }
            if(i < f){
                  res.innerHTML = ''
                  for(let c = i; c <= f; c += p){
                        res.innerHTML += `${c}\u{1F449}`
                  }   
            }
            if(i > f){
                  res.innerHTML = ''
                  for (let c = i; c >= f; c -= p){
                        res.innerHTML += `${c}\u{1F449}`
                  }
            }
            res.innerHTML += `\u{1F3C1}`
      }
}