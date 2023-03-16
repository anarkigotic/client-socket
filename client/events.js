const menuItems = [
    { text: "sendmessage", url: "#" },
    { text: "oneservice", url: "#" }
  ];
  const dropdownMenu = document.querySelector(".dropdown-menu");

  for (let i = 0; i < menuItems.length; i++) {
    const menuItem = menuItems[i];
    const itemLink = document.createElement("a");
    itemLink.classList.add("dropdown-item");
    itemLink.href = menuItem.url;
    itemLink.textContent = menuItem.text;
    dropdownMenu.appendChild(itemLink);
  }



// Agregamos un listener de clic en cada opción del dropdown
const opcionesDropdown = document.querySelectorAll(".dropdown-menu a");
opcionesDropdown.forEach(opcion => {
    opcion.addEventListener("click", function () {
        // Removemos la clase "active" de todas las opciones del dropdown
        opcionesDropdown.forEach(opcion => {
            opcion.classList.remove("active");
        });

        // Agregamos la clase "active" a la opción seleccionada
        this.classList.add("active");

        // Actualizamos el texto del botón con la opción seleccionada
        const textoBoton = document.querySelector("#dropdownMenuButton");
        textoBoton.innerHTML = this.innerHTML;
    });
});


const enviarCodigoBtn = document.getElementById('enviarCodigo');


enviarCodigoBtn.addEventListener('click', () => {
    const mensaje = document.getElementById('codigo')?.value;
    const servicio = document.querySelector(".dropdown-menu a.active")?.innerHTML;
    sendMessage(mensaje, servicio);
});

document.getElementById("boton").addEventListener("click", () => {
    const url = document.getElementById('conectar')?.value;
    conectarSocket(url)
});