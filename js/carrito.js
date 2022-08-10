
//obtengo mediante ell dom
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
});


//hago un array de carrito vacio debido a que aún no tengo nigún dato
let carrito = [];

//función para agregar al carrito
const agregarCarrrito = (prodId) =>{
    const item = productos.find((prod) => prod.id === prodId);
    carrito.push(item);
    console.log(carrito);
};