function nomes(){
   let name = document.querySelector('input#name')
   let res = document.getElementById('res')
   if(name.value == ''){
      alert('Por favor digite um nome!')
   }else{
      let nomes = []
      nomes.push(name.value)
      res.innerHTML = `Os nomes digitados em ordem inversa são : `
      res.innerHTML += `${nomes} `
   }
}