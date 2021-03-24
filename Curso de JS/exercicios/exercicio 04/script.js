function tabuada() {
      let num = document.getElementById('txtn')
      let tab = document.getElementById('seltab')
      if(num.value.length == 0 ){//se o numero estiver vazio 
           window.alert('Por favor digite um numero')//msg de erro
      }else {// se não pegue o valor e converta em number
           let n = Number(num.value)//convertendo o valor escrito pelo usuario em numero 
           let c = 1
           tab.innerHTML = ''
           while(c <= 10 ) {
                 let item = document.createElement('option')
                 item.text = `${n} x ${c} = ${n*c}`
                 tab.appendChild(item)
                 c++
           }
      }
      
}