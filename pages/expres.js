const { locator } = require("codeceptjs");

const { I, playwright } = inject();

class AltaRes {
  constructor() {
    this.fields = {
      inicioexp: "http://10.205.76.19/pisagrafico_os3/zntjsp/SVT2502MAIN.jsp",
      frame: '//iframe[@name="kioskoA0"]',
      sinporta: '//div[@id="divAltaSinPorta"]//input[@id="radioSinPorta"]',
      service:
        '//button[@class="dialog-popup-express-newElement dialog-popup-express-btn btn-border btn-sm "]',
      regimen:
        '(//a[@class="ui-widget ui-state-default ui-button-icon-only custom-combobox-toggle ui-corner-right"]//span[@class="ui-button-icon-primary ui-icon ui-icon-triangle-1-s"])[4]',
      residencial:
        '//select[@name="comboRegimen"]//option[@value="RESIDENCIAL"]',
      infocontact:
        '//div[@class="dialog-popup-express-footer"]//button[@class="dialog-popup-express-newElement dialog-popup-express-btn btn-md "]',
      inputcel: '//div[@id="divCelular"]//input[@id="celular"]',
      celular: 5570510573,
      confirmarcel: '//input[@id="celularConfirm"]',
      inputteladicional: '//td[@id="tdContacto"]//input[@id="telcontacto"]',
      teladic: 7122341281,
      inputcorreo: '(//input[@class="cajaTexto"])[6]',
      alias: "luiz392",
      inputdominio: '//input[@name="comboDominio"]',
      domain: "gmail.com",
      confcorreo: '(//input[@class="cajaTexto"])[7]',
      confdominio: '//input[@name="comboDominioConfirm"]',
      valdatoscontact: '//input[@id="valDatCont"]',
      inputoficina: '//input[@id="CVE"]',
      oficina: "WFC",
      inputnombre: '//td[@id="tdtextnombre"]//input[@type="text"]',
      nombre: "SOFIA",
      inputap: '//td[@id="tdtextapaterno"]//input[@type="text"]',
      apaterno: "FLORES",
      inputam: '//td[@id="tdtextamaterno"]//input[@type="text"]',
      amaterno: "CCP",
      btnfc: '//input[@name="btnRFC"]',
      sinrfc: '//img[@title="Clic para rfc genérico"]',
      btnaceptrfc: '//input[@class="btncontinuar"]',
      comboident:
        '(//a[@class="ui-widget ui-state-default ui-button-icon-only custom-combobox-toggle ui-corner-right"])[7]',
      msjcliente: '//div[@class="dialog-popup-express-head"]',
      comboine: "//html//body//main//div[3]//div//span//a//span[1]",
      inputine: '//div[@id="data1_1"]//input[@id="numId"]',
      ine: 6745124689125,
      validarine: '//button[@id="btnValidate"]',
      cerrarince: "https://listanominal.ine.mx/scpln/",
      buttonacept: '//button[@id="btnAccept"]',
      inputaddress: '//input[@placeholder="Ingrese dirección..."]',
      direccion: "RIBERA 141, AMPLIACION  LOS ALPES",
      btnsearch: '//input[@class="sb-search-submit"]',
      confmap: '//a[@id="idValCober"]',
      //Complemento domicilio
      inputcol: '//input[@id="cboxColonia"]',
      col: "AMPLIACION  LOS ALPES",
      inputcp: '//input[@id="cboxCodigoPostal"]',
      cp: "01710",
      combocalle: '(//span[@class="ui-button-icon-primary ui-icon icon-triangle-express"])[6]',
      tipocalle: '//input[@id="cboxcombotipocalle"]',
      tpcalle: "CALLE",
      inputcalle: '//input[@id="idCalle"]',
      calle: "RIBERA",
      numcalle: '//input[@id="idNumeroExterior"]',
      numbercalle: 141,
      inputcalif: '//input[@id="idCalificador"]',
      calif: ' ',
      sbnumero: '//input[@id="idsubnumero"]',
      subnumber: ' ',
      inputmanzana: '//input[@id="idManzana"]',
      manzana: ' ',
      inputlote: '//input[@id="idLote"]',
      lote: ' ',
      inputedif: '//input[@id="idEdificio"]',
      inputdept: '//input[@id="idDepartamento"]',
      dep: " ",
      inpute1: '//input[@id="idEntreCalle1"]',
      e1: "EMBOCADURA",
      inpute2: '//input[@id="idEntreCalle2"]',
      e2: "PARQUE ECOLOGICO AGUILAS",
      confdom: '//a[@id="idBtnConsultaDom"]',
      //Confirmar Dom instalación
      dominst: '//div[@id="dialog-Mapa"]',
      domok: '(//button[@class="ui-button ui-corner-all ui-widget boton"])[2]',
      btncontrata: '//input[@id="btninfoydom"]',
      //GI
      btngi: '//td[@id="tdMsjGI"]',
      btncontinuar: '[name="Continuar"]',
      //Paquetes
      contenedorpqts: 'id="contenedorOferta"',
      servpqt: '[id="chkServPqte"]', //DoblePlay
      servnaked: '[id="chkServNaked"]', //Naked
      servlin: '[id="chkServLinea"]', //Solo voz
      pqt1: '(//button[@id="botonContratar"])[1]', //PQI53 15 MBS
      pqt2: '(//button[@id="botonContratar"])[2]', //INF19 80 MBS
      pqt3: '(//button[@id="botonContratar"])[3]', //PQI42 100 MBS
      pqt4: '(//button[@id="botonContratar"])[4]', //PQI43 150 MBS
      btnsig: '//span[text()="Siguiente"]',
      btnant: '//span[text()="Anterior"]',
      pqt5: '(//button[@id="botonContratar"])[5]', //PQI32 250 MBS
      pqt6: '(//button[@id="botonContratar"])[6]', //PQI64 350 MBS
      pqt7: '(//button[@id="botonContratar"])[7]', //PQI25 750 MBS
      pqt8: '(//button[@id="botonContratar"])[8]', // PQI70 UNKNOWN MBS
      pqt9: '(//button[@id="botonContratar"])[9]', //PQI62 1000 MBS - 1GB
      btns: '[id="divBotones"]',
      btnoffer: '//input[@id="Corrida"]',

      //Oferta comercial: se muestra ventana flotante con la velocidad del paquete seleccionado
      windowmolecula: '//iframe[@id="idIfrmMolecula"]',
      //GI Pago inicial y pago único
      rdbtnGI: '[id="radioGastosD"]', //radio btn GI
      comboGI: '(//span[@class="ui-button-icon-primary ui-icon ui-icon-triangle-1-s"])[4]',
      btndomiciliacion: '[id="chkDomiciliacion"]', //Desactivar check domiciliación

      //Campos Domiciliación
      apdom: '//body[@onload="cargaPantalla();"]//input[@id="apaterno"]',
      amdom: '//body[@onload="cargaPantalla();"]//input[@id="amaterno"]',
      nombredom: '//body[@onload="cargaPantalla();"]//input[@id="nombre"]',
      celdom: '//body[@onload="cargaPantalla();"]//input[@id="celular"]',
      maildom: '//body[@onload="cargaPantalla();"]//input[@id="correo"]',
      mail: "yabingonzaga0310@gmail.com",
      aceptdom: '//body[@onload="cargaPantalla();"]//button[@id="btnAceptar"]',
      continuarpqt: '[id="Continuar"]', //Continua a la pantalla de facturación

      //Facturación
      cpFact:'//td//input[@id="cpFact"]',
      btnContratar: '[id="btninfoydom"]',






    };
  }

