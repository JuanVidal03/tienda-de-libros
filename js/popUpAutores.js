//función que por parametros hace todo el recorrido del pop up
const funcionPopUp = (abrir, contenedorPrincipal, popUpContainer) =>{

    abrir.addEventListener("click", () =>{
        contenedorPrincipal.style.display = "block";
    });

    window.addEventListener("click", (e) =>{

        if(e.target == popUpContainer){
            contenedorPrincipal.style.display = "none";
            }
    });
};


//Obtengo los valores de Gabriel García Márquez desde el DOM
let popUpPrincipalContainerGGM = document.getElementById("pop-up-principal-container-GGM");
let abrirGGM = document.getElementById("GGM");
let popUpContainerGGM = document.getElementById("pop-up-container-GGM");

funcionPopUp(abrirGGM, popUpPrincipalContainerGGM, popUpContainerGGM);

//Obtengo los valores de Julio Cortázar desde el DOM
let popUpPrincipalContainerJC = document.getElementById("pop-up-principal-container-JC");
let abrirJC = document.getElementById("JC");
let popUpContainerJC = document.getElementById("pop-up-container-JC");

funcionPopUp(abrirJC, popUpPrincipalContainerJC, popUpContainerJC);

//Obtengo los valores de Eduardo Galeano desde el DOM
let popUpPrincipalContainerEG = document.getElementById("pop-up-principal-container-EG");
let abrirEG = document.getElementById("EG");
let popUpContainerEG = document.getElementById("pop-up-container-EG");

funcionPopUp(abrirEG, popUpPrincipalContainerEG, popUpContainerEG);