function tabuada(){
      let num = document.getElementById('txtn')
      let tab = document.getElementById('seltab')
      if(num.value.length == ''){//se o usuario não digitar nada rode um erro
            alert('Digite um número para continuar!')
      }else{
            let n = Number(num.value)//transformando o valor digitado pelo usuario em number
            tab.innerHTML = ''//antes de executar cada tabela eu quero que meu select seja limpo
            for(let c = 1; c <= 10 ; c++){// este laço vai do 1 até o 10 repetindo os comando abaixo
                  let item = document.createElement('option') // criando um option para por dentro do select
                  item.text = `${n} x ${c} = ${n*c}`//criando o texto dentro de cada option
                  // a cada volta do laço o C recebe +1
                  tab.appendChild(item)//adicionando o option dentro do select
            }
      }
}