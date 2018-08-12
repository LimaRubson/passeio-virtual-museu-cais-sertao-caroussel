let header = document.getElementById("carouselExampleIndicators");
let btns = header.getElementsByClassName("panel-thumbnail");

for(let i = 0; i < btns.length; i++) {

    btns[i].addEventListener("click", function() {

        var current = document.getElementsByClassName("clicado");
        current[0].className = current[0].className.replace(" clicado", "");
        this.className += " clicado";

        console.log("Clicado!");

       
    })

}

