let carritoTotal = 0;
let carrito = []

//PRODUCTOS DOM

const contenedorProd = document.getElementById("products");
const tablaBody = document.getElementById("tablabody");

function renderizacionProds(listaProds) {
    for (const prod of listaProds) {
        contenedorProd.innerHTML += `
        <div class="card text-center" style="width: 18rem;">
            <img src=${prod.imagen} class="card-img-top" alt=${prod.nombre}/>
                <div class="card-body">
                    <h5 class="card-title">${prod.nombre}</h5>
                    <p class="card-text">$ ${prod.precio}</p>
                    <a id=${prod.id} href="#" class="btn btn-dark compra">Comprar</a>
                </div>
        </div>
        `;
    }

    let botones = document.getElementsByClassName("compra");
    for(const boton of botones){
        boton.addEventListener("click", (event)=>{
            event.preventDefault();
            console.log("Agregaste al carrito "+boton.id);
            const prodCarro = listaProds.find((producto)=>producto.id == boton.id);
            console.log(prodCarro);
            carrito.push(prodCarro)
            localStorage.setItem('carrito', JSON.stringify(carrito))
            agregAlCarro(prodCarro);
        })
    }
}

renderizacionProds(productos);

function agregAlCarro(producto){
    console.table(carrito);

    Toastify({

        text: `Agregaste ${producto.nombre} al carrito`,
        
        duration: 2200,
        gravity: "bottom",
        style: {
            background: "rgb(65,64,64)",
            background: "radial-gradient(circle, rgba(65,64,64,1) 18%, rgba(8,8,8,1) 86%)",
        },
        
        }).showToast();

    tablaBody.innerHTML += `
        <tr>
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
        </tr>
    `;
}

//LOCAL STORAGE
const prodctAJson = JSON.stringify(productos);
localStorage.setItem("producto",prodctAJson);

const productoGuardado = JSON.parse(localStorage.getItem("productos"));

//FUNCION BUSQUEDA INPUT SEARCH

