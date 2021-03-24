function contar() {
      var inicio = document.getElementById('txt1')
      var fim = document.getElementById('txtf')
      var passo = document.getElementById('txtp')
      var res = document.getElementById('res')
      
      if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
            res.innerHTML = `Impossivel contar!`
            alert('[ERRO] Faltam dados!')
      }else{
           res.innerHTML = 'Contando:'
           let i = Number(inicio.value)
           let f = Number(fim.value)
           let p = Number(passo.value)
           if(p <= 0) {
                 window.alert('Passo invalido! Considerando PASSO 1')
                 p = 1
           }
           if(i < f) {//contagem crescente 
                for( let c = i; c <= f; c += p ) {
                 //c recebe i se c for menor ou igual a f o contador vai receber ele mesmo + passo
                 res.innerHTML += `${c} \u{1F449} `
            } 
           
           }else {//contagem regressiva
                 for(let c = i; c>= f; c -= p ) {
                       res.innerHTML += `${c}\u{1F449}`
                 }
           }
           res.innerHTML += `\u{1F3C1}`
           
      }
}

