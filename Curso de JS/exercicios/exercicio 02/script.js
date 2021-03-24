function verificar(){
      var data = new Date()
      var ano = data.getFullYear()//pegano o ano atual ex:2021
      var fano = document.getElementById('txtano')
      var res = document.querySelector('div#res')
      if(fano.value.length == 0 || Number(fano.value) > ano){
      // se o usuario não digitar nada ou for maior que o ano atual
            window.alert(`[ERRO] Verifique os dados e tente novamente!`)
      }else{
            var fsex = document.getElementsByName('radsex')
            // elements esta no plural ou seja se eu não por o indice de qual eu quero eu pegarei todos
            var idade = ano - Number(fano.value)
            //calculando a idade a partir do ano atual 2021 - ano colocado pelo usuário
            var genero = ''
            var img = document.createElement('img')
            //criando uma tag img no html
            img.setAttribute('id', 'foto')
            //colocando o id = "foto" na tag img 
            if(fsex[0].checked){
                  genero = 'Homem'
                  if(idade >= 0 && idade <= 10){
                        //Criança
                        img.setAttribute('src','img/menino.png')
                        //adicionando o endereço das img 
                  }else if(idade >= 10 && idade <= 21){
                        //jovem
                        img.setAttribute('src','img/homem.png')
                        //adicionando o endereço das img
                  }else if(idade >= 21 && idade <= 50){
                        //adulto
                        img.setAttribute('src','img/adulto.png')
                        //adicionando o endereço das img
                  }else{
                        //idoso
                        img.setAttribute('src','img/idoso.png')
                        //adicionando o endereço das img
                  }
            }else if(fsex[1].checked){
                  genero = 'Mulher'
                  if(idade >= 0 && idade <= 10){
                        //Criança
                        img.setAttribute('src','img/menina.png')
                        //adicionando o endereço das img 
                  }else if(idade >= 10 && idade <= 21){
                        //jovem
                        img.setAttribute('src','img/mulher.png')
                        //adicionando o endereço das img
                  }else if(idade >= 21 && idade <= 50){
                        //adulto
                        img.setAttribute('src','img/adulta.png')
                        //adicionando o endereço das img
                  }else{
                        //idoso
                        img.setAttribute('src','img/idosa.png')
                        //adicionando o endereço das img
                  }
            }
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            res.appendChild(img)
            //adicionando elemento
      }
}