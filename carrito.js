const carr = document.getElementById("tabla-carrito");
const getData = JSON.parse(localStorage.getItem("carrito")) || []

function renderizarCarrito () {
    getData.forEach((producto) => {
        const tr = document.createElement("tr")
    tr.innerHTML += `
    <td>${producto.id}</td>
    <td>${producto.nombre}</td>
    <td>${producto.precio}</td>
    `;
    carr.appendChild(tr)
    })
}
renderizarCarrito()