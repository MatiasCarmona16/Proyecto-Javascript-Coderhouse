let carritoTotal = 0;
let carrito = []

// let idPrendas = parseInt(prompt ("Bienvenido a Bastard!\n\nSelecciona lo que quieres añadir al carrito...\n\n0-PARA SUMATORIA DE COMPRAS\n\n-REMERAS-\n\n1-REMERA KITTY KITTY $10.000\n2-REMERA $INNER $10.000\n3-REMERA ROOT $10.000\n4-REMERA WASHED $10.000\n\n -BUZOS/HOODIES-\n\n5-HOODIE BSTRD RENEWED $20.000\n6-HOODIE LOGO 3 $20.000\n7-HOODIE 13 $20.000\n\n-PANTALONES-\n\n8-B$T CARGO $15.000"));

// while(idPrendas != 0){
//     switch(idPrendas){
//         case 1:
//             alert("Agregaste al carrito REMERA KITTY KITTY $10.000");
//             sumaCarrito(10000);
//             break;
        
//         case 2:
//             alert("Agregaste al carrito REMERA $INNER $10.000");
//             sumaCarrito(10000);
//             break;

//         case 3:
//             alert("Agregaste al carrito REMERA ROOT $10.000");
//             sumaCarrito(10000);
//             break;

//         case 4: 
//             alert("Agregaste al carrito REMERA WASHED $10.000");
//             sumaCarrito(10000);
//             break;

//         case 5:
//             alert("Agregaste al carrito HOODIE BSTRD RENEWED $20.000");
//             sumaCarrito(20000);
//             break;

//         case 6:
//             alert("Agregaste al carrito HOODIE LOGO 3 $20.000");
//             sumaCarrito(20000);
//             break;

//         case 7:
//             alert("Agregaste al carrito HOODIE 13 $20.000");
//             sumaCarrito(20000);
//             break;

//         case 8:
//             alert("Agregaste al carrito B$T CARGO $15.000");
//             sumaCarrito(15000);
//             break;

//         default:
//             alert("ERROR EN EL CODIGO INTRODUZCA LOS NUMEROS CORRESPONDIENTES");
//             break;
//     }
//     idPrendas = parseInt(prompt ("Bienvenido a Bastard!\n\nSelecciona lo que quieres añadir al carrito...\n\n0-PARA SUMATORIA DE COMPRAS\n\n-REMERAS-\n\n1-REMERA KITTY KITTY $10.000\n2-REMERA $INNER $10.000\n3-REMERA ROOT $10.000\n4-REMERA WASHED $10.000\n\n -BUZOS/HOODIES-\n\n5-HOODIE BSTRD RENEWED $20.000\n6-HOODIE LOGO 3 $20.000\n7-HOODIE 13 $20.000\n\n-PANTALONES-\n\n8-B$T CARGO $15.000"));
// }

// function sumaCarrito(precioPrenda){
//     carritoTotal = carritoTotal + precioPrenda;
// }

// alert("Total a pagar: $"+ carritoTotal);

// console.table(productos); 

// //find

// const buscarProductos = productos.find((producto) => producto.nombre === "REMERA KITTY KITTY");

// if(buscarProductos == undefined){
//     console.log("ESTE PRODUCTO NO EXISTE")
// }else{
//     console.log("ESTAS BUSCANDO "+ buscarProductos)
// }

// console.log(buscarProductos);

// //filter

// function filtrarPrecioMaximo(precioMaximo) {
//     const productosFiltrados = productos.filter((producto) => producto.precio <= precioMaximo);

// if (productosFiltrados.length != 0) {
//     let alertPrecioMax = '';
//     productosFiltrados.forEach((producto) => {
//         alertPrecioMax += `ID: ${producto.id} - NOMBRE ${producto.nombre} - PRECIO $ ${producto.precio}\n`;
//     });
//     alert(alertPrecioMax);
// }else {
//     alert("TU PRODUCTO NO SE ENCUENTRA DISPONIBLE EN EL PRECIO SELECCIONADO")
// }
// }

// let precio = parseFloat(prompt("PRECIO MAXIMO DISPUESTO A PAGAR / 0-EXIT"));
// while(precio != 0){
//     filtrarPrecioMaximo(precio); 
    
//     precio = parseFloat(prompt("PRECIO MAXIMO DISPUESTO A PAGAR / 0-EXIT"));
// }

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
        boton.addEventListener("click", ()=>{
            console.log("Agregaste al carrito "+boton.id);
            const prodCarro = listaProds.find((producto)=>producto.id == boton.id);
            console.log(prodCarro);
            agregAlCarro(prodCarro);
        })
    }
}

renderizacionProds(productos);

function agregAlCarro(producto){
    carrito.push(producto);
    console.table(carrito);
    alert(`Agregaste ${producto.nombre} al carrito`);

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