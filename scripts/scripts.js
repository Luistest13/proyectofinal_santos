// Variables iniciales para efectos del calculo de prestamo

let n4 = Number;
let clickboton = Number;
let cuotasporpagar = Number;
n4 = 0;
let element = document.getElementById("boton1");
let button = document.querySelector(".boton2");
let button2 = document.querySelector(".boton3");

function botonCalculo() {
  document.getElementById("tcuerpo").innerHTML = "";
  let montoPrestamo = Number(document.getElementById("montoPrestamo").value);
  let numCuotas = Number(document.getElementById("numCuotas").value);
  let interes = Number;

  if (numCuotas >= 12 && numCuotas != "") {
    interes = 15;
    swal("Como estas pagando a un año, o más, tu interes es del 15%");
  } else if (numCuotas == "") {
    swal("tienes que colocar el numero de cuotas");
  } else {
    interes = 10;
    swal(
      "Ya que quieres pagar en menos de un año, tu interes es solo de 10% mensual "
    );
  }

  if (montoPrestamo > 0) {
    for (i = 1; i <= numCuotas; i++) {
      ca = montoPrestamo / numCuotas;
      d1 = ca.toFixed(2);
      i2 = (montoPrestamo * interes) / 100 / numCuotas;
      d2 = i2.toFixed(2);
      r = ca + i2;
      d3 = r.toFixed(2);
      document.getElementById("tcuerpo").innerHTML =
        document.getElementById("tcuerpo").innerHTML +
        `<tr>
                      <td> ${i}</td>
                      <td> ${d1}</td>
                      <td> ${d2}</td>
                      <td> ${d3}</td>
        </tr>`;
    }
    n1 = montoPrestamo.toFixed(2);
    t_i = i2 * numCuotas;
    d4 = t_i.toFixed(2);
    t_p = r * numCuotas;
    d5 = t_p.toFixed(2);
    document.getElementById("t1").innerHTML = n1;
    document.getElementById("t2").innerHTML = d4;
    document.getElementById("t3").innerHTML = d5;
    n4 = numCuotas;
  } else {
    swal("Te falta agregar cuanto dinero necesitas");
  }
}
cuotasporpagar = n4;
clickboton = 0;

// Funcion para solicitud de prestamo

function pedir_prestamo() {
  let montoPrestamo = Number(document.getElementById("montoPrestamo").value);
  let numCuotas = Number(document.getElementById("numCuotas").value);

  if (montoPrestamo <= 0 || numCuotas <= 0) {
    swal("Debe elegir la cantidad y el número de cuotas que necesita");
  } else {
    swal("Tu solicitud fue procesada con éxito");
  }
}

// Funcion para realizar el pago de la cuota

function pago_cuota() {
  if (n4 != 0) {
    n4 = n4 - 1;
    for (let counter = 1; counter <= 1; counter++) {
      swal("" + counter + "");
    }
    swal("Gracias por pagar una cuota! te quedan " + n4 + " cuotas por pagar");
  } else {
    swal("Ya pagaste toda tu deuda gracias por preferirnos");
  }
}

// Asigno funcion asincrona para el realizar el cambio de moneda

async function convert() {
  const options = { method: "GET", headers: { accept: "application/json" } };
  let montoPrestamo = Number(document.getElementById("montoPrestamo").value);
  let moneda = document.getElementById("moneda").value;
  const apiKey = `4ccdd9534f-502e8fb3e1-rsd2g5`;
  const url = `https://api.fastforex.io/convert?from=USD&to=${moneda}&amount=${montoPrestamo}&api_key=${apiKey}`;

  fetch(url, options)
    .then((response) => response.json())
    .then((response) => {
      switch (moneda) {
        case "EUR":
          swal(
            `La conversion de USD ${montoPrestamo} a Euros es igual a ${response.result.EUR} a una tasa de ${response.result.rate} euros por dolar.`
          );
          break;
        case "GBP":
          swal(
            `La conversion de USD ${montoPrestamo} a Libras es igual a ${response.result.GBP} a una tasa de ${response.result.rate} libras por dolar.`
          );
          break;
        case "AUD":
          swal(
            `La conversion de USD ${montoPrestamo} a Dolares Australianos es igual a ${response.result.AUD} a una tasa de ${response.result.rate} Dolares australianos por dolar americano.`
          );
          break;
        default:
          swal(`No se encontro la moneda`);
      }
    })
    .catch((err) => swal(err));
}
