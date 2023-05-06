let resp = String;
let resp2 = 0;
let salida = String;
let PArt = 0;
let Mp = 0;
let MpEfec = 0;
let MpCre = 0;
let MpDeb = 0;
let MtEfec = 0;
let MtCre = 0;
let MtDeb = 0;
let TPArt = 0;
let Art = 0;
let Cont = 0;
let ArtEfec = 0;
let ArtCre = 0;
let ArtDeb = 0;
let Clt = 0;
let PorcEfec = 0;
let PorcCre = 0;
let PorcDeb = 0;
let PEfec = 0;
let PCre = 0;
let PDeb = 0;
let vuelto = 0;
let opcion = 0;
let TPEfec = 0;
let TPCre = 0;
let TPDeb = 0;
let CEfec = 0;
let CCre = 0;
let CDeb = 0;
let ArtA = 0;
let ArtB = 0;
let ArtC = 0;
let PArtA = 0;
let PArtB = 0;
let PArtC = 0;
let TArtA = 0;
let TArtB = 0;
let TArtC = 0;
let op2 = 0;
document.write(
  `<h3><section class="content fac"><h2 class="Tf">Factura</h2><br>`
);
do {
  alert("Bienvenido a mercatradona plus");
  IvaA = 0;
  IvaB = 0;
  inc = 0;
  Cont = 0;
  Art = 0;
  TPArt = 0;
  PEfec = 0;
  PCre = 0;
  PDeb = 0;
  vuelto = 0;
  vuelto2 = 0;
  opcion = 0;
  CEfec = 0;
  CCre = 0;
  CDeb = 0;
  TPEfec = 0;
  TPCre = 0;
  TPDeb = 0;
  TPArtA = 0;
  TPArtB = 0;
  TPArtC = 0;

  Clt = Clt + 1;
  document.write(`<section2 class="content clt">---------------------<br>`);
  document.write(`| cliente Nº${Clt}  | <br>`);
  document.write(`---------------------<br>`);
  do {
    salida = 0;
    NameClt = prompt("Nombre y Apellido del cliente:");
    CiClt = prompt("Cedula del cliente:");
    NtClt = prompt("Numero de telefono del cliente B)");
    if (NameClt == "" || CiClt == "" || NtClt == "") {
      alert("Necesariamente tienes que rellenar espacios");
      salida = 1;
    }
  } while (salida == 1);
  document.write(`Nombre del cliente: ${NameClt}<br>`);
  document.write(`Cedula del cliente: ${CiClt}<br>`);
  document.write(`Numero del cliente: ${NtClt}<hr>`);
  do {
    do {
      op2 = 0;
        TArt = prompt(
          "Que tipo de articulo desea comprar: \n 1. A \n 2. B \n 3. C"
        );

        if (TArt === "1" || TArt === "A" || TArt === "a") {
          alert("Ya que elegiste esa opción...");
          salida = confirm(
            "tienes que llevar como articulo: cigarrillos y bebidas alcoholicas, entre otros articulos no regulados :D ,si no lo llevas Puedes intentarlo de nuevo precionando (aceptar) "
          );
        } else if (TArt === "2" || TArt === "B" || TArt === "b") {
          alert("Ya que elegiste esa opción...");
          salida = confirm(
            "tienes que llevar como articulo: Enlatados y cosas Carniceras ,si no lo llevas Puedes intentarlo de nuevo precionando (aceptar) "
          );
        } else if (TArt === "3" || TArt === "C" || TArt === "c") {
          alert("Ya que elegiste esa opción...");
          salida = confirm(
            "tienes que llevar como articulo: Arroz, Azucar y Huevos, entre otros articulos regulados ,si no lo llevas Puedes intentarlo de nuevo precionando (aceptar) "
          );
        } else {
          alert("Elija las indicaciones correctamente");
        }
      if (TArt === "1" || TArt === "A" || TArt === "a") {
        do {
          salida = 0;
          TAeleg = prompt(
            `que articulo elegiste de la lista? \n 1. Cigarrillos \n 2. Bebidas alcoholicas \n 3. Otros...`
          );
          if (TAeleg == "1") {
            TAeleg = "Cigarrillos";
          } else if (TAeleg == "2") {
            TAeleg = "Bebida alcoholica";
          } else if (TAeleg == "3") {
            alert(
              "Ok... si significa que no son cigarrillos o bebida alcoholica puede volver a intentarlo modificandolo"
            );
          } else {
            alert("Debe ser 1, 2 o 3 carnal :P");
            salida = 1;
          }
        } while (salida == 1);
      } else if (TArt === "2" || TArt === "B" || TArt === "b") {
        do {
          salida = 0;
          TAeleg = prompt(
            "que articulo elegiste de la lista? \n 1. Enlatados \n 2. Cosas de charcuteria"
          );
          if (TAeleg == "1") {
            TAeleg = "Enlatados";
          } else if (TAeleg == "2") {
            TAeleg = "Cosas de charcuteria";
          } else if (TAeleg == "3") {
            alert(
              "Ok... si significa que no son Enlatados o Cosas de charcuteria puede volver a intentarlo modificandolo"
            );
          } else {
            alert("Debe ser 1, 2 o 3 carnal :P");
            salida = 1;
          }
        } while (salida == 1);
      } else if (TArt === "3" || TArt === "C" || TArt === "c") {
        do {
          salida = 0;
          TAeleg = prompt(
            "que articulo elegiste de la lista? \n 1. Productos regulados ya sea azucar, arroz, huevos,etc... \n 2. otros"
          );
          if (TAeleg == "1") {
            TAeleg = "Producto Regulado";
          } else if (TAeleg == "2") {
            alert(
              "Ok... si significa que no son productos regulados puede volver a intentarlo modificandolo"
            )
          } else {
            alert("Debe ser 1 o 2 carnal :P");
            salida = 1;
          }
        } while (salida == 1);
      }
        if (TArt === "1" || TArt === "A" || TArt === "a"||TAeleg=="1"||TAeleg=="2") {
          PArtA = parseInt(prompt("precio de ese articulo A"));
        } else if (TArt === "2" || TArt === "B" || TArt === "b") {
          PArtB = parseInt(prompt("precio de ese articulo B"));
        } else if (TArt === "3" || TArt === "C" || TArt === "c") {
          PArtC = parseInt(prompt("precio de ese articulo C"));
        }
      resp = confirm("quiere modificar algo?");
    } while (resp);
    if (TArt === "1" || TArt === "A" || TArt === "a") {
      TArtA = TArt;
      ArtA++;
    } else if (TArt === "2" || TArt === "B" || TArt === "b") {
      TArtB = TArt;
      ArtB++;
    } else if (TArt === "3" || TArt === "C" || TArt === "c") {
      TArtC = TArt;
      ArtC++;
    }

    Cont = Cont + 1;
    document.write(`Articulo Nº${Cont}<br>`);
    if (TArt === "1" || TArt === "a") {
      document.write(`Tipo de articulo: A<br>`);
    } else if (TArt === "2" || TArt === "b") {
      document.write(`Tipo de articulo: B<br>`);
    } else if (TArt === "3" || TArt === "c") {
      document.write(`Tipo de articulo: C<br>`);
    } else {
      document.write(`Tipo de articulo: ${TArt}<br>`);
    }

    document.write(`Articulo seleccionado de su lista: ${TAeleg}<br>`);
    if (TArtA === "1" || TArtA === "A" || TArtA === "a") {
      document.write(`Precio del articulo A: ${PArtA}<br>`);
      TPArtA = TPArtA + PArtA;
    } else if (TArtB === "2" || TArtB === "B" || TArtB === "b") {
      document.write(`Precio del articulo B: ${PArtB}<br>`);
      TPArtB = TPArtB + PArtB;
    } else if (TArtC === "3" || TArtC === "C" || TArtC === "c") {
      document.write(`Precio del articulo B: ${PArtC}<br>`);
      TPArtC = TPArtC + PArtC;
    }

    document.write(
      `--------------------------------------------------------------------------------------------------------------------------------------------------<br>`
    );
    Art = Art + 1;
    salida = confirm("Desea comprar otra cosa?");
  } while (salida);
  if (TArtA === "1" || TArtA === "A" || TArtA === "a") {
    IvaA = (TPArtA * 16) / 100;
    inc = (TPArtA * 10) / 100;
  } else {
    IvaA = 0;
    Desc = 0;
  }
  if (TArtB === "2" || TArtB === "B" || TArtB === "b") {
    IvaB = (TPArtB * 16) / 100;
  } else {
    IvaB = 0;
  }
  TPArtA = TPArtA + IvaA + inc;
  TPArtB = TPArtB + IvaB;
  TPArt = TPArtA + TPArtB + TPArtC;
  do {
    resp2 = 0;
    do {
      salida = 0;
      if (opcion == 0) {
        Mp = prompt("Metodo de pago: \n 1. Efectivo\n 2. Credito \n 3. Debito");
        if (
          Mp != "efectivo" &&
          Mp != "1" &&
          Mp != "credito" &&
          Mp != "2" &&
          Mp != "3" &&
          Mp != "debito"
        ) {
          alert("elige una de las 3 formas de pago, intentelo de nuevo");
          salida = 1;
        }
      } else {
        Mp = prompt(
          `otro Metodo de pago para cancelar ${vuelto}$ : \n 1. Efectivo\n 2. Credito\n 3. Debito`
        );
        if (
          Mp != "efectivo" &&
          Mp != "1" &&
          Mp != "credito" &&
          Mp != "2" &&
          Mp != "3" &&
          Mp != "debito"
        ) {
          alert("elige una de las 3 formas de pago, intentelo de nuevo");
          salida = 1;
        }
      }
    } while (salida == 1);

    if (Mp === "efectivo" || Mp == "1") {
      if (Mp == "1") {
        document.write(`Metodo de pago: efectivo <br>`);
      } else {
        document.write(`Metodo de pago: ${Mp}<br>`);
      }
      PEfec = parseInt(
        prompt("ingrese monto a pagar \n Monto actual: " + TPArt)
      );
      CEfec = PEfec;
      PEfec = PEfec + TPDeb + TPEfec + TPCre;
      if (PEfec === TPArt) {
        alert("Pago en efectivo!");
        MpEfec++;
        if (opcion != 0) {
          MtEfec = MtEfec + CEfec;
        } else {
          MtEfec = MtEfec + PEfec;
        }
        if (opcion == 0) {
          ArtEfec = ArtEfec + Art;
        } else if (opcion >= 1 && ArtEfec > 1) {
          ArtEfec--;
        } else {
          ArtEfec = ArtEfec + Art;
        }
        if (TArtA === "1" || TArtA === "A" || TArtA === "a") {
          document.write(
            `Incremento del articulo A por Iva: 16% = ${IvaA}+<br>`
          );
          document.write(
            `Incremento del articulo A por lujo: 10% = ${inc}+<br>`
          );
        } else if (TArtB === "2" || TArtB === "B" || TArtB === "b") {
          document.write(
            `Incremento del articulo B por Iva: 16% = ${IvaB}+<br>`
          );
        }
        document.write(`Precio Basico: ${TPArt}$<br>`);
      } else if (PEfec > TPArt) {
        vuelto = PEfec - TPArt;
        alert("se le devuelve " + vuelto + "$ de vuelto");
        alert("Pago en efectivo!");
        MpEfec++;
        if (opcion != 0) {
          CEfec = CEfec - vuelto;
          MtEfec = MtEfec + CEfec;
        } else {
          MtEfec = MtEfec + TPArt;
        }
        if (opcion == 0) {
          ArtEfec = ArtEfec + Art;
        } else if (opcion >= 1 && ArtEfec > 1) {
          ArtEfec--;
        }

        if (TArtA === "1" || TArtA === "A" || TArtA === "a") {
          document.write(
            `Incremento del articulo A por Iva: 16% = ${IvaA}+<br>`
          );
          document.write(
            `Incremento del articulo A por lujo: 10% = ${inc}+<br>`
          );
        } else if (TArtB === "2" || TArtB === "B" || TArtB === "b") {
          document.write(
            `Incremento del articulo B por Iva: 16% = ${IvaB}+<br>`
          );
        }
        document.write(`Precio Basico: ${TPArt}$<br>`);
      } else if (PEfec < TPArt) {
        vuelto = TPArt - PEfec;
        alert("Lo que pago no es suficiente");
        alert("Hace falta " + vuelto + "$ para pagar");
        resp2 = prompt(
          "si tienes puedes cancelar con otro metodo de pago: \n 1. Cancelar\n 2. No Cancelar"
        );
        if (resp2 == "1") {
          TPDeb = TPEfec + PEfec;
          MpEfec++;
          MtEfec = MtEfec + PEfec;
          ArtEfec = ArtEfec + Art;
        } else {
          TPEfec = 0;
          MpEfec = 0;
          MtEfec = 0;
          ArtEfec = 0;
          alert(`Se le devuelve ${PEfec}$`);
          if (TPCre > 0) {
            TPCre = 0;
            MpCre = 0;
            MtCre = 0;
            ArtCre = 0;
            alert(`Se le devuelve ${TPCre}$ que pago en Credito`);
          } else if (TPDeb > 0) {
            TPDeb = 0;
            MpDeb = 0;
            MtDeb = 0;
            ArtDeb = 0;
            alert(`Se le devuelve ${TPDeb}$ que no pago en Debito`);
          }
          document.write(`No pudo pagar por saldo insuficiente<br>`);
        }
      }
    } else if (Mp === "credito" || Mp == "2") {
      if (Mp == "2") {
        document.write(`Metodo de pago: credito <br>`);
      } else {
        document.write(`Metodo de pago: ${Mp}<br>`);
      }
      CiTjt = prompt("Cedula de la tarjeta:");
      PCre = parseInt(
        prompt("Ingrese monto a pagar Monto actualmente: " + TPArt)
      );
      CCre = PCre;
      PCre = PCre + TPDeb + TPEfec + TPCre;
      CTjt = prompt("Cuenta de la tarjeta:1. Ahorro, 2. Corriente");
      ClvTjt = prompt("Clave...");
      if (PCre >= TPArt) {
        document.write(`Cedula de la tarjeta que posee: ${CiTjt}<br>`);
        document.write(`Precio a pagar: ${TPArt}<br>`);
        document.write(`Cuenta de la tarjeta:*******<br>`);
        document.write(`Clave de la tarjeta:****<br>`);
      }
      if (PCre === TPArt) {
        alert("Pago en credito!");
        MpCre++;
        if (opcion != 0) {
          MtCre = MtCre + CCre;
        } else {
          MtCre = MtCre + PCre;
        }
        if (opcion == 0) {
          ArtCre = ArtCre + Art;
        } else if (opcion >= 1 && ArtCre > 1) {
          ArtCre--;
        }
        if (TArtA === "1" || TArtA === "A" || TArtA === "a") {
          document.write(
            `Incremento del articulo A por Iva: 16% = ${IvaA}+<br>`
          );
          document.write(
            `Incremento del articulo A por lujo: 10% = ${inc}+<br>`
          );
        } else if (TArtB === "2" || TArtB === "B" || TArtB === "b") {
          document.write(
            `Incremento del articulo B por Iva: 16% = ${IvaB}+<br>`
          );
        }
        document.write(`Precio Basico: ${TPArt}<br>`);
      } else if (PCre > TPArt) {
        vuelto = PCre - TPArt;
        alert("se le devuelve " + vuelto + " de vuelto");
        alert("Pago en credito!");
        MpCre++;
        if (opcion != 0) {
          CCre = CCre - vuelto;
          MtCre = MtCre + CCre;
        } else {
          MtCre = MtCre + TPArt;
        }

        if (opcion == 0) {
          ArtCre = ArtCre + Art;
        } else if (opcion >= 1 && ArtCre > 1) {
          ArtCre--;
        }
        if (TArtA === "1" || TArtA === "A" || TArtA === "a") {
          document.write(
            `Incremento del articulo A por Iva: 16% = ${IvaA}+<br>`
          );
          document.write(
            `Incremento del articulo A por lujo: 10% = ${inc}+<br>`
          );
        } else if (TArtB === "2" || TArtB === "B" || TArtB === "b") {
          document.write(
            `Incremento del articulo B por Iva: 16% = ${IvaB}+<br>`
          );
        }
        document.write(`Precio Basico: ${TPArt}<br>`);
      } else if (PCre < TPArt) {
        vuelto = TPArt - PCre;
        alert("Lo que pago no es suficiente");
        alert("Hace falta " + vuelto + " para pagar");
        resp2 = prompt(
          "si tienes puedes cancelar con otro metodo de pago: 1. Cancelar, 2. No Cancelar"
        );
        if (resp2 == "1") {
          TPCre = TPCre + PCre;
          MpCre++;
          MtCre = MtCre + PCre;
          ArtCre = ArtCre + Art;
        } else {
          TPCre = 0;
          MpCre = 0;
          MtCre = 0;
          ArtCre = 0;
          alert(`Se le devuelve ${PCre}`);
          if (TPEfec > 0) {
            TPEfec = 0;
            MpEfec = 0;
            MtEfec = 0;
            ArtEfec = 0;
            alert(`Se le devuelve ${TPEfec} que pago en Credito`);
          } else if (TPDeb > 0) {
            TPDeb = 0;
            MpDeb = 0;
            MtDeb = 0;
            ArtDeb = 0;
            alert(`Se le devuelve ${TPDeb} que no pago en Debito`);
          }
          document.write(`No pudo pagar por saldo insuficiente<br>`);
        }
      }
    } else if (Mp === "debito" || Mp == "3") {
      if (Mp == "3") {
        document.write(`Metodo de pago: debito <br>`);
      } else {
        document.write(`Metodo de pago: ${Mp}<br>`);
      }
      PDeb = parseInt(
        prompt("Ingrese monto a pagar \n Monto actual: " + TPArt)
      );
      CDeb = PDeb;
      PDeb = PDeb + TPDeb + TPEfec + TPCre;
      if (PDeb === TPArt) {
        alert("Pago en debito!");
        MpDeb++;
        if (opcion != 0) {
          MtDeb = MtDeb + CDeb;
        } else {
          MtDeb = MtDeb + PDeb;
        }
        if (opcion == 0) {
          ArtDeb = ArtDeb + Art;
        } else if (opcion >= 1 && ArtDeb > 1) {
          ArtDeb--;
        }
        if (TArtA === "1" || TArtA === "A" || TArtA === "a") {
          document.write(
            `Incremento del articulo A por Iva: 16% = ${IvaA}+<br>`
          );
          document.write(
            `Incremento del articulo A por lujo: 10% = ${inc}+<br>`
          );
        } else if (TArtB === "2" || TArtB === "B" || TArtB === "b") {
          document.write(
            `Incremento del articulo B por Iva: 16% = ${IvaB}+<br>`
          );
        }
        document.write(`Precio Basico: ${TPArt}<br>`);
      } else if (PDeb > TPArt) {
        vuelto = PDeb - TPArt;
        alert("se le devuelve " + vuelto + " de vuelto");
        alert("Pago en debito!");
        MpDeb++;
        if (opcion != 0) {
          CDeb = CDeb - vuelto;
          MtDeb = MtDeb + CDeb;
        } else {
          MtDeb = MtDeb + TPArt;
        }
        if (opcion == 0) {
          ArtDeb = ArtDeb + Art;
        } else if (opcion >= 1 && ArtDeb > 1) {
          ArtDeb--;
        }
        if (TArtA === "1" || TArtA === "A" || TArtA === "a") {
          document.write(
            `Incremento del articulo A por Iva: 16% = ${IvaA}+<br>`
          );
          document.write(
            `Incremento del articulo A por lujo: 10% = ${inc}+<br>`
          );
        } else if (TArtB === "2" || TArtB === "B" || TArtB === "b") {
          document.write(
            `Incremento del articulo B por Iva: 16% = ${IvaB}+<br>`
          );
        }
        document.write(`Precio Basico: ${TPArt}<br>`);
      } else if (PDeb < TPArt) {
        vuelto = TPArt - PDeb;
        alert("Lo que pago no es suficiente");
        alert("Hace falta " + vuelto + " para pagar");
        resp2 = prompt(
          "si tienes puedes cancelar con otro metodo de pago: 1. Cancelar, 2. No Cancelar"
        );
        if (resp2 == "1") {
          TPDeb = TPDeb + PDeb;
          MpDeb++;
          MtDeb = MtDeb + PDeb;
          ArtDeb = ArtDeb + Art;
        } else {
          TPDeb = 0;
          MpDeb = 0;
          MtDeb = 0;
          ArtDeb = 0;
          alert(`Se le devuelve ${PDeb}`);
          if (TPEfec > 0) {
            TPEfec = 0;
            MpEfec = 0;
            MtEfec = 0;
            ArtEfec = 0;
            alert(`Se le devuelve ${TPEfec} que pago en Credito`);
          } else if (TPCre > 0) {
            TPCre = 0;
            MpCre = 0;
            MtCre = 0;
            ArtCre = 0;
            alert(`Se le devuelve ${TPCre} que no pago en Debito`);
          }
          document.write(`No pudo pagar por saldo insuficiente<br>`);
        }
      }
    }
    opcion = opcion + 1;
  } while (resp2 == "1");
  document.write(
    `--------------------------------------------------------------------------------------------------------------------------------------------------</section2><hr>`
  );
  resp = confirm("Hay algun cliente más?");
} while (resp);
document.write(`</section></h3><hr/>`);
document.write(`<h2 class="n1">Total del dia</h2><br>`);
document.write(`<section class="content tdia">`);
Vt = MtEfec + MtCre + MtDeb;
document.write(`<h3>Total de articulos A: ${ArtA}<br>`);
document.write(`Total de articulos B: ${ArtB}<br>`);
document.write(`Total de articulos C: ${ArtC}</h3><br>`);
if (MpEfec > 0) {
  document.write(
    `<h3>total de articulos que se pago en efectivo: ${ArtEfec}<br>`
  );
  document.write(`Total de pagos en efectivo: ${MpEfec}<br>`);
  document.write(`Total de precios pagados en efectivo: ${MtEfec}$<br>`);
  PorcEfec = (MtEfec / Vt) * 100;
  document.write(`Porcentaje de la venta en efectivo: ${PorcEfec}%<br></h3>`);
} else {
  document.write(`<h3>No hubo ventas en efectivo :(<br></h3>`);
}
if (MpCre > 0) {
  document.write(
    `<h3>total de articulos que se pago en credito: ${ArtCre}<br>`
  );
  document.write(`Total de pagos en credito: ${MpCre}<br/>`);
  document.write(`Total de precios pagados en credito: ${MtCre}$<br>`);
  PorcCre = (MtCre / Vt) * 100;
  document.write(`Porcentaje de la venta en credito: ${PorcCre}%<br></h3>`);
} else {
  document.write(`<h3>No hubo ventas en credito :(<br></h3>`);
}
if (MpDeb > 0) {
  document.write(`<h3>total de articulos que se pago en debito: ${ArtDeb}<br>`);
  document.write(`Total de pagos en debito: ${MpDeb}<br/>`);
  document.write(`Total de precios pagados en debito: ${MtDeb}$<br>`);
  PorcDeb = (MtDeb / Vt) * 100;
  document.write(`Porcentaje de la venta en debito: ${PorcDeb}%<br></h3>`);
} else {
  document.write(`<h3>No hubo ventas en debito :(<br></h3>`);
}
if (PorcEfec > PorcCre && PorcEfec > PorcDeb) {
  document.write(
    `<h3>El metodo de pago en efectivo tuvo más ventas que el resto!!<br></h3>`
  );
} else if (PorcCre > PorcEfec && PorcCre > PorcDeb) {
  document.write(
    `<h3>El metodo de pago en credito tuvo más ventas que el resto!!<br></h3>`
  );
} else if (PorcDeb > PorcEfec && PorcDeb > PorcCre) {
  document.write(
    `<h3>El metodo de pago en debito tuvo más ventas que el resto!!<br></h3>`
  );
}
if (ArtA > ArtB && ArtA > ArtC) {
  document.write(`<h3>Los articulos de tipo A fueron más vendidos!!!</h3><br>`);
} else if (ArtB > ArtA && ArtB > ArtC) {
  document.write(`<h3>Los articulos de tipo B fueron más vendidos!!!</h3><br>`);
} else if (ArtC > ArtA && ArtC > ArtB) {
  document.write(`<h3>Los articulos de tipo C fueron más vendidos!!!</h3><br>`);
}
document.write(`<h3>Acumulado del dia: ${Vt}$</h3>`);
document.write(`</section>`);
