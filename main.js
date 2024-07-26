document.addEventListener('DOMContentLoaded', function()  {

    let botoes = document.querySelectorAll(".img");
    let paragrafos = document.querySelectorAll("p");
    
    botoes.forEach(function(botao, index){
         botao.addEventListener("click", function(){

         let paragraph = paragrafos[index];
         
         console.log("clicou!");
            if (paragraph.style.display == "none") {

            paragraph.style.display = "inline-block";

            } else {
            paragraph.style.display = "none";
            
            }
        })
    
    });
}); 