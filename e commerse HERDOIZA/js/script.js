let carrito = [];
let total = 0;

function agregarCarrito(nombre, precio) {
  carrito.push({nombre, precio});
  total += precio;

  document.getElementById("contador").innerText = carrito.length;
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById("listaCarrito");
  lista.innerHTML = "";

  carrito.forEach(item => {
    let li = document.createElement("li");
    li.innerText = `${item.nombre} - $${item.precio}`;
    lista.appendChild(li);
  });

  document.getElementById("total").innerText = total;
}

function verCarrito() {
  document.getElementById("carrito").classList.toggle("oculto");
}