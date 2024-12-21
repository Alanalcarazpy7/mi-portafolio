//Funcion que aplica las animaciones de las habilidades

function efectoHabilidades(){
    var skills=document.getElementById("skills")
    var distancia=window.innerHeight-skills.getBoundingClientRect().top //Se resta la altura del viewport que es el (window.innerheight) con el tamaño que se encuentra el elemento seleccionado respecto a la ventana de visualizacion(skills.getBoundingClientRect().top)

    //Si la distancia es mayor o igual a 300 se va a poner el porcentaje 
    if (distancia>=300){
        let habilidades=document.getElementsByClassName("progreso")
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("photoshop");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("htmlycss");
        habilidades[4].classList.add("nodejs");
        habilidades[5].classList.add("photoshop");
        habilidades[6].classList.add("python");
        habilidades[7].classList.add("htmlycss");
    }
    
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 


//Animacion Menu Desplegable

// Busca .hamburger
var $hamburger = document.querySelector(".hamburger");
 // Al hacer click
$hamburger.addEventListener("click", function() {
   // Alterna la clase "is-active",si no existe lo coloca,y si ya existe lo elimina
    $hamburger.classList.toggle("is-active");

});

let secciones=document.querySelector(".secciones")
let listas=document.querySelector(".activo")
let bg=document.querySelector(".body")
let articulos=document.querySelector(".articulos")
let invisible=document.querySelector(".invisible")

$hamburger.addEventListener("click",e=>{
    
    listas.classList.toggle("active")
        //Si se desactivo el menu,desaparecera los textos
    if (listas.classList.contains("active")==false){
        invisible.style.display="none"
    }
    //Si se activo el menu,aparecera los textos
    else{
        invisible.style.display="block"

        //Cuando se ingresa al menu,al precionar alguna opcion te debe llevar a las opcion seleccionada y cerrar el menu con todos los eventos
        

        if (listas.matches(".active")==true){
            let clicklink=document.querySelector(".activo");
            clicklink.addEventListener("click",e=>{
            
            invisible.style.display="none"
            $hamburger.classList.remove("is-active");
            listas.classList.remove("active")
            })
        }
    }
    
})


//Como la primera vez al entrar a la web va a ser falso,entonces no se muestra el menu
if (listas.classList.contains("active")==false){
    invisible.style.display="none"
}

//Cambiar de Idioma la Pagina
const flagsElement=document.getElementById('idiomas')
flagsElement.addEventListener('click', (e)=>{
    if (e.target.parentElement.dataset.lenguaje=="es"){
        location.href="/lenguajes/indexES.html"
    }
    else{
        location.href="/lenguajes/indexEN.html"
    }
})

document.querySelectorAll(".nav-listas ul a").forEach(function (link) {
  link.addEventListener("click", function () {
    // Elimina la clase 'selected' de todos los enlaces
    document.querySelectorAll(".nav-listas ul a").forEach(function (link) {
      link.classList.remove("selected");
    });
    // Añade la clase 'selected' al enlace que fue clicado
    this.classList.add("selected");
  });
});
