//array con la información de los autores
const infoAutor = [

    {
        name: "Gabriel Garcia Marquez",
        nacimiento: "Nacio el 6 de marzo de 1927, Aracataca, Colombia",
        fallecimiento: "Fallecio el 17 de Abril de 2014, Ciudad de México, México",
        edad: "Llegó a tener 87 años",
    },
    {
        name: "Julio Cortazar",
        nacimiento: "Nacio el 26 de agosto de 1914, Ixelles, Bélgica",
        fallecimiento: "Fallecio el 12 de febrero de 1984, París, Francia",
        edad: "Llegó a tener 70 años",
    },{
        name: "Eduardo Galeano",
        nacimiento: "Nacio el 3 de septiembre de 1940 Montevideo, Uruguay",
        fallecimiento: "Fallecio el 13 de abril de 2015, Montevideo, Uruguay",
        edad: "Llegó a tener 74 años",
    }

];

//Array con información de los libros

const librosAutores = [
    {
        nombre: "Las venas abiertas de America Latina",
        publicacion: "Se publico en el año 1971",
        editorial: "Editorial: Siglo XXI Editores",
        paginas: "El libro contiene 379 páginas",
        autor: "Autor: Eduardo Galeano"
    },
    {
        nombre: "El libro de los abrazos",
        publicacion: "Se publico en el año 2003",
        editorial: "Editorial: Siglo XXI Editores",
        paginas: "El libro contiene 272 páginas",
        autor: "Autor: Eduardo Galeano"
    },
    {
        nombre: "Espejos",
        publicacion: "Se publico en el año 2008",
        editorial: "Editorial: Siglo XXI Editores",
        paginas: "El libro contiene 365 páginas",
        autor: "Autor: Eduardo Galeano"
    },
    {
        nombre: "Los hijos de los dias",
        publicacion: "Se publico en el año 2011",
        editorial: "Editorial: Siglo XXI Editores",
        paginas: "El libro contiene 440 páginas",
        autor: "Autor: Eduardo Galeano"
    },
    {
        nombre: "Cien Años de Soledad",
        publicacion: "Se publico en el año 1982",
        editorial: "Editorial: Editorial Sudamerica",
        paginas: "El libro contiene 471 páginas",
        autor: "Autor: Gabriel García Márquez"
    },
    {
        nombre: "El Otoño del Patriarca",
        publicacion: "Se publico en el año 1975",
        editorial: "Editorial: Plaza y Janés",
        paginas: "El libro contiene 271 páginas",
        autor: "Autor: Gabriel García Márquez"
    },
    {
        nombre: "El Amor en los Tiempos del Colera",
        publicacion: "Se publico en el año 1985",
        editorial: "Editorial: La Oveja Negra Ltda",
        paginas: "El libro contiene 490 páginas",
        autor: "Autor: Gabriel García Márquez"
    },
    {
        nombre: "El coronel no tiene quien le escriba",
        publicacion: "Se publico en el año 1961",
        editorial: "Editorial: Auguirre Ed.",
        paginas: "El libro contiene 92, páginas",
        autor: "Autor: Gabriel García Márquez"
    },
    {
        nombre: "Bestiario",
        publicacion: "Se publico en el año 1951",
        editorial: "Editorial: Sudamericana",
        paginas: "El libro contiene 165 páginas",
        autor: "Autor: Julio Cortazar"
    },
    {
        nombre: "Rayuela",
        publicacion: "Se publico en el año 1963",
        editorial: "Editorial: Sudamericana",
        paginas: "El libro contiene 1200 páginas",
        autor: "Autor: Julio Cortazar"
    },
    {
        nombre: "Historias de cronopios y de famas",
        publicacion: "Se publico en el año 1962",
        editorial: "Editorial: Minotauro",
        paginas: "El libro contiene 181 páginas",
        autor: "Autor: Julio Cortazar"
    },
    {
        nombre: "Las armas secretas",
        publicacion: "Se publico en el año 1959",
        editorial: "Editorial: Sudamericana",
        paginas: "El libro contiene 216 páginas",
        autor: "Autor: Julio Cortazar"
    },
];


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
    let mostrarEnPantalla = document.createElement("p");
    mostrarEnPantalla.innerHTML = `<h3>Tus resultados fueron los siguientes:</h3>`;
    textoInfoResultados.replaceWith(mostrarEnPantalla);

 }

 //funcion cambio de texto en caso de que el autor o libro no existan
 const infoResultadosTextoFalse = () =>{

    let textoInfoResultados = document.getElementById("texto-info-resultados");
    let mostrarEnPantalla = document.createElement("p");
    mostrarEnPantalla.innerHTML = `<h3>Lo lamentamos, aún no tenemos disponible tu busqueda 😥:</h3>`;
    textoInfoResultados.replaceWith(mostrarEnPantalla);

 }


//mustra imagen segun autor
 const mostrarImg = (urlImagen) =>{
     
     let imagenAutor = document.createElement("img");
     let contenedorImg = document.getElementById("img-usuario");
     
 
         imagenAutor.classList.add("img");
         imagenAutor.src = urlImagen;
         contenedorImg.appendChild(imagenAutor);
 }


//funcion que muestra el recorrido del autor
const recorriendoAutores = (array, objeto) => {

    for(const recorrer in array[objeto]){
                    
        let contenedorInformacion = document.getElementById("informacion");
        let recorridoObjeto = (array[objeto][recorrer]);
        
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
    if(infoAutor.some((existe) => existe.name.toUpperCase() === entradaUsuario)){
        
        //funcion cambio de texto
        infoResultadosTextoTrue();
        
        
        if(entradaUsuario === "gabriel garcia marquez".toUpperCase()){

            recorriendoAutores(infoAutor, [0]);
            mostrarImg("../img/garcia-marquez.png");

        } else if(entradaUsuario === "julio cortazar".toUpperCase()){
            
            recorriendoAutores(infoAutor, [1]);
            mostrarImg("../img/julio-cortazar.png");
            
        } else if(entradaUsuario === "eduardo galeano".toUpperCase()){
            
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

        //función que cambia el contenido del texto
        infoResultadosTextoFalse();

        //función boton que recarga la página
        recargarPagina();


    }

}

//creo una variable que alverga el elemento input submit
let submitBtn = document.getElementById("busqueda-submit-btn");
//creo el evento busqueda
submitBtn.addEventListener("click", eventoBusqueda);