// Agrego array vacio para el push de los objetos.
const reservas = [];

// Agrego funcion para guardar la data.
const agregarComentario = (evt) => {
  const reserva = {};
  evt.preventDefault();

  const Nombre = document.getElementById("Nombre").value;
  const Telefono = document.getElementById("Telefono").value;
  const Email = document.getElementById("Email").value;
  const Modelo = document.getElementById("Modelo").value;
  const Comentario = document.getElementById("Comentario").value;

  reserva.nombre = Nombre;
  reserva.telefono = Telefono;
  reserva.email = Email;
  reserva.modelo = Modelo;
  reserva.comentario = Comentario;

  if (Nombre == "") {
    return swal("Debe llenar el campo nombre");
  }
  if (Telefono == "") {
    return swal("Debe llenar el campo Telefono");
  }

  reservas.push(reserva);
  formulario.reset();

  localStorage.setItem("reservas", JSON.stringify(reservas));
  formulario.reset();
};

// Escuchando evento de formulario
formulario.addEventListener("submit", agregarComentario);

const BtnReserva = document.getElementById("BtnReserva");

const containerReserva = document.getElementById("containerReserva");

// Agrego funcion para orden de las reservas

function limpiarReservas() {
  while (containerReserva.firstElementChild) {
    containerReserva.removeChild(containerReserva.firstElementChild);
  }
}

// Agrego evento para la verificacion de la reserva.

function mostrarReservas() {
  limpiarReservas();
  reservas.forEach((reserva) => {
    const div = document.createElement("div");
    div.innerHTML = `
                     <div style="background-color:white;border:1px solid;border-color:black;color:black;padding:15px;margin:15px">
                       <p> Nombre del Cliente: ${reserva.nombre}</p>
                       <p> Telefono del Cliente: ${reserva.telefono}</p>
                       <p> Email del Cliente: ${reserva.email}</p>
                       <p> Modelo del Cliente: ${reserva.modelo}</p>
                       <p> Comentario del Cliente: ${reserva.comentario}</p>
                     </div>
                     `;
    containerReserva.appendChild(div);
  });
}

BtnReserva.addEventListener("click", mostrarReservas);