  async inicioexpress() {
    await I.amOnPage(this.fields.inicioexp);
    await I.wait(10);
  }

  tipoalta() {
    within({ frame: '//iframe[@name="kioskoA0"]' }, () => {
      I.checkOption(this.fields.sinporta);
      I.wait(7);
    });
  }

  servicio() {
    I.click(this.fields.service);
    I.wait(7);
  }

  datoscliente() {
    within({ frame: '//iframe[@name="kioskoA0"]' }, () => {
      I.click(this.fields.inputcel);
      I.wait(3);
    });
    I.click(this.fields.infocontact);
    I.wait(4);
    //Llenar campos de delular, correo, tel adicional y la confirmación de los mismos
    within({ frame: '//iframe[@name="kioskoA0"]' }, () => {
      I.fillField(this.fields.inputcel, this.fields.celular);
      I.fillField(this.fields.confirmarcel, this.fields.celular);
      I.fillField(this.fields.inputteladicional, this.fields.teladic);
      I.fillField(this.fields.inputcorreo, this.fields.alias);
      I.fillField(this.fields.inputdominio, this.fields.domain);
      I.fillField(this.fields.confcorreo, this.fields.alias);
      I.fillField(this.fields.confdominio, this.fields.domain);
      I.wait(3);
      I.waitForElement("#comboRegimen", 5);
      //Selección del régimen
      I.executeScript(() => {
        const select = document.getElementById("comboRegimen");
        select.value = "RESIDENCIAL";
        select.dispatchEvent(new Event("change"));
      });
      I.wait(3);
      //Ingresar al frame "Detalle oficinas" para seleccionar la oficina
      I.switchTo('//iframe[@name="detalleOficinas"]');
      I.waitForElement(this.fields.inputoficina);
      I.fillField(this.fields.inputoficina, this.fields.oficina);
      I.switchTo();
      I.wait(3);
    });

    //Llenar campos de nombre, Ap, Am y validar datos contacto
    within({ frame: '//iframe[@name="kioskoA0"]' }, () => {
      I.fillField(this.fields.inputnombre, this.fields.nombre, 2);
      I.fillField(this.fields.inputap, this.fields.apaterno, 2);
      I.fillField(this.fields.inputam, this.fields.amaterno, 4);
      I.wait(3);
      I.click(this.fields.valdatoscontact);
      I.wait(2);
      I.click(this.fields.btnfc);
      I.wait(4);
      //Scroll para navegar a la altura del mapa para captura del RFC
      I.executeScript(() => {
        document.querySelector('[id="fr_domicilio"]').scrollIntoView();
      });

      //Ingresar a un segundo iframe desde el iframe KioskoA0
      //Pendiente scroll para mostrar ventana de RFC
      I.switchTo('//iframe[@id="dialog-body"]');
      I.wait(3);
      I.waitForElement(this.fields.sinrfc);
      I.wait(5);
      I.click(this.fields.sinrfc);
      I.wait(3);
      I.click(this.fields.btnaceptrfc);
      I.switchTo();
      I.wait(2);
    });
    //iFrame de Kiosko
    //Tipo de Identificación
    within({ frame: '//iframe[@name="kioskoA0"]' }, () => {
      I.click(this.fields.comboident);
      I.wait(2);
    });
    //Para mostrar ventana del tipo de identificación, ingresar al frame
    I.waitForElement(this.fields.msjcliente);
    I.wait(2);
    within({ frame: "(//body[@onunload]//iframe)[1]" }, () => {
      I.click(this.fields.comboine);
      I.wait(1);
      //Selecciona alguna opción del combo Tipo de identificación
      I.executeScript(() => {
        const select = document.getElementById("cboxtypeId");
        select.value = "INE";
        select.dispatchEvent(new Event("change"));
      });

      I.wait(2);
      //Desactiva la clase que inhabilita el botón de validar
      I.executeScript(() => {
        const btn = document.getElementById("btnValidate");
        if (btn) {
          btn.classList.remove("btn-disabled-express"); // Elimina la clase que lo desactiva
          btn.disabled = false; // Si estuviera deshabilitado por atributo
        }
      });
      I.wait(3);
      I.fillField(this.fields.inputine, this.fields.ine, 3);
      I.click(this.fields.validarine);
      I.wait(7);
      I.closeOtherTabs(); //https://listanominal.ine.mx/scpln/
      I.wait(6);
      I.click(this.fields.buttonacept);
      I.wait(1);
    }); //termina interacción con el Within Tipo de identificación

    //Inresar a un 3er iframe para captura del domicilio desde Kiosko A0 solo para capturar el domicilio y buscarlo para después salir a la página principal
    within({ frame: '//iframe[@name="kioskoA0"]' }, () => {
      I.switchTo('//iframe[@id="fr_domicilio"]');
      I.switchTo('//iframe[@name="frameUno"]');
      I.wait(1);
      I.fillField(this.fields.inputaddress, this.fields.direccion);
      I.click(this.fields.btnsearch);
      I.wait(3);
      I.click(this.fields.confmap);
      I.wait(6);
      I.switchTo();
    });

    //Ingresar al frame KioskoA0 para desplazarnos a los campos de la dirección
    within({ frame: '//iframe[@name="kioskoA0"]' }, () => {
      I.switchTo('//iframe[@id="fr_domicilio"]');
      //Desplazar a los campos
      I.executeScript(() => {
        document.querySelector('[id="ifDos"]').scrollIntoView();
      });
      //ingresar al 2do frame, donde se encuentran los campos
      I.switchTo('//iframe[@name="frameDos"]');
      I.wait(3)
      I.click(this.fields.combocalle)
      I.wait(1)
      I.fillField(this.fields.tipocalle, this.fields.tpcalle)
      I.pressKey('Enter');
      I.fillField(this.fields.inputcalle, this.fields.calle)
      I.fillField(this.fields.inpute1, this.fields.e1)
      I.fillField(this.fields.inpute2, this.fields.e2)
      I.wait(1)
      I.click(this.fields.confdom)
      I.wait(3)
      I.switchTo();
    });
//pause()
    //Ingresar al frame uno a tráves del KioskoA0 para la pregunta El Domicilio que ha seleccionado en el mapa es el Domicilio donde se realizará la instalación?
    within({ frame: '//iframe[@name="kioskoA0"]' }, () => {
      I.switchTo('//iframe[@id="fr_domicilio"]');

      I.executeScript(() => {
        document.querySelector('[id="ifUno"]').scrollIntoView();
      });

      I.switchTo('//iframe[@name="frameUno"]');
      //I.waitForElement(this.fields.dominst)
      I.wait(1)
      I.click(this.fields.domok)
      I.wait(10)
      I.switchTo();
    });

    within({ frame: '//iframe[@name="kioskoA0"]' }, () => {
      I.wait(2)
      I.click(this.fields.btncontrata)
    });
      I.wait(15)
      I.click(this.fields.btncontinuar)
      I.wait(20)
  }

