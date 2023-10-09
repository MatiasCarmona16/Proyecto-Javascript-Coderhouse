const carr = document.getElementById("tabla-carrito");
const getData = JSON.parse(localStorage.getItem("carrito"));
agregAlCarro(getData)
function agregAlCarro(producto){

    console.table(carrito);
    alert(`Agregaste ${producto.nombre} al carrito`);
    for (const str of producto) {
        str.innerHTML += `
            <tr>
                <td>${str.id}</td>
                <td>${producto.nombre}</td>
                <td>${producto.precio}</td>
            </tr>
        `;
        
    }
}