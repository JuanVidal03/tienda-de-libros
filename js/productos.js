
 /*========
 Este anteriormento donde lso prductos salian, ahora utilizo un archivo .json que almacena todos los prductos
 ==========*/
//en este array están todos los productos
let productos =[
    {
        precio: 600,
        nombre: "Cien Años de Soledad",
        id: 001,
        img: "../img/garcia-marquez.png",
    },
    {
        precio: 500,
        nombre: "Espejos",
        id: 002,
        img: "../img/eduardo-galeano.png",
    },
    {
        precio: 1000,
        nombre: "Rayuela",
        id: 003,
        img: "../img/julio-cortazar.png",
    },
];








///esquema anterios
/*
//recorrido de array productos, obtengo los valores que necesito para desarrollar los productos
productos.forEach((producto) =>{
    
    //creo elemento contenedor del producto
    let esquemaProducto = document.createElement("div");
    esquemaProducto.classList.add("card");
    //estructura del producto
    esquemaProducto.innerHTML = `
    <figure class="card-contenedor-img">
    <img class="card-img" src=${producto.img} alt="espajos">
    </figure>
    <div class="card-contenedor-texto">
    <h3 id="card-title" class="card-title">${producto.nombre}</h3>
    <span id="precio" class="precio"> Precio: $${producto.precio}</span>
    </div>
    <button id="agregar${producto.id}" class="add-to-cart">Añadir al Carrito</button>
    `

    //agrego el contenido al contenedor padre
    contenedorProductos.appendChild(esquemaProducto);
    //llamo botón agregar del DOM
    let btnAgregar = document.getElementById(`agregar${producto.id}`);
    //evento con la función agregar al botón
    btnAgregar.addEventListener('click', () =>{
        agregarCarrrito(producto.id);
    });
    
    //evento para que aparezza un mensaje satisfactorio de añadición al carrito
    btnAgregar.addEventListener("click", () =>{

        //elemento de la libreria toastify
        Toastify({
            text: "¡Producto Añadido!",
            duration: 3000,
            style: {
                top: "0px",
                right: "50px",
                background: "green",
            },
          }).showToast();

    });


});

*/