  //Oferta comercial
oferta(){
  //I.wait(5)
  
  within({ frame: '//iframe[@name="kioskoA0"]' }, () => {
      I.switchTo('[id="ofertaPlanes"]');
      I.click(this.fields.servpqt)
      I.click(this.fields.pqt2)
      I.wait(5)

      I.executeScript(() => {
        document.querySelector('[id="selProdReq"]').scrollIntoView();
      });
      I.switchTo()
    });
    //pause()
  within({ frame: '//iframe[@name="kioskoA0"]' }, () => {
      I.wait(3)
      I.click(this.fields.btnoffer)
      I.wait(5)
      I.closeOtherTabs(); //Oferta comercial
      I.wait(2)
      I.click(this.fields.rdbtnGI)
      I.wait(1)
      //I.click(this.fields.btndomiciliacion)
      //I.wait(2)
      I.click(this.fields.continuarpqt)
      //I.wait(35)
    });
  within({ frame: '[id="frameD"]' }, () => {
    I.wait(3)
    I.fillField(this.fields.apdom, this.fields.apaterno)
    I.wait(1)
    I.fillField(this.fields.amdom, this.fields.amaterno)
    I.wait(1)
    I.fillField(this.fields.nombredom, this.fields.nombre)
    I.wait(1)
    I.fillField(this.fields.celdom, this.fields.celular)
    I.wait(1)
    I.fillField(this.fields.maildom, this.fields.mail)
    I.wait(1)
    I.click(this.fields.aceptdom)
    I.wait(15)
  });
  
}

facturacion(){
  pause()
  I.wait(3)
within({ frame: '//iframe[@name="kioskoA0"]' }, () => {
  I.switchTo('[id="catEstado"]')
  I.wait(3)
  I.fillField(this.fields.cpFact, this.fields.cp)
  I.wait(2)
  I.switchTo()
  });/*
within({ frame: '//iframe[@name="kioskoA0"]' }, () => {
  I.wait(2)
  I.click(this.fields.btnContratar)
  I.wait(20)
  I.wait(20)
  });*/

}

}
module.exports = new AltaRes();
