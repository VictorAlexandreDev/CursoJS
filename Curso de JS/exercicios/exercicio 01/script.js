function carregar(){
      var msg = window.document.getElementById('msg')
      var img = window.document.getElementById('imagem')
      var comprimento = window.document.getElementById('comprimentos')
      var data = new Date()
      var hora = data.getHours()//pegando a hora atual
      msg.innerHTML = `Agora são ${hora} horas.`
      if( hora >= 6 && hora < 12 ){
            //se a minha hora atual for maior ou igual a 6 E menor que 12 adicione a imagem de manha e crie uma div escrito bom dia 
            img.src = 'img/manha.png'
            window.document.body.style.background = '#c5dae2'
            comprimento.innerHTML += `<div>Bom Dia!</div>`  
      }else if( hora >= 12 && hora <= 18 ){
            //se a minha hora atual for maior ou igual a 12 E menor ou igual a 18 adicione a imagem de tarde e crie uma div escrito boa tarde 
            img.src = 'img/tarde.png'
            window.document.body.style.background = '#d45d09'
            comprimento.innerHTML += `<div>Boa Tarde!</div>`  
      }else{
            //se ão for nenhuma das condições acima então é de noite , adicione a foto de noite e crie uma div escrito Boa noite
            img.src = 'img/noite.png'
            window.document.body.style.background = '#505153'
            comprimento.innerHTML += `<div>Boa Noite!</div>`  
      }
}

