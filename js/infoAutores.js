//creo arrays que contienen algunas variaciones de los nombres de los autores, se identifica de manera más sencilla para el usuario
const nombresGGM = ["Gabriel García Márquez", "Gabriel Garcia Marquez","Gabriel", "García", "Garcia", "Márquez", "Marquez", "gabo", "garcía márquez", "garcia marquez"];
const nombresGGMString = JSON.stringify(nombresGGM);
const nombresGGMUpperCase = nombresGGMString.toUpperCase();

const nombresJC = ["Julio Cortázar", "Julio Cortazar", "Cortázar", "Julio", "Cortazar" ];
const nombresJCString = JSON.stringify(nombresJC);
const nombresJCUpperCase = nombresJCString.toUpperCase();

const nombresEG = ["Eduardo Galeano", "Eduardo", "Galeano"];
const nombresEGString = JSON.stringify(nombresEG);
const nombresEGUpperCase = nombresEGString.toUpperCase();

console.log(nombresGGMUpperCase)


//concatenación de los nombres
const nombresAutores = nombresGGM.concat(nombresJC, nombresEG);
//pasan de objeto a string
const nombresAutoresObjectToString = JSON.stringify(nombresAutores);
//ahora en string hago que su contenido sea en mayusculas
const nombresAutoresUpperCase = nombresAutoresObjectToString.toUpperCase();


//array con la información de los autores
const infoAutor = [
    {
        name: "Gabriel García Márquez",
        nacimiento: "Nació el 6 de marzo de 1927, Aracataca, Colombia",
        fallecimiento: "Falleció el 17 de Abril de 2014, Ciudad de México, México",
        edad: "Llegó a tener 87 años",
    },
    {
        name: "Julio Cortazar",
        nacimiento: "Nació el 26 de agosto de 1914, Ixelles, Bélgica",
        fallecimiento: "Falleció el 12 de febrero de 1984, París, Francia",
        edad: "Llegó a tener 70 años",
    },{
        name: "Eduardo Galeano",
        nacimiento: "Nació el 3 de septiembre de 1940 Montevideo, Uruguay",
        fallecimiento: "Falleció el 13 de abril de 2015, Montevideo, Uruguay",
        edad: "Llegó a tener 74 años",
    }

];



//Array con información de los libros

const librosAutores = [
    {
        nombre: "Las venas abiertas de America Latina",
        publicacion: "Se publicó en el año 1971",
        editorial: "Editorial: Siglo XXI Editores",
        paginas: "El libro contiene 379 páginas",
        autor: "Autor: Eduardo Galeano"
    },
    {
        nombre: "El libro de los abrazos",
        publicacion: "Se publicó en el año 2003",
        editorial: "Editorial: Siglo XXI Editores",
        paginas: "El libro contiene 272 páginas",
        autor: "Autor: Eduardo Galeano"
    },
    {
        nombre: "Espejos",
        publicacion: "Se publicó en el año 2008",
        editorial: "Editorial: Siglo XXI Editores",
        paginas: "El libro contiene 365 páginas",
        autor: "Autor: Eduardo Galeano"
    },
    {
        nombre: "Los hijos de los días",
        publicacion: "Se publicó en el año 2011",
        editorial: "Editorial: Siglo XXI Editores",
        paginas: "El libro contiene 440 páginas",
        autor: "Autor: Eduardo Galeano"
    },
    {
        nombre: "Cien Años de Soledad",
        publicacion: "Se publicó en el año 1982",
        editorial: "Editorial: Editorial Sudamerica",
        paginas: "El libro contiene 471 páginas",
        autor: "Autor: Gabriel García Márquez"
    },
    {
        nombre: "El Otoño del Patriarca",
        publicacion: "Se publicó en el año 1975",
        editorial: "Editorial: Plaza y Janés",
        paginas: "El libro contiene 271 páginas",
        autor: "Autor: Gabriel García Márquez"
    },
    {
        nombre: "El Amor en los Tiempos del Cólera",
        publicacion: "Se publicó en el año 1985",
        editorial: "Editorial: La Oveja Negra Ltda",
        paginas: "El libro contiene 490 páginas",
        autor: "Autor: Gabriel García Márquez"
    },
    {
        nombre: "El coronel no tiene quien le escriba",
        publicacion: "Se publicó en el año 1961",
        editorial: "Editorial: Auguirre Ed.",
        paginas: "El libro contiene 92, páginas",
        autor: "Autor: Gabriel García Márquez"
    },
    {
        nombre: "Bestiario",
        publicacion: "Se publicó en el año 1951",
        editorial: "Editorial: Sudamericana",
        paginas: "El libro contiene 165 páginas",
        autor: "Autor: Julio Cortazar"
    },
    {
        nombre: "Rayuela",
        publicacion: "Se publicó en el año 1963",
        editorial: "Editorial: Sudamericana",
        paginas: "El libro contiene 1200 páginas",
        autor: "Autor: Julio Cortazar"
    },
    {
        nombre: "Historias de cronopios y de famas",
        publicacion: "Se publicó en el año 1962",
        editorial: "Editorial: Minotauro",
        paginas: "El libro contiene 181 páginas",
        autor: "Autor: Julio Cortazar"
    },
    {
        nombre: "Las armas secretas",
        publicacion: "Se publicó en el año 1959",
        editorial: "Editorial: Sudamericana",
        paginas: "El libro contiene 216 páginas",
        autor: "Autor: Julio Cortazar"
    },
];