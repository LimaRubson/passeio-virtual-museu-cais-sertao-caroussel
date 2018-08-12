/*Remove o vídeo quando o passeio virtual é carregado
document.addEventListener("DOMContentLoaded", function(){

    $("#dialog-1").removeClass('intro-overlay-museu');

  })*/

//Fecha o vídeo
  function hideVideo() {
    $("#dialog-1").removeClass('intro-overlay-museu');
    if(document.getElementById("indicators-1-botao-1").getAttribute('visible') == false) {
      document.getElementById("indicators-1-botao-1").setAttribute('visible', 'true')
    }
      $("iframe").each(function() { 
        var src= $(this).attr('src');
        $(this).attr('src',src);  
      });
  }

  //Fecha as informações do Museu
  function hideInfo() {
          
    $("#dialog").removeClass('intro-overlay');

 }

 //Mostra Vídeo
 function show() {
          
    $("#dialog-1").addClass('intro-overlay-museu');
  
  }

  let x = document.getElementById("indicators-1-botao-1");

  x.addEventListener("click", function() {
      document.getElementById("receiver-botao-1").setAttribute('visible', 'true');
      show();
      console.log("Mostra o vídeo");

      if(document.getElementById("indicators-1-botao-1").getAttribute('visible') == true) {

        document.getElementById("indicators-1-botao-1").setAttribute('visible', 'false')

      }
  });
  