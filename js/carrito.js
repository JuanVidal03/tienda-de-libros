
//obtengo el contenedor mediante el dom
const contenedorProductos = document.getElementById("productos-destacados-container");



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
    
    //evento para cambiar el testo de añadir al carrito cuando la persona haga click en el botón
    btnAgregar.addEventListener("click", () =>{

        btnAgregar.innerText = "¡Añadido!";
        btnAgregar.style.backgroundColor = "green";

         setTimeout(() => {
            btnAgregar.innerText = "Añadir al carrito";
            btnAgregar.style.backgroundColor = "red";
        }, 1000);

    });


});





//hago un array de carrito vacio debido a que aún no tengo nigún dato
let carrito = [];

//para cargarlo en el local storage
document.addEventListener("DOMContentLoaded", () =>{

    if(localStorage.getItem("carrito")){
        carrito = JSON.parse(localStorage.getItem("carrito"))
        actualizarCarrito();
    }

});

//aqui se va almacenar los cambios que pasan en el carrito
const contenedorCarrito = document.getElementById("carrito-contenedor");

//función que actualiza carrito
const actualizarCarrito = () => {
    //esto hace que los productos no se dupliquen
    contenedorCarrito.innerHTML = "";

    carrito.forEach((producto) =>{

        const div = document.createElement("div");
        div.classList.add("producto-en-carrito");
        div.innerHTML = `<p>${producto.nombre}</p>
        <p>Precio: ${producto.precio}</p>
        <img src="../img/compartimiento.png" class="boton-eliminar" onclick="eliminarDelCarrito(${producto.id})"/>`
        
        contenedorCarrito.appendChild(div);

        //localstorage setitem
        localStorage.setItem("carrito", JSON.stringify(carrito));
    });

    //para que el contador lleve la cuenta de los productos agregados
    const contadorCarrito = document.getElementById("contador-carrito");
    contadorCarrito.innerText = carrito.length;
    //para sumar el precio de los productos
    const precioTotal = document.getElementById("precioTotal");
    precioTotal.innerText = carrito.reduce((acumulado, producto) => acumulado + producto.precio, 0);


};


const eliminarDelCarrito = (id) =>{
    //encontrar el producto
    const item = carrito.find((producto) => producto.id === id);
    const indice = carrito.includes(item);
    //para recortar el producto del array
    carrito.splice(indice, 1);

    //se llama a la función para actualizar el carrito
    actualizarCarrito();
};



//función para agregar al carrito
const agregarCarrrito = (id) =>{

    const item = productos.find((producto) => producto.id === id);
    carrito.push(item);
    //llamamos funcion que actualiza carrito
    actualizarCarrito();
};


//boton para vaciar carritoen el DOM
const btnVaciarCarrito = document.getElementById("vaciar-carrito");

//evento para vaciar el carrito
btnVaciarCarrito.addEventListener("click", () =>{
    carrito.length = 0;
    localStorage.clear();
    actualizarCarrito();
});
