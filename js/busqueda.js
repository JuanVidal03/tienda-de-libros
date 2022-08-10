//funcion del botón que recarga la página
 const recargarPagina = () =>{

     //contenedor recarga boton
     let contenedorBtnReload = document.getElementById("btn-reload-contenedor");
     //evento para recargar la página
     let reload = document.createElement("button");
     reload.classList.add("reload");
     reload.innerHTML = "Recargar";
     contenedorBtnReload.appendChild(reload);
     
     
     reload.addEventListener("click", () =>{
         location.reload();
     })

 }


 //funcion cambio de texto en caso de que el autor o libro existan
 const infoResultadosTextoTrue = () =>{

    let textoInfoResultados = document.getElementById("texto-info-resultados");
    let mostrarEnPantallaTrue = document.createElement("p");
    mostrarEnPantallaTrue.innerHTML = `<h3>Tus resultados fueron los siguientes:</h3>`;
    textoInfoResultados.replaceWith(mostrarEnPantallaTrue);

 }

 //funcion cambio de texto en caso de que el autor o libro no existan
 const infoResultadosTextoFalse = () =>{

    let textoInfoResultados = document.getElementById("texto-info-resultados");
    let mostrarEnPantallaFalse = document.createElement("p");
    mostrarEnPantallaFalse.innerHTML = `<h3>Lo lamentamos, aún no tenemos disponible tu busqueda 😥</h3>`;
    textoInfoResultados.replaceWith(mostrarEnPantallaFalse);

 }


//muestra imagen según autor
 const mostrarImg = (urlImagen) =>{
     
     let imagenAutor = document.createElement("img");
     let contenedorImg = document.getElementById("img-usuario");
     
 
         imagenAutor.classList.add("img");
         imagenAutor.src = urlImagen;
         contenedorImg.appendChild(imagenAutor);
 }


//funcion que muestra el recorrido del autor
const recorriendoAutores = (array, autor) => {

    for(const recorrer in array[autor]){
                    
        let contenedorInformacion = document.getElementById("informacion");
        let recorridoObjeto = (array[autor][recorrer]);
        
        let mostrarEnPantalla = document.createElement("p");
        mostrarEnPantalla.classList.add("mostrar-en-pantalla");
        mostrarEnPantalla.innerHTML = `${recorridoObjeto}`;
        contenedorInformacion.appendChild(mostrarEnPantalla);
    };

}

//funcion que muestra recorrido del libro
const recorriendoLibros = (libros) =>{

    for(const recorrer in libros){
                    
        let contenedorInformacion = document.getElementById("informacion");
        let recorridoObjeto = (libros[recorrer]);
        
        let mostrarEnPantalla = document.createElement("p");
        mostrarEnPantalla.classList.add("mostrar-en-pantalla");
        mostrarEnPantalla.innerHTML = `${recorridoObjeto}`;
        contenedorInformacion.appendChild(mostrarEnPantalla);
    };
}


//evento que hace la busqueda despues de dar clik en "buscar"
const eventoBusqueda = () =>{
    
    //entrada del usuario atraves del input
    let entradaUsuario = document.getElementById("busqueda-entrada-usuario").value.toUpperCase();
    
    //en caso que exista el autor
    if(nombresAutoresUpperCase.includes(entradaUsuario)){
        
        //funcion cambio de texto
        infoResultadosTextoTrue();
        
        if(nombresGGMUpperCase.includes(entradaUsuario)){
            //función para recorrer autores
            recorriendoAutores(infoAutor,[0]);
            mostrarImg("../img/garcia-marquez.png");

        } else if(nombresJCUpperCase.includes(entradaUsuario)){
            //función para recorrer autores
            recorriendoAutores(infoAutor, [1]);
            mostrarImg("../img/julio-cortazar.png");
            
        } else if(nombresEGUpperCase.includes(entradaUsuario)){
            //función para recorrer autores
            recorriendoAutores(infoAutor, [2]);
            mostrarImg("../img/eduardo-galeano.png");
            
        }
        
        //función boton que recarga la página
        recargarPagina();
        //pregunta si el libro está disponible
    } else if(librosAutores.some((existe) => existe.nombre.toUpperCase() === entradaUsuario)){
        
        //encontrar el libro buscado
        const encontrarLibro = librosAutores.find((nombre) => nombre.nombre.toUpperCase() === entradaUsuario);

        //cambio de texto
        infoResultadosTextoTrue();
        
        //recorrer el libro
        recorriendoLibros(encontrarLibro);
        
        //función boton que recarga la página
        recargarPagina();
        
        //en caso de que no exista ni autor ni libro
    } else{

        //función que cambia el contenido del texto en caso de que el autor o libro no exista
        infoResultadosTextoFalse();

        //función boton que recarga la página
        recargarPagina();


    }

}

//creo una variable que contiene el elemento input submit
let submitBtn = document.getElementById("busqueda-submit-btn");
//creo el evento busqueda
submitBtn.addEventListener("click", eventoBusqueda);